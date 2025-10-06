"use client"

import { useCartStore } from "@/lib/cart-store"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react"
import Link from "next/link"

export function CartContent() {
  const { items, updateQuantity, removeItem, getTotalPrice, clearCart } = useCartStore()

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <Card className="max-w-md mx-auto">
          <CardContent className="p-12 text-center space-y-6">
            <div className="w-20 h-20 rounded-full bg-secondary/50 flex items-center justify-center mx-auto">
              <ShoppingBag className="h-10 w-10 text-muted-foreground" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">السلة فارغة</h2>
              <p className="text-muted-foreground">لم تقم بإضافة أي منتجات بعد</p>
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

  const total = getTotalPrice()

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <Card key={item.id}>
              <CardContent className="p-4">
                <div className="flex gap-4">
                  {/* Product Image */}
                  <Link href={`/products/${item.id}`} className="flex-shrink-0">
                    <div className="w-24 h-24 rounded-lg overflow-hidden bg-muted">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </Link>

                  {/* Product Info */}
                  <div className="flex-1 min-w-0">
                    <Link href={`/products/${item.id}`} className="hover:text-primary">
                      <h3 className="font-semibold text-lg mb-1 line-clamp-2">{item.name}</h3>
                    </Link>
                    <p className="text-primary font-bold text-xl mb-3">{item.price} جنيه</p>

                    <div className="flex items-center gap-4">
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 bg-transparent"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-12 text-center font-semibold">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 bg-transparent"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>

                      {/* Remove Button */}
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-destructive hover:text-destructive gap-2"
                        onClick={() => removeItem(item.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                        حذف
                      </Button>
                    </div>
                  </div>

                  {/* Item Total */}
                  <div className="text-left hidden sm:block">
                    <p className="text-sm text-muted-foreground mb-1">الإجمالي</p>
                    <p className="font-bold text-xl">{item.price * item.quantity} جنيه</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Clear Cart Button */}
          <Button
            variant="outline"
            className="w-full gap-2 text-destructive hover:text-destructive bg-transparent"
            onClick={clearCart}
          >
            <Trash2 className="h-4 w-4" />
            إفراغ السلة
          </Button>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <Card className="sticky top-20">
            <CardContent className="p-6 space-y-6">
              <h2 className="text-2xl font-bold">ملخص الطلب</h2>

              <div className="space-y-3">
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

              <Button size="lg" className="w-full text-lg">
                إتمام الطلب
              </Button>

              <Link href="/products">
                <Button variant="outline" size="lg" className="w-full bg-transparent">
                  متابعة التسوق
                </Button>
              </Link>

              <Card className="bg-secondary/30 border-0">
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    شحن مجاني لجميع الطلبات داخل مصر. دعمك يساهم في تشجيع الفنانين والحرفيين المصريين.
                  </p>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
