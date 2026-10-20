"use client"

import { X, Building2, MapPin, Calendar, CheckCircle2, TrendingUp, ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"
import { AchievementItem } from "@/lib/portfolio-data"
import Link from "next/link"

interface AchievementModalProps {
  item: AchievementItem | null
  onClose: () => void
}

export function AchievementModal({ item, onClose }: AchievementModalProps) {
  if (!item) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.94, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.94, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-[#e8e2f4] overflow-hidden max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Accent */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#8750f7] to-[#2a1454]" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-[#f6f3fc] border border-[#e8e2f4] flex items-center justify-center text-[#2a1454] hover:bg-[#8750f7] hover:text-white transition-colors"
            aria-label="Close case study details"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Meta badges */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-[#f6f3fc] text-[#8750f7] border border-[#e8e2f4]">
              {item.categoryLabel}
            </span>
            <div className="flex items-center gap-1.5 text-xs text-[#747779] font-medium">
              <Building2 className="w-3.5 h-3.5" />
              <span>{item.company}</span>
            </div>
            <span className="text-[#e8e2f4]">•</span>
            <div className="flex items-center gap-1.5 text-xs text-[#747779] font-medium">
              <MapPin className="w-3.5 h-3.5" />
              <span>{item.location}</span>
            </div>
          </div>

          {/* Main Title & Key Metric */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#e8e2f4]">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#2a1454] tracking-tight">
              {item.title}
            </h3>
            {item.metric ? (
              <div className="px-4 py-2 rounded-2xl bg-gradient-to-br from-[#8750f7] to-[#2a1454] text-white text-center shrink-0 shadow-md">
                <div className="text-2xl font-black">{item.metric}</div>
                {item.metricLabel && (
                  <div className="text-[10px] uppercase font-bold tracking-wider opacity-90">
                    {item.metricLabel}
                  </div>
                )}
              </div>
            ) : (
              <div className="px-4 py-2 rounded-2xl bg-gradient-to-br from-[#8750f7] to-[#2a1454] text-white text-center shrink-0 shadow-md">
                <div className="text-base font-bold flex items-center justify-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                  <span>Optimized</span>
                </div>
                <div className="text-[10px] uppercase font-bold tracking-wider opacity-90">
                  {item.metricLabel || "Process Impact"}
                </div>
              </div>
            )}
          </div>

          {/* Narrative: Challenge, Execution, Verified Result */}
          <div className="py-6 space-y-5 text-sm sm:text-base leading-relaxed">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#8750f7] mb-1.5 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                Operational Challenge
              </h4>
              <p className="text-[#5c6266] bg-[#f6f3fc] p-4 rounded-2xl border border-[#e8e2f4]">
                {item.challenge}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#2a1454] mb-1.5 flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5 text-[#8750f7]" />
                Strategy &amp; Execution
              </h4>
              <p className="text-[#5c6266]">
                {item.execution}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-100">
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-1 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Verified Impact
              </h4>
              <p className="text-emerald-950 font-medium">
                {item.verifiedImpact}
              </p>
            </div>
          </div>

          {/* Tag Pills */}
          <div className="flex flex-wrap gap-2 pt-2 pb-6">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-lg bg-[#f6f3fc] text-xs font-semibold text-[#2a1454]"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Modal Footer */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#e8e2f4]">
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full border border-[#e8e2f4] text-sm font-semibold text-[#747779] hover:bg-[#f6f3fc] transition-colors"
            >
              Close
            </button>
            <Link
              href="#contact"
              onClick={onClose}
              className="tj-btn-primary !py-2.5 !px-6 text-sm"
            >
              <span>Discuss Similar Results</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
