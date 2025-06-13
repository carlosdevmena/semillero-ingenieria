import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin } from "lucide-react"

export const metadata = {
  title: "Eventos | Semillero de Ingeniería",
  description: "Conoce los próximos eventos y noticias de nuestro semillero de ingeniería.",
}

export default function EventsPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Eventos y Noticias</h1>

      {/* Próximos Eventos */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Próximos Eventos</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <EventCard
            title="Taller de Introducción a Arduino"
            description="Aprende los fundamentos de Arduino y cómo utilizarlo para tus proyectos de electrónica. Este taller está dirigido a principiantes y no requiere conocimientos previos."
            imageUrl="/placeholder.svg?height=400&width=600"
            date="15 de Mayo, 2025"
            time="14:00 - 17:00"
            location="Laboratorio de Electrónica, Edificio Principal"
            registrationUrl="#"
          />
          <EventCard
            title="Hackathon: Soluciones IoT"
            description="Participa en nuestro hackathon de 24 horas donde desarrollarás soluciones basadas en Internet de las Cosas para problemas reales. Forma tu equipo y demuestra tus habilidades."
            imageUrl="/placeholder.svg?height=400&width=600"
            date="5-6 de Junio, 2025"
            time="Desde las 10:00 (24 horas)"
            location="Centro de Innovación, Campus Norte"
            registrationUrl="#"
          />
        </div>
      </section>

      {/* Noticias */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Noticias</h2>
        <div className="space-y-8">
          <NewsCard
            title="Nuestro equipo ganó el primer lugar en la competencia nacional de robótica"
            content="Nos complace anunciar que nuestro equipo de robótica ha ganado el primer lugar en la competencia nacional de robótica universitaria. El equipo, compuesto por estudiantes de diferentes semestres, presentó un robot autónomo capaz de navegar en entornos complejos y realizar tareas de rescate."
            imageUrl="/placeholder.svg?height=400&width=600"
            date="28 de Abril, 2025"
            author="Comité de Comunicaciones"
          />
          <NewsCard
            title="Nuevo convenio con empresa tecnológica para desarrollo de proyectos"
            content="Hemos firmado un convenio de colaboración con TechInnovate, una empresa líder en el sector tecnológico. Este convenio permitirá a nuestros estudiantes desarrollar proyectos en conjunto con profesionales de la industria, acceder a tecnología de punta y realizar prácticas profesionales."
            imageUrl="/placeholder.svg?height=400&width=600"
            date="15 de Abril, 2025"
            author="Coordinación del Semillero"
          />
          <NewsCard
            title="Apertura de inscripciones para nuevos miembros"
            content="Estamos abriendo las inscripciones para nuevos miembros del semillero. Si eres estudiante de ingeniería y estás interesado en desarrollar proyectos innovadores, aprender nuevas tecnologías y formar parte de un equipo multidisciplinario, ¡esta es tu oportunidad!"
            imageUrl="/placeholder.svg?height=400&width=600"
            date="5 de Abril, 2025"
            author="Comité de Admisiones"
          />
        </div>
      </section>

      {/* Eventos Pasados */}
      <section>
        <h2 className="text-3xl font-bold mb-8">Eventos Pasados</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <PastEventCard
            title="Conferencia: Inteligencia Artificial en la Ingeniería"
            description="Conferencia sobre las aplicaciones de la IA en diferentes campos de la ingeniería."
            imageUrl="/placeholder.svg?height=300&width=400"
            date="10 de Marzo, 2025"
          />
          <PastEventCard
            title="Taller de Desarrollo Web"
            description="Taller práctico sobre desarrollo web con React y Next.js."
            imageUrl="/placeholder.svg?height=300&width=400"
            date="25 de Febrero, 2025"
          />
          <PastEventCard
            title="Visita a Planta Industrial"
            description="Visita guiada a la planta de producción de una empresa de tecnología."
            imageUrl="/placeholder.svg?height=300&width=400"
            date="15 de Febrero, 2025"
          />
          <PastEventCard
            title="Seminario de Energías Renovables"
            description="Seminario sobre las últimas tendencias en energías renovables y sostenibilidad."
            imageUrl="/placeholder.svg?height=300&width=400"
            date="5 de Febrero, 2025"
          />
          <PastEventCard
            title="Taller de Impresión 3D"
            description="Taller práctico sobre diseño e impresión 3D para proyectos de ingeniería."
            imageUrl="/placeholder.svg?height=300&width=400"
            date="20 de Enero, 2025"
          />
          <PastEventCard
            title="Charla: Emprendimiento en Ingeniería"
            description="Charla sobre cómo convertir proyectos de ingeniería en emprendimientos exitosos."
            imageUrl="/placeholder.svg?height=300&width=400"
            date="10 de Enero, 2025"
          />
        </div>
      </section>
    </main>
  )
}

function EventCard({ title, description, imageUrl, date, time, location, registrationUrl }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <div className="relative h-64">
        <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-700">
            <Calendar className="h-5 w-5 mr-2 text-blue-600" />
            <span>{date}</span>
          </div>
          <div className="flex items-center text-gray-700">
            <Clock className="h-5 w-5 mr-2 text-blue-600" />
            <span>{time}</span>
          </div>
          <div className="flex items-center text-gray-700">
            <MapPin className="h-5 w-5 mr-2 text-blue-600" />
            <span>{location}</span>
          </div>
        </div>
        <Button asChild>
          <a href={registrationUrl}>Inscribirse</a>
        </Button>
      </div>
    </div>
  )
}

function NewsCard({ title, content, imageUrl, date, author }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="md:flex">
        <div className="md:w-1/3 relative h-64 md:h-auto">
          <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
        </div>
        <div className="md:w-2/3 p-6">
          <div className="flex items-center text-gray-500 text-sm mb-2">
            <span>{date}</span>
            <span className="mx-2">•</span>
            <span>{author}</span>
          </div>
          <h3 className="text-2xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600">{content}</p>
        </div>
      </div>
    </div>
  )
}

function PastEventCard({ title, description, imageUrl, date }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
          <div className="p-4 text-white">
            <div className="text-sm mb-1">{date}</div>
            <h3 className="text-lg font-semibold">{title}</h3>
          </div>
        </div>
      </div>
      <div className="p-4">
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  )
}
