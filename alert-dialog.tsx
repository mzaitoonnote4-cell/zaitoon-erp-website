"use client"

import { Play, FileVideo, BarChart3, Package, Calculator, ClipboardList, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const features = [
  {
    icon: ClipboardList,
    text: "إدارة المبيعات والفواتير",
  },
  {
    icon: Package,
    text: "متابعة المخزون والتنبيهات",
  },
  {
    icon: Calculator,
    text: "حساب الأرباح الحقيقية",
  },
  {
    icon: BarChart3,
    text: "تقارير فورية لأصحاب الأعمال",
  },
  {
    icon: Smartphone,
    text: "تطبيق الموبايل ضمن الخطة المستقبلية",
  },
]

export function VideoSection() {
  return (
    <section id="video" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <FileVideo className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">فيديو توضيحي</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            شاهد كيف يعمل{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-primary via-yellow-500 to-primary">
              زيتون ERP
            </span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-pretty">
            شاهد فكرة عمل المنصة قريباً من خلال فيديو مبسط يشرح إدارة المبيعات، المخزون، الفواتير، الموظفين، والتقارير من مكان واحد.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Video Container */}
          <div className="order-1 lg:order-2">
            <div className="relative group">
              {/* Outer Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 via-yellow-500/50 to-primary/50 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
              
              {/* Video Frame */}
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-card/80 backdrop-blur-xl border border-primary/30 shadow-2xl">
                {/* Glass Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
                
                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="w-full h-full" style={{
                    backgroundImage: `linear-gradient(rgba(212, 175, 55, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212, 175, 55, 0.3) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                  }} />
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
                  {/* Play Button */}
                  <button className="relative group/play">
                    {/* Pulse Ring */}
                    <div className="absolute inset-0 w-24 h-24 rounded-full bg-primary/20 animate-ping" />
                    <div className="absolute inset-0 w-24 h-24 rounded-full bg-primary/30 animate-pulse" />
                    
                    {/* Button */}
                    <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-primary to-yellow-600 flex items-center justify-center shadow-lg shadow-primary/30 group-hover/play:scale-110 transition-transform duration-300">
                      <Play className="w-10 h-10 text-primary-foreground fill-current mr-[-4px]" />
                    </div>
                  </button>

                  {/* Coming Soon Text */}
                  <div className="text-center">
                    <p className="text-xl md:text-2xl font-bold text-foreground mb-2">
                      الفيديو التوضيحي قريباً
                    </p>
                    <p className="text-muted-foreground text-sm">
                      نعمل على إعداد فيديو قصير يشرح رحلة الاستخدام بطريقة واضحة
                    </p>
                  </div>
                </div>

                {/* Corner Decorations */}
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary/50 rounded-tr-lg" />
                <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-primary/50 rounded-tl-lg" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-primary/50 rounded-br-lg" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-primary/50 rounded-bl-lg" />
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-yellow-500/10 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
            </div>
          </div>

          {/* Features List */}
          <div className="order-2 lg:order-1 space-y-8">
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 hover:bg-card/80 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-foreground font-medium text-lg">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Link href="/demo" className="block">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-gradient-to-l from-primary to-yellow-600 hover:from-primary/90 hover:to-yellow-600/90 text-primary-foreground font-bold text-lg px-8 py-6 rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300"
              >
                اطلب تجربة النظام
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
