"use client"

import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    id: 1,
    quote: "منتجات رائعة تعكس جمال الثقافة المصرية. جودة عالية وخدمة ممتازة.",
    name: "أحمد محمود",
    avatar: "/egyptian-man-avatar.jpg",
  },
  {
    id: 2,
    quote: "سعيدة جداً بشراء اللوحة الفنية. إضافة مميزة لمنزلي وتعبر عن هويتنا المصرية.",
    name: "فاطمة حسن",
    avatar: "/egyptian-woman-avatar.jpg",
  },
  {
    id: 3,
    quote: "الكتب التي اشتريتها من المتجر غنية بالمعلومات وتصميمها جميل. أنصح بها بشدة.",
    name: "محمد علي",
    avatar: "/egyptian-man-professional-avatar.jpg",
  },
  {
    id: 4,
    quote: "الحرف اليدوية المصرية هنا أصيلة ومتقنة الصنع. فخورة بدعم الفنانين المحليين.",
    name: "نورا إبراهيم",
    avatar: "/egyptian-woman-professional-avatar.jpg",
  },
  {
    id: 5,
    quote: "تجربة تسوق رائعة ومنتجات تحمل روح الثقافة المصرية الأصيلة.",
    name: "خالد سعيد",
    avatar: "/egyptian-man-casual-avatar.jpg",
  },
  {
    id: 6,
    quote: "أحب التنوع في المنتجات والاهتمام بالتفاصيل. متجر يستحق الدعم.",
    name: "ياسمين عبدالله",
    avatar: "/egyptian-woman-casual-avatar.jpg",
  },
]

export function TestimonialsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return
    const { scrollLeft, clientWidth } = scrollRef.current
    const scrollAmount = clientWidth * 0.8
    scrollRef.current.scrollTo({
      left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
      behavior: "smooth",
    })
  }

  return (
    <div className="relative py-10">
      <h2 className="text-center text-2xl font-bold mb-6">آراء الجمهور</h2>

      {/* الأسهم */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition"
        aria-label="السابق"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition"
        aria-label="التالي"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* الكروت */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scroll-smooth space-x-4 px-10 no-scrollbar"
      >
        {testimonials.map((t) => (
          <Card
            key={t.id}
            className="flex-shrink-0 w-[300px] md:w-[360px] border border-gray-200 bg-background shadow-sm hover:shadow-md transition-shadow"
          >
            <CardContent className="p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 rounded-full overflow-hidden bg-muted">
                  <img
                    src={t.avatar || "/placeholder.svg"}
                    alt={t.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                    "{t.quote}"
                  </p>
                  <p className="font-semibold text-sm">{t.name}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* تدرجات الأطراف */}
      <div className="absolute top-0 right-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent pointer-events-none" />
      <div className="absolute top-0 left-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent pointer-events-none" />

      <style jsx>{`
        /* إخفاء الـ scrollbar لكل المتصفحات */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none; /* IE و Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </div>
  )
}
