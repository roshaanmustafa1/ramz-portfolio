"use client"

import { useEffect, useRef } from "react"
import {
  Database,
  Layers,
  Search,
  FileSpreadsheet,
  Handshake,
  Users,
  TrendingDown,
  PieChart,
  Boxes,
  ShieldCheck,
  Clock,
  CheckCircle2,
  LucideIcon,
} from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SKILLS_DATA, SkillItem } from "@/lib/portfolio-data"

const ICON_MAP: Record<string, LucideIcon> = {
  Database,
  Layers,
  Search,
  FileSpreadsheet,
  Handshake,
  Users,
  TrendingDown,
  PieChart,
  Boxes,
  ShieldCheck,
  Clock,
  CheckCircle2,
}

export function SkillsGrid() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      gsap.from(".skill-card-anim", {
        opacity: 0,
        y: 30,
        scale: 0.9,
        stagger: 0.08,
        duration: 0.7,
        ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-20 lg:py-28 bg-white relative overflow-hidden"
    >
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 2xl:px-24">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-[#8750f7] px-4 py-1.5 rounded-full bg-[#f6f3fc] border border-[#e8e2f4] inline-block mb-3">
            Core Competencies
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2a1454] tracking-tight">
            Professional{" "}
            <span className="tj-gradient-heading">Skills</span> &amp; Systems
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5c6266] leading-relaxed">
            Hands-on technical mastery across enterprise ERP platforms, strategic sourcing
            mechanisms, commercial law, and inventory governance.
          </p>
        </div>

        {/* Gerold Style Skills Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
          {SKILLS_DATA.map((skill: SkillItem, index: number) => {
            const Icon = ICON_MAP[skill.icon] || Database

            return (
              <div
                key={index}
                className="skill-card-anim group flex flex-col items-center justify-between text-center p-5 sm:p-6 rounded-3xl bg-[#f6f3fc] border border-[#e8e2f4] hover:border-[#8750f7] hover:bg-white hover:shadow-[0_15px_30px_rgba(135,80,247,0.12)] transition-all duration-300 transform hover:-translate-y-1.5 cursor-pointer"
              >
                {/* Icon Box */}
                <div className="w-16 h-16 rounded-2xl bg-white group-hover:bg-[#8750f7] border border-[#e8e2f4] group-hover:border-transparent flex items-center justify-center text-[#8750f7] group-hover:text-white transition-all duration-300 shadow-sm mb-4">
                  <Icon className="w-8 h-8 transition-transform group-hover:scale-110" />
                </div>

                {/* Level / Category Badge (instead of fabricated percentage) */}
                <div className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-white group-hover:bg-[#8750f7]/10 text-[#8750f7] border border-[#e8e2f4] mb-2">
                  {skill.level}
                </div>

                {/* Skill Name */}
                <h4 className="text-sm sm:text-base font-bold text-[#2a1454] group-hover:text-[#8750f7] transition-colors leading-tight mb-1">
                  {skill.name}
                </h4>

                {/* Category label */}
                <span className="text-[11px] text-[#747779] font-medium leading-tight line-clamp-1">
                  {skill.category}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
