"use client"

import { TrendingUp, Users, ShoppingBag, DollarSign } from "lucide-react"

const stats = [
  { label: "المبيعات اليومية", value: "12,450", change: "+12%", icon: DollarSign },
  { label: "الطلبات الجديدة", value: "156", change: "+8%", icon: ShoppingBag },
  { label: "العملاء النشطين", value: "2,340", change: "+15%", icon: Users },
  { label: "معدل النمو", value: "24%", change: "+5%", icon: TrendingUp },
]

const recentOrders = [
  { id: "#12345", customer: "أحمد محمد", amount: "1,250", status: "مكتمل" },
  { id: "#12344", customer: "فاطمة علي", amount: "890", status: "قيد التنفيذ" },
  { id: "#12343", customer: "خالد سعد", amount: "2,100", status: "مكتمل" },
  { id: "#12342", customer: "نورة أحمد", amount: "450", status: "معلق" },
]

export function DashboardPreview() {
  return (
    <section id="dashboard" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/30" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-sm font-semibold tracking-wide mb-4 block">
            لوحة التحكم
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            واجهة سهلة{" "}
            <span className="text-gradient-gold">وقوية</span>
          </h2>
          <p className="text-muted-foreground text-lg text-pretty">
            لوحة تحكم متطورة تمنحك رؤية شاملة لأداء عملك في الوقت الفعلي
          </p>
        </div>

        {/* Dashboard Preview */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-card rounded-3xl border-gold-glow p-4 md:p-8 animate-float">
            {/* Dashboard Header */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-border">
              <div>
                <h3 className="text-xl font-semibold text-foreground">لوحة التحكم الرئيسية</h3>
                <p className="text-muted-foreground text-sm">مرحباً، محمد 👋</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-sm text-muted-foreground">متصل</span>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-secondary/50 rounded-xl p-4 border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <stat.icon className="w-5 h-5 text-primary" />
                    <span className="text-xs text-green-500 font-medium">{stat.change}</span>
                  </div>
                  <p className="text-2xl font-bold text-foreground mb-1">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Chart Placeholder & Recent Orders */}
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Chart */}
              <div className="bg-secondary/30 rounded-xl p-6 border border-border">
                <h4 className="text-sm font-semibold text-foreground mb-4">إحصائيات المبيعات</h4>
                <div className="h-48 flex items-end justify-between gap-2">
                  {[65, 45, 80, 55, 90, 70, 85, 60, 75, 95, 68, 88].map((height, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1">
                      <div
                        className="w-full bg-primary/60 rounded-t-sm hover:bg-primary transition-colors cursor-pointer"
                        style={{ height: `${height}%` }}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex justify-between mt-3 text-xs text-muted-foreground">
                  <span>يناير</span>
                  <span>يونيو</span>
                  <span>ديسمبر</span>
                </div>
              </div>

              {/* Recent Orders */}
              <div className="bg-secondary/30 rounded-xl p-6 border border-border">
                <h4 className="text-sm font-semibold text-foreground mb-4">أحدث الطلبات</h4>
                <div className="flex flex-col gap-3">
                  {recentOrders.map((order) => (
                    <div
                      key={order.id}
                      className="flex items-center justify-between py-2 border-b border-border last:border-0"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <Users className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">{order.customer}</p>
                          <p className="text-xs text-muted-foreground">{order.id}</p>
                        </div>
                      </div>
                      <div className="text-left">
                        <p className="text-sm font-semibold text-foreground">{order.amount} ر.س</p>
                        <span
                          className={`text-xs ${
                            order.status === "مكتمل"
                              ? "text-green-500"
                              : order.status === "قيد التنفيذ"
                              ? "text-primary"
                              : "text-yellow-500"
                          }`}
                        >
                          {order.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
