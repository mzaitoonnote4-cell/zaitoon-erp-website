"use client"

import { useState } from "react"
import { Send, MapPin, Phone, Mail, Clock, CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const FORMSPREE_ENDPOINT = "https://formspree.io/f/meendlvk"

const contactInfo = [
  { icon: MapPin, title: "الموقع", content: "العراق" },
  { icon: Phone, title: "واتساب", content: "+964 780 850 0591", href: "https://wa.me/9647808500591" },
  { icon: Mail, title: "البريد الإلكتروني", content: "info@zaitoonerp.com", href: "mailto:info@zaitoonerp.com" },
  { icon: Clock, title: "الدعم خلال Pilot", content: "تواصل مباشر لأوائل العملاء خلال ساعات العمل" },
]

type FormStatus = "idle" | "loading" | "success" | "error"

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    activity: "",
    users: "",
    message: "",
  })
  const [status, setStatus] = useState<FormStatus>("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const isFormValid = formState.name.trim() && formState.phone.trim() && formState.message.trim()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!isFormValid) {
      setStatus("error")
      setErrorMessage("يرجى ملء الاسم، رقم الهاتف، والرسالة")
      return
    }

    setStatus("loading")
    setErrorMessage("")

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formState.name,
          company: formState.company,
          email: formState.email,
          phone: formState.phone,
          activity: formState.activity,
          expected_users: formState.users,
          message: formState.message,
          _subject: `طلب تجربة جديد من ${formState.name} - Zaitoon ERP`,
        }),
      })

      if (response.ok) {
        setStatus("success")
        setFormState({ name: "", company: "", email: "", phone: "", activity: "", users: "", message: "" })
      } else {
        const data = await response.json()
        throw new Error(data.error || "حدث خطأ أثناء الإرسال")
      }
    } catch (error) {
      setStatus("error")
      setErrorMessage(error instanceof Error ? error.message : "حدث خطأ أثناء الإرسال، يرجى المحاولة مرة أخرى")
    }
  }

  const resetForm = () => {
    setStatus("idle")
    setErrorMessage("")
  }

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-sm font-semibold tracking-wide mb-4 block">تواصل معنا</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            هل تريد تجربة <span className="text-gradient-gold">Zaitoon ERP</span> لشركتك؟
          </h2>
          <p className="text-muted-foreground text-lg text-pretty leading-relaxed">
            ارسل معلومات نشاطك، وسنساعدك على اختيار الباقة المناسبة ضمن مرحلة Founder Pilot.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 max-w-6xl mx-auto">
          <div className="bg-card rounded-2xl p-6 md:p-8 border-gold-glow">
            <h3 className="text-xl font-bold text-foreground mb-6">طلب تجربة المنصة</h3>

            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-12 text-center animate-in fade-in-0 zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-2">تم الإرسال بنجاح</h4>
                <p className="text-muted-foreground mb-6">وصلنا طلبك، وسنتواصل معك لمناقشة التجربة المناسبة لشركتك.</p>
                <Button onClick={resetForm} variant="outline" className="border-primary/50 text-primary hover:bg-primary/10">
                  إرسال طلب آخر
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <input type="text" name="_gotcha" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

                {status === "error" && errorMessage && (
                  <div className="flex items-center gap-3 p-4 rounded-lg bg-red-500/10 border border-red-500/30 animate-in fade-in-0 slide-in-from-top-2 duration-300">
                    <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <p className="text-red-400 text-sm">{errorMessage}</p>
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium text-foreground mb-2 block">الاسم <span className="text-red-500">*</span></label>
                    <Input id="name" name="name" placeholder="اسمك الكامل" value={formState.name} onChange={(e) => setFormState({ ...formState, name: e.target.value })} className="bg-secondary/50 border-border focus:border-primary transition-colors" required disabled={status === "loading"} />
                  </div>
                  <div>
                    <label htmlFor="company" className="text-sm font-medium text-foreground mb-2 block">اسم الشركة</label>
                    <Input id="company" name="company" placeholder="مثال: شركة أو متجر" value={formState.company} onChange={(e) => setFormState({ ...formState, company: e.target.value })} className="bg-secondary/50 border-border focus:border-primary transition-colors" disabled={status === "loading"} />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="text-sm font-medium text-foreground mb-2 block">رقم الهاتف / واتساب <span className="text-red-500">*</span></label>
                    <Input id="phone" name="phone" type="tel" placeholder="+964 7XX XXX XXXX" value={formState.phone} onChange={(e) => setFormState({ ...formState, phone: e.target.value })} className="bg-secondary/50 border-border focus:border-primary transition-colors" required disabled={status === "loading"} dir="ltr" />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-medium text-foreground mb-2 block">البريد الإلكتروني</label>
                    <Input id="email" name="email" type="email" placeholder="example@email.com" value={formState.email} onChange={(e) => setFormState({ ...formState, email: e.target.value })} className="bg-secondary/50 border-border focus:border-primary transition-colors" disabled={status === "loading"} dir="ltr" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="activity" className="text-sm font-medium text-foreground mb-2 block">نوع النشاط</label>
                    <Input id="activity" name="activity" placeholder="تجارة، ملابس، مخازن، توزيع..." value={formState.activity} onChange={(e) => setFormState({ ...formState, activity: e.target.value })} className="bg-secondary/50 border-border focus:border-primary transition-colors" disabled={status === "loading"} />
                  </div>
                  <div>
                    <label htmlFor="users" className="text-sm font-medium text-foreground mb-2 block">عدد المستخدمين المتوقع</label>
                    <Input id="users" name="users" placeholder="مثال: 3 - 7" value={formState.users} onChange={(e) => setFormState({ ...formState, users: e.target.value })} className="bg-secondary/50 border-border focus:border-primary transition-colors" disabled={status === "loading"} />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="text-sm font-medium text-foreground mb-2 block">الرسالة <span className="text-red-500">*</span></label>
                  <Textarea id="message" name="message" placeholder="اكتب احتياج شركتك أو الباقة التي ترغب بتجربتها..." rows={5} value={formState.message} onChange={(e) => setFormState({ ...formState, message: e.target.value })} className="bg-secondary/50 border-border focus:border-primary resize-none transition-colors" required disabled={status === "loading"} />
                </div>

                <Button type="submit" disabled={status === "loading" || !isFormValid} className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed transition-all">
                  {status === "loading" ? <><Loader2 className="ml-2 w-4 h-4 animate-spin" /> جاري الإرسال...</> : <><Send className="ml-2 w-4 h-4" /> تواصل معنا لبدء التجربة</>}
                </Button>
              </form>
            )}
          </div>

          <div className="flex flex-col gap-6">
            <div className="bg-card rounded-2xl p-6 border-gold-glow">
              <h3 className="text-xl font-bold text-foreground mb-6">معلومات التواصل</h3>
              <div className="flex flex-col gap-5">
                {contactInfo.map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-foreground font-medium text-sm">{item.title}</p>
                      {item.href ? (
                        <a href={item.href} target={item.href.startsWith("https") ? "_blank" : undefined} rel={item.href.startsWith("https") ? "noopener noreferrer" : undefined} className="text-muted-foreground text-sm hover:text-primary transition-colors" dir="ltr">
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-muted-foreground text-sm">{item.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary/10 rounded-2xl p-6 border border-primary/30">
              <h4 className="text-lg font-bold text-foreground mb-2">Founder Pilot محدود</h4>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                الأسعار التأسيسية مخصصة لأول الشركات التي ترغب بتجربة النظام وتقديم ملاحظات عملية لتحسينه قبل الإطلاق الرسمي.
              </p>
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 w-full animate-pulse-gold">
                <a href="https://wa.me/9647808500591" target="_blank" rel="noopener noreferrer">تواصل عبر واتساب</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
