"use client"

import { useEffect, useRef } from "react"
import { GraduationCap, MapPin, CheckCircle2, Award, BookOpen } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { EDUCATION_DATA } from "@/lib/portfolio-data"

export function Education() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".edu-card-anim",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
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
      id="education"
      className="py-20 lg:py-28 bg-[#f6f3fc] relative overflow-hidden"
    >
      {/* Decorative ambient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#8750f7]/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#2a1454]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 2xl:px-24 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-18">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#e8e2f4] text-xs font-bold uppercase tracking-widest text-[#8750f7] mb-3 shadow-xs">
            <GraduationCap className="w-4 h-4" />
            <span>Academic Foundations &amp; Professional Certifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2a1454] tracking-tight">
            My <span className="tj-gradient-heading">Education</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5c6266] leading-relaxed">
            Formal business education in business administration combined with specialized
            certifications in US healthcare compliance, EHR/PM systems, and revenue cycle financial controls.
          </p>
        </div>

        {/* 4 Cards in Responsive 2x2 Grid (Full Width) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full">
          {EDUCATION_DATA.map((edu, index) => {
            const isCertification = index >= 2

            return (
              <div
                key={edu.id}
                className="edu-card-anim group relative rounded-3xl bg-white border border-[#e8e2f4] p-7 sm:p-8 shadow-[0_10px_30px_rgba(42,20,84,0.04)] transition-all duration-500 hover:bg-gradient-to-br hover:from-[#2a1454] hover:to-[#8750f7] hover:shadow-[0_20px_45px_rgba(135,80,247,0.2)] hover:border-transparent cursor-default flex flex-col justify-between"
              >
                <div>
                  {/* Top Row: Period Badge + Icon Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="inline-block text-xs font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full bg-[#f6f3fc] text-[#8750f7] group-hover:bg-white/15 group-hover:text-white transition-colors duration-300">
                      {edu.period}
                    </span>

                    <div className="w-12 h-12 rounded-2xl bg-[#f6f3fc] group-hover:bg-white/15 border border-[#e8e2f4] group-hover:border-white/20 flex items-center justify-center text-[#8750f7] group-hover:text-white transition-all duration-300 shadow-xs">
                      {isCertification ? (
                        <Award className="w-6 h-6 transition-transform group-hover:scale-110" />
                      ) : (
                        <BookOpen className="w-6 h-6 transition-transform group-hover:scale-110" />
                      )}
                    </div>
                  </div>

                  {/* Degree / Certification Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-[#2a1454] group-hover:text-white transition-colors duration-300 leading-snug mb-2">
                    {edu.degree}
                  </h3>

                  {/* Institution & Location */}
                  <div className="flex flex-wrap items-center gap-2 text-sm font-semibold text-[#8750f7] group-hover:text-[#9b8dff] transition-colors duration-300 mb-3">
                    <span>{edu.institution}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1 font-normal text-[#747779] group-hover:text-slate-200">
                      <MapPin className="w-3.5 h-3.5" />
                      {edu.location}
                    </span>
                  </div>

                  {/* Field of study */}
                  <p className="text-xs font-bold uppercase tracking-wider text-[#747779] group-hover:text-slate-200 transition-colors duration-300 mb-5">
                    Focus: {edu.field}
                  </p>

                  {/* Highlights list */}
                  <ul className="space-y-2.5 pt-4 border-t border-[#e8e2f4] group-hover:border-white/15 transition-colors duration-300">
                    {edu.highlights.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-[#5c6266] group-hover:text-slate-100 transition-colors duration-300 leading-relaxed"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#8750f7] group-hover:text-emerald-300 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Card Footer */}
                <div className="pt-4 mt-6 border-t border-[#e8e2f4] group-hover:border-white/15 flex items-center justify-between text-[11px] font-semibold text-[#747779] group-hover:text-slate-300 transition-colors">
                  <span>
                    {isCertification ? "Professional Credential" : "Academic Degree"}
                  </span>
                  <span className="text-[#8750f7] group-hover:text-white font-bold">
                    Verified
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
