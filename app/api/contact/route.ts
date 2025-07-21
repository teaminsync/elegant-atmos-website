import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json()
    const { name, email, phone, message } = formData

    // First, submit to Google Sheets via Apps Script Web App
    let sheetsSuccess = false
    try {
      const sheetsResponse = await fetch(process.env.NEXT_PUBLIC_SHEETS_FORM!, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Send as JSON
        },
        body: JSON.stringify(formData), // Send the raw formData as JSON
      })

      const sheetsResult = await sheetsResponse.json() // Expect JSON response from Apps Script
      sheetsSuccess = sheetsResult.result === "success"
      if (!sheetsSuccess) {
        console.error("Google Sheets submission failed:", sheetsResult.message || "Unknown error")
      }
    } catch (sheetsError) {
      console.error("Google Sheets submission error:", sheetsError)
    }

    // Send email notification using Nodemailer
    let emailSuccess = false
    try {
      // Create transporter using Gmail SMTP
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.GMAIL_USER, // Your Gmail address
          pass: process.env.GMAIL_APP_PASSWORD, // Your Gmail App Password
        },
      })

      // Email content with Elegant Atmos color palette
      const htmlContent = `
        <div style="font-family: 'Times New Roman', serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #FEF7E5; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.05);">
          <div style="background-color: #2D4030; padding: 25px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="font-family: 'Butler', serif; color: #FEF7E5; margin: 0; font-size: 28px; line-height: 1.2;">New Inquiry - Elegant Atmos</h1>
          </div>
          <div style="background-color: #FFFFFF; padding: 30px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
            <h2 style="font-family: 'Butler', serif; color: #2D4030; margin-top: 0; font-size: 24px; border-bottom: 2px solid #C8B46B; padding-bottom: 10px; margin-bottom: 20px;">Contact Details</h2>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #EDE7DD; font-weight: bold; color: #3A3A3A; width: 30%;">Name:</td>
                <td style="padding: 10px; border-bottom: 1px solid #EDE7DD; color: #3A3A3A;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #EDE7DD; font-weight: bold; color: #3A3A3A;">Phone:</td>
                <td style="padding: 10px; border-bottom: 1px solid #EDE7DD; color: #3A3A3A;">+91 ${phone}</td>
              </tr>
              ${
                email
                  ? `
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #EDE7DD; font-weight: bold; color: #3A3A3A;">Email:</td>
                <td style="padding: 10px; border-bottom: 1px solid #EDE7DD; color: #3A3A3A;">${email}</td>
              </tr>
              `
                  : ""
              }
            </table>
            ${
              message
                ? `
            <h2 style="font-family: 'Butler', serif; color: #2D4030; margin-top: 30px; font-size: 24px; border-bottom: 2px solid #C8B46B; padding-bottom: 10px; margin-bottom: 20px;">Message</h2>
            <div style="background-color: #EDE7DD; padding: 15px; border-radius: 5px; border-left: 4px solid #C8B46B;">
              <p style="margin: 0; line-height: 1.6; color: #3A3A3A;">${message}</p>
            </div>
            `
                : ""
            }
            <div style="margin-top: 30px; padding: 20px; background-color: #EDE7DD; border-radius: 5px; border: 1px solid #C8B46B;">
              <h3 style="font-family: 'Butler', serif; color: #2D4030; margin-top: 0; font-size: 20px;">Quick Actions</h3>
              <p style="margin: 10px 0; color: #3A3A3A;">
                <strong>Call:</strong> <a href="tel:+91${phone}" style="color: #2D4030; text-decoration: none; font-weight: bold;">+91 ${phone}</a>
              </p>
              <p style="margin: 10px 0; color: #3A3A3A;">
                <strong>WhatsApp:</strong> <a href="https://wa.me/91${phone}" style="color: #2D4030; text-decoration: none; font-weight: bold;" target="_blank">Send WhatsApp Message</a>
              </p>
              ${
                email
                  ? `
              <p style="margin: 10px 0; color: #3A3A3A;">
                <strong>Email:</strong> <a href="mailto:${email}" style="color: #2D4030; text-decoration: none; font-weight: bold;">${email}</a>
              </p>
              `
                  : ""
              }
            </div>
          </div>
          <div style="text-align: center; margin-top: 20px; color: #B8B2A7; font-size: 12px;">
            <p>This inquiry was submitted through the Elegant Atmos website contact form.</p>
            <p>Submitted on: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</p>
          </div>
        </div>
      `
      // Send email
      const mailOptions = {
        from: `"Elegant Atmos" <${process.env.GMAIL_USER}>`,
        to: "homes@elegantatmos.com", // Replace with your actual recipient email(s)
        subject: `New Inquiry from ${name} - Elegant Atmos`,
        html: htmlContent,
        // Optional: Add reply-to if customer provided email
        ...(email && { replyTo: email }),
      }
      await transporter.sendMail(mailOptions)
      emailSuccess = true
      console.log("Email sent successfully via Nodemailer")
    } catch (emailError) {
      console.error("Email sending error:", emailError)
    }

    // Return response based on success/failure
    if (sheetsSuccess || emailSuccess) {
      return NextResponse.json({
        success: true,
        message: "Form submitted successfully",
        details: {
          sheetsSubmitted: sheetsSuccess,
          emailSent: emailSuccess,
        },
      })
    } else {
      return NextResponse.json(
        {
          success: false,
          message: "Failed to submit form. Please try again or contact us directly.",
        },
        { status: 500 },
      )
    }
  } catch (error) {
    console.error("Contact form submission error:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Internal server error. Please try again later.",
      },
      { status: 500 },
    )
  }
}
