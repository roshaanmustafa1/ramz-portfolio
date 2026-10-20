"use client"

import { useState, useEffect, useRef } from "react"
import {
  Calculator,
  ReceiptText,
  TrendingUp,
  ClipboardCheck,
  Database,
  Building2,
  FileCheck2,
  FileSpreadsheet,
  CheckCircle2,
  ShieldCheck,
  PieChart,
  Layers,
  LucideIcon,
  Sparkles,
} from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SKILLS_DATA, SkillItem } from "@/lib/portfolio-data"

const ICON_MAP: Record<string, LucideIcon> = {
  Calculator,
  ReceiptText,
  TrendingUp,
  ClipboardCheck,
  Database,
  Building2,
  FileCheck2,
  FileSpreadsheet,
  CheckCircle2,
  ShieldCheck,
  PieChart,
  Layers,
}

const CATEGORIES = [
  "All",
  "Healthcare Finance",
  "US Medical Billing",
  "Accounting & EHR Systems",
  "Accounting & Governance",
  "Financial Analytics",
  "Compliance & Regulatory",
]

export function SkillsGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All")
  const sectionRef = useRef<HTMLElement>(null)

  const filteredSkills =
    selectedCategory === "All"
      ? SKILLS_DATA
      : SKILLS_DATA.filter((skill) => skill.category === selectedCategory)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".skill-card-anim",
        { opacity: 0, y: 25, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.04,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            once: true,
          },
          clearProps: "opacity,transform",
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [selectedCategory])

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-20 lg:py-28 bg-white relative overflow-hidden"
    >
      {/* Soft background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#8750f7]/4 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 2xl:px-24 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#8750f7] px-4 py-1.5 rounded-full bg-[#f6f3fc] border border-[#e8e2f4] inline-block mb-3 shadow-xs">
            Specialized Healthcare Accounting &amp; RCM Competencies
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2a1454] tracking-tight">
            Professional{" "}
            <span className="tj-gradient-heading">Skills</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5c6266] leading-relaxed">
            Hands-on technical proficiency across healthcare finance, medical practice management
            systems, ERA/EOB payment posting, and HIPAA-compliant financial controls.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-4xl mx-auto mb-12">
          {CATEGORIES.map((category) => {
            const count =
              category === "All"
                ? SKILLS_DATA.length
                : SKILLS_DATA.filter((s) => s.category === category).length
            const isSelected = selectedCategory === category

            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-2 border cursor-pointer ${
                  isSelected
                    ? "bg-[#8750f7] text-white border-[#8750f7] shadow-[0_4px_15px_rgba(135,80,247,0.25)]"
                    : "bg-[#f6f3fc] text-[#2a1454] border-[#e8e2f4] hover:border-[#8750f7] hover:bg-white"
                }`}
              >
                {category === "All" && <Sparkles className="w-3.5 h-3.5" />}
                <span>{category}</span>
                <span
                  className={`text-[11px] px-1.5 py-0.2 rounded-full font-extrabold ${
                    isSelected
                      ? "bg-white/20 text-white"
                      : "bg-white text-[#8750f7] border border-[#e8e2f4]"
                  }`}
                >
                  {count}
                </span>
              </button>
            )
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-6">
          {filteredSkills.map((skill: SkillItem) => {
            const Icon = ICON_MAP[skill.icon] || Database

            return (
              <div
                key={skill.name}
                className="skill-card-anim group flex flex-col justify-between p-5 sm:p-6 rounded-3xl bg-[#f6f3fc] border border-[#e8e2f4] hover:border-[#8750f7] hover:bg-white hover:shadow-[0_15px_30px_rgba(135,80,247,0.12)] transition-all duration-300 transform hover:-translate-y-1.5 cursor-default"
              >
                <div>
                  {/* Top Row: Icon + Level Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-white group-hover:bg-[#8750f7] border border-[#e8e2f4] group-hover:border-transparent flex items-center justify-center text-[#8750f7] group-hover:text-white transition-all duration-300 shadow-xs">
                      <Icon className="w-6 h-6 transition-transform group-hover:scale-110" />
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-white group-hover:bg-[#8750f7]/10 text-[#8750f7] border border-[#e8e2f4]">
                      {skill.level}
                    </span>
                  </div>

                  {/* Skill Name */}
                  <h4 className="text-sm sm:text-base font-bold text-[#2a1454] group-hover:text-[#8750f7] transition-colors leading-snug mb-2">
                    {skill.name}
                  </h4>

                  {/* Description */}
                  {skill.description && (
                    <p className="text-xs text-[#5c6266] group-hover:text-[#4a4f52] leading-relaxed line-clamp-3 mb-4">
                      {skill.description}
                    </p>
                  )}
                </div>

                {/* Category label at bottom */}
                <div className="pt-3 border-t border-[#e8e2f4] flex items-center justify-between mt-auto">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#747779] line-clamp-1">
                    {skill.category}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8750f7]/40 group-hover:bg-[#8750f7] shrink-0 ml-1" />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
