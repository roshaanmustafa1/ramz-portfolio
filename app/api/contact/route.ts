import { NextResponse } from "next/server"
import { z } from "zod"

const contactSchema = z.object({
  firstName: z.string().trim().min(2, "First name must be at least 2 characters"),
  lastName: z.string().trim().min(2, "Last name must be at least 2 characters"),
  email: z.string().trim().email("Please provide a valid email address"),
  phone: z.string().trim().optional(),
  service: z.string().trim().min(1, "Please select an area of expertise or service"),
  message: z.string().trim().min(10, "Message must be at least 10 characters long"),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const parsed = contactSchema.safeParse(body)

    if (!parsed.success) {
      const fieldErrors = parsed.error.flatten().fieldErrors
      return NextResponse.json(
        {
          success: false,
          errors: fieldErrors,
          message: "Validation failed. Please correct the highlighted fields.",
        },
        { status: 400 }
      )
    }

    const { firstName, lastName, email, phone, service, message } = parsed.data

    // If an email service provider is configured via env vars, dispatch it
    if (process.env.RESEND_API_KEY) {
      try {
        const res = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: process.env.EMAIL_FROM || "onboarding@resend.dev",
            to: process.env.CONTACT_NOTIFICATION_EMAIL || "ramz12mustafa@gmail.com",
            subject: `New Portfolio Inquiry from ${firstName} ${lastName} (${service})`,
            html: `
              <h2>New Procurement Consultation Inquiry</h2>
              <p><strong>Name:</strong> ${firstName} ${lastName}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
              <p><strong>Service / Area:</strong> ${service}</p>
              <hr />
              <p><strong>Message:</strong></p>
              <p>${message.replace(/\n/g, "<br>")}</p>
            `,
          }),
        })

        if (!res.ok) {
          console.error("Resend delivery failed:", await res.text())
        }
      } catch (err) {
        console.error("Failed to forward email via Resend:", err)
      }
    }

    // Genuine receipt logged securely on server
    console.log("[Contact Inquiry Received]:", {
      name: `${firstName} ${lastName}`,
      email,
      phone,
      service,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you for reaching out. Your inquiry has been received, and Ramz Mustafa will get back to you shortly.",
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error handling contact submission:", error)
    return NextResponse.json(
      {
        success: false,
        message: "An internal server error occurred. Please try again or email ramz12mustafa@gmail.com directly.",
      },
      { status: 500 }
    )
  }
}
