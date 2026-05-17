"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#about", label: "لماذا زيتون؟" },
  { href: "#features", label: "المميزات" },
  { href: "#dashboard", label: "لوحة التحكم" },
  { href: "#pricing", label: "الباقات" },
  { href: "#contact", label: "تواصل" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          <a href="#" className="flex items-center gap-2 min-w-0">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
              <span className="text-primary-foreground font-bold text-xl">Z</span>
            </div>
            <span className="text-gradient-gold text-xl md:text-2xl font-bold truncate">زيتون ERP</span>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm font-medium">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Button asChild variant="ghost" className="text-foreground hover:text-primary">
              <a href="https://erpv1.zaitoonerp.com/">دخول المنصة</a>
            </Button>
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 animate-pulse-gold">
              <a href="#contact">اطلب تجربة</a>
            </Button>
          </div>

          <Button variant="ghost" size="icon" className="lg:hidden flex-shrink-0" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border pt-4 animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="text-muted-foreground hover:text-primary transition-colors duration-200 text-base font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                <Button asChild variant="ghost" className="w-full justify-center">
                  <a href="https://erpv1.zaitoonerp.com/">دخول المنصة</a>
                </Button>
                <Button asChild className="w-full bg-primary text-primary-foreground">
                  <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>اطلب تجربة</a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
