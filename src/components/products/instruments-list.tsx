"use client";

import {
  ChevronDown,
  ChevronUp,
  LayoutGrid,
  LayoutList,
  Search,
} from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";

import { ImagePlaceholder } from "@/components/image-placeholder";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  instrumentCategoryLabels,
  laboratoryInstruments,
} from "@/data/laboratory-instruments";
import { cn } from "@/lib/utils";
import type { InstrumentCategory } from "@/types";

type LayoutType = "list" | "2-col" | "3-col";

const COOKIE_NAME = "instruments-layout";
const COOKIE_PATH = "/products/laboratory-instruments";
// 400 days - maximum practical limit (Chrome caps at 400 days)
const COOKIE_MAX_AGE = 400 * 24 * 60 * 60;

interface InstrumentsListProps {
  initialLayout: LayoutType;
}

export function InstrumentsList({ initialLayout }: InstrumentsListProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<
    InstrumentCategory | "all"
  >("all");
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  const [layout, setLayoutState] = useState<LayoutType>(initialLayout);

  const setLayout = useCallback((value: LayoutType) => {
    setLayoutState(value);
    document.cookie = `${COOKIE_NAME}=${value}; path=${COOKIE_PATH}; max-age=${COOKIE_MAX_AGE}; SameSite=Lax`;
  }, []);

  // Refresh cookie on each visit to extend expiration
  useEffect(() => {
    document.cookie = `${COOKIE_NAME}=${layout}; path=${COOKIE_PATH}; max-age=${COOKIE_MAX_AGE}; SameSite=Lax`;
  }, [layout]);

  const categories = useMemo(() => {
    const cats = new Set(laboratoryInstruments.map((i) => i.category));
    return Array.from(cats) as InstrumentCategory[];
  }, []);

  const filteredInstruments = useMemo(() => {
    return laboratoryInstruments.filter((instrument) => {
      const matchesSearch =
        instrument.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        instrument.specifications.some((spec) =>
          spec.toLowerCase().includes(searchQuery.toLowerCase())
        );
      const matchesCategory =
        selectedCategory === "all" || instrument.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const toggleExpanded = (id: string) => {
    setExpandedItems((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div>
      {/* Filters */}
      <div className="mb-6 space-y-4">
        {/* Search and Layout Toggle */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative max-w-md flex-1">
            <Search
              className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2"
              aria-hidden="true"
            />
            <Input
              type="search"
              placeholder="Search instruments..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Layout Toggle - hidden on mobile where all layouts look identical */}
          <div className="bg-muted hidden items-center gap-1 rounded-lg p-1 sm:flex">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLayout("list")}
              title="List view"
              className={cn(
                layout === "list"
                  ? "bg-background text-foreground hover:bg-background shadow-sm"
                  : "text-muted-foreground hover:bg-background/50 hover:text-foreground"
              )}
            >
              <LayoutList className="h-4 w-4" aria-hidden="true" />
              <span className="ml-1.5 hidden sm:inline">List</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLayout("2-col")}
              title="2 columns"
              className={
                layout === "2-col"
                  ? "bg-background text-foreground hover:bg-background shadow-sm"
                  : "text-muted-foreground hover:bg-background/50 hover:text-foreground"
              }
            >
              <LayoutGrid className="h-4 w-4" aria-hidden="true" />
              <span className="ml-1.5 hidden sm:inline">2 Col</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLayout("3-col")}
              title="3 columns"
              className={
                layout === "3-col"
                  ? "bg-background text-foreground hover:bg-background shadow-sm"
                  : "text-muted-foreground hover:bg-background/50 hover:text-foreground"
              }
            >
              <LayoutGrid className="h-4 w-4" aria-hidden="true" />
              <span className="ml-1.5 hidden sm:inline">3 Col</span>
            </Button>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2">
          <Button
            variant={selectedCategory === "all" ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory("all")}
          >
            All
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
            >
              {instrumentCategoryLabels[category]}
            </Button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <p className="text-muted-foreground mb-4 text-sm">
        Showing {filteredInstruments.length} of {laboratoryInstruments.length}{" "}
        instruments
      </p>

      {/* Instruments Grid */}
      <div
        className={cn(
          "grid gap-4 transition-all duration-300",
          layout === "list" && "grid-cols-1",
          layout === "2-col" && "grid-cols-1 md:grid-cols-2",
          layout === "3-col" && "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        )}
        role="list"
      >
        {filteredInstruments.map((instrument) => {
          const isExpanded = expandedItems.has(instrument.id);
          const maxSpecs = layout === "list" ? 6 : 4;
          const displaySpecs = isExpanded
            ? instrument.specifications
            : instrument.specifications.slice(0, maxSpecs);
          const remainingSpecs = instrument.specifications.length - maxSpecs;
          const hasMore = remainingSpecs > 0;

          return (
            <article key={instrument.id} role="listitem">
              <Card
                className={cn(
                  "roup h-full overflow-hidden transition-shadow hover:shadow-md",
                  layout === "list" && "flex flex-col sm:flex-row"
                )}
              >
                {/* Instrument Image */}
                <div className="instrument-card-image relative aspect-4/3 overflow-hidden">
                  {instrument.image ? (
                    <Image
                      src={instrument.image}
                      alt={instrument.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <ImagePlaceholder
                      aspectRatio="4/3"
                      className="rounded-none transition-transform duration-300 group-hover:scale-105"
                    />
                  )}
                </div>
                <CardHeader
                  className={cn(
                    layout === "list" &&
                      "flex-col items-start justify-start sm:w-64 sm:shrink-0 sm:border-r sm:pb-4"
                  )}
                >
                  <CardTitle className="text-lg">{instrument.name}</CardTitle>
                  <Badge
                    variant="secondary"
                    className={cn(layout === "list" && "mt-2 w-fit")}
                  >
                    {instrumentCategoryLabels[instrument.category]}
                  </Badge>
                </CardHeader>
                <CardContent
                  className={cn(layout === "list" && "flex-1 pt-4 sm:pt-6")}
                >
                  <ul
                    className={cn(
                      "text-muted-foreground text-sm",
                      layout === "list" &&
                        "grid gap-1.5 space-y-0 sm:grid-cols-2"
                    )}
                  >
                    {displaySpecs.map((spec, specIndex) => (
                      <li key={specIndex} className="flex items-start gap-2">
                        <span
                          className="bg-primary mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                          aria-hidden="true"
                        />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                  {(hasMore || isExpanded) && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className={cn(layout === "list" && "w-auto")}
                      onClick={() => toggleExpanded(instrument.id)}
                    >
                      {isExpanded ? (
                        <>
                          Show Less{" "}
                          <ChevronUp
                            className="ml-1 h-4 w-4"
                            aria-hidden="true"
                          />
                        </>
                      ) : (
                        <>
                          +{remainingSpecs} more
                          <ChevronDown
                            className="ml-1 h-4 w-4"
                            aria-hidden="true"
                          />
                        </>
                      )}
                    </Button>
                  )}
                </CardContent>
              </Card>
            </article>
          );
        })}
      </div>

      {filteredInstruments.length === 0 && (
        <div className="py-12 text-center">
          <p className="text-muted-foreground">
            No instruments found matching your criteria.
          </p>
          <Button
            variant="link"
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("all");
            }}
          >
            Clear filters
          </Button>
        </div>
      )}
    </div>
  );
}
