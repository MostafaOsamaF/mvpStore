import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 flex items-center justify-center">
        <div className="text-center space-y-6 px-4">
          <h1 className="text-6xl font-bold text-primary">404</h1>
          <h2 className="text-2xl font-bold">الصفحة غير موجودة</h2>
          <p className="text-muted-foreground">عذراً، الصفحة التي تبحث عنها غير متوفرة</p>
          <Link href="/">
            <Button size="lg">العودة للرئيسية</Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}
