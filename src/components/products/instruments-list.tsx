"use client";

import {
  ChevronDown,
  ChevronUp,
  LayoutGrid,
  LayoutList,
  Search,
} from "lucide-react";
import { useMemo, useState } from "react";

import { useInstrumentsLayout } from "@/components/instruments-layout-provider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  instrumentCategoryLabels,
  laboratoryInstruments,
} from "@/data/laboratory-instruments";
import type { InstrumentCategory } from "@/types";

export function InstrumentsList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<
    InstrumentCategory | "all"
  >("all");
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  const { layout, setLayout } = useInstrumentsLayout();

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
              className="layout-toggle layout-toggle-list"
              title="List view"
            >
              <LayoutList className="h-4 w-4" />
              <span className="ml-1.5 hidden sm:inline">List</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLayout("2-col")}
              className="layout-toggle layout-toggle-2col"
              title="2 columns"
            >
              <LayoutGrid className="h-4 w-4" />
              <span className="ml-1.5 hidden sm:inline">2 Col</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLayout("3-col")}
              className="layout-toggle layout-toggle-3col"
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
      <div className="instruments-grid">
        {filteredInstruments.map((instrument) => {
          const isExpanded = expandedItems.has(instrument.id);
          const specsLimit = layout === "list" ? 6 : 4;
          const displaySpecs = isExpanded
            ? instrument.specifications
            : instrument.specifications.slice(0, specsLimit);

          return (
            <Card
              key={instrument.id}
              className="instrument-card overflow-hidden transition-shadow hover:shadow-md"
            >
              <CardHeader className="instrument-card-header">
                <CardTitle className="text-lg">{instrument.name}</CardTitle>
                <Badge variant="secondary" className="instrument-card-badge">
                  {instrumentCategoryLabels[instrument.category]}
                </Badge>
              </CardHeader>
              <CardContent className="instrument-card-content">
                <ul className="instrument-card-specs text-muted-foreground text-sm">
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
                    className="instrument-card-button"
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
