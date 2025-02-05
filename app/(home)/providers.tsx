"use client"

import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import type React from "react" // Added import for React

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    })
  }, [])

  return <>{children}</>
}

