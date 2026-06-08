"use client"

import Link from "next/link"
import {
  ExternalLink,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react"

const footerLinks = [
  {
    title: "المنصة",
    links: [
      { label: "المميزات", href: "#features" },
      { label: "واجهة المنصة", href: "#dashboard" },
      { label: "عن Za ERP", href: "#about" },
      { label: "الأسعار", href: "#pricing" },
    ],
  },
  {
    title: "الوحدات",
    links: [
      { label: "المبيعات والفواتير", href: "#features" },
      { label: "المخزون والمنتجات", href: "#features" },
      { label: "نقاط البيع POS", href: "#features" },
      { label: "الصيانة والخدمات", href: "#features" },
    ],
  },
  {
    title: "التواصل",
    links: [
      { label: "طلب تجربة", href: "#contact" },
      { label: "استفسار عن الأسعار", href: "#contact" },
      { label: "التواصل عبر واتساب", href: "https://wa.me/9647808500591" },
      { label: "دخول المنصة", href: "https://erpv1.zaitoonerp.com" },
    ],
  },
]

export function Footer() {
  return (
    <footer
      dir="rtl"
      className="relative overflow-hidden border-t border-border bg-secondary/30"
    >
      {/* Subtle gold glow effect */}
      <div className="absolute left-1/2 top-0 h-[2px] w-[600px] -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute left-1/2 top-0 h-[80px] w-[400px] -translate-x-1/2 bg-primary/5 blur-3xl" />

      <div className="container relative mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="group mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 shadow-sm transition-shadow group-hover:shadow-primary/20">
                <span className="text-gradient-gold text-xl font-black">
                  Za
                </span>
              </div>

              <div>
                <span className="text-gradient-gold block text-2xl font-bold">
                  Za ERP
                </span>
                <span className="text-xs text-muted-foreground">
                  منصة ERP عربية لإدارة الأعمال
                </span>
              </div>
            </Link>

            <p className="mb-6 max-w-md text-sm leading-7 text-muted-foreground">
              منصة عربية تساعد الشركات المحلية على تنظيم المبيعات، المخزون،
              الفواتير، العملاء، الصلاحيات، التقارير، ونقاط البيع بطريقة واضحة
              وقابلة للتوسع.
            </p>

            {/* Contact Info */}
            <div className="mb-6 flex flex-col gap-3">
              <a
                href="mailto:info@zaitoonerp.com"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <Mail className="h-4 w-4" />
                <span dir="ltr">info@zaitoonerp.com</span>
              </a>

              <a
                href="https://wa.me/9647808500591"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <Phone className="h-4 w-4" />
                <span dir="ltr">+964 780 850 0591</span>
              </a>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>العراق</span>
              </div>
            </div>

            {/* Trust Notes */}
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="flex items-start gap-3 rounded-xl border border-border bg-card/60 p-4">
                <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                <p className="text-xs leading-6 text-muted-foreground">
                  تركيز على الصلاحيات وفصل بيانات الشركات حسب طبيعة العمل.
                </p>
              </div>

              <div className="flex items-start gap-3 rounded-xl border border-border bg-card/60 p-4">
                <Sparkles className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                <p className="text-xs leading-6 text-muted-foreground">
                  تطوير تدريجي للمنصة مع تركيز على الاستقرار وتجربة المستخدم.
                </p>
              </div>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="relative mb-4 inline-block font-semibold text-foreground">
                {group.title}
                <span className="absolute -bottom-1 right-0 h-0.5 w-8 rounded-full bg-gradient-to-l from-primary to-transparent" />
              </h4>

              <ul className="flex flex-col gap-3">
                {group.links.map((link) => {
                  const isExternal = link.href.startsWith("http")

                  return (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noopener noreferrer" : undefined}
                        className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-all duration-300 hover:-translate-x-1 hover:text-primary"
                      >
                        {link.label}
                        {isExternal && <ExternalLink className="h-3 w-3" />}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center px-4">
          <div className="w-full border-t border-border" />
        </div>

        <div className="relative flex justify-center">
          <div className="bg-secondary/30 px-4">
            <div className="h-2 w-2 rounded-full bg-primary/50 shadow-sm shadow-primary/30" />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center justify-between gap-5 text-center md:flex-row md:text-right">
            <div>
              <p className="text-sm font-medium text-foreground">
                جميع الحقوق محفوظة © 2026{" "}
                <span className="text-gradient-gold font-bold">Za ERP</span>
              </p>

              <p className="mt-2 max-w-xl text-xs leading-6 text-muted-foreground">
                الصفحة الرئيسية تعريفية وتسويقية، وقد تختلف الخصائص حسب الخطة
                والصلاحيات والوحدات المفعّلة لكل شركة.
              </p>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-border bg-card/70 px-4 py-2 text-xs text-muted-foreground transition-colors hover:text-primary"
              >
                طلب تجربة
              </a>

              <a
                href="https://wa.me/9647808500591"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs text-primary transition-colors hover:bg-primary/15"
              >
                <MessageCircle className="ml-2 h-4 w-4" />
                واتساب
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-1/2 h-[1px] w-[300px] -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </div>
    </footer>
  )
}