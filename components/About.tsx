"use client"

import { useEffect, useRef } from "react"
import { ShieldCheck, Award, TrendingUp, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { PERSONAL_INFO } from "@/lib/portfolio-data"

export function About() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      gsap.from(".about-anim-left", {
        opacity: 0,
        x: -40,
        duration: 0.9,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      })

      gsap.from(".about-anim-right", {
        opacity: 0,
        x: 40,
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
      id="about"
      className="py-20 lg:py-28 bg-[#f6f3fc] relative overflow-hidden"
    >
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 2xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Showcase & Core Metric Blocks */}
          <div className="about-anim-left lg:col-span-5 space-y-6">
            <div className="relative rounded-3xl bg-white border border-[#e8e2f4] p-8 sm:p-10 shadow-[0_15px_40px_rgba(42,20,84,0.06)] overflow-hidden">
              <div className="absolute top-0 right-0 w-36 h-36 bg-[#8750f7]/10 rounded-full blur-2xl" />

              <div className="flex items-center justify-between gap-3 mb-6">
                <span className="text-xs font-bold uppercase tracking-widest text-[#8750f7] px-3.5 py-1 rounded-full bg-[#f6f3fc] border border-[#e8e2f4] inline-flex items-center gap-1.5">
                  <Image
                    src={PERSONAL_INFO.logo.emblem}
                    alt="Emblem"
                    width={14}
                    height={14}
                    unoptimized
                    className="w-3.5 h-3.5 object-contain"
                  />
                  <span>Healthcare Finance Profile</span>
                </span>
                <span className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Active in UAE
                </span>
              </div>

              {/* Ramz Mustafa Photo & Header in Profile Card */}
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-[#e8e2f4]">
                <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-2xl overflow-hidden border-2 border-[#8750f7]/40 shadow-md shrink-0 bg-[#2a1454]">
                  <Image
                    src={PERSONAL_INFO.image}
                    alt={PERSONAL_INFO.name}
                    fill
                    sizes="72px"
                    unoptimized
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#2a1454] leading-tight">
                    {PERSONAL_INFO.name}
                  </h4>
                  <p className="text-xs text-[#747779] font-medium mt-0.5">
                    {PERSONAL_INFO.shortTitle}
                  </p>
                  <p className="text-[11px] font-semibold text-[#8750f7] mt-1">
                    Sharjah, UAE • 5+ Years Exp
                  </p>
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#2a1454] tracking-tight mb-4">
                Driving Financial Accuracy &amp; Revenue Integrity
              </h3>

              <p className="text-sm sm:text-base text-[#5c6266] leading-relaxed mb-6">
                Based in Sharjah, UAE, Ramz Mustafa brings over five years of specialized
                experience in US medical billing accounting, Revenue Cycle Management (RCM),
                ERA/EOB reconciliations, and healthcare financial controls.
              </p>

              {/* 4 Feature Badges */}
              <div className="space-y-3.5 pt-4 border-t border-[#e8e2f4]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#f6f3fc] flex items-center justify-center text-[#8750f7] shrink-0">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-[#2a1454]">
                    +12% YoY Net Collection Growth unlocked
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#f6f3fc] flex items-center justify-center text-[#8750f7] shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-[#2a1454]">
                    ERA/EOB payment turnaround compressed to under 48 hours
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#f6f3fc] flex items-center justify-center text-[#8750f7] shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-[#2a1454]">
                    98.5% sustained financial reconciliation accuracy
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#f6f3fc] flex items-center justify-center text-[#8750f7] shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-[#2a1454]">
                    Strict Three-Way Matching cutting disputes by 22%
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Narrative & RCM Philosophy */}
          <div className="about-anim-right lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8750f7] px-4 py-1.5 rounded-full bg-white border border-[#e8e2f4] inline-block">
              About Me
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2a1454] tracking-tight leading-tight">
              Senior Healthcare Accountant |{" "}
              <span className="tj-gradient-heading">US Revenue Cycle &amp; Financial Controls</span>
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#5c6266] leading-relaxed">
              <p>
                In US healthcare practices, accounting is intrinsically linked to Revenue Cycle
                Management. True financial health requires going beyond simple payment posting—it
                demands accurate gross-to-net revenue calculations, strict contractual allowance
                monitoring, and disciplined insurance AR auditing.
              </p>
              <p>
                Over the past 5+ years, I have managed accounting and revenue cycle workflows for US
                healthcare portfolios exceeding $2 million USD in annual billing volume.
              </p>
              <p>
                My approach combines rigorous GAAP accounting standards with deep expertise in US
                medical billing systems. By implementing systematic three-way reconciliations
                between clearinghouses, bank deposits, and general ledgers, I work to eliminate
                financial discrepancies and revenue leakage.
              </p>
              <p>
                By optimizing ERA payment posting and aged AR recovery, I help medical practices
                maintain predictable cash flow, transparent reporting, and HIPAA-compliant financial
                workflows.
              </p>
            </div>

            {/* Strategic Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-white border border-[#e8e2f4] shadow-sm">
                <div className="text-xs font-bold uppercase tracking-wider text-[#8750f7] mb-1">
                  Pillar 01
                </div>
                <div className="text-base font-bold text-[#2a1454] mb-1">
                  Revenue Integrity
                </div>
                <p className="text-xs text-[#747779]">
                  Accrual-based revenue recognition, fee schedule audits, and contractual write-off governance protecting practice profit margins.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#e8e2f4] shadow-sm">
                <div className="text-xs font-bold uppercase tracking-wider text-[#8750f7] mb-1">
                  Pillar 02
                </div>
                <div className="text-base font-bold text-[#2a1454] mb-1">
                  Three-Way Reconciliation
                </div>
                <p className="text-xs text-[#747779]">
                  Systematic ledger matching between clearinghouse deposits, bank statements, and EHR patient accounts to eliminate revenue leakage.
                </p>
              </div>
            </div>

            {/* CTA row */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link href="#contact" className="tj-btn-primary">
                <span>Consult on Healthcare Accounting</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="tj-btn-secondary"
              >
                <span>Connect on LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
