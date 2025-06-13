"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

export default function JoinPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    program: "",
    semester: "",
    interests: "",
    experience: "",
    motivation: "",
    agreeToTerms: false,
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    })
  }

  const handleSelectChange = (name, value) => {
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
      <h1 className="text-4xl font-bold mb-8 text-center">Únete al Semillero</h1>

      {/* Información */}
      <section className="mb-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">¿Por qué unirte?</h2>
            <p className="text-gray-700 mb-6">Formar parte de nuestro semillero te brinda la oportunidad de:</p>
            <ul className="space-y-3">
              <BenefitItem text="Aplicar tus conocimientos teóricos en proyectos reales" />
              <BenefitItem text="Desarrollar habilidades prácticas en tu área de interés" />
              <BenefitItem text="Trabajar en equipo con estudiantes de diferentes semestres" />
              <BenefitItem text="Participar en eventos, competencias y conferencias" />
              <BenefitItem text="Establecer contactos con profesionales y empresas del sector" />
              <BenefitItem text="Complementar tu formación académica" />
            </ul>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Estudiantes trabajando en un proyecto"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Requisitos */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Requisitos</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <RequirementCard
            title="Ser estudiante activo"
            description="Debes estar matriculado en alguno de los programas de ingeniería de nuestra universidad."
          />
          <RequirementCard
            title="Compromiso"
            description="Disponibilidad para asistir a las reuniones semanales y dedicar tiempo a los proyectos."
          />
          <RequirementCard
            title="Interés por la investigación"
            description="Motivación para aprender, investigar y desarrollar proyectos innovadores."
          />
        </div>
      </section>

      {/* Formulario de Inscripción */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Formulario de Inscripción</h2>

        {formSubmitted ? (
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <CheckCircle2 className="h-16 w-16 text-green-500" />
              </div>
              <CardTitle className="text-center text-2xl">¡Solicitud Enviada!</CardTitle>
              <CardDescription className="text-center text-lg">
                Gracias por tu interés en unirte a nuestro semillero.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-700">
                Hemos recibido tu solicitud y nos pondremos en contacto contigo a través del correo electrónico
                proporcionado en los próximos días.
              </p>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button onClick={() => setFormSubmitted(false)}>Enviar otra solicitud</Button>
            </CardFooter>
          </Card>
        ) : (
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Formulario de Inscripción</CardTitle>
              <CardDescription>
                Completa el siguiente formulario para solicitar tu ingreso al semillero.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Nombre completo
                    </label>
                    <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Correo electrónico
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
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="program" className="text-sm font-medium">
                      Programa académico
                    </label>
                    <Select value={formData.program} onValueChange={(value) => handleSelectChange("program", value)}>
                      <SelectTrigger id="program">
                        <SelectValue placeholder="Selecciona tu programa" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="electronica">Ingeniería Electrónica</SelectItem>
                        <SelectItem value="sistemas">Ingeniería de Sistemas</SelectItem>
                        <SelectItem value="mecanica">Ingeniería Mecánica</SelectItem>
                        <SelectItem value="industrial">Ingeniería Industrial</SelectItem>
                        <SelectItem value="otro">Otro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="semester" className="text-sm font-medium">
                      Semestre actual
                    </label>
                    <Select value={formData.semester} onValueChange={(value) => handleSelectChange("semester", value)}>
                      <SelectTrigger id="semester">
                        <SelectValue placeholder="Selecciona tu semestre" />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((sem) => (
                          <SelectItem key={sem} value={sem.toString()}>
                            Semestre {sem}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="interests" className="text-sm font-medium">
                    Áreas de interés
                  </label>
                  <Textarea
                    id="interests"
                    name="interests"
                    placeholder="Ej: Robótica, IoT, Inteligencia Artificial, etc."
                    value={formData.interests}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="experience" className="text-sm font-medium">
                    Experiencia previa (opcional)
                  </label>
                  <Textarea
                    id="experience"
                    name="experience"
                    placeholder="Describe brevemente tu experiencia en proyectos, cursos o actividades relacionadas."
                    value={formData.experience}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="motivation" className="text-sm font-medium">
                    ¿Por qué quieres unirte al semillero?
                  </label>
                  <Textarea
                    id="motivation"
                    name="motivation"
                    placeholder="Cuéntanos tu motivación para formar parte del semillero."
                    value={formData.motivation}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="agreeToTerms"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onCheckedChange={(checked) => setFormData({ ...formData, agreeToTerms: checked })}
                    required
                  />
                  <label
                    htmlFor="agreeToTerms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Acepto recibir comunicaciones del semillero y entiendo que mis datos serán tratados de acuerdo a la
                    política de privacidad.
                  </label>
                </div>

                <Button type="submit" className="w-full">
                  Enviar Solicitud
                </Button>
              </form>
            </CardContent>
          </Card>
        )}
      </section>

      {/* Proceso de Selección */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">Proceso de Selección</h2>
        <div className="max-w-3xl mx-auto">
          <ol className="relative border-l border-gray-200 ml-3">
            <ProcessStep
              number="1"
              title="Recepción de solicitudes"
              description="Revisamos todas las solicitudes recibidas a través del formulario."
            />
            <ProcessStep
              number="2"
              title="Preselección"
              description="Seleccionamos a los candidatos que cumplen con los requisitos básicos."
            />
            <ProcessStep
              number="3"
              title="Entrevista"
              description="Realizamos una entrevista para conocer mejor tus intereses y expectativas."
            />
            <ProcessStep
              number="4"
              title="Selección final"
              description="Notificamos a los candidatos seleccionados y les damos la bienvenida al semillero."
            />
            <ProcessStep
              number="5"
              title="Inducción"
              description="Participas en una sesión de inducción donde conocerás a los demás miembros y los proyectos actuales."
              isLast={true}
            />
          </ol>
        </div>
      </section>
    </main>
  )
}

function BenefitItem({ text }) {
  return (
    <li className="flex items-start">
      <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
      <span>{text}</span>
    </li>
  )
}

function RequirementCard({ title, description }) {
  return (
    <div className="bg-blue-50 p-6 rounded-lg">
      <h3 className="text-xl font-semibold mb-2 text-blue-700">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  )
}

function ProcessStep({ number, title, description, isLast = false }) {
  return (
    <li className={`mb-10 ml-6 ${isLast ? "" : ""}`}>
      <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full -left-4 ring-4 ring-white">
        <span className="text-white font-medium">{number}</span>
      </span>
      <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mb-4 text-base font-normal text-gray-600">{description}</p>
    </li>
  )
}
