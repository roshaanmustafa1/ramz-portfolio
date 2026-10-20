"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Mail, Phone, ShieldCheck, CheckCircle2, MapPin } from "lucide-react"
import { LinkedInIcon } from "@/components/LinkedInIcon"
import gsap from "gsap"
import { PERSONAL_INFO } from "@/lib/portfolio-data"

export function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const svgTextRef = useRef<SVGTextElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background SVG stroke float animation
      if (svgTextRef.current) {
        gsap.to(svgTextRef.current, {
          y: -15,
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        })
      }

      // Entrance animation for content elements
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

      tl.from(".hero-anim-eyebrow", {
        opacity: 0,
        y: 20,
        duration: 0.7,
        delay: 0.2,
      })
        .from(
          ".hero-anim-title",
          {
            opacity: 0,
            y: 30,
            duration: 0.9,
          },
          "-=0.4"
        )
        .from(
          ".hero-anim-lead",
          {
            opacity: 0,
            y: 20,
            duration: 0.8,
          },
          "-=0.5"
        )
        .from(
          ".hero-anim-actions",
          {
            opacity: 0,
            y: 20,
            duration: 0.7,
          },
          "-=0.5"
        )
        .from(
          ".hero-anim-visual",
          {
            opacity: 0,
            y: 30,
            duration: 0.9,
            ease: "power2.out",
          },
          "-=0.6"
        )
        .from(
          ".hero-float-badge",
          {
            opacity: 0,
            y: 20,
            scale: 0.85,
            stagger: 0.15,
            duration: 0.8,
            ease: "back.out(1.7)",
          },
          "-=0.5"
        )
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28 overflow-hidden bg-white"
    >
      {/* Background SVG Stroke Watermark (Gerold signature "HI" stroke effect adapted to "RAMZ") */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl 2xl:max-w-[1700px] pointer-events-none select-none z-0 overflow-hidden flex justify-center"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1320 300"
          className="w-full h-auto opacity-[0.06] md:opacity-[0.08]"
        >
          <text
            ref={svgTextRef}
            x="50%"
            y="55%"
            textAnchor="middle"
            dominantBaseline="middle"
            className="font-black font-sans fill-transparent stroke-[#8750f7]"
            style={{
              fontSize: "260px",
              strokeWidth: "2.5px",
              letterSpacing: "12px",
            }}
          >
            RAMZ
          </text>
        </svg>
      </div>

      {/* Soft Purple Ambient Radial Glows */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#8750f7]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-[#2a1454]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 lg:px-16 2xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Content */}
          <div ref={contentRef} className="lg:col-span-7 space-y-6">
            {/* Eyebrow */}
            <div className="hero-anim-eyebrow inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#f6f3fc] border border-[#e8e2f4] text-sm font-semibold text-[#8750f7]">
              <span className="w-2 h-2 rounded-full bg-[#8750f7] animate-pulse" />
              <span>{PERSONAL_INFO.subTitle}</span>
              <span className="text-[#747779]">•</span>
              <span className="text-[#2a1454] font-medium flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#8750f7]" />
                {PERSONAL_INFO.location}
              </span>
            </div>

            {/* Main Heading with Gerold Signature Gradient */}
            <h1 className="hero-anim-title text-3xl sm:text-4xl md:text-5xl lg:text-[54px] xl:text-6xl font-extrabold tracking-tight text-[#2a1454] leading-[1.12]">
              Healthcare Accountant &amp;{" "}
              <span className="tj-gradient-heading block sm:inline">
                US RCM Specialist.
              </span>
            </h1>

            {/* Lead Summary */}
            <p className="hero-anim-lead text-base sm:text-lg text-[#5c6266] leading-relaxed max-w-2xl font-normal">
              Senior Healthcare Accountant with over five years of specialized experience
              in US medical billing accounting, Revenue Cycle Management (RCM), electronic
              remittance advice (ERA/EOB) reconciliation, contractual allowance posting,
              and HIPAA-compliant financial reporting. Experienced in managing
              multi-million-dollar billing portfolios for US healthcare providers, optimizing
              medical AR aging, and executing accrual accounting for commercial payors
              including Aetna, BCBS, Cigna, and UnitedHealthcare, as well as government payors
              Medicare and Medicaid.
            </p>

            {/* Professional Systems & Tools Badges */}
            <div className="hero-anim-actions flex flex-wrap items-center gap-2 pt-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#747779] mr-1">
                Core Systems:
              </span>
              {PERSONAL_INFO.systems.map((system) => (
                <span
                  key={system}
                  className="px-3 py-1 rounded-full text-xs font-semibold bg-[#f6f3fc] border border-[#e8e2f4] text-[#2a1454] shadow-xs"
                >
                  {system}
                </span>
              ))}
            </div>

            {/* Buttons & Socials */}
            <div className="hero-anim-actions flex flex-wrap items-center gap-4 sm:gap-6 pt-2">
              <Link
                href="#contact"
                className="tj-btn-primary group"
              >
                <span>Let&apos;s Connect</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="#expertise"
                className="tj-btn-secondary"
              >
                <span>Explore My Expertise</span>
              </Link>

              {/* Social Icon Pills */}
              <div className="flex items-center gap-2.5 pt-2 sm:pt-0">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full border border-[#e8e2f4] flex items-center justify-center text-[#2a1454] hover:text-white hover:bg-[#8750f7] hover:border-[#8750f7] transition-all duration-300 shadow-sm"
                  aria-label="LinkedIn profile"
                >
                  <LinkedInIcon className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="w-11 h-11 rounded-full border border-[#e8e2f4] flex items-center justify-center text-[#2a1454] hover:text-white hover:bg-[#8750f7] hover:border-[#8750f7] transition-all duration-300 shadow-sm"
                  aria-label="Email Ramz Mustafa"
                >
                  <Mail className="w-4 h-4" />
                </a>

                <a
                  href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, "")}`}
                  className="w-11 h-11 rounded-full border border-[#e8e2f4] flex items-center justify-center text-[#2a1454] hover:text-white hover:bg-[#8750f7] hover:border-[#8750f7] transition-all duration-300 shadow-sm"
                  aria-label="Call Ramz Mustafa"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Signature Gerold Tilted Frame & Executive Portrait (All Screens) */}
          <div className="lg:col-span-5 relative flex justify-center items-center mt-10 lg:mt-0 hero-anim-visual">
            <div className="relative mx-auto max-w-sm sm:max-w-md w-full flex justify-center items-center">
              {/* Outer decorative glow ring */}
              <div className="absolute inset-0 rounded-[44px] bg-gradient-to-tr from-[#8750f7]/25 to-[#2a1454]/25 blur-2xl transform scale-105 pointer-events-none" />

              {/* Gerold Signature Tilted Visual Box (3 deg rotate, hover resets to 0deg) */}
              <div
                className="relative w-[300px] h-[400px] sm:w-[350px] sm:h-[460px] xl:w-[380px] xl:h-[490px] rounded-[38px] p-2 bg-gradient-to-tr from-[#8750f7] via-[#9b8dff] to-[#2a1454] shadow-[0_25px_60px_-15px_rgba(135,80,247,0.35)] rotate-[3.5deg] hover:rotate-0 hover:scale-[1.02] transition-transform duration-500 ease-out cursor-pointer group"
              >
                {/* Inner Image Card */}
                <div className="w-full h-full rounded-[30px] overflow-hidden relative bg-[#2a1454]">
                  <Image
                    src="/ramz-snap.png"
                    alt={`${PERSONAL_INFO.name} - ${PERSONAL_INFO.title}`}
                    fill
                    sizes="(max-width: 640px) 300px, (max-width: 1280px) 350px, 380px"
                    priority
                    unoptimized
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Gentle gradient at bottom only to ensure badge readability */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />

                  {/* Top Floating Mini Badge */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10 pointer-events-none">
                    <span className="text-[11px] font-bold tracking-widest text-white uppercase px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/20 shadow-sm flex items-center gap-1.5">
                      <Image
                        src={PERSONAL_INFO.logo.emblemWhite}
                        alt="Emblem"
                        width={14}
                        height={14}
                        unoptimized
                        className="w-3.5 h-3.5 object-contain"
                      />
                      <span>Healthcare Accountant</span>
                    </span>
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-emerald-300 text-[11px] font-medium shadow-sm">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                      <span>UAE</span>
                    </div>
                  </div>

                  {/* Bottom Credentials inside portrait card */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 p-3 sm:p-3.5 rounded-2xl bg-black/60 backdrop-blur-md border border-white/20 text-white z-10 transition-colors group-hover:bg-black/70">
                    <div className="flex items-center justify-between mb-1">
                      <div>
                        <h2 className="text-sm sm:text-base font-bold tracking-tight text-white leading-tight">
                          {PERSONAL_INFO.name}
                        </h2>
                        <p className="text-[11px] text-[#9b8dff] font-medium">
                          Senior Healthcare &amp; RCM Accountant
                        </p>
                      </div>
                      <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-[#8750f7]/50 text-white border border-[#8750f7]/40">
                        5+ Yrs Exp
                      </span>
                    </div>
                    <div className="pt-1.5 border-t border-white/10 flex items-center justify-between text-[10px] sm:text-[11px] text-slate-300">
                      <span className="flex items-center gap-1 text-slate-300">
                        <MapPin className="w-3 h-3 text-[#9b8dff]" /> Sharjah, UAE
                      </span>
                      <span className="text-slate-200 font-medium">
                        Kareo • Athena • QB
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Verified Badge 1: Reconciliation Accuracy */}
              <div
                className="hero-float-badge absolute -top-4 -left-3 sm:-left-6 bg-white/95 backdrop-blur-md rounded-2xl p-2.5 sm:p-3.5 shadow-[0_12px_30px_rgba(42,20,84,0.12)] border border-[#e8e2f4] flex items-center gap-2.5 z-20 hover:scale-105 transition-transform"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#f6f3fc] flex items-center justify-center text-[#8750f7] shrink-0">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#8750f7]" />
                </div>
                <div>
                  <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#747779]">
                    Verified Accuracy
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-[#2a1454]">
                    98.5% Reconciliation
                  </div>
                </div>
              </div>

              {/* Floating Verified Badge 2: Billing Scale */}
              <div
                className="hero-float-badge absolute -bottom-4 sm:-bottom-6 -right-3 sm:-right-6 bg-white/95 backdrop-blur-md rounded-2xl p-2.5 sm:p-3.5 shadow-[0_12px_30px_rgba(42,20,84,0.12)] border border-[#e8e2f4] flex items-center gap-2.5 z-20 hover:scale-105 transition-transform"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#f6f3fc] flex items-center justify-center text-[#8750f7] shrink-0">
                  <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-[#8750f7]" />
                </div>
                <div>
                  <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#747779]">
                    Billing Portfolio
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-[#2a1454]">
                    $2M+ USD Annual
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
