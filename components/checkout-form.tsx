"use client"

import type React from "react"

import { useCartStore } from "@/lib/cart-store"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useRouter } from "next/navigation"
import { useState } from "react"
import Link from "next/link"
import { ShoppingBag } from "lucide-react"

export function CheckoutForm() {
  const router = useRouter()
  const { items, getTotalPrice } = useCartStore()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  })

  const total = getTotalPrice()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Navigate to confirmation page
    router.push("/confirmation")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 max-w-7xl py-16">
        <Card className="max-w-md mx-auto">
          <CardContent className="p-12 text-center space-y-6">
            <div className="w-20 h-20 rounded-full bg-secondary/50 flex items-center justify-center mx-auto">
              <ShoppingBag className="h-10 w-10 text-muted-foreground" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">السلة فارغة</h2>
              <p className="text-muted-foreground">لا يمكنك إتمام الطلب بدون منتجات في السلة</p>
            </div>
            <Link href="/products">
              <Button size="lg" className="w-full">
                تصفح المنتجات
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 max-w-7xl py-8">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-6 space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-6">بيانات الشحن</h2>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">الاسم الكامل *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="أدخل اسمك الكامل"
                        className="text-right"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">البريد الإلكتروني *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="example@email.com"
                        className="text-right"
                        dir="ltr"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">رقم الهاتف *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="01xxxxxxxxx"
                        className="text-right"
                        dir="ltr"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address">العنوان الكامل *</Label>
                      <Textarea
                        id="address"
                        name="address"
                        required
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="أدخل عنوانك بالتفصيل (الشارع، المدينة، المحافظة)"
                        className="text-right min-h-[120px]"
                        rows={4}
                      />
                    </div>
                  </div>
                </div>

                <Card className="bg-secondary/30 border-0">
                  <CardContent className="p-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      سيتم التواصل معك عبر البريد الإلكتروني أو الهاتف لتأكيد الطلب وتحديد موعد التسليم. جميع بياناتك
                      محمية ولن يتم مشاركتها مع أي طرف ثالث.
                    </p>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-20">
              <CardContent className="p-6 space-y-6">
                <h2 className="text-2xl font-bold">ملخص الطلب</h2>

                <div className="space-y-3">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-3 pb-3 border-b border-border last:border-0">
                      <div className="w-16 h-16 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-sm line-clamp-2 mb-1">{item.name}</h3>
                        <p className="text-xs text-muted-foreground">
                          الكمية: {item.quantity} × {item.price} جنيه
                        </p>
                        <p className="text-sm font-bold text-primary mt-1">{item.price * item.quantity} جنيه</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 pt-3 border-t border-border">
                  <div className="flex justify-between text-muted-foreground">
                    <span>المجموع الفرعي</span>
                    <span>{total} جنيه</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>الشحن</span>
                    <span>مجاني</span>
                  </div>
                  <div className="border-t border-border pt-3">
                    <div className="flex justify-between text-xl font-bold">
                      <span>الإجمالي</span>
                      <span className="text-primary">{total} جنيه</span>
                    </div>
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full text-lg">
                  تأكيد الطلب
                </Button>

                <Link href="/cart">
                  <Button type="button" variant="outline" size="lg" className="w-full bg-transparent">
                    العودة للسلة
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </form>
    </div>
  )
}
