"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Sparkles } from "lucide-react"
import Link from "next/link"
import { useCartStore } from "@/lib/cart-store"
import { useEffect } from "react"

export function ConfirmationContent() {
  const clearCart = useCartStore((state) => state.clearCart)

  // Clear cart when confirmation page loads
  useEffect(() => {
    clearCart()
  }, [clearCart])

  return (
    <div className="container mx-auto px-4 max-w-7xl py-16">
      <Card className="max-w-2xl mx-auto border-2 border-primary/20">
        <CardContent className="p-12 text-center space-y-8">
          {/* Success Icon */}
          <div className="relative inline-block">
            <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
              <CheckCircle2 className="h-12 w-12 text-primary" />
            </div>
            <div className="absolute -top-2 -right-2">
              <Sparkles className="h-8 w-8 text-primary animate-pulse" />
            </div>
          </div>

          {/* Success Message */}
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-balance">تم استلام طلبك بنجاح!</h1>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              شكراً لك على دعم الثقافة والفن المصري. طلبك قيد المعالجة وسيتم التواصل معك قريباً لتأكيد التفاصيل وترتيب
              التسليم.
            </p>
          </div>

          {/* Thank You Card */}
          <Card className="bg-gradient-to-br from-primary/5 to-secondary/30 border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-start gap-4 text-right">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2">شكراً لدعمك للإبداع المصري</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    مشترياتك تساهم بشكل مباشر في دعم الفنانين والحرفيين المصريين، وتساعد على الحفاظ على التراث الثقافي
                    وتطوير الصناعات الإبداعية في مصر. نقدر ثقتك واهتمامك بالفن والثقافة المصرية الأصيلة.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Next Steps */}
          <div className="space-y-3 text-right bg-secondary/20 rounded-lg p-6">
            <h3 className="font-bold text-lg mb-3">الخطوات القادمة:</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">١.</span>
                <span>سيتم إرسال رسالة تأكيد على بريدك الإلكتروني خلال 24 ساعة</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">٢.</span>
                <span>سنتواصل معك هاتفياً لتأكيد تفاصيل الطلب والعنوان</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">٣.</span>
                <span>سيتم تجهيز طلبك وشحنه خلال 3-5 أيام عمل</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">٤.</span>
                <span>الدفع عند الاستلام - شحن مجاني لجميع أنحاء مصر</span>
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="/products" className="flex-1">
              <Button size="lg" className="w-full">
                متابعة التسوق
              </Button>
            </Link>
            <Link href="/" className="flex-1">
              <Button variant="outline" size="lg" className="w-full bg-transparent">
                العودة للرئيسية
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
