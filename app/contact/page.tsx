"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MapPin, Clock, Facebook, Instagram, Linkedin, Github, CheckCircle2 } from "lucide-react"

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData)
    setFormSubmitted(true)
  }

  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Contacto</h1>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {/* Información de Contacto */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Información de Contacto</h2>
          <div className="space-y-6">
            <ContactInfo
              icon={<Mail className="h-6 w-6 text-blue-600" />}
              title="Correo Electrónico"
              content="semillero@universidad.edu"
              link="mailto:semillero@universidad.edu"
            />
            <ContactInfo
              icon={<MapPin className="h-6 w-6 text-blue-600" />}
              title="Ubicación"
              content="Laboratorio de Ingeniería, Edificio Principal, Universidad, Ciudad"
              link="https://maps.google.com"
            />
            <ContactInfo
              icon={<Clock className="h-6 w-6 text-blue-600" />}
              title="Horario de Atención"
              content="Lunes a Viernes: 9:00 AM - 5:00 PM"
            />
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-6">Redes Sociales</h2>
          <div className="flex space-x-4">
            <SocialLink icon={<Facebook className="h-6 w-6" />} href="#" label="Facebook" />
            <SocialLink icon={<Instagram className="h-6 w-6" />} href="#" label="Instagram" />
            <SocialLink icon={<Linkedin className="h-6 w-6" />} href="#" label="LinkedIn" />
            <SocialLink icon={<Github className="h-6 w-6" />} href="#" label="GitHub" />
          </div>
        </div>

        {/* Formulario de Contacto */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Envíanos un Mensaje</h2>

          {formSubmitted ? (
            <Card>
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <CheckCircle2 className="h-16 w-16 text-green-500" />
                </div>
                <CardTitle className="text-center text-2xl">¡Mensaje Enviado!</CardTitle>
                <CardDescription className="text-center text-lg">Gracias por contactarnos.</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-700">Hemos recibido tu mensaje y te responderemos lo antes posible.</p>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button onClick={() => setFormSubmitted(false)}>Enviar otro mensaje</Button>
              </CardFooter>
            </Card>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle>Formulario de Contacto</CardTitle>
                <CardDescription>Completa el siguiente formulario y te responderemos lo antes posible.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Nombre
                    </label>
                    <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Correo Electrónico
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Asunto
                    </label>
                    <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Mensaje
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Enviar Mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      {/* Mapa */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-center">Encuéntranos</h2>
        <div className="h-96 bg-gray-200 rounded-lg overflow-hidden">
          {/* Aquí iría un mapa real, por ahora usamos un placeholder */}
          <div className="w-full h-full flex items-center justify-center bg-gray-100">
            <p className="text-gray-500 text-lg">Mapa de ubicación</p>
          </div>
        </div>
      </section>
    </main>
  )
}

function ContactInfo({ icon, title, content, link }) {
  return (
    <div className="flex items-start">
      <div className="mr-4">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        {link ? (
          <a
            href={link}
            className="text-gray-600 hover:text-blue-600 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            {content}
          </a>
        ) : (
          <p className="text-gray-600">{content}</p>
        )}
      </div>
    </div>
  )
}

function SocialLink({ icon, href, label }) {
  return (
    <a
      href={href}
      className="bg-gray-100 hover:bg-blue-100 p-3 rounded-full transition-colors"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      {icon}
    </a>
  )
}
