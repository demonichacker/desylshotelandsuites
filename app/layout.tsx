import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter, Montserrat, Roboto } from "next/font/google"
// @ts-ignore
import "./globals.css"
import Analytics from "@/components/analytics"
import PageLoader from "@/components/page-loader"

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" })
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" })
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700", "900"], variable: "--font-roboto" })

export const metadata: Metadata = {
  title: "DE-SYLS HOTELS & SUITES | Luxury Accommodation in Festac Town",
  description:
    "Experience exclusive comfort at DE-SYLS HOTELS & SUITES. Luxury rooms, fine dining, and premium facilities in Festac Town. Book on WhatsApp.",
  keywords: "hotel, luxury accommodation, Festac Town, booking, rooms, suites",
  openGraph: {
    title: "DE-SYLS HOTELS & SUITES",
    description: "Luxury accommodation in Festac Town",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `,
          }}
        />
        <link rel="canonical" href="https://desyls-hotels.vercel.app" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="DE-SYLS HOTELS & SUITES" />

        <meta name="twitter:card" content="summary_large_image" />

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${playfair.variable} ${inter.variable} ${montserrat.variable} ${roboto.variable} font-sans bg-background text-foreground overflow-x-hidden`}>
        <PageLoader />
        <Analytics />
        {children}
      </body>
    </html>
  )
}
