"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  Smartphone,
  TrendingUp,
  Bell,
  BarChart3,
  Users,
  Activity,
  Package,
  DollarSign,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react"

const mobileFeatures = [
  {
    icon: TrendingUp,
    title: "متابعة المبيعات مباشرة",
    description: "راقب مبيعاتك لحظة بلحظة",
  },
  {
    icon: DollarSign,
    title: "تتبع الأرباح الفوري",
    description: "اعرف أرباحك في الوقت الحقيقي",
  },
  {
    icon: Package,
    title: "تنبيهات المخزون",
    description: "إشعارات فورية عند انخفاض المخزون",
  },
  {
    icon: BarChart3,
    title: "أداء الفروع",
    description: "قارن أداء جميع فروعك",
  },
  {
    icon: Users,
    title: "متابعة الموظفين",
    description: "راقب نشاط فريق العمل",
  },
  {
    icon: Activity,
    title: "لوحة تحكم ذكية",
    description: "جميع البيانات في مكان واحد",
  },
]

const notifications = [
  { text: "تم بيع 15 قطعة من المنتج A", type: "sale", amount: "+$450" },
  { text: "تنبيه: المخزون منخفض - منتج B", type: "warning", amount: "12 قطعة" },
  { text: "فرع بغداد حقق الهدف اليومي", type: "success", amount: "120%" },
  { text: "طلب جديد #1847 بانتظار المراجعة", type: "order", amount: "$890" },
]

export function MobileAppSection() {
  const [activeNotification, setActiveNotification] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setActiveNotification((prev) => (prev + 1) % notifications.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="mobile-app" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Smartphone className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">تطبيق الهاتف قريباً</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            إدارة أعمالك من{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-primary via-yellow-500 to-primary">
              أي مكان
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            تابع المبيعات، الأرباح، المخزون، والتنبيهات مباشرة من هاتفك المحمول في أي وقت
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Phone Mockup */}
          <div className="relative order-2 lg:order-1 flex justify-center">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-primary/10 to-transparent blur-3xl scale-150 opacity-50" />
              
              {/* Phone Frame */}
              <div className="relative w-[280px] sm:w-[320px] h-[580px] sm:h-[640px] bg-gradient-to-b from-zinc-800 to-zinc-900 rounded-[3rem] p-2 shadow-2xl shadow-primary/20 border border-zinc-700/50">
                {/* Phone Inner Screen */}
                <div className="w-full h-full bg-gradient-to-b from-zinc-950 to-black rounded-[2.5rem] overflow-hidden relative">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center px-6 py-3 bg-black/50">
                    <span className="text-white text-xs font-medium">9:41</span>
                    <div className="w-20 h-6 bg-black rounded-full" />
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-2 bg-white/80 rounded-sm" />
                    </div>
                  </div>

                  {/* App Header */}
                  <div className="px-5 py-4 border-b border-zinc-800/50">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-zinc-400 text-xs">مرحباً بك</p>
                        <p className="text-white font-bold">Zaitoon ERP</p>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-yellow-600 flex items-center justify-center">
                        <Bell className="w-5 h-5 text-black" />
                      </div>
                    </div>
                  </div>

                  {/* Stats Cards */}
                  <div className="px-4 py-4 space-y-3">
                    {/* Revenue Card */}
                    <div className="bg-gradient-to-l from-primary/20 to-primary/5 rounded-2xl p-4 border border-primary/20">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-zinc-400 text-xs">إجمالي المبيعات اليوم</span>
                        <span className="text-emerald-400 text-xs flex items-center gap-1">
                          <ArrowUpRight className="w-3 h-3" />
                          +23%
                        </span>
                      </div>
                      <p className="text-2xl font-bold text-white" dir="ltr">$12,450</p>
                      {/* Mini Chart */}
                      <div className="flex items-end gap-1 mt-3 h-8">
                        {[40, 65, 45, 80, 55, 90, 70, 95, 60, 85, 75, 100].map((h, i) => (
                          <div
                            key={i}
                            className="flex-1 bg-gradient-to-t from-primary/60 to-primary rounded-t"
                            style={{ height: `${h}%` }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-zinc-900/80 rounded-xl p-3 border border-zinc-800/50">
                        <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center mb-2">
                          <TrendingUp className="w-4 h-4 text-emerald-400" />
                        </div>
                        <p className="text-zinc-400 text-xs">الأرباح</p>
                        <p className="text-white font-bold" dir="ltr">$3,240</p>
                      </div>
                      <div className="bg-zinc-900/80 rounded-xl p-3 border border-zinc-800/50">
                        <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center mb-2">
                          <Package className="w-4 h-4 text-blue-400" />
                        </div>
                        <p className="text-zinc-400 text-xs">الطلبات</p>
                        <p className="text-white font-bold">47</p>
                      </div>
                    </div>

                    {/* Activity */}
                    <div className="bg-zinc-900/80 rounded-xl p-3 border border-zinc-800/50">
                      <p className="text-zinc-400 text-xs mb-3">آخر النشاطات</p>
                      <div className="space-y-2">
                        {[
                          { text: "طلب جديد #1847", time: "الآن", color: "bg-primary" },
                          { text: "تم شحن #1846", time: "5 د", color: "bg-emerald-500" },
                          { text: "دفعة مستلمة", time: "12 د", color: "bg-blue-500" },
                        ].map((item, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <div className={`w-2 h-2 rounded-full ${item.color}`} />
                            <span className="text-white text-xs flex-1">{item.text}</span>
                            <span className="text-zinc-500 text-xs">{item.time}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Nav */}
                  <div className="absolute bottom-0 left-0 right-0 bg-zinc-900/95 border-t border-zinc-800/50 px-6 py-3">
                    <div className="flex justify-around">
                      {[
                        { icon: BarChart3, active: true },
                        { icon: Package, active: false },
                        { icon: Users, active: false },
                        { icon: Bell, active: false },
                      ].map((item, i) => (
                        <div
                          key={i}
                          className={`p-2 rounded-xl ${item.active ? "bg-primary/20" : ""}`}
                        >
                          <item.icon
                            className={`w-5 h-5 ${item.active ? "text-primary" : "text-zinc-500"}`}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Notifications */}
              <div className="absolute -right-4 sm:-right-16 top-24 space-y-3">
                {notifications.map((notification, index) => (
                  <div
                    key={index}
                    className={`transform transition-all duration-500 ${
                      activeNotification === index
                        ? "translate-x-0 opacity-100 scale-100"
                        : "translate-x-8 opacity-0 scale-95"
                    }`}
                  >
                    <div className="bg-zinc-900/95 backdrop-blur-xl rounded-2xl p-3 sm:p-4 border border-zinc-800/50 shadow-xl shadow-black/20 w-48 sm:w-64">
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                            notification.type === "sale"
                              ? "bg-primary/20"
                              : notification.type === "warning"
                              ? "bg-amber-500/20"
                              : notification.type === "success"
                              ? "bg-emerald-500/20"
                              : "bg-blue-500/20"
                          }`}
                        >
                          {notification.type === "sale" ? (
                            <DollarSign className="w-4 h-4 text-primary" />
                          ) : notification.type === "warning" ? (
                            <Package className="w-4 h-4 text-amber-400" />
                          ) : notification.type === "success" ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                          ) : (
                            <Bell className="w-4 h-4 text-blue-400" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-white text-xs sm:text-sm leading-relaxed">{notification.text}</p>
                          <p
                            className={`text-xs font-medium mt-1 ${
                              notification.type === "sale"
                                ? "text-primary"
                                : notification.type === "warning"
                                ? "text-amber-400"
                                : notification.type === "success"
                                ? "text-emerald-400"
                                : "text-blue-400"
                            }`}
                          >
                            {notification.amount}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Platform Badges */}
              <div className="absolute -left-4 sm:-left-12 bottom-32 flex flex-col gap-3">
                <div className="bg-zinc-900/95 backdrop-blur-xl rounded-xl px-3 sm:px-4 py-2 border border-zinc-800/50 flex items-center gap-2">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                  <span className="text-white text-xs sm:text-sm font-medium">iOS</span>
                </div>
                <div className="bg-zinc-900/95 backdrop-blur-xl rounded-xl px-3 sm:px-4 py-2 border border-zinc-800/50 flex items-center gap-2">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.523 15.341a.5.5 0 0 0-.146-.7l-3.586-2.27a.5.5 0 0 0-.516 0L9.69 14.64a.5.5 0 0 0-.146.7l.537.854a.5.5 0 0 0 .697.144l2.722-1.723 2.722 1.723a.5.5 0 0 0 .697-.144l.604-.853zM6.178 8.618a.5.5 0 0 1 .5-.5h10.644a.5.5 0 0 1 .5.5v6.764a.5.5 0 0 1-.5.5H6.678a.5.5 0 0 1-.5-.5V8.618zm.5-2.5a2.5 2.5 0 0 0-2.5 2.5v6.764a2.5 2.5 0 0 0 2.5 2.5h10.644a2.5 2.5 0 0 0 2.5-2.5V8.618a2.5 2.5 0 0 0-2.5-2.5H6.678z"/>
                  </svg>
                  <span className="text-white text-xs sm:text-sm font-medium">Android</span>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="order-1 lg:order-2">
            <div className="grid sm:grid-cols-2 gap-4">
              {mobileFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="group p-5 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-foreground font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-l from-primary to-yellow-600 hover:from-primary/90 hover:to-yellow-600/90 text-primary-foreground font-bold px-8 shadow-lg shadow-primary/25"
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                <Bell className="w-5 h-5 ml-2" />
                اطلب تجربة
              </Button>
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="flex -space-x-2 space-x-reverse">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-800 border-2 border-background flex items-center justify-center"
                    >
                      <Users className="w-4 h-4 text-zinc-400" />
                    </div>
                  ))}
                </div>
                <span className="text-sm">+500 طلب مسبق</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
