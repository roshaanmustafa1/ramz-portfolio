"use client"

import { useState, useRef, useEffect } from "react"
import { ArrowUpRight } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SERVICES_DATA, ServiceItem } from "@/lib/portfolio-data"
import { ServiceModal } from "./ServiceModal"

export function Expertise() {
  const [activeService, setActiveService] = useState<ServiceItem | null>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0) // Gerold defaults to first item active
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      gsap.from(".service-row-anim", {
        opacity: 0,
        y: 35,
        stagger: 0.12,
        duration: 0.8,
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
    <>
      <section
        ref={sectionRef}
        id="expertise"
        className="py-20 lg:py-28 bg-[#f6f3fc] relative overflow-hidden"
      >
        {/* Soft radial glow */}
        <div className="absolute top-0 right-10 w-96 h-96 bg-[#8750f7]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 2xl:px-24">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8750f7] px-4 py-1.5 rounded-full bg-white border border-[#e8e2f4] inline-block mb-3">
              Capabilities & Offerings
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2a1454] tracking-tight">
              Quality Procurement{" "}
              <span className="tj-gradient-heading">Services</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#5c6266] leading-relaxed">
              Transforming enterprise spend management through strategic supplier
              negotiation, rigorous SLA compliance, and lean Procure-to-Pay optimization.
            </p>
          </div>

          {/* Services Rows List (recreating Gerold .services-widget) */}
          <div className="bg-white rounded-3xl border border-[#e8e2f4] overflow-hidden shadow-[0_15px_40px_-15px_rgba(42,20,84,0.06)] divide-y divide-[#e8e2f4]">
            {SERVICES_DATA.map((service, index) => {
              const isHovered = hoveredIndex === index

              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onClick={() => setActiveService(service)}
                  className={`service-row-anim group relative p-6 sm:p-8 lg:p-10 cursor-pointer transition-all duration-500 ease-out ${
                    isHovered
                      ? "bg-gradient-to-r from-[#2a1454] to-[#8750f7] text-white"
                      : "bg-white hover:bg-[#faf8fd] text-[#2a1454]"
                  }`}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-12">
                    {/* Left: Number + Title */}
                    <div className="lg:w-5/12 flex items-center gap-5 sm:gap-8">
                      <span
                        className={`text-2xl sm:text-3xl font-extrabold tracking-tight transition-colors duration-300 ${
                          isHovered ? "text-white" : "text-[#8750f7]"
                        }`}
                      >
                        {service.number}
                      </span>
                      <h3
                        className={`text-xl sm:text-2xl lg:text-[26px] font-bold tracking-tight transition-colors duration-300 ${
                          isHovered ? "text-white" : "text-[#2a1454]"
                        }`}
                      >
                        {service.title}
                      </h3>
                    </div>

                    {/* Middle: Short Description */}
                    <div className="lg:w-6/12">
                      <p
                        className={`text-sm sm:text-base leading-relaxed transition-colors duration-300 ${
                          isHovered ? "text-slate-100" : "text-[#5c6266]"
                        }`}
                      >
                        {service.shortDesc}
                      </p>
                    </div>

                    {/* Right: Rotating Arrow Icon */}
                    <div className="lg:w-1/12 flex items-center justify-end">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                          isHovered
                            ? "bg-white text-[#2a1454] rotate-0 scale-110 shadow-lg"
                            : "bg-[#f6f3fc] text-[#8750f7] rotate-45 group-hover:rotate-0"
                        }`}
                      >
                        <ArrowUpRight className="w-5 h-5 transition-transform" />
                      </div>
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
