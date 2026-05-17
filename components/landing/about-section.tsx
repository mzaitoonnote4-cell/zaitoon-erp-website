"use client"

import { Check, Star } from "lucide-react"

const benefits = [
  "واجهة سهلة الاستخدام باللغة العربية",
  "تقارير وتحليلات في الوقت الفعلي",
  "دعم الفواتير الإلكترونية والضريبية",
  "تكامل مع أنظمة الدفع المختلفة",
  "نسخ احتياطي تلقائي للبيانات",
  "دعم فني متخصص على مدار الساعة",
]

const testimonials = [
  {
    name: "أحمد الراشد",
    role: "مدير شركة الأفق التجارية",
    content: "زيتون ERP غيّر طريقة إدارتنا للمخزون والمبيعات. النظام سهل وفعّال جداً.",
    rating: 5,
  },
  {
    name: "سارة المحمد",
    role: "صاحبة متجر إلكتروني",
    content: "أفضل نظام ERP تعاملت معه. الدعم الفني ممتاز والواجهة العربية رائعة.",
    rating: 5,
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-primary text-sm font-semibold tracking-wide mb-4 block">
              عن المنصة
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              لماذا{" "}
              <span className="text-gradient-gold">زيتون ERP</span>؟
            </h2>
            <p className="text-muted-foreground text-lg mb-8 text-pretty leading-relaxed">
              زيتون ERP هو نظام إدارة موارد المؤسسات المصمم خصيصاً للسوق العربي، 
              يجمع بين القوة والبساطة لمساعدتك على إدارة عملك بكفاءة عالية. 
              من المبيعات إلى المخزون والفواتير، كل شيء في مكان واحد.
            </p>

            {/* Benefits List */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-foreground text-sm">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8 border-t border-border">
              <div>
                <p className="text-3xl font-bold text-gradient-gold">+500</p>
                <p className="text-muted-foreground text-sm">شركة تستخدم المنصة</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gradient-gold">99.9%</p>
                <p className="text-muted-foreground text-sm">وقت التشغيل</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gradient-gold">24/7</p>
                <p className="text-muted-foreground text-sm">دعم فني</p>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="flex flex-col gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="bg-card rounded-2xl p-6 border-gold-glow animate-in fade-in slide-in-from-left-4"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                
                {/* Content */}
                <p className="text-foreground mb-4 leading-relaxed">{`"${testimonial.content}"`}</p>
                
                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary font-semibold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-foreground font-medium text-sm">{testimonial.name}</p>
                    <p className="text-muted-foreground text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
