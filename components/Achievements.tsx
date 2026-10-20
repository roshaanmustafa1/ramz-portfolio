"use client"

import { useState, useRef, useEffect } from "react"
import { ArrowUpRight, TrendingUp, Building2, MapPin } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ACHIEVEMENTS_DATA, AchievementItem } from "@/lib/portfolio-data"
import { AchievementModal } from "./AchievementModal"

const CATEGORIES = [
  { key: "all", label: "All Achievements" },
  { key: "revenue", label: "Revenue Optimization" },
  { key: "velocity", label: "Process Velocity" },
  { key: "quality", label: "Quality & Compliance" },
  { key: "recovery", label: "AR Recovery" },
  { key: "efficiency", label: "Workflow Optimization" },
]

export function Achievements() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [activeItem, setActiveItem] = useState<AchievementItem | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      gsap.from(".achieve-header-anim", {
        opacity: 0,
        y: 25,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const filteredItems =
    selectedCategory === "all"
      ? ACHIEVEMENTS_DATA
      : ACHIEVEMENTS_DATA.filter((item) => item.category === selectedCategory)

  return (
    <>
      <section
        ref={sectionRef}
        id="achievements"
        className="py-20 lg:py-28 bg-white relative overflow-hidden"
      >
        <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 2xl:px-24">
          {/* Section Header */}
          <div className="achieve-header-anim text-center max-w-3xl mx-auto mb-12 lg:mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8750f7] px-4 py-1.5 rounded-full bg-[#f6f3fc] border border-[#e8e2f4] inline-block mb-3">
              Measurable Impact in Healthcare Accounting &amp; Revenue Cycle Management
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2a1454] tracking-tight">
              Professional{" "}
              <span className="tj-gradient-heading">Achievements</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#5c6266] leading-relaxed">
              Documented collection growth, payment posting acceleration, and financial
              reconciliation accuracy delivered across US healthcare revenue cycles.
            </p>

            {/* Filter Buttons Bar (Gerold style rounded button group) */}
            <div className="mt-8 flex flex-wrap justify-center gap-2 p-1.5 rounded-full bg-[#f6f3fc] border border-[#e8e2f4] max-w-2xl mx-auto">
              {CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat.key
                return (
                  <button
                    key={cat.key}
                    onClick={() => setSelectedCategory(cat.key)}
                    className={`relative px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                      isActive
                        ? "text-white shadow-md"
                        : "text-[#747779] hover:text-[#2a1454]"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeFilterBg"
                        className="absolute inset-0 bg-gradient-to-r from-[#8750f7] to-[#2a1454] rounded-full z-0"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{cat.label}</span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Cards Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                  key={item.id}
                  onClick={() => setActiveItem(item)}
                  className="group relative rounded-3xl bg-white border border-[#e8e2f4] p-6 sm:p-7 shadow-[0_10px_30px_rgba(42,20,84,0.04)] hover:shadow-[0_20px_45px_rgba(135,80,247,0.12)] hover:border-[#8750f7]/40 transition-all duration-300 flex flex-col justify-between cursor-pointer"
                >
                  <div>
                    {/* Top row: Category tag + Metric badge */}
                    <div className="flex items-center justify-between gap-3 mb-5">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#f6f3fc] text-[#8750f7] border border-[#e8e2f4]">
                        {item.categoryLabel}
                      </span>
                      {item.metric ? (
                        <div className="px-3 py-1 rounded-xl bg-gradient-to-r from-[#8750f7] to-[#2a1454] text-white font-extrabold text-sm shadow-sm flex items-center gap-1">
                          <TrendingUp className="w-3.5 h-3.5" />
                          <span>{item.metric}</span>
                        </div>
                      ) : (
                        <div className="px-3 py-1 rounded-xl bg-gradient-to-r from-[#8750f7] to-[#2a1454] text-white font-bold text-xs shadow-sm flex items-center gap-1">
                          <span>Optimized</span>
                        </div>
                      )}
                    </div>

                    {/* Company and location */}
                    <div className="flex items-center gap-3 text-xs text-[#747779] font-medium mb-3">
                      <span className="flex items-center gap-1">
                        <Building2 className="w-3.5 h-3.5 text-[#8750f7]" />
                        {item.company}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {item.location}
                      </span>
                    </div>

                    {/* Main Title */}
                    <h3 className="text-xl font-bold text-[#2a1454] group-hover:text-[#8750f7] transition-colors leading-snug mb-3">
                      {item.title}
                    </h3>

                    {/* Short summary */}
                    <p className="text-sm text-[#5c6266] leading-relaxed mb-6 line-clamp-3">
                      {item.summary}
                    </p>
                  </div>

                  {/* Card Bottom: View Details Button & Arrow */}
                  <div className="pt-4 border-t border-[#e8e2f4] flex items-center justify-between">
                    <span className="text-xs font-bold text-[#8750f7] group-hover:underline">
                      View Impact Analysis
                    </span>
                    <div className="w-9 h-9 rounded-full bg-[#f6f3fc] group-hover:bg-[#8750f7] text-[#8750f7] group-hover:text-white flex items-center justify-center transition-all duration-300 group-hover:rotate-45">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Case Study Modal */}
      <AchievementModal
        item={activeItem}
        onClose={() => setActiveItem(null)}
      />
    </>
  )
}
