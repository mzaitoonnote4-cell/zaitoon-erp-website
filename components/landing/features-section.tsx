"use client"

import { 
  ShoppingCart, 
  Package, 
  FileText, 
  BarChart3, 
  Users, 
  Settings,
  Wallet,
  TrendingUp
} from "lucide-react"

const features = [
  {
    icon: ShoppingCart,
    title: "إدارة المبيعات",
    description: "تتبع جميع عمليات البيع والشراء بسهولة مع تقارير مفصلة وتحليلات دقيقة",
  },
  {
    icon: Package,
    title: "إدارة المخزون",
    description: "راقب مستويات المخزون وتنبيهات النفاد التلقائية مع تتبع حركة المنتجات",
  },
  {
    icon: FileText,
    title: "الفواتير الإلكترونية",
    description: "إنشاء وإرسال فواتير احترافية متوافقة مع الضريبة بنقرة واحدة",
  },
  {
    icon: BarChart3,
    title: "التقارير والتحليلات",
    description: "لوحات معلومات تفاعلية وتقارير مفصلة لاتخاذ قرارات مدروسة",
  },
  {
    icon: Users,
    title: "إدارة العملاء",
    description: "قاعدة بيانات متكاملة للعملاء مع سجل المعاملات والتواصل",
  },
  {
    icon: Wallet,
    title: "إدارة المالية",
    description: "تتبع الإيرادات والمصروفات والتدفق النقدي بدقة عالية",
  },
  {
    icon: Settings,
    title: "إعدادات مرنة",
    description: "تخصيص كامل للنظام ليتناسب مع احتياجات عملك الفريدة",
  },
  {
    icon: TrendingUp,
    title: "نمو الأعمال",
    description: "أدوات ذكية لتحليل الأداء وتحديد فرص النمو والتطوير",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-sm font-semibold tracking-wide mb-4 block">
            المميزات
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            كل ما تحتاجه{" "}
            <span className="text-gradient-gold">لإدارة عملك</span>
          </h2>
          <p className="text-muted-foreground text-lg text-pretty">
            مجموعة شاملة من الأدوات المتكاملة لإدارة جميع جوانب عملك بكفاءة واحترافية
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative p-6 rounded-2xl bg-card border-gold-glow hover:bg-secondary/50 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              
              {/* Content */}
              <h3 className="text-lg font-semibold mb-2 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl border border-primary/0 group-hover:border-primary/30 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
