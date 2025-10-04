"use client"

import { useState, useRef } from "react"
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
  const searchInputId = "catalog-search-input";

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
    <div className="bg-card/80 backdrop-blur-sm rounded-xl border border-border/50 shadow-lg overflow-hidden">
      {/* Filter Header - Compacto y simétrico */}
      <div className="flex items-center justify-between p-4 bg-gradient-to-r from-accent/8 to-accent/12 border-b border-border/30">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-accent/10 rounded-lg">
            <SlidersHorizontal className="w-4 h-4 text-accent" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground">Filtros</h3>
            <p className="text-xs text-muted-foreground">Refina tu búsqueda</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          {activeFiltersCount > 0 && (
            <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20 text-xs px-2 py-0.5">
              {activeFiltersCount}
            </Badge>
          )}
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setIsExpanded(!isExpanded)}
            className="lg:hidden h-8 w-8 p-0"
          >
            {isExpanded ? "−" : "+"}
          </Button>
        </div>
      </div>

      {/* Filter Content - Espaciado uniforme */}
      <div className={`p-4 space-y-5 ${isExpanded ? "block" : "hidden lg:block"}`}>
        

        {/* Category Section */}
        <div className="space-y-3">
          <label className="flex items-center gap-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
            <Tag className="w-3 h-3 text-accent" />
            Categoría
          </label>
          <Select value={filters.category} onValueChange={(value) => updateFilter("category", value === "all" ? "" : value)}>
            <SelectTrigger className="h-10 text-sm bg-background/50 border-border/50 hover:border-accent/60 focus:border-accent/60 transition-all">
              <SelectValue placeholder="Todas las categorías" />
            </SelectTrigger>
            <SelectContent className="bg-background/95 backdrop-blur-sm border-border/50">
              <SelectItem value="all" className="text-sm font-medium">
                Todas las categorías
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
        <div className="space-y-3">
          <label className="flex items-center gap-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
            <ArrowUpDown className="w-3 h-3 text-accent" />
            Ordenar por
          </label>
          <Select value={filters.sortBy} onValueChange={(value) => updateFilter("sortBy", value)}>
            <SelectTrigger className="h-10 text-sm bg-background/50 border-border/50 hover:border-accent/60 focus:border-accent/60 transition-all">
              <SelectValue placeholder="Ordenar por" />
            </SelectTrigger>
            <SelectContent className="bg-background/95 backdrop-blur-sm border-border/50">
              <SelectItem value="name-asc" className="text-sm">Nombre A-Z</SelectItem>
              <SelectItem value="name-desc" className="text-sm">Nombre Z-A</SelectItem>
              <SelectItem value="price-asc" className="text-sm">Precio: Menor a Mayor</SelectItem>
              <SelectItem value="price-desc" className="text-sm">Precio: Mayor a Menor</SelectItem>
              <SelectItem value="category" className="text-sm">Por Categoría</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Quick Filters */}
        <div className="space-y-3">
          <label className="flex items-center gap-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
            <Sparkles className="w-3 h-3 text-accent" />
            Filtros Rápidos
          </label>
          <div className="grid grid-cols-2 gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => updateFilter("sortBy", "price-asc")}
              className="h-9 text-xs bg-background/50 border-border/50 hover:bg-accent/10 hover:border-accent/40 transition-all"
            >
              Más Baratos
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => updateFilter("sortBy", "price-desc")}
              className="h-9 text-xs bg-background/50 border-border/50 hover:bg-accent/10 hover:border-accent/40 transition-all"
            >
              Premium
            </Button>
          </div>
        </div>

        {/* Clear Filters - Solo si hay filtros activos */}
        {hasActiveFilters && (
          <div className="pt-3 border-t border-border/30">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={onClearFilters}
              className="w-full h-9 text-xs bg-background/50 border-border/50 hover:bg-orange-500/10 hover:border-orange-500/40 hover:text-orange-600 transition-all"
            >
              <X className="w-3 h-3 mr-2" />
              Limpiar todos los filtros
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
