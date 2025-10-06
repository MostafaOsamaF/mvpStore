import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { BookOpen, Palette, Sparkles, ArrowLeft } from "lucide-react"

export default function HomePage() {
  const categories = [
    {
      id: "books",
      name: "الكتب",
      description: "مجموعة متنوعة من الكتب الثقافية والأدبية",
      icon: BookOpen,
      image: "/arabic-books-library-culture.jpg",
    },
    {
      id: "handicrafts",
      name: "الحرف اليدوية",
      description: "منتجات حرفية مصرية أصيلة",
      icon: Sparkles,
      image: "/egyptian-handicrafts-pottery-traditional.jpg",
    },
    {
      id: "art",
      name: "الفنون الجميلة",
      description: "لوحات وأعمال فنية مصرية معاصرة",
      icon: Palette,
      image: "/egyptian-art-paintings-gallery.jpg",
    },
  ]

  const bestSellers = [
    {
      id: "1",
      name: "كتاب تاريخ مصر القديمة",
      price: 150,
      category: "books",
      image: "/ancient-egypt-history-book.jpg",
    },
    {
      id: "2",
      name: "فخار مصري تقليدي",
      price: 350,
      category: "handicrafts",
      image: "/egyptian-pottery-vase-traditional.jpg",
    },
    {
      id: "3",
      name: "لوحة النيل عند الغروب",
      price: 800,
      category: "art",
      image: "/nile-river-sunset-painting.jpg",
    },
    {
      id: "4",
      name: "ديوان شعر عربي",
      price: 120,
      category: "books",
      image: "/arabic-poetry-book-calligraphy.jpg",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative egyptian-pattern bg-gradient-to-b from-secondary/50 to-background py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance leading-tight">
                بوابتك لدعم الإبداع والفن المصري
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
                اكتشف مجموعة فريدة من الكتب والحرف اليدوية والفنون الجميلة التي تعكس روح الثقافة المصرية الأصيلة
              </p>
              <Link href="/products">
                <Button size="lg" className="text-lg px-8 py-6 gap-2">
                  تسوق الآن
                  <ArrowLeft className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">الأقسام الرئيسية</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {categories.map((category) => {
                const Icon = category.icon
                return (
                  <Link key={category.id} href={`/products?category=${category.id}`}>
                    <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 border-2 hover:border-primary">
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={category.image || "/placeholder.svg"}
                          alt={category.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                            <Icon className="h-5 w-5 text-primary" />
                          </div>
                          <h3 className="text-xl font-bold">{category.name}</h3>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">{category.description}</p>
                        <Button variant="ghost" className="mt-4 gap-2 px-0 hover:gap-3 transition-all">
                          تصفح القسم
                          <ArrowLeft className="h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* Best Sellers Section */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">الأكثر مبيعاً</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {bestSellers.map((product) => (
                <Link key={product.id} href={`/products/${product.id}`}>
                  <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 h-full">
                    <div className="aspect-square overflow-hidden bg-muted">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-lg mb-2 line-clamp-2">{product.name}</h3>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-primary">{product.price} جنيه</span>
                        <Button size="sm" className="gap-2">
                          أضف للسلة
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link href="/products">
                <Button variant="outline" size="lg" className="gap-2 bg-transparent">
                  عرض جميع المنتجات
                  <ArrowLeft className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">دور وزارة الثقافة</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                تلتزم وزارة الثقافة المصرية بدعم الإبداع المحلي والفن الأصيل من خلال توفير منصة متميزة لعرض وتسويق
                المنتجات الثقافية والفنية. نسعى لتعزيز الهوية الثقافية المصرية وتشجيع الفنانين والحرفيين المحليين.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                كل عملية شراء تساهم في دعم المبدعين المصريين وتعزيز الصناعات الثقافية والإبداعية في مصر.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
