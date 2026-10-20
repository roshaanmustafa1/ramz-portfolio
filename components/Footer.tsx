"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowUp, Mail, Phone } from "lucide-react"
import { LinkedInIcon } from "@/components/LinkedInIcon"
import { PERSONAL_INFO } from "@/lib/portfolio-data"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-[#2a1454] text-white pt-16 pb-12 relative overflow-hidden">
      {/* Decorative ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-32 bg-[#8750f7]/20 blur-3xl pointer-events-none" />

      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 2xl:px-24 relative z-10 text-center">
        {/* Official Brand Logo */}
        <div className="mb-6 inline-block">
          <Link
            href="#hero"
            className="group inline-flex items-center justify-center text-decoration-none"
          >
            <Image
              src={PERSONAL_INFO.logo.whiteHorizontal}
              alt={`${PERSONAL_INFO.name} Logo`}
              width={185}
              height={56}
              unoptimized
              className="h-11 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>
        </div>

        {/* Headline tag */}
        <p className="text-xs sm:text-sm font-medium text-slate-300 max-w-lg mx-auto mb-8">
          Senior Healthcare Accountant • US Revenue Cycle Management &amp; Financial Controls • Sharjah, UAE
        </p>

        {/* Navigation Links */}
        <nav className="mb-8">
          <ul className="flex flex-wrap justify-center gap-6 sm:gap-8 text-sm font-medium text-slate-300">
            <li>
              <Link
                href="#hero"
                className="hover:text-[#9b8dff] transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#expertise"
                className="hover:text-[#9b8dff] transition-colors"
              >
                Expertise
              </Link>
            </li>
            <li>
              <Link
                href="#achievements"
                className="hover:text-[#9b8dff] transition-colors"
              >
                Achievements
              </Link>
            </li>
            <li>
              <Link
                href="#experience"
                className="hover:text-[#9b8dff] transition-colors"
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                href="#education"
                className="hover:text-[#9b8dff] transition-colors"
              >
                Education
              </Link>
            </li>
            <li>
              <Link
                href="#skills"
                className="hover:text-[#9b8dff] transition-colors"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className="hover:text-[#9b8dff] transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="hover:text-[#9b8dff] transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Social Links */}
        <div className="flex justify-center items-center gap-3 mb-10">
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#8750f7] text-white flex items-center justify-center transition-colors shadow-sm"
            aria-label="LinkedIn"
          >
            <LinkedInIcon className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#8750f7] text-white flex items-center justify-center transition-colors shadow-sm"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, "")}`}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#8750f7] text-white flex items-center justify-center transition-colors shadow-sm"
            aria-label="Phone"
          >
            <Phone className="w-4 h-4" />
          </a>
        </div>

        {/* Bottom divider and dynamic copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; {currentYear}{" "}
            <span className="font-semibold text-white">Ramz Mustafa</span>. All
            rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors group cursor-pointer"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <div className="w-7 h-7 rounded-full bg-white/10 group-hover:bg-[#8750f7] flex items-center justify-center transition-colors">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  )
}
