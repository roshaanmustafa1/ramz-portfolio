"use client"

import { useState, useRef, useEffect } from "react"
import { Phone, Mail, MapPin, Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react"
import { LinkedInIcon } from "@/components/LinkedInIcon"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { PERSONAL_INFO } from "@/lib/portfolio-data"

interface FormErrors {
  firstName?: string[]
  lastName?: string[]
  email?: string[]
  phone?: string[]
  service?: string[]
  message?: string[]
}

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<FormErrors>({})
  const [statusMessage, setStatusMessage] = useState<{
    type: "success" | "error"
    text: string
  } | null>(null)

  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      gsap.from(".contact-anim-form", {
        opacity: 0,
        x: -30,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      })

      gsap.from(".contact-anim-info", {
        opacity: 0,
        x: 30,
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
    // Clear error on edit
    if (errors[e.target.name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [e.target.name]: undefined,
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setErrors({})
    setStatusMessage(null)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        if (data.errors) {
          setErrors(data.errors)
        }
        setStatusMessage({
          type: "error",
          text: data.message || "Please resolve the highlighted errors.",
        })
      } else {
        setStatusMessage({
          type: "success",
          text:
            data.message ||
            "Thank you! Your message has been sent successfully. Ramz Mustafa will connect with you shortly.",
        })
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        })
      }
    } catch {
      setStatusMessage({
        type: "error",
        text: "Network error occurred. Please reach out to ramz12mustafa@gmail.com directly.",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-20 lg:py-28 bg-[#f6f3fc] relative overflow-hidden"
    >
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 2xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Contact Form Box */}
          <div className="contact-anim-form lg:col-span-7">
            <div className="rounded-3xl bg-white border border-[#e8e2f4] p-8 sm:p-10 lg:p-12 shadow-[0_15px_40px_rgba(42,20,84,0.06)]">
              <div className="mb-8">
                <span className="text-xs font-bold uppercase tracking-widest text-[#8750f7] px-3.5 py-1 rounded-full bg-[#f6f3fc] border border-[#e8e2f4] inline-block mb-3">
                  Get in Touch
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2a1454] tracking-tight">
                  Let&apos;s Connect &amp;{" "}
                  <span className="tj-gradient-heading">Optimize Cash Flow!</span>
                </h2>
                <p className="mt-2 text-sm sm:text-base text-[#5c6266] leading-relaxed">
                  Have a healthcare accounting challenge, medical AR backlog, or revenue cycle
                  opportunity? Send a note directly to Ramz Mustafa.
                </p>
              </div>

              {/* Status Banner */}
              {statusMessage && (
                <div
                  className={`mb-6 p-4 rounded-2xl flex items-start gap-3 text-sm font-medium ${
                    statusMessage.type === "success"
                      ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                      : "bg-rose-50 text-rose-800 border border-rose-200"
                  }`}
                >
                  {statusMessage.type === "success" ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                  )}
                  <span>{statusMessage.text}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* First Name */}
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-xs font-bold text-[#2a1454] mb-1.5 uppercase tracking-wider"
                    >
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Your First Name"
                      required
                      className={`w-full px-4 py-3 rounded-2xl bg-[#f6f3fc] border text-sm text-[#140c1c] placeholder:text-[#747779] focus:outline-none focus:ring-2 focus:ring-[#8750f7]/40 focus:border-[#8750f7] transition-all ${
                        errors.firstName ? "border-rose-400" : "border-[#e8e2f4]"
                      }`}
                    />
                    {errors.firstName && (
                      <p className="mt-1 text-xs text-rose-500 font-medium">
                        {errors.firstName[0]}
                      </p>
                    )}
                  </div>

                  {/* Last Name */}
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-xs font-bold text-[#2a1454] mb-1.5 uppercase tracking-wider"
                    >
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Your Last Name"
                      required
                      className={`w-full px-4 py-3 rounded-2xl bg-[#f6f3fc] border text-sm text-[#140c1c] placeholder:text-[#747779] focus:outline-none focus:ring-2 focus:ring-[#8750f7]/40 focus:border-[#8750f7] transition-all ${
                        errors.lastName ? "border-rose-400" : "border-[#e8e2f4]"
                      }`}
                    />
                    {errors.lastName && (
                      <p className="mt-1 text-xs text-rose-500 font-medium">
                        {errors.lastName[0]}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-bold text-[#2a1454] mb-1.5 uppercase tracking-wider"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@company.com"
                      required
                      className={`w-full px-4 py-3 rounded-2xl bg-[#f6f3fc] border text-sm text-[#140c1c] placeholder:text-[#747779] focus:outline-none focus:ring-2 focus:ring-[#8750f7]/40 focus:border-[#8750f7] transition-all ${
                        errors.email ? "border-rose-400" : "border-[#e8e2f4]"
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-rose-500 font-medium">
                        {errors.email[0]}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-bold text-[#2a1454] mb-1.5 uppercase tracking-wider"
                    >
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+971 50 123 4567"
                      className="w-full px-4 py-3 rounded-2xl bg-[#f6f3fc] border border-[#e8e2f4] text-sm text-[#140c1c] placeholder:text-[#747779] focus:outline-none focus:ring-2 focus:ring-[#8750f7]/40 focus:border-[#8750f7] transition-all"
                    />
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <label
                    htmlFor="service"
                    className="block text-xs font-bold text-[#2a1454] mb-1.5 uppercase tracking-wider"
                  >
                    Area of Interest / Service *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-2xl bg-[#f6f3fc] border text-sm text-[#140c1c] focus:outline-none focus:ring-2 focus:ring-[#8750f7]/40 focus:border-[#8750f7] transition-all ${
                      errors.service ? "border-rose-400" : "border-[#e8e2f4]"
                    }`}
                  >
                    <option value="" disabled>
                      Select Healthcare Accounting Specialty...
                    </option>
                    <option value="Healthcare Financial Accounting & Revenue Recognition">
                      Healthcare Financial Accounting &amp; Revenue Recognition
                    </option>
                    <option value="ERA & EOB Payment Posting & Reconciliation">
                      ERA &amp; EOB Payment Posting &amp; Reconciliation
                    </option>
                    <option value="Medical Accounts Receivable (AR) & Aging Analysis">
                      Medical Accounts Receivable (AR) &amp; Aging Analysis
                    </option>
                    <option value="Denial Management & Claim Appeals Accounting">
                      Denial Management &amp; Claim Appeals Accounting
                    </option>
                    <option value="Contractual Allowance & Fee Schedule Auditing">
                      Contractual Allowance &amp; Fee Schedule Auditing
                    </option>
                    <option value="Financial Reporting & US Healthcare Compliance">
                      Financial Reporting &amp; US Healthcare Compliance
                    </option>
                    <option value="Senior Healthcare Accountant Career Opportunity">
                      Senior Healthcare Accountant Career Opportunity
                    </option>
                  </select>
                  {errors.service && (
                    <p className="mt-1 text-xs text-rose-500 font-medium">
                      {errors.service[0]}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-bold text-[#2a1454] mb-1.5 uppercase tracking-wider"
                  >
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your practice, billing volume, revenue cycle objectives, or specific inquiry..."
                    required
                    className={`w-full px-4 py-3 rounded-2xl bg-[#f6f3fc] border text-sm text-[#140c1c] placeholder:text-[#747779] focus:outline-none focus:ring-2 focus:ring-[#8750f7]/40 focus:border-[#8750f7] transition-all resize-y ${
                      errors.message ? "border-rose-400" : "border-[#e8e2f4]"
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-rose-500 font-medium">
                      {errors.message[0]}
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="tj-btn-primary w-full sm:w-auto"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Transmission...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right Column: Direct Contact Information */}
          <div className="contact-anim-info lg:col-span-5 space-y-6 lg:pt-4">
            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-center gap-5 p-6 rounded-3xl bg-white border border-[#e8e2f4] shadow-[0_10px_30px_rgba(42,20,84,0.04)] hover:border-[#8750f7] transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#8750f7] to-[#2a1454] flex items-center justify-center text-white shrink-0 shadow-md">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#747779]">
                    Call Direct (UAE)
                  </span>
                  <a
                    href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, "")}`}
                    className="block text-lg font-bold text-[#2a1454] hover:text-[#8750f7] transition-colors mt-0.5"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-5 p-6 rounded-3xl bg-white border border-[#e8e2f4] shadow-[0_10px_30px_rgba(42,20,84,0.04)] hover:border-[#8750f7] transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#8750f7] to-[#2a1454] flex items-center justify-center text-white shrink-0 shadow-md">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#747779]">
                    Email Inquiry
                  </span>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="block text-lg font-bold text-[#2a1454] hover:text-[#8750f7] transition-colors mt-0.5 break-all"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-5 p-6 rounded-3xl bg-white border border-[#e8e2f4] shadow-[0_10px_30px_rgba(42,20,84,0.04)] hover:border-[#8750f7] transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#8750f7] to-[#2a1454] flex items-center justify-center text-white shrink-0 shadow-md">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#747779]">
                    Primary Base
                  </span>
                  <div className="text-lg font-bold text-[#2a1454] mt-0.5">
                    {PERSONAL_INFO.location}
                  </div>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-center gap-5 p-6 rounded-3xl bg-white border border-[#e8e2f4] shadow-[0_10px_30px_rgba(42,20,84,0.04)] hover:border-[#8750f7] transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#8750f7] to-[#2a1454] flex items-center justify-center text-white shrink-0 shadow-md">
                  <LinkedInIcon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#747779]">
                    Professional Network
                  </span>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-lg font-bold text-[#2a1454] hover:text-[#8750f7] transition-colors mt-0.5"
                  >
                    linkedin.com/in/ramz-mustafa
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
