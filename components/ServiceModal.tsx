"use client"

import { X, CheckCircle, ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"
import { ServiceItem } from "@/lib/portfolio-data"
import Link from "next/link"

interface ServiceModalProps {
  service: ServiceItem | null
  onClose: () => void
}

export function ServiceModal({ service, onClose }: ServiceModalProps) {
  if (!service) return null

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
          className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-[#e8e2f4] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top banner accent */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#8750f7] to-[#2a1454]" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-[#f6f3fc] border border-[#e8e2f4] flex items-center justify-center text-[#2a1454] hover:bg-[#8750f7] hover:text-white transition-colors"
            aria-label="Close details"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="flex items-center gap-4 mb-4">
            <span className="text-3xl font-extrabold text-[#8750f7]">
              {service.number}
            </span>
            <div className="h-6 w-[1px] bg-[#e8e2f4]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#747779]">
              Procurement Service
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-[#2a1454] mb-4">
            {service.title}
          </h3>

          <p className="text-[#5c6266] text-base leading-relaxed mb-6">
            {service.fullDesc}
          </p>

          {/* Deliverables / Scope */}
          <div className="space-y-3 mb-8">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#2a1454]">
              Core Scope & Deliverables
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.deliverables.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-[#f6f3fc] text-sm text-[#2a1454] font-medium"
                >
                  <CheckCircle className="w-4 h-4 text-[#8750f7] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Modal Actions */}
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
              <span>Consult on this Service</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
