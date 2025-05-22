"use client"

import { motion, AnimatePresence } from "framer-motion"
import type { ReactNode } from "react"
import { usePathname } from "next/navigation" // For route-based transitions

interface PageTransitionProps {
  children: ReactNode
}

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: -20,
  },
}

const pageTransitionConfig = { // Renamed to avoid conflict if you have a variable named pageTransition
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname()

  return (
    // AnimatePresence is often used at a higher level (e.g., in layout.tsx)
    // for route transitions. If PageTransition is meant to wrap individual
    // page content for its own mount/unmount animation, this is fine.
    // However, the "exit" prop on motion.div will only work if this
    // PageTransition component itself is a direct child of AnimatePresence.
    // For simplicity here, assuming it's a self-contained animation wrapper for its children on mount.
    // If it's for ROUTE transitions, AnimatePresence should be in layout.tsx.

    <motion.div
      key={pathname} // Keying here might be for re-triggering on direct prop changes if not for routes
      initial="initial"
      animate="in"
      // exit="out" // This might not work as expected without AnimatePresence as a direct parent
      variants={pageVariants}
      transition={pageTransitionConfig} // Use the renamed config
    >
      {children}
    </motion.div>
  )
}