"use client"

import { BadgeCheck, Check, Crown, PlusCircle, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Starter Pilot",
    price: "$19",
    period: "/ شهرياً",
    description: "للمتاجر الصغيرة التي تريد تنظيم المبيعات والخزين والفواتير.",
    features: [
      "حتى 3 مستخدمين",
      "فرع واحد",
      "إدارة المبيعات",
      "إدارة المنتجات والمخزون",
      "الفواتير الأساسية",
      "إدارة العملاء",
      "تقارير أساسية",
      "دعم عبر واتساب / البريد",
    ],
    button: "اطلب تجربة Starter",
    highlighted: false,
  },
  {
    name: "Growth Pilot",
    price: "$39",
    period: "/ شهرياً",
    description: "للشركات الصغيرة التي تريد تنظيم المبيعات، الموظفين، الفروع، والتقارير.",
    features: [
      "حتى 7 مستخدمين",
      "حتى فرعين",
      "كل مميزات Starter",
      "صلاحيات الموظفين",
      "تقارير مبيعات ومخزون",
      "متابعة العملاء",
      "إعدادات الفواتير",
      "دعم أسرع خلال فترة Pilot",
    ],
    button: "ابدأ بالباقة الأنسب",
    highlighted: true,
  },
  {
    name: "Business Pilot",
    price: "$69",
    period: "/ شهرياً",
    description: "للشركات التي تحتاج رقابة أوضح على المبيعات، الخزين، الموظفين، والتقارير.",
    features: [
      "حتى 15 مستخدم",
      "حتى 3 فروع",
      "كل مميزات Growth",
      "تقارير أعمال أوسع",
      "سجل تدقيق Audit",
      "صلاحيات أكثر تقدماً",
      "متابعة الفروع",
      "دعم وتدريب أولي",
    ],
    button: "اطلب تجربة Business",
    highlighted: false,
  },
  {
    name: "Enterprise",
    price: "سعر مخصص",
    period: "",
    description: "للشركات التي تحتاج إعداد خاص، فروع أكثر، مستخدمين أكثر، أو تدريب مخصص.",
    features: [
      "عدد مستخدمين حسب الاتفاق",
      "عدد فروع حسب الاتفاق",
      "إعداد خاص للشركة",
      "تدريب فريق العمل",
      "متابعة مباشرة",
      "خطة تشغيل مخصصة",
      "دعم متقدم",
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

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/20" />
      <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6 animate-pulse-gold">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">Founder Pilot Offer</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            باقات مرنة لمرحلة{" "}
            <span className="text-gradient-gold">الإطلاق التجريبي</span>
          </h2>
          <p className="text-muted-foreground text-lg text-pretty leading-relaxed">
            ابدأ بتنظيم شركتك مع Zaitoon ERP بأسعار تأسيسية خاصة لأول الشركات المشتركة ضمن مرحلة Founder Pilot.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto items-stretch">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-6 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 flex flex-col min-w-0 ${
                plan.highlighted
                  ? "bg-card border-2 border-primary xl:scale-105 shadow-2xl shadow-primary/10"
                  : "bg-card border-gold-glow hover:border-primary/30"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Recommended Badge */}
              {plan.highlighted && (
                <div className="absolute -top-3 right-1/2 translate-x-1/2">
                  <span className="inline-flex items-center gap-1 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap">
                    <Crown className="w-3 h-3" />
                    الأكثر مناسبة
                  </span>
                </div>
              )}

              {/* Plan Info */}
              <div className="text-center mb-6 pt-3">
                <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed min-h-12">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="text-center mb-6 py-5 border-y border-border">
                <div className="flex items-baseline justify-center gap-1 flex-wrap">
                  <span className="text-3xl font-bold text-gradient-gold">{plan.price}</span>
                  {plan.period && (
                    <span className="text-muted-foreground text-sm">{plan.period}</span>
                  )}
                </div>
                <p className="text-muted-foreground text-xs mt-2">سعر تأسيسي خلال مرحلة Pilot</p>
              </div>

              {/* Features */}
              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-foreground text-sm leading-relaxed">{feature}</span>
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
        <div className="mt-12 max-w-5xl mx-auto rounded-2xl bg-card/70 border-gold-glow p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="md:max-w-sm">
              <div className="inline-flex items-center gap-2 text-primary font-semibold mb-3">
                <PlusCircle className="w-5 h-5" />
                <span>إضافات اختيارية</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                يمكنك توسيع الباقة حسب نمو شركتك بدون تغيير النظام أو البدء من جديد.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3 flex-1">
              {addOns.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-xl bg-secondary/60 border border-border px-4 py-3">
                  <BadgeCheck className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Notes */}
        <div className="max-w-4xl mx-auto mt-8 space-y-3 text-center">
          <p className="text-muted-foreground text-sm leading-relaxed">
            أسعار Founder Pilot متاحة لعدد محدود من الشركات الأولى، وقد تختلف الأسعار عند الإطلاق الرسمي.
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Zaitoon ERP مصمم للشركات والمتاجر المحلية التي تريد نظاماً عربياً واضحاً لإدارة المبيعات، المخزون، الفواتير، العملاء، الصلاحيات، التوصيل، التقارير، وسجل التدقيق بدون تعقيد الأنظمة العالمية.
          </p>
        </div>
      </div>
    </section>
  )
}
