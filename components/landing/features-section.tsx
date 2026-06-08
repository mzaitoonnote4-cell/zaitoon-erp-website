"use client"

import {
  BarChart3,
  ClipboardCheck,
  FileText,
  Package,
  ReceiptText,
  Settings,
  ShieldCheck,
  ShoppingCart,
  Store,
  Users,
  WalletCards,
  Wrench,
} from "lucide-react"

const features = [
  {
    icon: ShoppingCart,
    title: "المبيعات والفواتير",
    description:
      "إدارة عمليات البيع، إنشاء الفواتير، متابعة المدفوعات، وتنظيم حركة العملاء بطريقة واضحة وسهلة.",
  },
  {
    icon: Package,
    title: "المخزون والمنتجات",
    description:
      "متابعة المنتجات، الكميات، تنبيهات النقص، وحركة المخزون بين الفروع مع رؤية عملية للمواد المتوفرة.",
  },
  {
    icon: ReceiptText,
    title: "نقاط البيع POS",
    description:
      "واجهة بيع سريعة للكاشير مع تجربة مناسبة للمتاجر، وإمكانية طباعة إيصال POS بعد الدفع وإعادة طباعته عند الحاجة.",
  },
  {
    icon: Users,
    title: "العملاء والمتابعة",
    description:
      "تنظيم بيانات العملاء وسجل التعاملات والفواتير بما يساعد فريق العمل على المتابعة بدون تشتت.",
  },
  {
    icon: Store,
    title: "المشتريات والموردون",
    description:
      "تنظيم الموردين وعمليات الشراء بشكل تدريجي، مع قابلية التطوير لمتابعة الاستلام والتكاليف والمدفوعات.",
  },
  {
    icon: WalletCards,
    title: "المصاريف التشغيلية",
    description:
      "تسجيل ومتابعة المصاريف التشغيلية الأساسية لمساعدة الإدارة على فهم الالتزامات اليومية بشكل أوضح.",
  },
  {
    icon: BarChart3,
    title: "التقارير المالية والإدارية",
    description:
      "تقارير تساعد على قراءة المبيعات، الأرباح، المخزون، المصاريف، ومؤشرات الإدارة حسب الصلاحيات المتاحة.",
  },
  {
    icon: Wrench,
    title: "الصيانة والخدمات",
    description:
      "مسار منظم لأوامر الخدمة والصيانة، يساعد في متابعة الحالات وربط العمل التشغيلي بالفواتير عند الحاجة.",
  },
  {
    icon: ShieldCheck,
    title: "الموظفون والصلاحيات",
    description:
      "تحديد ما يستطيع كل موظف رؤيته أو تنفيذه حسب دوره داخل الشركة، مع مراعاة خصوصية البيانات.",
  },
  {
    icon: ClipboardCheck,
    title: "سجل النشاط والتدقيق",
    description:
      "متابعة الأنشطة المهمة داخل النظام لتوفير وضوح أكبر للإدارة عند مراجعة العمليات الحساسة.",
  },
  {
    icon: Settings,
    title: "إعدادات قابلة للتوسع",
    description:
      "تصميم مرن يسمح بتطوير المنصة تدريجيًا حسب احتياجات الشركات والفروع والسياسات الداخلية.",
  },
  {
    icon: FileText,
    title: "منصة عربية RTL",
    description:
      "واجهة عربية واضحة تدعم اتجاه الكتابة RTL، ومصممة لتناسب بيئة العمل المحلية وتجربة الموظفين.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" dir="rtl" className="relative overflow-hidden py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      <div className="absolute right-0 top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-10 left-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-4 block text-sm font-semibold tracking-wide text-primary">
            مميزات المنصة
          </span>

          <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            نظام واحد يساعدك على{" "}
            <span className="text-gradient-gold">تنظيم أعمالك</span>
          </h2>

          <p className="text-lg leading-8 text-muted-foreground">
            تجمع Za ERP بين الوحدات التشغيلية الأساسية والتقارير والصلاحيات في
            تجربة عربية واضحة، مع تطوير مستمر للوصول إلى منصة SaaS أكثر نضجًا
            واستقرارًا.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon

            return (
              <div
                key={feature.title}
                className="group relative rounded-2xl border border-border bg-card/80 p-6 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-secondary/50 hover:shadow-lg"
                style={{ animationDelay: `${index * 70}ms` }}
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-primary/15 bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <Icon className="h-6 w-6 text-primary" />
                </div>

                <h3 className="mb-3 text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>

                <p className="text-sm leading-7 text-muted-foreground">
                  {feature.description}
                </p>

                <div className="pointer-events-none absolute inset-0 rounded-2xl border border-primary/0 transition-all duration-300 group-hover:border-primary/25" />
              </div>
            )
          })}
        </div>

        {/* Platform Positioning */}
        <div className="mt-14 rounded-3xl border border-border bg-card/70 p-6 shadow-sm backdrop-blur md:p-8">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h3 className="mb-3 text-2xl font-bold text-foreground">
                منصة عملية للشركات الصغيرة والمتوسطة
              </h3>

              <p className="max-w-3xl text-sm leading-7 text-muted-foreground md:text-base">
                يتم تطوير Za ERP تدريجيًا مع التركيز على الاستقرار، وضوح
                الواجهة، حماية بيانات الشركات، وفصل الصلاحيات قبل التوسع التجاري
                الكامل.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <span className="rounded-full border border-border bg-secondary/60 px-4 py-2 text-sm text-muted-foreground">
                جاهزة للتجارب الأولية
              </span>
              <span className="rounded-full border border-border bg-secondary/60 px-4 py-2 text-sm text-muted-foreground">
                عربية RTL
              </span>
              <span className="rounded-full border border-border bg-secondary/60 px-4 py-2 text-sm text-muted-foreground">
                Day / Night Mode
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}