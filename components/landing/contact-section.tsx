"use client"

import { useState } from "react"
import {
  AlertCircle,
  CheckCircle,
  Clock,
  Loader2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const FORMSPREE_ENDPOINT = "https://formspree.io/f/meendlvk"

const contactInfo = [
  {
    icon: MapPin,
    title: "الموقع",
    content: "العراق",
  },
  {
    icon: Phone,
    title: "الهاتف / واتساب",
    content: "+964 780 850 0591",
    href: "https://wa.me/9647808500591",
  },
  {
    icon: Mail,
    title: "البريد الإلكتروني",
    content: "info@zaitoonerp.com",
    href: "mailto:info@zaitoonerp.com",
  },
  {
    icon: Clock,
    title: "أوقات التواصل",
    content: "السبت - الخميس: 9 صباحاً - 6 مساءً",
  },
]

const requestTypes = [
  "طلب تجربة للمنصة",
  "استفسار عن الأسعار",
  "استفسار عن المميزات",
  "طلب عرض للشركة",
  "سؤال عام",
]

type FormStatus = "idle" | "loading" | "success" | "error"

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    requestType: requestTypes[0],
    message: "",
  })

  const [status, setStatus] = useState<FormStatus>("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const isFormValid = Boolean(
    formState.name.trim() &&
      formState.email.trim() &&
      formState.message.trim(),
  )

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!isFormValid) {
      setStatus("error")
      setErrorMessage("يرجى ملء الحقول المطلوبة قبل الإرسال")
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
          requestType: formState.requestType,
          message: formState.message,
          _subject: `رسالة جديدة من ${formState.name} - Za ERP`,
        }),
      })

      if (response.ok) {
        setStatus("success")
        setFormState({
          name: "",
          company: "",
          email: "",
          phone: "",
          requestType: requestTypes[0],
          message: "",
        })
      } else {
        const data = await response.json()
        throw new Error(data.error || "حدث خطأ أثناء الإرسال")
      }
    } catch (error) {
      setStatus("error")
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "حدث خطأ أثناء الإرسال، يرجى المحاولة مرة أخرى",
      )
    }
  }

  const resetForm = () => {
    setStatus("idle")
    setErrorMessage("")
  }

  return (
    <section id="contact" dir="rtl" className="relative overflow-hidden py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-10 left-0 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-4 block text-sm font-semibold tracking-wide text-primary">
            تواصل معنا
          </span>

          <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            ابدأ تنظيم أعمالك مع{" "}
            <span className="text-gradient-gold">Za ERP</span>
          </h2>

          <p className="text-lg leading-8 text-muted-foreground">
            أرسل لنا معلومات شركتك أو استفسارك، وسنساعدك على معرفة الخطة
            المناسبة، وطريقة تجربة المنصة، والخطوات المطلوبة للبدء.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Contact Form */}
          <div className="border-gold-glow rounded-2xl bg-card/85 p-6 shadow-sm backdrop-blur md:p-8">
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-foreground">
                  طلب تواصل أو تجربة
                </h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  اكتب بياناتك الأساسية وسنراجع الطلب للرد عليك بأفضل طريقة
                  مناسبة.
                </p>
              </div>

              <div className="hidden h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary sm:flex">
                <Send className="h-5 w-5" />
              </div>
            </div>

            {/* Success Message */}
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10">
                  <CheckCircle className="h-8 w-8 text-green-500" />
                </div>

                <h4 className="mb-2 text-xl font-bold text-foreground">
                  تم إرسال الطلب بنجاح
                </h4>

                <p className="mb-6 max-w-md text-sm leading-7 text-muted-foreground">
                  وصلت رسالتك، وسنحاول التواصل معك قريباً لمراجعة الطلب أو
                  الإجابة عن استفسارك.
                </p>

                <Button
                  onClick={resetForm}
                  variant="outline"
                  className="border-primary/50 text-primary hover:bg-primary/10"
                >
                  إرسال رسالة أخرى
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Honeypot field for spam protection - hidden from users */}
                <input
                  type="text"
                  name="_gotcha"
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* Error Message */}
                {status === "error" && errorMessage && (
                  <div className="flex items-center gap-3 rounded-lg border border-red-500/30 bg-red-500/10 p-4">
                    <AlertCircle className="h-5 w-5 flex-shrink-0 text-red-500" />
                    <p className="text-sm text-red-400">{errorMessage}</p>
                  </div>
                )}

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      الاسم الكامل <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="أدخل اسمك"
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      className="border-border bg-secondary/50 transition-colors focus:border-primary"
                      required
                      disabled={status === "loading"}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      اسم الشركة
                    </label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="مثال: شركة / متجر / ورشة"
                      value={formState.company}
                      onChange={(e) =>
                        setFormState({
                          ...formState,
                          company: e.target.value,
                        })
                      }
                      className="border-border bg-secondary/50 transition-colors focus:border-primary"
                      disabled={status === "loading"}
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      البريد الإلكتروني <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="example@email.com"
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      className="border-border bg-secondary/50 transition-colors focus:border-primary"
                      required
                      disabled={status === "loading"}
                      dir="ltr"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      رقم الهاتف / واتساب
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+964 7XX XXX XXXX"
                      value={formState.phone}
                      onChange={(e) =>
                        setFormState({ ...formState, phone: e.target.value })
                      }
                      className="border-border bg-secondary/50 transition-colors focus:border-primary"
                      disabled={status === "loading"}
                      dir="ltr"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="requestType"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    نوع الطلب
                  </label>

                  <select
                    id="requestType"
                    name="requestType"
                    value={formState.requestType}
                    onChange={(e) =>
                      setFormState({
                        ...formState,
                        requestType: e.target.value,
                      })
                    }
                    disabled={status === "loading"}
                    className="h-10 w-full rounded-md border border-border bg-secondary/50 px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-primary disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {requestTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    الرسالة <span className="text-red-500">*</span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="اكتب رسالتك أو احتياج شركتك هنا..."
                    rows={5}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    className="resize-none border-border bg-secondary/50 transition-colors focus:border-primary"
                    required
                    disabled={status === "loading"}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={status === "loading" || !isFormValid}
                  className="w-full bg-primary text-primary-foreground transition-all hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="ml-2 h-4 w-4 animate-spin" />
                      جاري الإرسال...
                    </>
                  ) : (
                    <>
                      <Send className="ml-2 h-4 w-4" />
                      إرسال الطلب
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <div className="border-gold-glow rounded-2xl bg-card/85 p-6 shadow-sm backdrop-blur">
              <h3 className="mb-6 text-xl font-bold text-foreground">
                معلومات التواصل
              </h3>

              <div className="flex flex-col gap-5">
                {contactInfo.map((item) => {
                  const Icon = item.icon

                  return (
                    <div key={item.title} className="flex items-start gap-4">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>

                      <div>
                        <p className="text-sm font-medium text-foreground">
                          {item.title}
                        </p>

                        {item.href ? (
                          <a
                            href={item.href}
                            target={
                              item.href.startsWith("https")
                                ? "_blank"
                                : undefined
                            }
                            rel={
                              item.href.startsWith("https")
                                ? "noopener noreferrer"
                                : undefined
                            }
                            className="text-sm text-muted-foreground transition-colors hover:text-primary"
                            dir="ltr"
                          >
                            {item.content}
                          </a>
                        ) : (
                          <p className="text-sm text-muted-foreground">
                            {item.content}
                          </p>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* CTA Box */}
            <div className="rounded-2xl border border-primary/30 bg-primary/10 p-6">
              <div className="mb-4 inline-flex items-center gap-2 text-primary">
                <Sparkles className="h-5 w-5" />
                <span className="font-semibold">تجربة أولية للمنصة</span>
              </div>

              <h4 className="mb-2 text-lg font-bold text-foreground">
                هل تريد معرفة الخطة المناسبة لشركتك؟
              </h4>

              <p className="mb-5 text-sm leading-7 text-muted-foreground">
                يمكننا مراجعة طبيعة عملك وعدد المستخدمين والفروع والوحدات التي
                تحتاجها، ثم نرشح لك الباقة الأنسب خلال مرحلة Pilot.
              </p>

              <div className="grid gap-3">
                <Button
                  asChild
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <a
                    href="https://wa.me/9647808500591"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="ml-2 h-4 w-4" />
                    تواصل عبر واتساب
                  </a>
                </Button>

                <div className="flex items-start gap-3 rounded-xl border border-border bg-card/60 p-4">
                  <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <p className="text-xs leading-6 text-muted-foreground">
                    لا يتم تفعيل أي إعداد تجاري أو اشتراك قبل مراجعة الاحتياج
                    والاتفاق على الخطة المناسبة.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card/70 p-6">
              <h4 className="mb-3 font-semibold text-foreground">
                ما الذي نحتاجه منك؟
              </h4>

              <ul className="space-y-3 text-sm leading-7 text-muted-foreground">
                <li>• نوع النشاط التجاري أو الخدمي.</li>
                <li>• عدد المستخدمين والفروع التقريبي.</li>
                <li>• أهم الوحدات المطلوبة: مبيعات، مخزون، POS، تقارير، صيانة.</li>
                <li>• هل تحتاج تجربة فقط أم عرض سعر مبدئي؟</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}