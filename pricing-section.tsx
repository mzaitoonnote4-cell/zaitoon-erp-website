"use client"

import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

const footerLinks = [
  {
    title: "المنصة",
    links: [
      { label: "لماذا زيتون؟", href: "#about" },
      { label: "المميزات", href: "#features" },
      { label: "لوحة التحكم", href: "#dashboard" },
      { label: "الباقات", href: "#pricing" },
    ],
  },
  {
    title: "للعملاء",
    links: [
      { label: "طلب تجربة", href: "#contact" },
      { label: "دخول المنصة", href: "https://erpv1.zaitoonerp.com/" },
      { label: "تطبيق الموبايل قريباً", href: "#mobile" },
      { label: "الفيديو التوضيحي", href: "#video" },
    ],
  },
  {
    title: "التواصل",
    links: [
      { label: "واتساب", href: "https://wa.me/9647808500591" },
      { label: "البريد الإلكتروني", href: "mailto:info@zaitoonerp.com" },
      { label: "نموذج التواصل", href: "#contact" },
    ],
  },
]

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
]

export function Footer() {
  return (
    <footer className="relative bg-secondary/30 border-t border-border overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[80px] bg-primary/5 blur-3xl" />

      <div className="container mx-auto px-4 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-shadow">
                <span className="text-primary-foreground font-bold text-2xl">Z</span>
              </div>
              <span className="text-gradient-gold text-2xl font-bold">Zaitoon ERP</span>
            </Link>
            <p className="text-muted-foreground text-sm mb-6 max-w-sm leading-relaxed">
              نظام ERP عربي للشركات والمتاجر المحلية لإدارة المبيعات، المخزون، الفواتير، العملاء، الصلاحيات، التوصيل والتقارير من مكان واحد.
            </p>

            <div className="flex flex-col gap-3 mb-6">
              <a href="mailto:info@zaitoonerp.com" className="flex items-center gap-2 text-muted-foreground text-sm hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                <span dir="ltr">info@zaitoonerp.com</span>
              </a>
              <a href="https://wa.me/9647808500591" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground text-sm hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                <span dir="ltr">+964 780 850 0591</span>
              </a>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4" />
                <span>العراق</span>
              </div>
            </div>

            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a key={social.label} href={social.href} aria-label={social.label} className="w-10 h-10 rounded-lg bg-secondary/80 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300">
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-foreground font-semibold mb-4 relative inline-block">
                {group.title}
                <span className="absolute -bottom-1 right-0 w-8 h-0.5 bg-gradient-to-l from-primary to-transparent rounded-full" />
              </h4>
              <ul className="flex flex-col gap-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-muted-foreground text-sm hover:text-primary hover:translate-x-[-4px] inline-block transition-all duration-300">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="relative">
        <div className="absolute inset-0 flex items-center px-4">
          <div className="w-full border-t border-border" />
        </div>
        <div className="relative flex justify-center">
          <div className="px-4 bg-secondary/30">
            <div className="w-2 h-2 rounded-full bg-primary/50 shadow-sm shadow-primary/30" />
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center gap-4">
            <p className="text-foreground text-base font-medium text-center">
              © 2026 <span className="text-gradient-gold font-bold">Zaitoon ERP</span>. جميع الحقوق محفوظة.
            </p>
            <p className="text-muted-foreground text-sm text-center max-w-md">
              منصة عربية في مرحلة Founder Pilot، مصممة لتبسيط الإدارة اليومية للشركات والمتاجر المحلية.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </div>
    </footer>
  )
}
