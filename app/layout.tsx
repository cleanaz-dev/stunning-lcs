import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins, Montserrat } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: "Stunning LCS - Professional Cleaning Services | Licensed & Insured",
  description:
    "Premium cleaning services for offices, medical facilities, retail spaces, and homes. Same-day availability, 100% satisfaction guaranteed. Licensed & insured professionals.",
  keywords:
    "cleaning services, professional cleaning, office cleaning, medical facility cleaning, residential cleaning, commercial cleaning",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}