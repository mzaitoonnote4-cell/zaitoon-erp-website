"use client"

import { 
  BarChart3,
  ClipboardCheck,
  FileText,
  Package,
  Settings,
  ShieldCheck,
  ShoppingCart,
  Truck,
  Users,
} from "lucide-react"

const modules = [
  { icon: ShoppingCart, title: "المبيعات والفواتير", description: "إنشاء فواتير ومتابعة حالات الدفع والمبالغ المتبقية بطريقة واضحة لصاحب العمل." },
  { icon: Package, title: "المنتجات والمخزون", description: "متابعة الكميات، حركة المنتجات، التنبيهات، والمخزون المتاح بطريقة منظمة." },
  { icon: Users, title: "العملاء والمتابعة", description: "إدارة بيانات العملاء وربطها بالمبيعات والفواتير والمتابعة اليومية." },
  { icon: Truck, title: "التوصيل والطلبات", description: "تنظيم معلومات التوصيل والطلبات والبيانات الآمنة التي يحتاجها فريق التسليم." },
  { icon: ShieldCheck, title: "الصلاحيات والموظفين", description: "كل موظف يرى ما يناسب دوره ومسؤوليته، مع حماية البيانات الحساسة." },
  { icon: BarChart3, title: "التقارير والرؤى", description: "ملخصات تساعدك على فهم أداء المبيعات والمخزون والعملاء واتخاذ قرارات أفضل." },
  { icon: ClipboardCheck, title: "سجل التدقيق Audit", description: "متابعة النشاطات المهمة داخل النظام لتعزيز الرقابة والشفافية التشغيلية." },
  { icon: Settings, title: "الإعدادات وهوية الفاتورة", description: "تخصيص بيانات الشركة، إعدادات الفواتير، والهوية البصرية المناسبة للعمل." },
  { icon: FileText, title: "قابلية التطوير", description: "بنية قابلة للتوسع مستقبلاً لإضافة ميزات أعمق حسب احتياج الشركات." },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-sm font-semibold tracking-wide mb-4 block">مكونات المنصة</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            كل قسم واضح للزبون <span className="text-gradient-gold">بدون تعقيد</span>
          </h2>
          <p className="text-muted-foreground text-lg text-pretty leading-relaxed">
            تم تنظيم المميزات كأقسام ERP مفهومة، حتى يعرف صاحب العمل بسرعة ما الذي سيستفيد منه عند استخدام المنصة.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {modules.map((module, index) => (
            <div
              key={module.title}
              className="group relative p-6 rounded-2xl bg-card border-gold-glow hover:bg-secondary/50 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <module.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">{module.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{module.description}</p>
              <div className="absolute inset-0 rounded-2xl border border-primary/0 group-hover:border-primary/30 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
