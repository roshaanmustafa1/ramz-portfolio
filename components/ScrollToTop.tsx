"use client"

import { useState, useEffect } from "react"
import { ArrowUp } from "lucide-react"

export function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  if (!visible) return null

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-gradient-to-r from-[#8750f7] to-[#2a1454] text-white shadow-[0_8px_25px_rgba(135,80,247,0.4)] flex items-center justify-center hover:scale-110 transition-all duration-300 cursor-pointer"
      aria-label="Scroll back to top"
    >
      <ArrowUp className="w-5 h-5 animate-pulse" />
    </button>
  )
}
