"use client"

import type React from "react"

import { useSearchParams, useRouter, usePathname } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, X } from "lucide-react"
import { useState } from "react"

export function ProductFilters() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [searchQuery, setSearchQuery] = useState(searchParams.get("search") || "")

  const currentCategory = searchParams.get("category") || "all"
  const currentSort = searchParams.get("sort") || "default"

  const updateFilter = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    if (value === "all" || value === "default") {
      params.delete(key)
    } else {
      params.set(key, value)
    }
    router.push(`${pathname}?${params.toString()}`)
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const params = new URLSearchParams(searchParams.toString())
    if (searchQuery.trim()) {
      params.set("search", searchQuery.trim())
    } else {
      params.delete("search")
    }
    router.push(`${pathname}?${params.toString()}`)
  }

  const clearFilters = () => {
    setSearchQuery("")
    router.push(pathname)
  }

  const hasActiveFilters = currentCategory !== "all" || currentSort !== "default" || searchQuery

  return (
    <div className="space-y-6">
      {/* Search */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">البحث</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSearch} className="flex gap-2">
            <Input
              type="text"
              placeholder="ابحث عن منتج..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1"
            />
            <Button type="submit" size="icon">
              <Search className="h-4 w-4" />
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Category Filter */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">التصنيف</CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup value={currentCategory} onValueChange={(value) => updateFilter("category", value)}>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="all" id="all" />
              <Label htmlFor="all" className="cursor-pointer">
                جميع المنتجات
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="books" id="books" />
              <Label htmlFor="books" className="cursor-pointer">
                الكتب
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="handicrafts" id="handicrafts" />
              <Label htmlFor="handicrafts" className="cursor-pointer">
                الحرف اليدوية
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="art" id="art" />
              <Label htmlFor="art" className="cursor-pointer">
                الفنون الجميلة
              </Label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>

      {/* Sort Filter */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">الترتيب</CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup value={currentSort} onValueChange={(value) => updateFilter("sort", value)}>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="default" id="default" />
              <Label htmlFor="default" className="cursor-pointer">
                الافتراضي
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="price-asc" id="price-asc" />
              <Label htmlFor="price-asc" className="cursor-pointer">
                السعر: من الأقل للأعلى
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="price-desc" id="price-desc" />
              <Label htmlFor="price-desc" className="cursor-pointer">
                السعر: من الأعلى للأقل
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="name" id="name" />
              <Label htmlFor="name" className="cursor-pointer">
                الاسم
              </Label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>

      {/* Clear Filters */}
      {hasActiveFilters && (
        <Button variant="outline" className="w-full gap-2 bg-transparent" onClick={clearFilters}>
          <X className="h-4 w-4" />
          مسح الفلاتر
        </Button>
      )}
    </div>
  )
}
