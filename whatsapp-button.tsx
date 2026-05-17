"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, Building2, CheckCircle2, Globe2, Sparkles } from "lucide-react"

const statusItems = [
  "مرحلة Founder Pilot",
  "واجهة عربية RTL",
  "مناسب للشركات الصغيرة والمتوسطة",
  "دعم قريب لأوائل العملاء",
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-secondary/50 border border-border rounded-full px-4 py-2 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">حل عربي مبسط وسريع التشغيل للشركات المحلية</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100 text-balance">
            <span className="text-gradient-gold">Zaitoon ERP</span>{" "}
            <span className="block mt-4 text-foreground text-3xl md:text-5xl lg:text-6xl">
              نظام عربي لإدارة الشركات والمتاجر من مكان واحد
            </span>
          </h1>

          <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 text-pretty leading-relaxed">
            أدر المبيعات، المخزون، الفواتير، العملاء، الموظفين، الصلاحيات، التوصيل والتقارير عبر منصة عربية واضحة وسهلة الاستخدام، مصممة للشركات المحلية التي تريد نظاماً عملياً بدون تعقيد.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 animate-pulse-gold group w-full sm:w-auto"
            >
              <a href="#contact">
                اطلب تجربة المنصة
                <ArrowLeft className="mr-2 h-5 w-5 transition-transform group-hover:-translate-x-1" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-border text-foreground hover:bg-secondary hover:text-foreground text-lg px-8 py-6 w-full sm:w-auto"
            >
              <a href="#features">مشاهدة المميزات</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="text-primary hover:text-primary hover:bg-primary/10 text-lg px-8 py-6 w-full sm:w-auto"
            >
              <a href="https://erpv1.zaitoonerp.com/">دخول المنصة</a>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
            {statusItems.map((item, index) => (
              <div key={item} className="flex items-center justify-center gap-2 rounded-2xl bg-card/70 border border-border px-4 py-3">
                {index === 0 ? <Building2 className="w-4 h-4 text-primary" /> : index === 1 ? <Globe2 className="w-4 h-4 text-primary" /> : <CheckCircle2 className="w-4 h-4 text-primary" />}
                <span className="text-sm text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
