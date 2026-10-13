"use client"

import { useEffect, useRef } from "react"
import { Briefcase, GraduationCap, MapPin, CheckCircle2 } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { EXPERIENCE_DATA, EDUCATION_DATA } from "@/lib/portfolio-data"

export function ExperienceTimeline() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      gsap.from(".exp-card-left", {
        opacity: 0,
        x: -40,
        stagger: 0.2,
        duration: 0.9,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      })

      gsap.from(".edu-card-right", {
        opacity: 0,
        x: 40,
        stagger: 0.2,
        duration: 0.9,
        ease: "power2.out",
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
      id="experience"
      className="py-20 lg:py-28 bg-[#f6f3fc] relative overflow-hidden"
    >
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 2xl:px-24">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-[#8750f7] px-4 py-1.5 rounded-full bg-white border border-[#e8e2f4] inline-block mb-3">
            Career Track
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2a1454] tracking-tight">
            Experience &amp;{" "}
            <span className="tj-gradient-heading">Education</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5c6266] leading-relaxed">
            Verified corporate track record in supply chain execution, procurement governance,
            and business administration.
          </p>
        </div>

        {/* Two Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          {/* Left Column: Experience */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#8750f7] to-[#2a1454] flex items-center justify-center text-white shadow-md">
                <Briefcase className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-extrabold text-[#2a1454]">
                  My Experience
                </h3>
                <p className="text-xs font-semibold text-[#747779] uppercase tracking-wider">
                  Hands-on Procurement History
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {EXPERIENCE_DATA.map((job) => (
                <div
                  key={job.id}
                  className="exp-card-left group relative rounded-3xl bg-white border border-[#e8e2f4] p-6 sm:p-8 shadow-[0_10px_30px_rgba(42,20,84,0.04)] transition-all duration-500 hover:bg-gradient-to-br hover:from-[#2a1454] hover:to-[#8750f7] hover:shadow-[0_20px_40px_rgba(135,80,247,0.2)] hover:border-transparent cursor-default"
                >
                  {/* Period tag */}
                  <span className="inline-block text-xs font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full bg-[#f6f3fc] text-[#8750f7] group-hover:bg-white/15 group-hover:text-white transition-colors duration-300 mb-3">
                    {job.period}
                  </span>

                  {/* Role Title */}
                  <h4 className="text-2xl font-bold text-[#2a1454] group-hover:text-white transition-colors duration-300">
                    {job.role}
                  </h4>

                  {/* Company & Location */}
                  <div className="flex items-center gap-2 text-sm font-semibold text-[#8750f7] group-hover:text-[#9b8dff] transition-colors duration-300 mt-1 mb-4">
                    <span>{job.company}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1 font-normal text-[#747779] group-hover:text-slate-200">
                      <MapPin className="w-3.5 h-3.5" />
                      {job.location}
                    </span>
                  </div>

                  {/* Overview */}
                  <p className="text-sm text-[#5c6266] group-hover:text-slate-100 transition-colors duration-300 leading-relaxed mb-4">
                    {job.overview}
                  </p>

                  {/* Key Achievements Bullet points */}
                  <ul className="space-y-2 pt-2 border-t border-[#e8e2f4] group-hover:border-white/15 transition-colors duration-300">
                    {job.keyAchievements.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-[#5c6266] group-hover:text-slate-100 transition-colors duration-300 leading-normal"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#8750f7] group-hover:text-emerald-300 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tools / Tags */}
                  <div className="flex flex-wrap gap-2 pt-4 mt-4 border-t border-[#e8e2f4] group-hover:border-white/15">
                    {job.tools.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-semibold px-2.5 py-0.5 rounded-lg bg-[#f6f3fc] text-[#2a1454] group-hover:bg-white/15 group-hover:text-white transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Education */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#8750f7] to-[#2a1454] flex items-center justify-center text-white shadow-md">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-extrabold text-[#2a1454]">
                  My Education
                </h3>
                <p className="text-xs font-semibold text-[#747779] uppercase tracking-wider">
                  Academic Background
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {EDUCATION_DATA.map((edu) => (
                <div
                  key={edu.id}
                  className="edu-card-right group relative rounded-3xl bg-white border border-[#e8e2f4] p-6 sm:p-8 shadow-[0_10px_30px_rgba(42,20,84,0.04)] transition-all duration-500 hover:bg-gradient-to-br hover:from-[#2a1454] hover:to-[#8750f7] hover:shadow-[0_20px_40px_rgba(135,80,247,0.2)] hover:border-transparent cursor-default"
                >
                  {/* Period tag */}
                  <span className="inline-block text-xs font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full bg-[#f6f3fc] text-[#8750f7] group-hover:bg-white/15 group-hover:text-white transition-colors duration-300 mb-3">
                    {edu.period}
                  </span>

                  {/* Degree Title */}
                  <h4 className="text-2xl font-bold text-[#2a1454] group-hover:text-white transition-colors duration-300">
                    {edu.degree}
                  </h4>

                  {/* Institution & Location */}
                  <div className="flex items-center gap-2 text-sm font-semibold text-[#8750f7] group-hover:text-[#9b8dff] transition-colors duration-300 mt-1 mb-4">
                    <span>{edu.institution}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1 font-normal text-[#747779] group-hover:text-slate-200">
                      <MapPin className="w-3.5 h-3.5" />
                      {edu.location}
                    </span>
                  </div>

                  {/* Field of study */}
                  <p className="text-xs font-bold uppercase tracking-wider text-[#747779] group-hover:text-slate-200 transition-colors duration-300 mb-4">
                    Major: {edu.field}
                  </p>

                  {/* Highlights list */}
                  <ul className="space-y-2 pt-2 border-t border-[#e8e2f4] group-hover:border-white/15 transition-colors duration-300">
                    {edu.highlights.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-[#5c6266] group-hover:text-slate-100 transition-colors duration-300 leading-normal"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#8750f7] group-hover:text-emerald-300 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
