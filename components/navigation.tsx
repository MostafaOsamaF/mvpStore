"use client"

import Link from "next/link"
import { ShoppingCart, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { useCartStore } from "@/lib/cart-store"

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const getTotalItems = useCartStore((state) => state.getTotalItems)
  const totalItems = getTotalItems()

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">N</span>
            </div>
            <span className="font-bold text-lg hidden sm:inline">Nexora</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              الرئيسية
            </Link>
            <Link href="/products" className="text-foreground hover:text-primary transition-colors">
              المتجر
            </Link>
            <Link href="/products?category=books" className="text-foreground hover:text-primary transition-colors">
              الكتب
            </Link>
            <Link
              href="/products?category=handicrafts"
              className="text-foreground hover:text-primary transition-colors"
            >
              الحرف اليدوية
            </Link>
            <Link href="/products?category=art" className="text-foreground hover:text-primary transition-colors">
              الفنون الجميلة
            </Link>
          </div>

          {/* Cart & Mobile Menu */}
          <div className="flex items-center gap-2">
            <Link href="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -left-1 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Button>
            </Link>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                الرئيسية
              </Link>
              <Link
                href="/products"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                المتجر
              </Link>
              <Link
                href="/products?category=books"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                الكتب
              </Link>
              <Link
                href="/products?category=handicrafts"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                الحرف اليدوية
              </Link>
              <Link
                href="/products?category=art"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                الفنون الجميلة
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
