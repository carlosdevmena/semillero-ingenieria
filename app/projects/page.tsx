import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"

export const metadata = {
  title: "Proyectos | Semillero de Ingeniería",
  description: "Explora los proyectos actuales y pasados de nuestro semillero de ingeniería.",
}

export default function ProjectsPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Nuestros Proyectos</h1>

      {/* Proyectos Actuales */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Proyectos Actuales</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectCard
            title="Sistema de Monitoreo IoT"
            description="Desarrollo de un sistema de monitoreo ambiental utilizando sensores IoT y procesamiento en la nube. El sistema permite la recolección de datos de temperatura, humedad, calidad del aire y otros parámetros ambientales en tiempo real."
            imageUrl="/placeholder.svg?height=400&width=600"
            tags={["IoT", "Cloud", "Sensores", "Electrónica"]}
            githubUrl="https://github.com"
            demoUrl="#"
          />
          <ProjectCard
            title="Robot Autónomo"
            description="Diseño y construcción de un robot autónomo capaz de navegar en entornos desconocidos. El robot utiliza sensores de proximidad, cámaras y algoritmos de inteligencia artificial para mapear su entorno y tomar decisiones de navegación."
            imageUrl="/placeholder.svg?height=400&width=600"
            tags={["Robótica", "IA", "Sensores", "Mecánica"]}
            githubUrl="https://github.com"
            demoUrl="#"
          />
          <ProjectCard
            title="Aplicación de Realidad Aumentada"
            description="Desarrollo de una aplicación educativa que utiliza realidad aumentada para visualizar conceptos de ingeniería. La aplicación permite a los estudiantes interactuar con modelos 3D de circuitos, estructuras y otros elementos de ingeniería."
            imageUrl="/placeholder.svg?height=400&width=600"
            tags={["AR", "Mobile", "Educación", "Software"]}
            githubUrl="https://github.com"
            demoUrl="#"
          />
          <ProjectCard
            title="Sistema de Energía Renovable"
            description="Diseño e implementación de un sistema de energía renovable para aplicaciones rurales. El sistema combina paneles solares, pequeñas turbinas eólicas y un sistema de almacenamiento de energía eficiente."
            imageUrl="/placeholder.svg?height=400&width=600"
            tags={["Energía", "Sostenibilidad", "Electrónica", "Control"]}
            githubUrl="https://github.com"
            demoUrl="#"
          />
        </div>
      </section>

      {/* Proyectos Pasados */}
      <section>
        <h2 className="text-3xl font-bold mb-8">Proyectos Pasados</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <PastProjectCard
            title="Brazo Robótico Educativo"
            description="Desarrollo de un brazo robótico de bajo costo para fines educativos."
            imageUrl="/placeholder.svg?height=300&width=400"
            year="2022"
            githubUrl="https://github.com"
          />
          <PastProjectCard
            title="Sistema de Riego Automatizado"
            description="Implementación de un sistema de riego inteligente para jardines urbanos."
            imageUrl="/placeholder.svg?height=300&width=400"
            year="2021"
            githubUrl="https://github.com"
          />
          <PastProjectCard
            title="Aplicación de Gestión Académica"
            description="Desarrollo de una aplicación web para la gestión de actividades académicas."
            imageUrl="/placeholder.svg?height=300&width=400"
            year="2021"
            githubUrl="https://github.com"
          />
          <PastProjectCard
            title="Estación Meteorológica"
            description="Construcción de una estación meteorológica de bajo costo con Arduino."
            imageUrl="/placeholder.svg?height=300&width=400"
            year="2020"
            githubUrl="https://github.com"
          />
          <PastProjectCard
            title="Dron de Mapeo"
            description="Desarrollo de un dron para mapeo de terrenos y agricultura de precisión."
            imageUrl="/placeholder.svg?height=300&width=400"
            year="2020"
            githubUrl="https://github.com"
          />
          <PastProjectCard
            title="Asistente Virtual para Laboratorios"
            description="Implementación de un asistente virtual para guiar prácticas de laboratorio."
            imageUrl="/placeholder.svg?height=300&width=400"
            year="2019"
            githubUrl="https://github.com"
          />
        </div>
      </section>
    </main>
  )
}

function ProjectCard({ title, description, imageUrl, tags, githubUrl, demoUrl }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <div className="relative h-64">
        <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span key={tag} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex space-x-3">
          <Button variant="outline" size="sm" asChild>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" /> GitHub
            </a>
          </Button>
          {demoUrl && (
            <Button variant="outline" size="sm" asChild>
              <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" /> Demo
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

function PastProjectCard({ title, description, imageUrl, year, githubUrl }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
        <div className="absolute top-2 right-2 bg-gray-900 text-white text-xs font-bold px-2 py-1 rounded">{year}</div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-3">{description}</p>
        <Button variant="link" size="sm" className="p-0" asChild>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" /> Ver en GitHub
          </a>
        </Button>
      </div>
    </div>
  )
}
