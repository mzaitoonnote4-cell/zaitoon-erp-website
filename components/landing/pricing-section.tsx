"use client"

import { BadgeCheck, Check, Crown, Info, PlusCircle, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Starter Pilot",
    price: "$19",
    period: "/ شهرياً",
    description: "للمتاجر الصغيرة التي تريد بداية منظمة للمبيعات، المخزون، الفواتير، والعملاء.",
    features: [
      "حتى 3 مستخدمين",
      "فرع واحد",
      "إدارة المبيعات والفواتير",
      "إدارة المنتجات والمخزون",
      "إدارة العملاء",
      "تقارير أساسية",
      "إعدادات فواتير أولية",
      "دعم عبر واتساب / البريد",
    ],
    button: "اطلب تجربة Starter",
    highlighted: false,
  },
  {
    name: "Growth Pilot",
    price: "$39",
    period: "/ شهرياً",
    description: "الباقة الأنسب للشركات الصغيرة التي تحتاج مبيعات، مخزون، موظفين، وتقارير أوضح.",
    features: [
      "حتى 7 مستخدمين",
      "حتى فرعين",
      "كل مميزات Starter",
      "صلاحيات الموظفين",
      "تقارير مبيعات ومخزون",
      "متابعة العملاء",
      "دعم نقاط البيع POS",
      "دعم أسرع خلال فترة Pilot",
    ],
    button: "ابدأ بالباقة الأنسب",
    highlighted: true,
  },
  {
    name: "Business Pilot",
    price: "$69",
    period: "/ شهرياً",
    description: "للشركات التي تحتاج رقابة أوسع على المبيعات، المخزون، الفروع، الموظفين، والتقارير.",
    features: [
      "حتى 15 مستخدم",
      "حتى 3 فروع",
      "كل مميزات Growth",
      "تقارير مالية وإدارية أوسع",
      "سجل نشاط وتدقيق Audit",
      "صلاحيات أكثر تقدماً",
      "متابعة الفروع",
      "دعم وتدريب أولي",
    ],
    button: "اطلب تجربة Business",
    highlighted: false,
  },
  {
    name: "Enterprise",
    price: "من $120+",
    period: "/ شهرياً",
    description: "للشركات التي تحتاج إعداد خاص، فروع أكثر، مستخدمين أكثر، أو تدريب وتشغيل مخصص.",
    features: [
      "عدد مستخدمين حسب الاتفاق",
      "عدد فروع حسب الاتفاق",
      "إعداد خاص للشركة",
      "تدريب فريق العمل",
      "متابعة مباشرة",
      "خطة تشغيل مخصصة",
      "دعم متقدم",
      "قابلية توسعة حسب الحاجة",
    ],
    button: "تواصل معنا للتسعير",
    highlighted: false,
  },
]

const addOns = [
  "مستخدم إضافي: $4 / شهر",
  "فرع إضافي: $10 / شهر",
  "إعداد وتدريب Pilot: $50–$150 مرة واحدة",
  "الدفع السنوي: ادفع 10 أشهر واحصل على 12 شهر",
]

const futurePrices = [
  "Starter: $29",
  "Growth: $49",
  "Business: $79",
  "Business Plus: $119",
  "Enterprise: من $199",
]

export function PricingSection() {
  return (
    <section id="pricing" dir="rtl" className="relative overflow-hidden py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/20" />
      <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-1/4 left-0 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Founder Pilot Offer
            </span>
          </div>

          <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            باقات تأسيسية لمرحلة{" "}
            <span className="text-gradient-gold">الإطلاق التجريبي</span>
          </h2>

          <p className="text-lg leading-8 text-muted-foreground">
            ابدأ بتنظيم شركتك مع Za ERP بأسعار Pilot محدودة للشركات الأولى،
            مع إمكانية التوسع لاحقاً حسب عدد المستخدمين والفروع واحتياجات التشغيل.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-stretch gap-6 md:grid-cols-2 xl:grid-cols-4">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative flex min-w-0 flex-col rounded-2xl p-6 transition-all duration-300 ${
                plan.highlighted
                  ? "border-2 border-primary bg-card shadow-2xl shadow-primary/10 xl:scale-105"
                  : "border-gold-glow bg-card hover:border-primary/30"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Recommended Badge */}
              {plan.highlighted && (
                <div className="absolute -top-3 right-1/2 translate-x-1/2">
                  <span className="inline-flex items-center gap-1 whitespace-nowrap rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                    <Crown className="h-3 w-3" />
                    الأكثر مناسبة
                  </span>
                </div>
              )}

              {/* Plan Info */}
              <div className="mb-6 pt-3 text-center">
                <h3 className="mb-2 text-xl font-bold text-foreground">
                  {plan.name}
                </h3>
                <p className="min-h-[4.5rem] text-sm leading-7 text-muted-foreground">
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-6 border-y border-border py-5 text-center">
                <div className="flex flex-wrap items-baseline justify-center gap-1">
                  <span className="text-gradient-gold text-3xl font-bold">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-sm text-muted-foreground">
                      {plan.period}
                    </span>
                  )}
                </div>
                <p className="mt-2 text-xs text-muted-foreground">
                  سعر تأسيسي خلال مرحلة Pilot
                </p>
              </div>

              {/* Features */}
              <ul className="mb-8 flex flex-1 flex-col gap-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/20">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-sm leading-7 text-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                asChild
                className={`w-full ${
                  plan.highlighted
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-secondary text-foreground hover:bg-secondary/80"
                }`}
              >
                <a href="#contact">{plan.button}</a>
              </Button>
            </div>
          ))}
        </div>

        {/* Add-ons */}
        <div className="border-gold-glow mx-auto mt-12 max-w-5xl rounded-2xl bg-card/70 p-6 md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="md:max-w-sm">
              <div className="mb-3 inline-flex items-center gap-2 font-semibold text-primary">
                <PlusCircle className="h-5 w-5" />
                <span>إضافات اختيارية</span>
              </div>
              <p className="text-sm leading-7 text-muted-foreground">
                يمكنك توسيع الباقة حسب نمو شركتك بدون تغيير النظام أو البدء من
                جديد.
              </p>
            </div>

            <div className="grid flex-1 gap-3 sm:grid-cols-2">
              {addOns.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-border bg-secondary/60 px-4 py-3"
                >
                  <BadgeCheck className="h-4 w-4 flex-shrink-0 text-primary" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Future Pricing Note */}
        <div className="mx-auto mt-8 max-w-5xl rounded-2xl border border-border bg-card/60 p-6">
          <div className="mb-4 flex items-center justify-center gap-2 text-primary md:justify-start">
            <Info className="h-5 w-5" />
            <h3 className="font-semibold">ملاحظة حول الأسعار المستقبلية</h3>
          </div>

          <p className="mb-4 text-center text-sm leading-7 text-muted-foreground md:text-right">
            أسعار Founder Pilot متاحة لفترة محدودة خلال مرحلة الإطلاق الأولي.
            بعد الإطلاق الرسمي قد تتحول الأسعار إلى خطط رسمية مختلفة حسب مستوى
            النضج والدعم والخصائص المتاحة.
          </p>

          <div className="flex flex-wrap justify-center gap-3 md:justify-start">
            {futurePrices.map((item) => (
              <span
                key={item}
                className="rounded-full border border-border bg-secondary/60 px-4 py-2 text-sm text-muted-foreground"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Notes */}
        <div className="mx-auto mt-8 max-w-4xl space-y-3 text-center">
          <p className="text-sm leading-7 text-muted-foreground">
            Za ERP مصممة للشركات والمتاجر المحلية التي تريد نظاماً عربياً واضحاً
            لإدارة المبيعات، المخزون، الفواتير، العملاء، الصلاحيات، التقارير،
            وسجل النشاط بدون تعقيد غير ضروري.
          </p>
          <p className="text-sm leading-7 text-muted-foreground">
            بعض الخصائص المتقدمة يتم تطويرها تدريجياً، لذلك يتم توضيح الخطة
            المناسبة لكل شركة أثناء مرحلة التجربة والإعداد.
          </p>
        </div>
      </div>
    </section>
  )
}