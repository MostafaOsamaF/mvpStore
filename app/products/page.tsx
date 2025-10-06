import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ProductGrid } from "@/components/product-grid"
import { ProductFilters } from "@/components/product-filters"
import { Suspense } from "react"

export default function ProductsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        <div className="bg-secondary/30 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-center">المتجر</h1>
            <p className="text-center text-muted-foreground mt-2">اكتشف مجموعتنا الكاملة من المنتجات الثقافية</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <aside className="lg:w-64 flex-shrink-0">
              <Suspense fallback={<div>جاري التحميل...</div>}>
                <ProductFilters />
              </Suspense>
            </aside>

            {/* Products Grid */}
            <div className="flex-1">
              <Suspense fallback={<div>جاري التحميل...</div>}>
                <ProductGrid />
              </Suspense>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
