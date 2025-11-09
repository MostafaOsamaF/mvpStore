import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ConfirmationContent } from "@/components/confirmation-content"

export default function ConfirmationPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        <ConfirmationContent />
      </main>

      <Footer />
    </div>
  )
}
