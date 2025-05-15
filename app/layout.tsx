import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "AIVault | Discover & Explore The Best AI Tools",
  description: "Your central hub for discovering cutting-edge AI tools across various categories - from AI assistants to image generators, coding tools, and more.",
  icons: {
    icon: [
      { url: "/favicon.svg" }
    ],
    apple: [
      { url: "/favicon.svg" }
    ]
  },
  manifest: "/manifest.json",
  generator: 'Next.js',
  keywords: [
    "AI tools", "artificial intelligence", "AI assistants", "image generation", 
    "video generation", "coding tools", "AI directory", "AIVault"
  ],
  authors: [
    { name: "AIVault Team" }
  ],
  creator: "AIVault",
  publisher: "AIVault"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} font-poppins antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
