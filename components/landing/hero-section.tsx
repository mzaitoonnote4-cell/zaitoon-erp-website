"use client"

import { Button } from "@/components/ui/button"
import {
  ArrowLeft,
  BarChart3,
  Moon,
  Package,
  ReceiptText,
  ShieldCheck,
  Sparkles,
  Sun,
  Users,
  Wrench,
  Zap,
} from "lucide-react"

const platformModules = [
  {
    label: "المبيعات",
    icon: ReceiptText,
  },
  {
    label: "المخزون",
    icon: Package,
  },
  {
    label: "العملاء",
    icon: Users,
  },
  {
    label: "التقارير",
    icon: BarChart3,
  },
  {
    label: "الصيانة",
    icon: Wrench,
  },
]

export function HeroSection() {
  return (
    <section
      dir="rtl"
      className="relative min-h-screen overflow-hidden bg-background pt-24"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
      <div className="absolute right-[-6rem] top-28 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-16 left-[-5rem] h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.035)_1px,transparent_1px)] bg-[size:56px_56px]" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid min-h-[calc(100vh-6rem)] items-center gap-12 py-12 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Text Content */}
          <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:text-right">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-2 shadow-sm backdrop-blur">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm text-muted-foreground">
                منصة ERP عربية تنمو بخطوات مدروسة
              </span>
            </div>

            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
              <span className="text-gradient-gold">Za ERP</span>
              <span className="mt-3 block text-foreground">
                لإدارة أعمالك بوضوح واحتراف
              </span>
            </h1>

            <p className="mb-5 text-lg font-medium leading-relaxed text-foreground md:text-2xl">
              منصة عربية لإدارة المبيعات، المخزون، الفواتير، العملاء، الصلاحيات،
              التقارير، ونقاط البيع من مكان واحد.
            </p>

            <p className="mx-auto mb-9 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg lg:mx-0">
              صُممت Za ERP لتناسب الشركات المحلية التي تحتاج إلى نظام واضح،
              منظم، وقابل للتوسع، مع واجهة RTL احترافية ودعم للوضع النهاري
              والليلي وتجربة استخدام مناسبة للموظفين والإدارة.
            </p>

            <div className="mb-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <Button
                size="lg"
                className="group w-full bg-primary px-8 py-6 text-lg text-primary-foreground hover:bg-primary/90 sm:w-auto"
              >
                اطلب تجربة للمنصة
                <ArrowLeft className="mr-2 h-5 w-5 transition-transform group-hover:-translate-x-1" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="w-full border-border px-8 py-6 text-lg text-foreground hover:bg-secondary sm:w-auto"
              >
                استعرض المميزات
              </Button>
            </div>

            <div className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-3">
              <div className="flex items-center justify-center gap-2 rounded-2xl border border-border bg-secondary/40 px-4 py-3 lg:justify-start">
                <ShieldCheck className="h-5 w-5 text-primary" />
                <span>صلاحيات وفصل بيانات</span>
              </div>

              <div className="flex items-center justify-center gap-2 rounded-2xl border border-border bg-secondary/40 px-4 py-3 lg:justify-start">
                <Zap className="h-5 w-5 text-primary" />
                <span>تجربة سريعة ومنظمة</span>
              </div>

              <div className="flex items-center justify-center gap-2 rounded-2xl border border-border bg-secondary/40 px-4 py-3 lg:justify-start">
                <Sparkles className="h-5 w-5 text-primary" />
                <span>تطوير مستمر ومراحل واضحة</span>
              </div>
            </div>
          </div>

          {/* Visual Preview */}
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full border border-primary/20 bg-primary/10 blur-xl" />
            <div className="absolute -bottom-8 -left-8 h-28 w-28 rounded-full border border-primary/20 bg-primary/10 blur-xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card/80 p-4 shadow-2xl backdrop-blur">
              <div className="mb-4 flex items-center justify-between rounded-2xl border border-border bg-background/70 px-4 py-3">
                <div>
                  <p className="text-sm text-muted-foreground">لوحة Za ERP</p>
                  <p className="font-semibold text-foreground">
                    نظرة موحدة على أعمالك
                  </p>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-2 text-xs text-muted-foreground">
                  <Sun className="h-4 w-4 text-primary" />
                  <span>/</span>
                  <Moon className="h-4 w-4 text-primary" />
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-border bg-background/70 p-4">
                  <p className="mb-2 text-sm text-muted-foreground">
                    مبيعات اليوم
                  </p>
                  <p className="text-2xl font-bold text-foreground">
                    1,250,000
                  </p>
                  <p className="mt-2 text-xs text-primary">
                    قراءة سريعة للأداء
                  </p>
                </div>

                <div className="rounded-2xl border border-border bg-background/70 p-4">
                  <p className="mb-2 text-sm text-muted-foreground">
                    تنبيهات المخزون
                  </p>
                  <p className="text-2xl font-bold text-foreground">8</p>
                  <p className="mt-2 text-xs text-primary">
                    متابعة النقص والحركة
                  </p>
                </div>
              </div>

              <div className="mt-3 rounded-2xl border border-border bg-background/70 p-4">
                <div className="mb-4 flex items-center justify-between">
                  <p className="font-semibold text-foreground">
                    وحدات المنصة
                  </p>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
                    جاهزة للتوسع
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {platformModules.map((module) => {
                    const Icon = module.icon

                    return (
                      <div
                        key={module.label}
                        className="flex items-center gap-2 rounded-xl border border-border bg-secondary/40 px-3 py-3 text-sm text-foreground"
                      >
                        <Icon className="h-4 w-4 text-primary" />
                        <span>{module.label}</span>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="mt-3 rounded-2xl border border-border bg-background/70 p-4">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-sm font-medium text-foreground">
                    حالة المنصة
                  </p>
                  <span className="text-xs text-muted-foreground">
                    Pilot / Early Access
                  </span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-secondary">
                  <div className="h-full w-[72%] rounded-full bg-primary" />
                </div>

                <p className="mt-3 text-xs leading-6 text-muted-foreground">
                  تطوير تدريجي يركز على الاستقرار، تجربة المستخدم، الصلاحيات،
                  والتقارير قبل التوسع التجاري الكامل.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}