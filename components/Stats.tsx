"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { STATS_DATA } from "@/lib/portfolio-data"

export function Stats() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".stat-number-counter")

      items.forEach((item) => {
        const targetValue = parseFloat(item.getAttribute("data-target") || "0")
        const obj = { val: 0 }

        gsap.to(obj, {
          val: targetValue,
          duration: 2.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            once: true,
          },
          onUpdate: () => {
            if (item) {
              item.innerText = Math.round(obj.val).toString()
            }
          },
        })
      })

      // Stagger fade-in for stat cards
      gsap.from(".stat-card-item", {
        opacity: 0,
        y: 25,
        stagger: 0.15,
        duration: 0.9,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          once: true,
        },
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={containerRef}
      className="w-full px-4 sm:px-8 md:px-12 lg:px-16 2xl:px-24 pb-16 lg:pb-24"
    >
      <div className="rounded-3xl bg-[#f6f3fc] border border-[#e8e2f4] p-6 sm:p-8 lg:p-12 shadow-[0_10px_35px_-10px_rgba(42,20,84,0.05)]">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {STATS_DATA.map((stat) => (
            <div
              key={stat.id}
              className="stat-card-item flex flex-col sm:flex-row items-center sm:items-center gap-3 sm:gap-5 text-center sm:text-left justify-center lg:justify-start"
            >
              <div className="flex items-baseline font-extrabold text-4xl sm:text-5xl lg:text-5xl text-[#8750f7] tracking-tight">
                {stat.prefix && <span>{stat.prefix}</span>}
                <span
                  className="stat-number-counter"
                  data-target={stat.number}
                >
                  0
                </span>
                <span>{stat.suffix}</span>
              </div>
              <div className="text-xs sm:text-sm font-semibold text-[#2a1454] leading-snug">
                <div>{stat.label}</div>
                <div className="text-[#747779] font-medium">{stat.sublabel}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
