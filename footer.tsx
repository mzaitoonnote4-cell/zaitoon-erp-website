"use client"

import { ArrowLeft, Check, FileSpreadsheet, LockKeyhole, PackageSearch, PieChart, ReceiptText } from "lucide-react"
import { Button } from "@/components/ui/button"

const problems = [
  { icon: FileSpreadsheet, title: "العمل مشتت بين الدفاتر و Excel", description: "المبيعات والفواتير والمخزون تكون موزعة بين أكثر من مكان، مما يصعّب المتابعة اليومية." },
  { icon: PackageSearch, title: "صعوبة معرفة المخزون الحقيقي", description: "من غير نظام واضح، تصبح كميات المنتجات والتنبيهات والمواد الناقصة غير دقيقة." },
  { icon: LockKeyhole, title: "صلاحيات الموظفين غير منظمة", description: "كل موظف يجب أن يرى فقط ما يناسب مسؤوليته، بدون كشف بيانات حساسة أو أرباح." },
  { icon: PieChart, title: "التقارير لا تظهر الصورة الكاملة", description: "صاحب العمل يحتاج ملخص واضح للمبيعات، الفواتير، العملاء، المخزون، ونشاط الموظفين." },
]

const solutionPoints = [
  "منصة واحدة للمبيعات، الفواتير، المخزون، العملاء، التوصيل والتقارير.",
  "واجهة عربية RTL سهلة الفهم للموظفين وأصحاب الأعمال.",
  "باقات Founder Pilot بأسعار واضحة للشركات الأولى.",
  "مصمم للسوق المحلي والشركات الصغيرة والمتوسطة، مع قابلية للتوسع لاحقاً.",
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-primary text-sm font-semibold tracking-wide mb-4 block">لماذا Zaitoon ERP؟</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            من الفوضى اليومية إلى نظام واضح لإدارة <span className="text-gradient-gold">الشركة</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed text-pretty">
            الأنظمة العالمية قوية وواسعة، لكن كثيراً من الشركات المحلية تحتاج حلاً أوضح، أسرع في التشغيل، وأقرب لطبيعة العمل اليومي.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 max-w-7xl mx-auto items-stretch">
          <div className="grid sm:grid-cols-2 gap-5">
            {problems.map((problem, index) => (
              <div
                key={problem.title}
                className="bg-card rounded-2xl p-6 border-gold-glow hover:border-primary/30 transition-all animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <problem.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{problem.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{problem.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-card/80 rounded-3xl p-6 md:p-8 border border-primary/30 shadow-2xl shadow-primary/5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-2 mb-6">
                <ReceiptText className="w-4 h-4 text-primary" />
                <span className="text-primary text-sm font-medium">الحل العملي</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Zaitoon ERP يجمع العمليات اليومية الأساسية في منصة واحدة.
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-7">
                الهدف ليس تعقيد العمل، بل جعل صاحب الشركة يرى المبيعات، المخزون، الفواتير، الموظفين والتقارير بصورة أوضح، مع تجربة عربية مصممة للاستخدام اليومي.
              </p>

              <div className="space-y-4">
                {solutionPoints.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-foreground text-sm leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button asChild className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto">
              <a href="#pricing">
                مشاهدة الباقات
                <ArrowLeft className="mr-2 w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
