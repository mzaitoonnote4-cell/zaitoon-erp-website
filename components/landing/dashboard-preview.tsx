"use client"

import {
  AlertTriangle,
  BarChart3,
  Building2,
  ClipboardList,
  Moon,
  Package,
  ReceiptText,
  ShieldCheck,
  ShoppingBag,
  Sun,
  Users,
  Wrench,
} from "lucide-react"

const stats = [
  {
    label: "مبيعات اليوم",
    value: "1,250,000",
    hint: "د.ع",
    icon: ShoppingBag,
  },
  {
    label: "الفواتير",
    value: "24",
    hint: "فاتورة",
    icon: ReceiptText,
  },
  {
    label: "تنبيهات المخزون",
    value: "8",
    hint: "منتجات تحتاج متابعة",
    icon: Package,
  },
  {
    label: "العملاء",
    value: "156",
    hint: "عميل نشط",
    icon: Users,
  },
]

const activityRows = [
  {
    title: "فاتورة مبيعات جديدة",
    detail: "تم إنشاء فاتورة من نقطة البيع POS",
    status: "مكتمل",
    icon: ReceiptText,
  },
  {
    title: "تنبيه مخزون",
    detail: "منتج وصل إلى حد التنبيه ويحتاج متابعة",
    status: "تنبيه",
    icon: AlertTriangle,
  },
  {
    title: "أمر خدمة",
    detail: "حالة صيانة بانتظار الفوترة",
    status: "متابعة",
    icon: Wrench,
  },
  {
    title: "تحديث صلاحيات",
    detail: "تم تعديل صلاحيات أحد المستخدمين",
    status: "تدقيق",
    icon: ShieldCheck,
  },
]

const modules = [
  "المبيعات",
  "المخزون",
  "الفواتير",
  "العملاء",
  "POS",
  "الصيانة",
  "التقارير",
  "الصلاحيات",
]

export function DashboardPreview() {
  return (
    <section
      id="dashboard"
      dir="rtl"
      className="relative overflow-hidden py-24"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-10 left-0 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-4 block text-sm font-semibold tracking-wide text-primary">
            واجهة المنصة
          </span>

          <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            لوحة عمل واضحة{" "}
            <span className="text-gradient-gold">للإدارة والموظفين</span>
          </h2>

          <p className="text-lg leading-8 text-muted-foreground">
            واجهة Za ERP مصممة لتجمع أهم المؤشرات والوحدات التشغيلية في تجربة
            عربية منظمة، مع مراعاة الصلاحيات والوضع النهاري والليلي.
          </p>
        </div>

        {/* Dashboard Preview */}
        <div className="mx-auto max-w-6xl">
          <div className="border-gold-glow rounded-3xl bg-card/85 p-4 shadow-2xl backdrop-blur md:p-8">
            {/* Dashboard Header */}
            <div className="mb-8 flex flex-col gap-4 border-b border-border pb-5 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
                  <Building2 className="h-4 w-4 text-primary" />
                  <span>شركة تجريبية / بيانات توضيحية</span>
                </div>

                <h3 className="text-xl font-semibold text-foreground">
                  لوحة التحكم الرئيسية
                </h3>

                <p className="mt-1 text-sm text-muted-foreground">
                  نظرة مختصرة على المبيعات، المخزون، الفواتير، والتنبيهات
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-2 text-xs text-muted-foreground">
                  <Sun className="h-4 w-4 text-primary" />
                  <span>Day</span>
                  <span>/</span>
                  <Moon className="h-4 w-4 text-primary" />
                  <span>Night</span>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-2 text-xs text-muted-foreground">
                  <ShieldCheck className="h-4 w-4 text-primary" />
                  <span>حسب الصلاحيات</span>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => {
                const Icon = stat.icon

                return (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-border bg-background/65 p-5 transition-colors hover:border-primary/30"
                  >
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <span className="rounded-full bg-secondary/70 px-3 py-1 text-xs text-muted-foreground">
                        اليوم
                      </span>
                    </div>

                    <p className="mb-1 text-2xl font-bold text-foreground">
                      {stat.value}
                    </p>
                    <p className="mb-2 text-xs text-primary">{stat.hint}</p>
                    <p className="text-sm text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                )
              })}
            </div>

            {/* Chart Placeholder & Recent Activity */}
            <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
              {/* Chart */}
              <div className="rounded-2xl border border-border bg-background/65 p-6">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">
                      قراءة المبيعات
                    </h4>
                    <p className="mt-1 text-xs text-muted-foreground">
                      عرض توضيحي لشكل مؤشرات الأداء داخل المنصة
                    </p>
                  </div>

                  <BarChart3 className="h-5 w-5 text-primary" />
                </div>

                <div className="flex h-48 items-end justify-between gap-2">
                  {[58, 44, 70, 52, 82, 64, 76, 48, 68, 88, 60, 80].map(
                    (height, index) => (
                      <div
                        key={index}
                        className="flex flex-1 flex-col items-center gap-1"
                      >
                        <div
                          className="w-full rounded-t-md bg-primary/60 transition-colors hover:bg-primary"
                          style={{ height: `${height}%` }}
                        />
                      </div>
                    ),
                  )}
                </div>

                <div className="mt-4 flex justify-between text-xs text-muted-foreground">
                  <span>بداية الفترة</span>
                  <span>منتصف الفترة</span>
                  <span>نهاية الفترة</span>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="rounded-2xl border border-border bg-background/65 p-6">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">
                      أحدث النشاطات
                    </h4>
                    <p className="mt-1 text-xs text-muted-foreground">
                      متابعة مختصرة لما يحدث داخل النظام
                    </p>
                  </div>

                  <ClipboardList className="h-5 w-5 text-primary" />
                </div>

                <div className="flex flex-col gap-3">
                  {activityRows.map((row) => {
                    const Icon = row.icon

                    return (
                      <div
                        key={row.title}
                        className="rounded-xl border border-border bg-secondary/35 p-4"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-start gap-3">
                            <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
                              <Icon className="h-4 w-4 text-primary" />
                            </div>

                            <div>
                              <p className="text-sm font-medium text-foreground">
                                {row.title}
                              </p>
                              <p className="mt-1 text-xs leading-6 text-muted-foreground">
                                {row.detail}
                              </p>
                            </div>
                          </div>

                          <span className="whitespace-nowrap rounded-full border border-border bg-background/70 px-3 py-1 text-xs text-muted-foreground">
                            {row.status}
                          </span>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Modules */}
            <div className="mt-6 rounded-2xl border border-border bg-background/65 p-6">
              <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <h4 className="text-sm font-semibold text-foreground">
                  وحدات المنصة في تجربة واحدة
                </h4>
                <p className="text-xs text-muted-foreground">
                  تظهر الوحدات حسب الخطة والصلاحيات
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
                {modules.map((module) => (
                  <div
                    key={module}
                    className="rounded-xl border border-border bg-secondary/45 px-3 py-3 text-center text-xs text-foreground"
                  >
                    {module}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="mx-auto mt-5 max-w-3xl text-center text-xs leading-6 text-muted-foreground">
            هذا العرض واجهة توضيحية تسويقية، وقد تختلف التفاصيل حسب الخطة
            والصلاحيات والوحدات المفعّلة لكل شركة.
          </p>
        </div>
      </div>
    </section>
  )
}