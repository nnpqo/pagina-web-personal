import { Resend } from "resend"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Faltan campos requeridos" }, { status: 400 })
    }

    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "yaninapaolaquispeorellana@gmail.com", 
      subject: `Nuevo mensaje: ${subject}`,
      replyTo: email,
      html: `
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Correo:</strong> ${email}</p>
        <p><strong>Asunto:</strong> ${subject}</p>
        <p><strong>Mensaje:</strong><br/>${message}</p>
      `,
    })

    console.log("Correo enviado:", data)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error al enviar el correo:", error)
    return NextResponse.json({ error: "No se pudo enviar el correo" }, { status: 500 })
  }
}

