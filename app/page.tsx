import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Lightbulb, Calendar } from "lucide-react"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Semillero Integral de Ingenierías</h1>
              <p className="text-xl text-gray-700">
                Formando la próxima generación de ingenieros innovadores a través de la investigación, el desarrollo y
                la aplicación práctica de conocimientos.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href="/join">
                    Únete al Semillero <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/projects">Ver Proyectos</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-8 border-white shadow-xl">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Logo del Semillero de Ingeniería"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">¿Qué hacemos?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Lightbulb className="h-10 w-10 text-blue-600" />}
              title="Investigación"
              description="Desarrollamos proyectos de investigación en diversas áreas de la ingeniería, aplicando conocimientos teóricos a problemas reales."
            />
            <FeatureCard
              icon={<Users className="h-10 w-10 text-blue-600" />}
              title="Colaboración"
              description="Trabajamos en equipo con estudiantes y profesores para fomentar un ambiente de aprendizaje colaborativo."
            />
            <FeatureCard
              icon={<Calendar className="h-10 w-10 text-blue-600" />}
              title="Eventos"
              description="Organizamos talleres, conferencias y participamos en competencias para ampliar nuestros conocimientos y habilidades."
            />
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Proyectos Destacados</h2>
            <Button variant="outline" asChild>
              <Link href="/projects">Ver todos</Link>
            </Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard
              title="Sistema de Monitoreo IoT"
              description="Desarrollo de un sistema de monitoreo ambiental utilizando sensores IoT y procesamiento en la nube."
              imageUrl="/placeholder.svg?height=300&width=400"
            />
            <ProjectCard
              title="Robot Autónomo"
              description="Diseño y construcción de un robot autónomo capaz de navegar en entornos desconocidos."
              imageUrl="/placeholder.svg?height=300&width=400"
            />
            <ProjectCard
              title="Aplicación de Realidad Aumentada"
              description="Desarrollo de una aplicación educativa que utiliza realidad aumentada para visualizar conceptos de ingeniería."
              imageUrl="/placeholder.svg?height=300&width=400"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Quieres ser parte de nuestro semillero?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Estamos buscando estudiantes apasionados por la ingeniería y con ganas de aprender y desarrollar proyectos
            innovadores.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/join">
              Conoce cómo unirte <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function ProjectCard({ title, description, imageUrl }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Button variant="link" className="p-0" asChild>
          <Link href="/projects">
            Ver más <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
