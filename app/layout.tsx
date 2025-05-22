// app/layout.tsx
import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider" // Assuming this is from next-themes or similar
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "AITIK Software Pvt. Ltd.",
  description: "Transforming businesses with next-gen technology solutions",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}> {/* <-- CORRECTLY ADDED */}
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light" // Or your desired default
          enableSystem
          disableTransitionOnChange // Good for preventing flicker during theme switch
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}