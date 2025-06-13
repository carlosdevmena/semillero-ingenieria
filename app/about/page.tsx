import Image from "next/image"

export const metadata = {
  title: "Sobre Nosotros | Semillero de Integral De Ingeniería",
  description: "Conoce más sobre nuestro semillero de ingeniería, nuestras áreas de enfoque y nuestro equipo.",
}

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Sobre Nosotros</h1>

      {/* Misión y Visión */}
      <section className="mb-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-blue-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-blue-700">Misión</h2>
            <p className="text-gray-700">
              Fomentar la investigación y el desarrollo de proyectos innovadores en el campo de la ingeniería,
              proporcionando a los estudiantes un espacio para aplicar sus conocimientos teóricos en problemas reales y
              desarrollar habilidades prácticas que complementen su formación académica.
            </p>
          </div>
          <div className="bg-blue-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-blue-700">Visión</h2>
            <p className="text-gray-700">
              Ser reconocidos como un semillero de referencia en la formación de ingenieros innovadores, capaces de
              aportar soluciones creativas a los desafíos tecnológicos y sociales, y contribuir al avance del
              conocimiento en el campo de la ingeniería.
            </p>
          </div>
        </div>
      </section>

      {/* Áreas de Enfoque */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Áreas de Enfoque</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <FocusAreaCard
            title="Electrónica"
            description="Diseño de circuitos, sistemas embebidos, microcontroladores y procesamiento de señales."
            imageUrl="/placeholder.svg?height=200&width=300"
          />
          <FocusAreaCard
            title="Software"
            description="Desarrollo de aplicaciones, inteligencia artificial, aprendizaje automático y análisis de datos."
            imageUrl="/placeholder.svg?height=200&width=300"
          />
          <FocusAreaCard
            title="Robótica"
            description="Diseño y construcción de robots, sistemas autónomos y automatización de procesos."
            imageUrl="/placeholder.svg?height=200&width=300"
          />
        </div>
      </section>

      {/* Equipo */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">Nuestro Equipo</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <TeamMemberCard
            name="Dr. Juan Pérez"
            role="Coordinador"
            description="Doctor en Ingeniería Electrónica con especialización en sistemas embebidos."
            imageUrl="/placeholder.svg?height=300&width=300"
          />
          <TeamMemberCard
            name="Ing. María Rodríguez"
            role="Asesora"
            description="Ingeniera de Software con experiencia en desarrollo de aplicaciones móviles."
            imageUrl="/placeholder.svg?height=300&width=300"
          />
          <TeamMemberCard
            name="Carlos Gómez"
            role="Líder Estudiantil"
            description="Estudiante de último año de Ingeniería Electrónica, especializado en IoT."
            imageUrl="/placeholder.svg?height=300&width=300"
          />
          <TeamMemberCard
            name="Ana Martínez"
            role="Líder Estudiantil"
            description="Estudiante de Ingeniería de Sistemas, especializada en inteligencia artificial."
            imageUrl="/placeholder.svg?height=300&width=300"
          />
        </div>
      </section>
    </main>
  )
}

function FocusAreaCard({ title, description, imageUrl }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}

function TeamMemberCard({ name, role, description, imageUrl }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow text-center">
      <div className="relative h-64 w-64 mx-auto mt-6">
        <Image src={imageUrl || "/placeholder.svg"} alt={name} fill className="object-cover rounded-full" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <p className="text-blue-600 font-medium mb-2">{role}</p>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}
