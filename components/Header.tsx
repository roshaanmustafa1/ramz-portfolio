"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Mail, Menu, X, ArrowUpRight } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"
import { PERSONAL_INFO } from "@/lib/portfolio-data"

const NAV_ITEMS = [
  { label: "Home", href: "#hero" },
  { label: "Expertise", href: "#expertise" },
  { label: "Achievements", href: "#achievements" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
]

export function Header() {
  const [isSticky, setIsSticky] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsSticky(scrollY > 60)

      // Active section spy
      const sections = NAV_ITEMS.map((item) => item.href.substring(1))
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 180) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isSticky
            ? "bg-white/95 backdrop-blur-md shadow-[0_4px_20px_rgba(42,20,84,0.06)] border-b border-[#e8e2f4] py-3.5"
            : "bg-transparent py-5 lg:py-7"
        }`}
      >
        <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 2xl:px-24">
          <div className="flex items-center justify-between">
            {/* Left: Brand Wordmark & Email */}
            <div className="flex items-center gap-6 lg:gap-8">
              <Link
                href="#hero"
                className="group flex items-center gap-2.5 text-decoration-none"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#8750f7] to-[#2a1454] flex items-center justify-center text-white font-bold text-lg tracking-wider shadow-[0_4px_12px_rgba(135,80,247,0.3)] group-hover:scale-105 transition-transform duration-300">
                  RM
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-lg tracking-tight text-[#2a1454] group-hover:text-[#8750f7] transition-colors leading-tight">
                    {PERSONAL_INFO.name}
                  </span>
                  <span className="text-[11px] font-medium text-[#747779] tracking-wider uppercase">
                    Procurement & SCM
                  </span>
                </div>
              </Link>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="hidden xl:flex items-center gap-2 text-sm font-medium text-[#2a1454] hover:text-[#8750f7] transition-colors pl-6 border-l border-[#e8e2f4]"
              >
                <div className="w-8 h-8 rounded-full bg-[#f6f3fc] flex items-center justify-center text-[#8750f7] group-hover:bg-[#8750f7] group-hover:text-white transition-colors">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span>{PERSONAL_INFO.email}</span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.substring(1)
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative px-3.5 py-2 text-sm font-semibold transition-colors duration-200 ${
                      isActive
                        ? "text-[#8750f7]"
                        : "text-[#2a1454] hover:text-[#8750f7]"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-gradient-to-r from-[#8750f7] to-[#2a1454] rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                )
              })}
            </nav>

            {/* Right: CTA & Mobile Hamburger */}
            <div className="flex items-center gap-3">
              <Link
                href="#contact"
                className="hidden sm:inline-flex tj-btn-primary !py-2.5 !px-5 text-sm"
              >
                <span>Let&apos;s Connect</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              {/* Hamburger Button for Mobile */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden w-10 h-10 rounded-xl bg-[#f6f3fc] border border-[#e8e2f4] flex items-center justify-center text-[#2a1454] hover:text-[#8750f7] hover:border-[#8750f7] transition-all"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 bottom-0 w-[82%] max-w-sm bg-white p-6 shadow-2xl flex flex-col justify-between overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-[#e8e2f4]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#8750f7] to-[#2a1454] flex items-center justify-center text-white font-bold text-sm">
                      RM
                    </div>
                    <span className="font-bold text-[#2a1454]">
                      {PERSONAL_INFO.name}
                    </span>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-9 h-9 rounded-lg bg-[#f6f3fc] flex items-center justify-center text-[#747779]"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="py-6 flex flex-col gap-1">
                  {NAV_ITEMS.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-4 py-3 rounded-xl font-semibold text-[#2a1454] hover:text-[#8750f7] hover:bg-[#f6f3fc] transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-[#e8e2f4] space-y-4">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-3 text-sm text-[#747779] hover:text-[#8750f7]"
                >
                  <Mail className="w-4 h-4 text-[#8750f7]" />
                  <span>{PERSONAL_INFO.email}</span>
                </a>
                <Link
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="tj-btn-primary w-full text-center"
                >
                  Let&apos;s Connect
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
