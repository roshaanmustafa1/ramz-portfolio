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
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://ramzmustafa.com"
  ),
  title: "Ramz Mustafa | Healthcare Accountant & US RCM Specialist",
  description:
    "Explore the professional portfolio of Ramz Mustafa, a Healthcare Accountant specializing in US Medical Billing, Revenue Cycle Management, ERA/EOB reconciliation, medical AR, and healthcare financial reporting.",
  keywords: [
    "Ramz Mustafa",
    "Healthcare Accountant",
    "Revenue Cycle Management",
    "RCM Specialist",
    "US Medical Billing",
    "Medical Billing Accounting",
    "ERA EOB Reconciliation",
    "Medical Accounts Receivable",
    "Healthcare Financial Reporting",
    "HIPAA Compliance",
  ],
  authors: [{ name: "Ramz Mustafa" }],
  openGraph: {
    title: "Ramz Mustafa | Healthcare Accountant & US RCM Specialist",
    description:
      "Senior Healthcare Accountant with 5+ years of experience managing $2M+ USD in US medical billing portfolios, ERA/EOB reconciliations, and HIPAA-compliant financial controls.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/ramz-snap.png",
        width: 1200,
        height: 1500,
        alt: "Ramz Mustafa - Healthcare Accountant & US RCM Specialist",
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
