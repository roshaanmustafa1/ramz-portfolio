"use client"

import { useState, useRef, useEffect } from "react"
import {
  Calculator,
  ReceiptText,
  TrendingUp,
  FileCheck2,
  ClipboardCheck,
  ShieldCheck,
  ArrowUpRight,
  LucideIcon,
  CheckCircle2,
} from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SERVICES_DATA, ServiceItem } from "@/lib/portfolio-data"
import { ServiceModal } from "./ServiceModal"

const ICON_MAP: Record<string, LucideIcon> = {
  Calculator,
  ReceiptText,
  TrendingUp,
  FileCheck2,
  ClipboardCheck,
  ShieldCheck,
}

export function Expertise() {
  const [activeService, setActiveService] = useState<ServiceItem | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".service-card-anim",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
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
    <>
      <section
        ref={sectionRef}
        id="expertise"
        className="py-20 lg:py-28 bg-[#f6f3fc] relative overflow-hidden"
      >
        {/* Soft radial ambient glow */}
        <div className="absolute top-0 right-10 w-96 h-96 bg-[#8750f7]/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#2a1454]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 2xl:px-24 relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-18">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8750f7] px-4 py-1.5 rounded-full bg-white border border-[#e8e2f4] inline-block mb-3 shadow-xs">
              Specialized Healthcare Accounting &amp; Revenue Cycle Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2a1454] tracking-tight">
              My <span className="tj-gradient-heading">Expertise</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#5c6266] leading-relaxed">
              Comprehensive revenue cycle management, ledger posting, and GAAP-compliant
              accounting solutions engineered to eliminate revenue leakage and accelerate
              cash flow for US healthcare practices.
            </p>
          </div>

          {/* 6-Card Services Grid (Eliminates empty horizontal gaps, provides equal height cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {SERVICES_DATA.map((service: ServiceItem) => {
              const Icon = ICON_MAP[service.iconName] || Calculator

              return (
                <div
                  key={service.id}
                  onClick={() => setActiveService(service)}
                  className="service-card-anim group relative p-7 sm:p-8 rounded-3xl bg-white border border-[#e8e2f4] hover:border-transparent hover:bg-gradient-to-br hover:from-[#2a1454] hover:to-[#8750f7] shadow-[0_10px_30px_rgba(42,20,84,0.04)] hover:shadow-[0_20px_45px_rgba(135,80,247,0.2)] transition-all duration-500 ease-out cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    {/* Top row: Service Number + Icon Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#8750f7] group-hover:text-white transition-colors duration-300">
                        {service.number}
                      </span>
                      <div className="w-14 h-14 rounded-2xl bg-[#f6f3fc] group-hover:bg-white/15 border border-[#e8e2f4] group-hover:border-white/20 flex items-center justify-center text-[#8750f7] group-hover:text-white transition-all duration-300 shadow-xs">
                        <Icon className="w-7 h-7 transition-transform group-hover:scale-110" />
                      </div>
                    </div>

                    {/* Service Title */}
                    <h3 className="text-xl sm:text-[22px] font-bold tracking-tight text-[#2a1454] group-hover:text-white transition-colors duration-300 leading-snug mb-3">
                      {service.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-sm text-[#5c6266] group-hover:text-slate-100 transition-colors duration-300 leading-relaxed mb-6">
                      {service.shortDesc}
                    </p>

                    {/* Key Scope Preview Badges */}
                    <div className="space-y-2 mb-6">
                      {service.deliverables.slice(0, 2).map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 text-xs text-[#2a1454] group-hover:text-slate-100 font-medium transition-colors"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#8750f7] group-hover:text-emerald-300 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom: Action CTA & Animated Arrow */}
                  <div className="pt-4 border-t border-[#e8e2f4] group-hover:border-white/15 flex items-center justify-between transition-colors">
                    <span className="text-xs font-bold text-[#8750f7] group-hover:text-white transition-colors">
                      Explore Full Scope
                    </span>
                    <div className="w-10 h-10 rounded-full bg-[#f6f3fc] group-hover:bg-white text-[#8750f7] group-hover:text-[#2a1454] flex items-center justify-center transition-all duration-300 shadow-xs group-hover:rotate-45">
                      <ArrowUpRight className="w-4 h-4 transition-transform" />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Detail Modal */}
      <ServiceModal
        service={activeService}
        onClose={() => setActiveService(null)}
      />
    </>
  )
}
