"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useCartStore } from "@/lib/cart-store"
import { ShoppingCart, Check, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

interface Product {
  id: string
  name: string
  price: number
  category: string
  description: string
  images: string[]
}

export function ProductDetails({ product }: { product: Product }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isAdded, setIsAdded] = useState(false)
  const addItem = useCartStore((state) => state.addItem)

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      category: product.category,
    })
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length)
  }

  const getCategoryName = (category: string) => {
    const categories: Record<string, string> = {
      books: "الكتب",
      handicrafts: "الحرف اليدوية",
      art: "الفنون الجميلة",
    }
    return categories[category] || category
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">
          الرئيسية
        </Link>
        <span>/</span>
        <Link href="/products" className="hover:text-foreground">
          المتجر
        </Link>
        <span>/</span>
        <Link href={`/products?category=${product.category}`} className="hover:text-foreground">
          {getCategoryName(product.category)}
        </Link>
        <span>/</span>
        <span className="text-foreground">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Image Gallery */}
        <div className="space-y-4">
          <Card className="overflow-hidden">
            <div className="relative aspect-square bg-muted">
              <img
                src={product.images[currentImageIndex] || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.images.length > 1 && (
                <>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full"
                    onClick={prevImage}
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full"
                    onClick={nextImage}
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                </>
              )}
            </div>
          </Card>

          {/* Thumbnail Gallery */}
          {product.images.length > 1 && (
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                    currentImageIndex === index ? "border-primary" : "border-transparent hover:border-border"
                  }`}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <Link
              href={`/products?category=${product.category}`}
              className="text-sm text-primary hover:underline mb-2 inline-block"
            >
              {getCategoryName(product.category)}
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-4xl font-bold text-primary">{product.price} جنيه</p>
          </div>

          <div className="border-t border-b border-border py-6">
            <h2 className="font-bold text-lg mb-3">الوصف</h2>
            <p className="text-muted-foreground leading-relaxed">{product.description}</p>
          </div>

          <div className="space-y-4">
            <Button size="lg" className="w-full text-lg gap-2" onClick={handleAddToCart} disabled={isAdded}>
              {isAdded ? (
                <>
                  <Check className="h-5 w-5" />
                  تمت الإضافة للسلة
                </>
              ) : (
                <>
                  <ShoppingCart className="h-5 w-5" />
                  أضف إلى السلة
                </>
              )}
            </Button>

            <Link href="/cart">
              <Button size="lg" variant="outline" className="w-full text-lg bg-transparent">
                عرض السلة
              </Button>
            </Link>
          </div>

          <Card className="bg-secondary/30">
            <CardContent className="p-6">
              <h3 className="font-bold mb-3">معلومات إضافية</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• منتج أصلي من وزارة الثقافة المصرية</li>
                <li>• يدعم الفنانين والحرفيين المحليين</li>
                <li>• شحن لجميع أنحاء مصر</li>
                <li>• ضمان الجودة والأصالة</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
