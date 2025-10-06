"use client"

import type React from "react"

import { useSearchParams } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useCartStore } from "@/lib/cart-store"
import { ShoppingCart } from "lucide-react"
import { useState } from "react"

// Mock product data
const allProducts = [
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
  {
    id: "5",
    name: "سجادة يدوية مصرية",
    price: 600,
    category: "handicrafts",
    image: "/placeholder.svg?key=carpet",
  },
  {
    id: "6",
    name: "لوحة الأهرامات",
    price: 950,
    category: "art",
    image: "/placeholder.svg?key=pyramids",
  },
  {
    id: "7",
    name: "كتاب الأدب العربي الحديث",
    price: 180,
    category: "books",
    image: "/placeholder.svg?key=literature",
  },
  {
    id: "8",
    name: "مجوهرات فرعونية",
    price: 450,
    category: "handicrafts",
    image: "/placeholder.svg?key=jewelry",
  },
  {
    id: "9",
    name: "لوحة الخط العربي",
    price: 700,
    category: "art",
    image: "/placeholder.svg?key=calligraphy",
  },
  {
    id: "10",
    name: "كتاب الحضارة المصرية",
    price: 200,
    category: "books",
    image: "/placeholder.svg?key=civilization",
  },
  {
    id: "11",
    name: "صندوق خشبي منقوش",
    price: 280,
    category: "handicrafts",
    image: "/placeholder.svg?key=woodbox",
  },
  {
    id: "12",
    name: "لوحة الصحراء المصرية",
    price: 650,
    category: "art",
    image: "/placeholder.svg?key=desert",
  },
]

export function ProductGrid() {
  const searchParams = useSearchParams()
  const addItem = useCartStore((state) => state.addItem)
  const [addedItems, setAddedItems] = useState<Set<string>>(new Set())

  const category = searchParams.get("category")
  const sort = searchParams.get("sort")
  const search = searchParams.get("search")

  // Filter products
  let filteredProducts = [...allProducts]

  if (category && category !== "all") {
    filteredProducts = filteredProducts.filter((p) => p.category === category)
  }

  if (search) {
    filteredProducts = filteredProducts.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
  }

  // Sort products
  if (sort === "price-asc") {
    filteredProducts.sort((a, b) => a.price - b.price)
  } else if (sort === "price-desc") {
    filteredProducts.sort((a, b) => b.price - a.price)
  } else if (sort === "name") {
    filteredProducts.sort((a, b) => a.name.localeCompare(b.name, "ar"))
  }

  const handleAddToCart = (product: (typeof allProducts)[0], e: React.MouseEvent) => {
    e.preventDefault()
    addItem(product)
    setAddedItems((prev) => new Set(prev).add(product.id))
    setTimeout(() => {
      setAddedItems((prev) => {
        const newSet = new Set(prev)
        newSet.delete(product.id)
        return newSet
      })
    }, 2000)
  }

  if (filteredProducts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground text-lg">لا توجد منتجات تطابق البحث</p>
      </div>
    )
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <p className="text-muted-foreground">
          عرض {filteredProducts.length} {filteredProducts.length === 1 ? "منتج" : "منتجات"}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
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
                <div className="flex items-center justify-between gap-2">
                  <span className="text-2xl font-bold text-primary">{product.price} جنيه</span>
                  <Button
                    size="sm"
                    className="gap-2"
                    onClick={(e) => handleAddToCart(product, e)}
                    variant={addedItems.has(product.id) ? "secondary" : "default"}
                  >
                    {addedItems.has(product.id) ? (
                      "تمت الإضافة"
                    ) : (
                      <>
                        <ShoppingCart className="h-4 w-4" />
                        أضف
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
