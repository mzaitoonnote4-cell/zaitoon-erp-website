"use client"

import { useEffect, useState } from "react"
import { Menu, Moon, Sun, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#features", label: "المميزات" },
  { href: "#dashboard", label: "الواجهة" },
  { href: "#about", label: "عن المنصة" },
  { href: "#pricing", label: "الأسعار" },
  { href: "#contact", label: "تواصل معنا" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      dir="rtl"
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-border bg-background/95 shadow-sm backdrop-blur-md"
          : "bg-background/70 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <a
            href="#"
            aria-label="Za ERP Homepage"
            className="flex items-center gap-3"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 shadow-sm">
              <span className="text-gradient-gold text-lg font-black">
                Za
              </span>
            </div>

            <div className="leading-tight">
              <span className="text-gradient-gold block text-2xl font-bold">
                Za ERP
              </span>
              <span className="hidden text-xs text-muted-foreground sm:block">
                منصة ERP عربية لإدارة الأعمال
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="https://erpv1.zaitoonerp.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                className="text-foreground hover:text-primary"
              >
                دخول المنصة
              </Button>
            </a>

            <a href="#contact">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                اطلب تجربة
              </Button>
            </a>

            <div className="flex items-center gap-1 rounded-full border border-border bg-secondary/60 px-3 py-2 text-xs text-muted-foreground">
              <Sun className="h-4 w-4 text-primary" />
              <span>/</span>
              <Moon className="h-4 w-4 text-primary" />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen((value) => !value)}
            aria-label={isMobileMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="mt-4 border-t border-border pt-4 lg:hidden">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-xl px-3 py-3 text-base font-medium text-muted-foreground transition-colors duration-200 hover:bg-secondary/60 hover:text-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}

              <div className="mt-3 flex flex-col gap-2 border-t border-border pt-4">
                <a
                  href="https://erpv1.zaitoonerp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Button variant="outline" className="w-full justify-center">
                    دخول المنصة
                  </Button>
                </a>

                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    اطلب تجربة
                  </Button>
                </a>

                <div className="mt-2 flex items-center justify-center gap-2 rounded-xl border border-border bg-secondary/50 px-3 py-3 text-xs text-muted-foreground">
                  <Sun className="h-4 w-4 text-primary" />
                  <span>يدعم الهوية النهارية والليلية</span>
                  <Moon className="h-4 w-4 text-primary" />
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}