"use client"

import { useEffect, useRef } from "react"
import { Briefcase, MapPin, CheckCircle2 } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { EXPERIENCE_DATA } from "@/lib/portfolio-data"

export function ExperienceTimeline() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".exp-card-item",
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.8,
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
  }, [])

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="py-20 lg:py-28 bg-white relative overflow-hidden"
    >
      {/* Soft ambient background glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#8750f7]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#2a1454]/4 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 2xl:px-24 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f6f3fc] border border-[#e8e2f4] text-xs font-bold uppercase tracking-widest text-[#8750f7] mb-3 shadow-xs">
            <Briefcase className="w-4 h-4" />
            <span>US Healthcare &amp; RCM Career Track</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2a1454] tracking-tight">
            My <span className="tj-gradient-heading">Experience</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5c6266] leading-relaxed">
            Over five years of hands-on experience directing healthcare accounting operations,
            multi-million-dollar billing ledgers, and revenue cycle financial controls for US practices.
          </p>
        </div>

        {/* 3-Column Experience Grid (Full Width) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full items-stretch">
          {EXPERIENCE_DATA.map((job) => (
            <div
              key={job.id}
              className="exp-card-item group relative rounded-3xl bg-[#f6f3fc] border border-[#e8e2f4] p-6 sm:p-7 shadow-[0_10px_30px_rgba(42,20,84,0.04)] transition-all duration-500 hover:bg-gradient-to-br hover:from-[#2a1454] hover:to-[#8750f7] hover:shadow-[0_20px_45px_rgba(135,80,247,0.2)] hover:border-transparent cursor-default flex flex-col justify-between"
            >
              <div>
                {/* Header row: Period tag & Employment type */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className="inline-block text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-white text-[#8750f7] group-hover:bg-white/15 group-hover:text-white transition-colors duration-300 border border-[#e8e2f4] group-hover:border-transparent">
                    {job.period}
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/70 text-[#2a1454] group-hover:bg-white/10 group-hover:text-slate-200 transition-colors">
                    {job.type}
                  </span>
                </div>

                {/* Role Title */}
                <h3 className="text-xl sm:text-[22px] font-bold text-[#2a1454] group-hover:text-white transition-colors duration-300 leading-snug mb-1.5">
                  {job.role}
                </h3>

                {/* Company & Location */}
                <div className="flex flex-wrap items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#8750f7] group-hover:text-[#b49eff] transition-colors duration-300 mb-4">
                  <span>{job.company}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1 font-normal text-[#747779] group-hover:text-slate-200">
                    <MapPin className="w-3.5 h-3.5" />
                    {job.location}
                  </span>
                </div>

                {/* Overview */}
                <p className="text-xs sm:text-sm text-[#5c6266] group-hover:text-slate-100 transition-colors duration-300 leading-relaxed mb-5">
                  {job.overview}
                </p>

                {/* Key Responsibilities & Achievements */}
                <div className="pt-4 border-t border-[#e8e2f4] group-hover:border-white/15 transition-colors duration-300">
                  <h4 className="text-[11px] font-extrabold uppercase tracking-wider text-[#2a1454] group-hover:text-white mb-2.5">
                    Key Impact &amp; Deliverables:
                  </h4>
                  <ul className="space-y-2">
                    {job.keyAchievements.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-xs text-[#5c6266] group-hover:text-slate-100 transition-colors duration-300 leading-relaxed"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#8750f7] group-hover:text-emerald-300 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tools / Tags */}
              <div className="pt-4 mt-6 border-t border-[#e8e2f4] group-hover:border-white/15">
                <span className="block text-[10px] font-bold uppercase tracking-wider text-[#747779] group-hover:text-slate-300 mb-2">
                  Tools &amp; Methodologies:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {job.tools.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-white text-[#2a1454] group-hover:bg-white/15 group-hover:text-white transition-colors border border-[#e8e2f4] group-hover:border-transparent"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

