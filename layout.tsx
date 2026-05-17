"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  ArrowRight, 
  Sparkles, 
  Monitor, 
  Settings, 
  Users, 
  Zap,
  Bell,
  CheckCircle2,
  Loader2,
  ChevronLeft
} from "lucide-react"
import Link from "next/link"

const features = [
  { icon: Sparkles, text: "تجربة مخصصة لنشاطك التجاري" },
  { icon: Monitor, text: "استعراض كامل للنظام" },
  { icon: Settings, text: "شرح المميزات والإدارة" },
  { icon: Users, text: "متابعة مباشرة من فريقنا" },
  { icon: Zap, text: "إعداد سريع وآمن" },
]

export default function DemoPage() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) {
      setError("يرجى إدخال البريد الإلكتروني")
      return
    }
    
    setIsSubmitting(true)
    setError("")
    
    try {
      const response = await fetch("https://formspree.io/f/meendlvk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          _subject: "طلب إشعار إطلاق التجربة - زيتون ERP",
          type: "demo_notification_request",
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setEmail("")
      } else {
        setError("حدث خطأ، يرجى المحاولة مرة أخرى")
      }
    } catch {
      setError("حدث خطأ في الاتصال، يرجى المحاولة لاحقاً")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-primary/3 rounded-full blur-3xl animate-float" style={{ animationDelay: "-2s" }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary/4 rounded-full blur-3xl animate-float" style={{ animationDelay: "-4s" }} />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.03)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

      {/* Header */}
      <header className="relative z-10 container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center group-hover:scale-105 transition-transform">
              <span className="text-primary-foreground font-bold text-xl">Z</span>
            </div>
            <span className="text-gradient-gold text-2xl font-bold">زيتون ERP</span>
          </Link>
          
          <Link 
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-muted-foreground hover:text-primary hover:bg-accent transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            العودة للرئيسية
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-12 lg:py-20">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 animate-pulse-gold">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-primary font-medium text-sm">قريباً</span>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-6 text-balance">
            <span className="text-gradient-gold">ميزة طلب التجربة</span>
            <br />
            <span className="text-foreground">قيد التطوير</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg lg:text-xl text-muted-foreground text-center max-w-2xl mx-auto mb-16 leading-relaxed text-balance">
            نعمل حالياً على تطوير تجربة احترافية مخصصة لعملائنا لتقديم أفضل تجربة ممكنة لمنصة زيتون ERP.
          </p>

          {/* Illustration Section */}
          <div className="relative mb-16">
            <div className="flex justify-center">
              {/* Laptop Mockup */}
              <div className="relative">
                {/* Laptop Screen */}
                <div className="w-80 lg:w-96 h-52 lg:h-64 bg-card rounded-t-xl border border-border overflow-hidden relative">
                  {/* Screen Content */}
                  <div className="absolute inset-2 bg-background rounded-lg overflow-hidden">
                    {/* Progress Header */}
                    <div className="h-8 bg-muted/50 border-b border-border flex items-center px-3 gap-2">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                      </div>
                      <div className="flex-1 mx-8">
                        <div className="h-4 bg-muted rounded-full max-w-32 mx-auto" />
                      </div>
                    </div>
                    
                    {/* Construction Animation */}
                    <div className="flex flex-col items-center justify-center h-full pb-8">
                      {/* Animated Gears */}
                      <div className="relative mb-4">
                        <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 border-2 border-primary/30 border-t-primary rounded-full animate-spin" style={{ animationDirection: "reverse", animationDuration: "0.5s" }} />
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="w-48 h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-l from-primary to-primary/50 rounded-full animate-shimmer" style={{ width: "65%" }} />
                      </div>
                      
                      <p className="text-xs text-muted-foreground mt-3">جاري التطوير...</p>
                    </div>
                  </div>
                </div>
                
                {/* Laptop Base */}
                <div className="w-full h-4 bg-gradient-to-b from-card to-muted rounded-b-lg border-x border-b border-border" />
                <div className="w-32 lg:w-40 h-2 bg-muted mx-auto rounded-b-lg" />

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 lg:-right-8 p-3 bg-card rounded-xl border border-border shadow-lg animate-float">
                  <Settings className="w-5 h-5 text-primary animate-spin" style={{ animationDuration: "4s" }} />
                </div>
                
                <div className="absolute -bottom-2 -left-4 lg:-left-8 p-3 bg-card rounded-xl border border-border shadow-lg animate-float" style={{ animationDelay: "-1s" }}>
                  <Zap className="w-5 h-5 text-primary" />
                </div>

                <div className="absolute top-1/2 -right-8 lg:-right-16 p-2 bg-primary/10 rounded-lg border border-primary/20 animate-float" style={{ animationDelay: "-2s" }}>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    <span className="text-xs text-primary font-medium">65%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="mb-16">
            <h2 className="text-2xl lg:text-3xl font-bold text-center mb-8 text-foreground">
              ماذا ستحصل عليه؟
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-card/50 rounded-xl border border-border hover:border-primary/30 transition-all duration-300 hover:bg-card group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="max-w-md mx-auto">
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border p-8 relative overflow-hidden">
              {/* Decorative gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />
              
              <div className="relative z-10">
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <Bell className="w-7 h-7 text-primary" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-center text-foreground mb-2">
                  أخبرني عند الإطلاق
                </h3>
                <p className="text-sm text-muted-foreground text-center mb-6">
                  سجّل بريدك الإلكتروني لنُعلمك فور إطلاق الميزة
                </p>

                {isSubmitted ? (
                  <div className="flex flex-col items-center gap-3 py-4 animate-in fade-in zoom-in duration-300">
                    <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-green-500" />
                    </div>
                    <p className="text-foreground font-medium text-center">
                      تم التسجيل بنجاح!
                    </p>
                    <p className="text-sm text-muted-foreground text-center">
                      سنُرسل لك إشعاراً فور إطلاق الميزة
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input
                        type="email"
                        placeholder="أدخل بريدك الإلكتروني"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-background border-border focus:border-primary text-center"
                        dir="ltr"
                      />
                      {error && (
                        <p className="text-red-500 text-xs mt-2 text-center">{error}</p>
                      )}
                    </div>
                    
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          جاري التسجيل...
                        </>
                      ) : (
                        <>
                          <Bell className="w-4 h-4" />
                          أخبرني عند الإطلاق
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Back to Home Link */}
          <div className="text-center mt-12">
            <Link href="/#contact">
              <Button variant="ghost" className="gap-2 text-muted-foreground hover:text-primary group">
                <span>أو تواصل معنا مباشرة</span>
                <ArrowRight className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 container mx-auto px-4 py-8 text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} زيتون ERP. جميع الحقوق محفوظة.
        </p>
      </footer>
    </main>
  )
}
