import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CartContent } from "@/components/cart-content"

export default function CartPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        <div className="bg-secondary/30 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-center">سلة التسوق</h1>
          </div>
        </div>

        <CartContent />
      </main>

      <Footer />
    </div>
  )
}
