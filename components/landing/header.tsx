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
          ? "border-b border-border bg-[#0b0f14]/95 shadow-sm backdrop-blur-md"
          : "bg-[#0b0f14]/85 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <a
            href="#"
            aria-label="Za ERP Homepage"
            className="flex items-center gap-3"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <img
              src="/brand/za_erp_logo_horizontal.png"
              alt="Za ERP"
              className="hidden h-12 w-auto object-contain sm:block"
            />

            <img
              src="/brand/za_erp_icon_square.png"
              alt="Za ERP"
              className="h-11 w-11 rounded-xl object-cover sm:hidden"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-300 transition-colors duration-200 hover:text-primary"
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
                className="text-slate-200 hover:bg-white/5 hover:text-primary"
              >
                دخول المنصة
              </Button>
            </a>

            <a href="#contact">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                اطلب تجربة
              </Button>
            </a>

            <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-400">
              <Sun className="h-4 w-4 text-primary" />
              <span>/</span>
              <Moon className="h-4 w-4 text-primary" />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="text-slate-200 hover:bg-white/5 hover:text-primary lg:hidden"
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
          <div className="mt-4 border-t border-white/10 pt-4 lg:hidden">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-xl px-3 py-3 text-base font-medium text-slate-300 transition-colors duration-200 hover:bg-white/5 hover:text-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}

              <div className="mt-3 flex flex-col gap-2 border-t border-white/10 pt-4">
                <a
                  href="https://erpv1.zaitoonerp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Button
                    variant="outline"
                    className="w-full justify-center border-white/10 bg-white/5 text-slate-200 hover:bg-white/10 hover:text-primary"
                  >
                    دخول المنصة
                  </Button>
                </a>

                <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    اطلب تجربة
                  </Button>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}