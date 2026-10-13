import { Sora } from "next/font/google"
import type { Metadata } from "next"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sora",
})

export const metadata: Metadata = {
  title: "Ramz Mustafa | Senior Purchase Executive & Supply Chain Professional",
  description:
    "Personal portfolio of Ramz Mustafa, Senior Purchase Executive with 5+ years of strategic sourcing, contract negotiations, SAP MM, and multi-million-dollar procurement expertise in Sharjah, UAE.",
  keywords: [
    "Ramz Mustafa",
    "Purchase Executive",
    "Supply Chain Professional",
    "Procurement Executive",
    "Strategic Sourcing",
    "SAP MM",
    "Contract Negotiation",
    "Sharjah",
    "UAE",
  ],
  authors: [{ name: "Ramz Mustafa" }],
  openGraph: {
    title: "Ramz Mustafa | Strategic Procurement & Supply Chain Executive",
    description:
      "Results-driven Senior Purchase Executive managing >AED 2M spend with proven 12% YoY cost reduction and 98.5% supplier quality assurance.",
    type: "website",
    locale: "en_AE",
    images: [
      {
        url: "/ramz-snap.png",
        width: 1200,
        height: 1500,
        alt: "Ramz Mustafa - Senior Purchase Executive",
      },
    ],
  },
  icons: {
    icon: "/logo/Logo slogan.svg",
    apple: "/logo/Logo slogan.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("scroll-smooth light", sora.variable)}
    >
      <body
        suppressHydrationWarning
        className="font-sans bg-white text-[#140c1c] antialiased selection:bg-[#8750f7]/20 selection:text-[#2a1454]"
      >
        <ThemeProvider forcedTheme="light" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
