"use client"

import {
  BadgeCheck,
  Building2,
  Check,
  GitBranch,
  Layers3,
  Lock,
  Moon,
  ShieldCheck,
  Sparkles,
  Sun,
} from "lucide-react"

const benefits = [
  "واجهة عربية RTL مناسبة لبيئة العمل المحلية",
  "دعم الوضع النهاري والليلي بتصميم احترافي",
  "صلاحيات تساعد على تحديد ما يراه وينفذه كل موظف",
  "تنظيم المبيعات والمخزون والفواتير والعملاء من مكان واحد",
  "تقارير تساعد الإدارة على قراءة الأداء واتخاذ قرارات أوضح",
  "قابلية التوسع تدريجياً حسب نمو الشركة والفروع",
]

const principles = [
  {
    icon: ShieldCheck,
    title: "الخصوصية والصلاحيات",
    description:
      "تصميم يراعي فصل بيانات الشركات وتحديد صلاحيات الموظفين حسب المسؤوليات داخل كل شركة.",
  },
  {
    icon: Layers3,
    title: "تطوير تدريجي ومنظم",
    description:
      "يتم بناء المنصة على مراحل واضحة، مع التركيز على الاستقرار وتجربة المستخدم قبل التوسع السريع.",
  },
  {
    icon: Building2,
    title: "مناسبة للشركات المحلية",
    description:
      "Za ERP موجهة للشركات والمتاجر المحلية التي تحتاج نظاماً عربياً واضحاً بدون تعقيد غير ضروري.",
  },
]

const roadmapItems = [
  "توسيع تقارير الإدارة والمالية",
  "تطوير تجربة نقاط البيع POS",
  "توسعة المشتريات والموردين",
  "تحسين مسارات الصيانة والخدمات",
  "خيارات تخصيص حسب سياسة كل شركة",
  "إدارة SaaS أوسع للاشتراكات والشركات",
]

export function AboutSection() {
  return (
    <section id="about" dir="rtl" className="relative overflow-hidden py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-10 left-0 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.95fr]">
          {/* Content */}
          <div>
            <span className="mb-4 block text-sm font-semibold tracking-wide text-primary">
              عن المنصة
            </span>

            <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
              لماذا{" "}
              <span className="text-gradient-gold">Za ERP</span>؟
            </h2>

            <p className="mb-6 text-lg leading-9 text-muted-foreground">
              Za ERP هي منصة ERP عربية يتم تطويرها لتساعد الشركات المحلية على
              تنظيم المبيعات، المخزون، الفواتير، العملاء، الصلاحيات، التقارير،
              والعمليات اليومية بطريقة واضحة وقابلة للتوسع.
            </p>

            <p className="mb-8 text-base leading-8 text-muted-foreground">
              تركيز المنصة ليس فقط على إضافة مميزات كثيرة، بل على بناء نظام
              عملي ومستقر يحترم خصوصية بيانات الشركات، ويمنح الإدارة رؤية أوضح،
              ويجعل تجربة الموظف اليومية أسهل وأكثر تنظيماً.
            </p>

            {/* Benefits List */}
            <div className="mb-8 grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/20">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                  <span className="text-sm leading-7 text-foreground">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            {/* Status Cards */}
            <div className="grid gap-4 border-t border-border pt-8 sm:grid-cols-3">
              <div className="rounded-2xl border border-border bg-card/70 p-4">
                <div className="mb-3 flex items-center gap-2 text-primary">
                  <BadgeCheck className="h-5 w-5" />
                  <span className="text-sm font-semibold">Pilot</span>
                </div>
                <p className="text-sm leading-6 text-muted-foreground">
                  جاهزة للتجارب الأولية والتطوير حسب احتياجات الشركات.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card/70 p-4">
                <div className="mb-3 flex items-center gap-2 text-primary">
                  <GitBranch className="h-5 w-5" />
                  <span className="text-sm font-semibold">SaaS</span>
                </div>
                <p className="text-sm leading-6 text-muted-foreground">
                  بنية قابلة للتوسع لشركات متعددة واشتراكات مستقبلية.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card/70 p-4">
                <div className="mb-3 flex items-center gap-2 text-primary">
                  <Lock className="h-5 w-5" />
                  <span className="text-sm font-semibold">Permissions</span>
                </div>
                <p className="text-sm leading-6 text-muted-foreground">
                  فصل أدوار وصلاحيات الموظفين حسب مسؤوليات العمل.
                </p>
              </div>
            </div>
          </div>

          {/* Platform Vision Cards */}
          <div className="flex flex-col gap-6">
            <div className="border-gold-glow rounded-3xl bg-card/80 p-6 shadow-sm backdrop-blur">
              <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">هوية حديثة</p>
                  <h3 className="text-2xl font-bold text-foreground">
                    تجربة مناسبة للإدارة والموظفين
                  </h3>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-2 text-primary">
                  <Sun className="h-4 w-4" />
                  <span className="text-xs text-muted-foreground">/</span>
                  <Moon className="h-4 w-4" />
                </div>
              </div>

              <p className="mb-6 text-sm leading-7 text-muted-foreground">
                تم تصميم المنصة لتظهر باحتراف في الوضع النهاري والليلي، مع
                واجهة عربية واضحة تقلل التشتت وتساعد الموظف على إنجاز عمله
                اليومي بسهولة.
              </p>

              <div className="grid gap-4">
                {principles.map((item) => {
                  const Icon = item.icon

                  return (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-border bg-background/60 p-4"
                    >
                      <div className="mb-3 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <h4 className="font-semibold text-foreground">
                          {item.title}
                        </h4>
                      </div>
                      <p className="text-sm leading-7 text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-card/70 p-6 shadow-sm backdrop-blur">
              <div className="mb-5 flex items-center gap-2 text-primary">
                <Sparkles className="h-5 w-5" />
                <h3 className="font-semibold">اتجاه التطوير القادم</h3>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {roadmapItems.map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-border bg-secondary/50 px-4 py-3 text-sm text-muted-foreground"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <p className="mt-5 text-xs leading-6 text-muted-foreground">
                يتم تنفيذ هذه التوسعات تدريجياً حسب الأولوية والاستقرار واحتياج
                الشركات، وليس كوعود تسويقية فورية.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}