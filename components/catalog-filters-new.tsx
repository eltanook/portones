"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, X, SlidersHorizontal, ArrowUpDown, Tag, Sparkles } from "lucide-react"
import { categories } from "@/lib/products"

export interface FilterState {
  search: string
  category: string
  sortBy: string
}

interface CatalogFiltersProps {
  filters: FilterState
  onFiltersChange: (filters: FilterState) => void
  onClearFilters: () => void
}

export function CatalogFilters({ filters, onFiltersChange, onClearFilters }: CatalogFiltersProps) {
  const [isExpanded, setIsExpanded] = useState(true)

  const updateFilter = (key: keyof FilterState, value: string) => {
    onFiltersChange({ ...filters, [key]: value })
  }

  const hasActiveFilters = filters.search || filters.category || filters.sortBy !== "name-asc"
  const activeFiltersCount = [
    filters.search,
    filters.category,
    filters.sortBy !== "name-asc" ? filters.sortBy : null
  ].filter(Boolean).length

  return (
    <div className="space-y-4">
      {/* Filter Header - Compacto y simétrico */}
      <div className="flex items-center justify-between p-3 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg border border-primary/10">
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-primary/10 rounded-md">
            <SlidersHorizontal className="w-4 h-4 text-primary" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground">Filtros</h3>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          {activeFiltersCount > 0 && (
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-xs h-5 px-2">
              {activeFiltersCount}
            </Badge>
          )}
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setIsExpanded(!isExpanded)}
            className="lg:hidden h-7 w-7 p-0"
          >
            {isExpanded ? "−" : "+"}
          </Button>
        </div>
      </div>

      {/* Filter Content - Espaciado uniforme */}
      <div className={`space-y-4 ${isExpanded ? "block" : "hidden lg:block"}`}>
        
        {/* Search Section */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-xs font-medium text-muted-foreground uppercase tracking-wide">
            <Search className="w-3 h-3 text-primary" />
            Búsqueda
          </label>
          <div className="relative">
            <Search className="absolute left-2.5 top-1/2 transform -translate-y-1/2 text-muted-foreground w-3.5 h-3.5" />
            <Input
              placeholder="Buscar productos..."
              value={filters.search}
              onChange={(e) => updateFilter("search", e.target.value)}
              className="pl-8 h-9 text-sm bg-background border-border/60 focus:border-primary/50 transition-colors"
            />
            {filters.search && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => updateFilter("search", "")}
                className="absolute right-1 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0 hover:bg-muted/80"
              >
                <X className="w-3 h-3" />
              </Button>
            )}
          </div>
        </div>

        {/* Category Section */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-xs font-medium text-muted-foreground uppercase tracking-wide">
            <Tag className="w-3 h-3 text-primary" />
            Categoría
          </label>
          <Select value={filters.category} onValueChange={(value) => updateFilter("category", value === "all" ? "" : value)}>
            <SelectTrigger className="h-9 text-sm bg-background border-border/60 hover:border-primary/50 focus:border-primary/50 transition-colors">
              <SelectValue placeholder="Todas las categorías" />
            </SelectTrigger>
            <SelectContent className="bg-background border-border/60">
              <SelectItem value="all" className="text-sm">
                <span>Todas las categorías</span>
              </SelectItem>
              {categories.map((category) => (
                <SelectItem key={category} value={category} className="text-sm capitalize">
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Sort Section */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-xs font-medium text-muted-foreground uppercase tracking-wide">
            <ArrowUpDown className="w-3 h-3 text-primary" />
            Ordenar por
          </label>
          <Select value={filters.sortBy} onValueChange={(value) => updateFilter("sortBy", value)}>
            <SelectTrigger className="h-9 text-sm bg-background border-border/60 hover:border-primary/50 focus:border-primary/50 transition-colors">
              <SelectValue placeholder="Ordenar por" />
            </SelectTrigger>
            <SelectContent className="bg-background border-border/60">
              <SelectItem value="name-asc" className="text-sm">Nombre A-Z</SelectItem>
              <SelectItem value="name-desc" className="text-sm">Nombre Z-A</SelectItem>
              <SelectItem value="price-asc" className="text-sm">Precio: Menor a Mayor</SelectItem>
              <SelectItem value="price-desc" className="text-sm">Precio: Mayor a Menor</SelectItem>
              <SelectItem value="category" className="text-sm">Por Categoría</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Quick Filters */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-xs font-medium text-muted-foreground uppercase tracking-wide">
            <Sparkles className="w-3 h-3 text-primary" />
            Filtros Rápidos
          </label>
          <div className="grid grid-cols-2 gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => updateFilter("sortBy", "price-asc")}
              className="h-8 text-xs bg-background border-border/60 hover:bg-primary/5 hover:border-primary/30 transition-colors"
            >
              Más Baratos
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => updateFilter("sortBy", "price-desc")}
              className="h-8 text-xs bg-background border-border/60 hover:bg-primary/5 hover:border-primary/30 transition-colors"
            >
              Premium
            </Button>
          </div>
        </div>

        {/* Clear Filters - Solo si hay filtros activos */}
        {hasActiveFilters && (
          <div className="pt-2 border-t border-border/30">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={onClearFilters}
              className="w-full h-8 text-xs bg-background border-border/60 hover:bg-destructive/5 hover:border-destructive/30 hover:text-destructive transition-colors"
            >
              <X className="w-3 h-3 mr-1.5" />
              Limpiar filtros
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
