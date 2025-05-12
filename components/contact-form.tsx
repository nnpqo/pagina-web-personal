"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export function ContactForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Aquí iría la llamada a tu API para enviar el correo
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast({
          title: "Mensaje enviado",
          description: "Gracias por contactarme. Te responderé lo antes posible.",
        })
        // Resetear el formulario
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
      } else {
        throw new Error("Error al enviar el mensaje")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "No se pudo enviar el mensaje. Por favor, inténtalo de nuevo.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Nombre</Label>
        <Input id="name" placeholder="Tu nombre" required value={formData.name} onChange={handleChange} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="tu@email.com"
          required
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="subject">Asunto</Label>
        <Input
          id="subject"
          placeholder="Asunto del mensaje"
          required
          value={formData.subject}
          onChange={handleChange}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Mensaje</Label>
        <Textarea
          id="message"
          placeholder="Escribe tu mensaje aquí..."
          className="min-h-[120px]"
          required
          value={formData.message}
          onChange={handleChange}
        />
      </div>
      <Button
        type="submit"
        className="w-full bg-gradient-to-r from-cyber-600 to-cyber-500 hover:from-cyber-700 hover:to-cyber-600"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Enviando..." : "Enviar mensaje"}
      </Button>
    </form>
  )
}
