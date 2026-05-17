import type { Metadata, Viewport } from 'next'
import { IBM_Plex_Sans_Arabic, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic', 'latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'زيتون ERP | منصة ذكية لإدارة الأعمال',
  description: 'منصة ذكية لإدارة المبيعات والمخزون والفواتير والأعمال - حلول متكاملة للشركات الصغيرة والمتوسطة',
  generator: 'v0.app',
  keywords: ['ERP', 'إدارة الأعمال', 'المبيعات', 'المخزون', 'الفواتير', 'زيتون'],
  authors: [{ name: 'المهندس محمد زيتون الموسى' }],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'زيتون ERP | منصة ذكية لإدارة الأعمال',
    description: 'منصة ذكية لإدارة المبيعات والمخزون والفواتير والأعمال',
    type: 'website',
    locale: 'ar_SA',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl" className="bg-background">
      <body className={`${ibmPlexArabic.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
