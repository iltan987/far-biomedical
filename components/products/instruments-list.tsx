"use client";

import {
  ChevronDown,
  ChevronUp,
  LayoutGrid,
  LayoutList,
  Search,
} from "lucide-react";
import { useMemo, useState } from "react";

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

export function InstrumentsList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<
    InstrumentCategory | "all"
  >("all");
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  const [layout, setLayout] = useState<LayoutType>("2-col");

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

  const gridClasses = {
    list: "grid-cols-1",
    "2-col": "grid-cols-1 md:grid-cols-2",
    "3-col": "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  };

  return (
    <div>
      {/* Filters */}
      <div className="mb-6 space-y-4">
        {/* Search and Layout Toggle */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative max-w-md flex-1">
            <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
            <Input
              type="search"
              placeholder="Search instruments..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Layout Toggle */}
          <div className="bg-muted flex items-center gap-1 rounded-lg p-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLayout("list")}
              className={cn(
                "h-8 px-3 transition-all",
                layout === "list"
                  ? "bg-background text-foreground shadow-sm hover:bg-background"
                  : "text-muted-foreground hover:bg-background/50 hover:text-foreground"
              )}
              title="List view"
            >
              <LayoutList className="h-4 w-4" />
              <span className="ml-1.5 hidden sm:inline">List</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLayout("2-col")}
              className={cn(
                "h-8 px-3 transition-all",
                layout === "2-col"
                  ? "bg-background text-foreground shadow-sm hover:bg-background"
                  : "text-muted-foreground hover:bg-background/50 hover:text-foreground"
              )}
              title="2 columns"
            >
              <LayoutGrid className="h-4 w-4" />
              <span className="ml-1.5 hidden sm:inline">2 Col</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLayout("3-col")}
              className={cn(
                "h-8 px-3 transition-all",
                layout === "3-col"
                  ? "bg-background text-foreground shadow-sm hover:bg-background"
                  : "text-muted-foreground hover:bg-background/50 hover:text-foreground"
              )}
              title="3 columns"
            >
              <LayoutGrid className="h-4 w-4" />
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
      <div className={cn("grid gap-4 transition-all duration-300", gridClasses[layout])}>
        {filteredInstruments.map((instrument) => {
          const isExpanded = expandedItems.has(instrument.id);
          const specsLimit = layout === "list" ? 6 : 4;
          const displaySpecs = isExpanded
            ? instrument.specifications
            : instrument.specifications.slice(0, specsLimit);

          return (
            <Card
              key={instrument.id}
              className={cn(
                "overflow-hidden transition-shadow hover:shadow-md",
                layout === "list" && "flex flex-col sm:flex-row"
              )}
            >
              {layout === "list" ? (
                // List view - horizontal layout
                <>
                  <CardHeader className="pb-3 sm:w-64 sm:shrink-0 sm:border-r sm:pb-4">
                    <CardTitle className="text-lg">{instrument.name}</CardTitle>
                    <Badge variant="secondary" className="mt-2 w-fit">
                      {instrumentCategoryLabels[instrument.category]}
                    </Badge>
                  </CardHeader>
                  <CardContent className="flex-1 pt-4 sm:pt-6">
                    <ul className="text-muted-foreground grid gap-1.5 text-sm sm:grid-cols-2">
                      {displaySpecs.map((spec, specIndex) => (
                        <li key={specIndex} className="flex items-start gap-2">
                          <span className="bg-primary mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                    {instrument.specifications.length > specsLimit && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="mt-3"
                        onClick={() => toggleExpanded(instrument.id)}
                      >
                        {isExpanded ? (
                          <>
                            Show Less <ChevronUp className="ml-1 h-4 w-4" />
                          </>
                        ) : (
                          <>
                            +{instrument.specifications.length - specsLimit} more
                            <ChevronDown className="ml-1 h-4 w-4" />
                          </>
                        )}
                      </Button>
                    )}
                  </CardContent>
                </>
              ) : (
                // Grid view - vertical layout
                <>
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between gap-2">
                      <CardTitle className="text-lg">{instrument.name}</CardTitle>
                      <Badge variant="secondary" className="shrink-0">
                        {instrumentCategoryLabels[instrument.category]}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-muted-foreground space-y-1.5 text-sm">
                      {displaySpecs.map((spec, specIndex) => (
                        <li key={specIndex} className="flex items-start gap-2">
                          <span className="bg-primary mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                    {instrument.specifications.length > specsLimit && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="mt-3 w-full"
                        onClick={() => toggleExpanded(instrument.id)}
                      >
                        {isExpanded ? (
                          <>
                            Show Less <ChevronUp className="ml-1 h-4 w-4" />
                          </>
                        ) : (
                          <>
                            +{instrument.specifications.length - specsLimit} more
                            <ChevronDown className="ml-1 h-4 w-4" />
                          </>
                        )}
                      </Button>
                    )}
                  </CardContent>
                </>
              )}
            </Card>
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
