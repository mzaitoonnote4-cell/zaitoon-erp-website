"use client"

import { AlertTriangle, BarChart3, FileText, Package, ShoppingBag, Users } from "lucide-react"

const insightCards = [
  { label: "مبيعات اليوم", value: "ملخص مباشر", note: "متابعة يومية", icon: ShoppingBag },
  { label: "المخزون", value: "تنبيهات واضحة", note: "ناقص / متوفر", icon: Package },
  { label: "الفواتير", value: "مدفوع / متبقي", note: "حالة الدفع", icon: FileText },
  { label: "العملاء", value: "متابعة منظمة", note: "نشاط العملاء", icon: Users },
]

const activityItems = [
  { title: "فاتورة جديدة", description: "تظهر حالة الدفع والمبلغ المتبقي بوضوح", icon: FileText, status: "مبيعات" },
  { title: "تنبيه مخزون", description: "منتج يحتاج مراجعة الكمية المتاحة", icon: AlertTriangle, status: "مخزون" },
  { title: "تقرير سريع", description: "ملخص يساعد صاحب العمل على المتابعة اليومية", icon: BarChart3, status: "تقارير" },
]

export function DashboardPreview() {
  return (
    <section id="dashboard" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-secondary/30" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-sm font-semibold tracking-wide mb-4 block">لوحة التحكم</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            لوحة تحكم واضحة <span className="text-gradient-gold">لصاحب العمل</span>
          </h2>
          <p className="text-muted-foreground text-lg text-pretty leading-relaxed">
            تابع أداء المبيعات، المخزون، العملاء، الفواتير، وحركة الموظفين من واجهة عربية مصممة للاستخدام اليومي.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-card rounded-3xl border-gold-glow p-4 md:p-8 animate-float">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-4 border-b border-border">
              <div>
                <h3 className="text-xl font-semibold text-foreground">نظرة عامة على الشركة</h3>
                <p className="text-muted-foreground text-sm">واجهة تجريبية توضح شكل المتابعة اليومية داخل Zaitoon ERP</p>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-2 w-fit">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span className="text-sm text-muted-foreground">جاهز للتجربة التجريبية</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {insightCards.map((card) => (
                <div key={card.label} className="bg-secondary/50 rounded-xl p-4 border border-border hover:border-primary/30 transition-colors">
                  <div className="flex items-center justify-between mb-3">
                    <card.icon className="w-5 h-5 text-primary" />
                    <span className="text-xs text-primary font-medium">{card.note}</span>
                  </div>
                  <p className="text-xl font-bold text-foreground mb-1">{card.value}</p>
                  <p className="text-xs text-muted-foreground">{card.label}</p>
                </div>
              ))}
            </div>

            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6">
              <div className="bg-secondary/30 rounded-xl p-6 border border-border">
                <h4 className="text-sm font-semibold text-foreground mb-4">مؤشرات المبيعات خلال الفترة</h4>
                <div className="h-52 flex items-end justify-between gap-2">
                  {[54, 68, 48, 76, 62, 88, 71, 84, 58, 92, 73, 86].map((height, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1">
                      <div className="w-full bg-primary/60 rounded-t-sm hover:bg-primary transition-colors cursor-pointer" style={{ height: `${height}%` }} />
                    </div>
                  ))}
                </div>
                <div className="flex justify-between mt-3 text-xs text-muted-foreground">
                  <span>بداية الفترة</span>
                  <span>منتصف الفترة</span>
                  <span>نهاية الفترة</span>
                </div>
              </div>

              <div className="bg-secondary/30 rounded-xl p-6 border border-border">
                <h4 className="text-sm font-semibold text-foreground mb-4">نشاطات تحتاج متابعة</h4>
                <div className="flex flex-col gap-4">
                  {activityItems.map((item) => (
                    <div key={item.title} className="flex items-start justify-between gap-3 py-3 border-b border-border last:border-0">
                      <div className="flex items-start gap-3">
                        <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">{item.title}</p>
                          <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                      <span className="text-xs text-primary whitespace-nowrap">{item.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
