import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ProductDetails } from "@/components/product-details"
import { notFound } from "next/navigation"

// Mock product data
const products = [
  {
    id: "1",
    name: "كتاب تاريخ مصر القديمة",
    price: 150,
    category: "books",
    description:
      "كتاب شامل يستعرض تاريخ مصر القديمة من عصر الأسرات حتى العصر البطلمي. يتضمن الكتاب صوراً توضيحية ومعلومات تاريخية دقيقة عن الحضارة المصرية العريقة.",
    images: ["/ancient-egypt-history-book.jpg", "/placeholder.svg?key=book2", "/placeholder.svg?key=book3"],
  },
  {
    id: "2",
    name: "فخار مصري تقليدي",
    price: 350,
    category: "handicrafts",
    description:
      "قطعة فخارية مصنوعة يدوياً بأسلوب تقليدي من قبل حرفيين مصريين. تتميز بنقوش فرعونية أصيلة وألوان طبيعية مستوحاة من التراث المصري.",
    images: [
      "/egyptian-pottery-vase-traditional.jpg",
      "/placeholder.svg?key=pottery2",
      "/placeholder.svg?key=pottery3",
    ],
  },
  {
    id: "3",
    name: "لوحة النيل عند الغروب",
    price: 800,
    category: "art",
    description:
      "لوحة فنية زيتية تصور نهر النيل عند الغروب بألوان دافئة وتفاصيل دقيقة. من إبداع فنان مصري معاصر، تعكس جمال الطبيعة المصرية.",
    images: ["/nile-river-sunset-painting.jpg", "/placeholder.svg?key=painting2", "/placeholder.svg?key=painting3"],
  },
  {
    id: "4",
    name: "ديوان شعر عربي",
    price: 120,
    category: "books",
    description:
      "مجموعة شعرية لأحد أبرز شعراء العصر الحديث. يحتوي الديوان على قصائد تتناول موضوعات الحب والوطن والحياة بأسلوب أدبي راقٍ.",
    images: ["/arabic-poetry-book-calligraphy.jpg", "/placeholder.svg?key=poetry2", "/placeholder.svg?key=poetry3"],
  },
  {
    id: "5",
    name: "سجادة يدوية مصرية",
    price: 600,
    category: "handicrafts",
    description:
      "سجادة منسوجة يدوياً بخيوط قطنية عالية الجودة. تتميز بتصميمات هندسية مستوحاة من الفن الإسلامي والمصري التقليدي.",
    images: ["/placeholder.svg?key=carpet", "/placeholder.svg?key=carpet2", "/placeholder.svg?key=carpet3"],
  },
  {
    id: "6",
    name: "لوحة الأهرامات",
    price: 950,
    category: "art",
    description:
      "لوحة فنية تجسد عظمة الأهرامات المصرية بأسلوب فني معاصر. تجمع بين الأصالة والحداثة في تصوير أحد أهم معالم الحضارة المصرية.",
    images: ["/placeholder.svg?key=pyramids", "/placeholder.svg?key=pyramids2", "/placeholder.svg?key=pyramids3"],
  },
  {
    id: "7",
    name: "كتاب الأدب العربي الحديث",
    price: 180,
    category: "books",
    description: "دراسة شاملة للأدب العربي الحديث تتناول أهم الحركات الأدبية والكتاب المؤثرين في القرن العشرين.",
    images: ["/placeholder.svg?key=literature", "/placeholder.svg?key=literature2", "/placeholder.svg?key=literature3"],
  },
  {
    id: "8",
    name: "مجوهرات فرعونية",
    price: 450,
    category: "handicrafts",
    description:
      "مجموعة من المجوهرات المستوحاة من التصاميم الفرعونية القديمة. مصنوعة من معادن عالية الجودة مع تفاصيل دقيقة.",
    images: ["/placeholder.svg?key=jewelry", "/placeholder.svg?key=jewelry2", "/placeholder.svg?key=jewelry3"],
  },
  {
    id: "9",
    name: "لوحة الخط العربي",
    price: 700,
    category: "art",
    description: "لوحة فنية تبرز جمال الخط العربي بأسلوب الثلث. تجمع بين الفن والأدب في قطعة فنية فريدة.",
    images: [
      "/placeholder.svg?key=calligraphy",
      "/placeholder.svg?key=calligraphy2",
      "/placeholder.svg?key=calligraphy3",
    ],
  },
  {
    id: "10",
    name: "كتاب الحضارة المصرية",
    price: 200,
    category: "books",
    description:
      "موسوعة شاملة عن الحضارة المصرية عبر العصور، من الفراعنة حتى العصر الحديث. مرجع مهم للباحثين والمهتمين.",
    images: [
      "/placeholder.svg?key=civilization",
      "/placeholder.svg?key=civilization2",
      "/placeholder.svg?key=civilization3",
    ],
  },
  {
    id: "11",
    name: "صندوق خشبي منقوش",
    price: 280,
    category: "handicrafts",
    description: "صندوق خشبي مصنوع من خشب الزان الطبيعي مع نقوش يدوية دقيقة. قطعة فنية عملية تجمع بين الجمال والوظيفة.",
    images: ["/placeholder.svg?key=woodbox", "/placeholder.svg?key=woodbox2", "/placeholder.svg?key=woodbox3"],
  },
  {
    id: "12",
    name: "لوحة الصحراء المصرية",
    price: 650,
    category: "art",
    description: "لوحة تصور جمال الصحراء المصرية بألوانها الذهبية وسكونها الساحر. عمل فني يعكس روح المكان.",
    images: ["/placeholder.svg?key=desert", "/placeholder.svg?key=desert2", "/placeholder.svg?key=desert3"],
  },
]

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id)

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        <ProductDetails product={product} />
      </main>

      <Footer />
    </div>
  )
}
