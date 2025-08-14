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

export const metadata = {
  title: "Stunning LCS - Professional Cleaning Services",
  description:
    "Premium cleaning services for offices, medical facilities, retail spaces, and homes. Same-day availability, 100% satisfaction guarantee.",
  openGraph: {
    title: "Stunning LCS - Professional Cleaning Services",
    description:
      "Premium cleaning services for offices, medical facilities, retail spaces, and homes. Same-day availability, 100% satisfaction guarantee.",
    url: "https://stunning-lcs.vercel.app",
    siteName: "Stunning LCS",
    images: [
      {
        url: "https://stunning-lcs.vercel.app/logo.png", // Full URL
        width: 512,
        height: 512,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stunning LCS - Professional Cleaning Services",
    description:
      "Premium cleaning services for offices, medical facilities, retail spaces, and homes. Same-day availability, 100% satisfaction guarantee.",
    images: ["https://stunning-lcs.vercel.app/logo.png"], // Full URL
  },
};

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