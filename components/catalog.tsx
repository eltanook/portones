"use client";

import { useState, useMemo } from "react";
import { ProductCard } from "@/components/product-card";
import { CatalogFilters, type FilterState } from "@/components/catalog-filters";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Search, Filter, Grid3X3, List } from "lucide-react";
import { mockProducts, type Product } from "@/lib/products";

interface CatalogProps {
  onAddToCart: (product: Product, quantity?: number, variations?: Record<string, string>) => void;
}

const PRODUCTS_PER_PAGE = 6;

export function Catalog({ onAddToCart }: CatalogProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filters, setFilters] = useState<FilterState>({
    search: "",
    category: "",
    sortBy: "name-asc",
  });

 const filteredAndSortedProducts = useMemo(() => {
    let filtered = mockProducts;

    // 1. FILTRADO POR BÚSQUEDA
    if (filters.search) {
        const searchTerm = filters.search.toLowerCase();
        filtered = filtered.filter(
            (product) =>
                product.name.toLowerCase().includes(searchTerm) ||
                product.description.toLowerCase().includes(searchTerm) ||
                product.category.toLowerCase().includes(searchTerm)
        );
    }

    // 2. FILTRADO POR CATEGORÍA
    // Si filters.category está vacío ("Todas las Categorías"), se mantienen todos los productos.
    if (filters.category) {
        filtered = filtered.filter((product) => product.category === filters.category);
    }

    // 3. ORDENACIÓN: Prioridad a 'Featured' (Destacados) y luego por 'sortBy'
    filtered.sort((a, b) => {
        // --- Prioridad a Destacados ---
        const aIsFeatured = a.featured === true;
        const bIsFeatured = b.featured === true;

        if (aIsFeatured && !bIsFeatured) {
            return -1; // 'a' (destacado) va primero
        }
        if (!aIsFeatured && bIsFeatured) {
            return 1;  // 'b' (destacado) va primero
        }
        
        // Si ambos son destacados o ninguno lo es, se aplica el orden secundario (sortBy).
        
        // --- Ordenación Secundaria (Por filtro seleccionado) ---
        switch (filters.sortBy) {
            case "name-desc":
                return b.name.localeCompare(a.name);
            case "price-asc":
                // Maneja "N/A" y null como 0 para la comparación
                const priceA = typeof a.price === "number" ? a.price : 0;
                const priceB = typeof b.price === "number" ? b.price : 0;
                return priceA - priceB;
            case "price-desc":
                // Maneja "N/A" y null como 0 para la comparación
                const priceADesc = typeof a.price === "number" ? a.price : 0;
                const priceBDesc = typeof b.price === "number" ? b.price : 0;
                return priceBDesc - priceADesc;
            case "category":
                return a.category.localeCompare(b.category);
            default:
                // Por defecto: ordenar el resto alfabéticamente por nombre (A-Z)
                return a.name.localeCompare(b.name);
        }
    });

    return filtered;
}, [filters]);

  const totalPages = Math.ceil(filteredAndSortedProducts.length / PRODUCTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const paginatedProducts = filteredAndSortedProducts.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);

  const handleFiltersChange = (newFilters: FilterState) => {
    setFilters(newFilters);
    setCurrentPage(1);
  };

  const handleClearFilters = () => {
    setFilters({ search: "", category: "", sortBy: "name-asc" });
    setCurrentPage(1);
  };

  const handleAdd = (product: Product) => {
    onAddToCart(product);
  };

  return (
    <section id="catalogo" className="py-12 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <CatalogFilters
                filters={filters}
                onFiltersChange={handleFiltersChange}
                onClearFilters={handleClearFilters}
              />
            </div>
          </div>

          {/* Productos */}
          <div className="lg:col-span-3">
            {/* Barra de controles */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 p-3 bg-card border border-border rounded-lg">
              <div className="flex items-center gap-3 w-full max-w-md">
                <Search className="w-5 h-5 text-accent mr-2 min-w-[24px]" />
                <input
                  type="text"
                  value={filters.search}
                  onChange={e => setFilters(f => ({ ...f, search: e.target.value }))}
                  placeholder="Buscar productos..."
                  className="w-full min-w-0 h-9 px-3 py-1 rounded-md border border-border bg-background text-base focus:border-accent outline-none transition-all sm:text-base text-sm"
                  style={{ maxWidth: '100%' }}
                />
              </div>
              <div>
                <p className="text-base sm:text-lg font-semibold text-foreground">
                  {paginatedProducts.length} productos
                </p>
                <p className="text-sm text-muted-foreground">
                  de {filteredAndSortedProducts.length} disponibles
                </p>
              </div>

              <div className="flex items-center gap-1 sm:gap-2 p-1 bg-muted/50 rounded-lg border border-border">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className="h-8 px-2 sm:px-3"
                >
                  <Grid3X3 className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className="h-8 px-2 sm:px-3"
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Grid responsive de productos */}
            {paginatedProducts.length > 0 ? (
              <div
                className={`
                  grid gap-4 mb-10 items-stretch
                  ${viewMode === 'grid'
                    ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 grid-auto-rows-[1fr]'
                    : 'grid-cols-1'
                  }
                `}
              >
                {paginatedProducts.map((product) => (
                  <div
                    key={product.id}
                    className={`transform transition-all duration-200 hover:scale-[1.02] h-full w-full ${viewMode === 'list' ? 'max-w-none mx-0' : 'max-w-sm mx-auto'}`}
                  >
                    <ProductCard
                      product={product}
                      onAddToCart={handleAdd}
                      viewMode={viewMode}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-card border border-dashed border-border rounded-lg">
                <div className="w-16 h-16 mx-auto bg-muted rounded-full flex items-center justify-center mb-4">
                  <Search className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">No encontramos productos</h3>
                <p className="text-muted-foreground mb-4 max-w-md mx-auto">
                  Ajusta los filtros o usa otros términos de búsqueda.
                </p>
                <div className="flex flex-col sm:flex-row gap-2 justify-center">
                  <Button onClick={handleClearFilters} className="bg-accent hover:bg-accent/90 flex items-center gap-1">
                    <Filter className="w-4 h-4" /> Limpiar
                  </Button>
                  <Button variant="outline">Ver todos</Button>
                </div>
              </div>
            )}

            {/* Paginación */}
            {totalPages > 1 && (
              <div className="flex flex-wrap justify-center items-center gap-2 mt-8">
                <Button
                  size="sm"
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="h-9 px-3 bg-orange-500 text-white hover:bg-orange-600 disabled:bg-muted disabled:text-muted-foreground"
                >
                  <ChevronLeft className="w-4 h-4 mr-1" /> Anterior
                </Button>

                {Array.from({ length: totalPages }, (_, i) => (
                  <Button
                    key={i + 1}
                    size="sm"
                    onClick={() => setCurrentPage(i + 1)}
                    className={`h-9 w-9 p-0 ${currentPage === i + 1 ? 'bg-orange-500 text-white hover:bg-orange-600' : 'bg-white text-orange-500 border border-orange-500 hover:bg-orange-100'}`}
                  >
                    {i + 1}
                  </Button>
                ))}

                <Button
                  size="sm"
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="h-9 px-3 bg-orange-500 text-white hover:bg-orange-600 disabled:bg-muted disabled:text-muted-foreground"
                >
                  Siguiente <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}