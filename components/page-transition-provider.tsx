"use client"

import type { ReactNode } from "react"
import { AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"

interface PageTransitionProviderProps {
  children: ReactNode
}

export default function PageTransitionProvider({ children }: PageTransitionProviderProps) {
  const pathname = usePathname()

  return <AnimatePresence mode="wait">{children}</AnimatePresence>
}
