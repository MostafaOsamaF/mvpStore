import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CheckoutForm } from "@/components/checkout-form"

export default function CheckoutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        <div className="bg-secondary/30 py-12">
          <div className="container mx-auto px-4 max-w-7xl">
            <h1 className="text-3xl md:text-4xl font-bold text-center">إتمام الطلب</h1>
            <p className="text-center text-muted-foreground mt-2">أكمل بياناتك لإتمام عملية الشراء</p>
          </div>
        </div>

        <CheckoutForm />
      </main>

      <Footer />
    </div>
  )
}
