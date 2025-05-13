import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft} from "lucide-react"
import { SiteHeader } from "@/components/site-header"

import { Footer } from "@/components/site-footer"

// Datos de publicaciones del blog
const blogPosts = [
  {
    title: "Tendencias en Ciberseguridad para 2024",
    description:
      "Análisis de las principales tendencias y amenazas emergentes en el campo de la ciberseguridad para este año.",
    date: "15 de abril, 2024",
    slug: "tendencias-ciberseguridad-2024",
    image: "/placeholder.svg?height=200&width=400",
    category: "Tendencias",
  },
  {
    title: "Técnicas Avanzadas de Evasión de IDS",
    description:
      "Investigación sobre las técnicas modernas utilizadas por atacantes para evadir sistemas de detección de intrusiones.",
    date: "2 de marzo, 2024",
    slug: "tecnicas-evasion-ids",
    image: "/placeholder.svg?height=200&width=400",
    category: "Seguridad Defensiva",
  },
  {
    title: "Seguridad en Aplicaciones Web Modernas",
    description:
      "Guía completa sobre cómo implementar medidas de seguridad efectivas en aplicaciones web basadas en frameworks modernos.",
    date: "18 de febrero, 2024",
    slug: "seguridad-aplicaciones-web-modernas",
    image: "/placeholder.svg?height=200&width=400",
    category: "Desarrollo Seguro",
  },
  {
    title: "Análisis de Malware: Técnicas y Herramientas",
    description:
      "Metodologías y herramientas para el análisis efectivo de malware, desde análisis estático hasta dinámico.",
    date: "5 de febrero, 2024",
    slug: "analisis-malware-tecnicas-herramientas",
    image: "/placeholder.svg?height=200&width=400",
    category: "Análisis de Malware",
  },
  {
    title: "Introducción al Hacking Ético",
    description: "Guía para principiantes sobre hacking ético, metodologías y consideraciones legales y éticas.",
    date: "20 de enero, 2024",
    slug: "introduccion-hacking-etico",
    image: "/placeholder.svg?height=200&width=400",
    category: "Hacking Ético",
  },
  {
    title: "Seguridad en Contenedores Docker",
    description: "Mejores prácticas y configuraciones para asegurar entornos de contenedores Docker en producción.",
    date: "10 de enero, 2024",
    slug: "seguridad-contenedores-docker",
    image: "/placeholder.svg?height=200&width=400",
    category: "DevSecOps",
  },
  {
    title: "OSINT: Técnicas de Reconocimiento",
    description: "Herramientas y metodologías para la recopilación de información de fuentes abiertas (OSINT).",
    date: "28 de diciembre, 2023",
    slug: "osint-tecnicas-reconocimiento",
    image: "/placeholder.svg?height=200&width=400",
    category: "Reconocimiento",
  },
  {
    title: "Hardening de Servidores Linux",
    description: "Guía paso a paso para el endurecimiento de servidores Linux en entornos de producción.",
    date: "15 de diciembre, 2023",
    slug: "hardening-servidores-linux",
    image: "/placeholder.svg?height=200&width=400",
    category: "Seguridad en Sistemas",
  },
  {
    title: "Análisis Forense Digital",
    description: "Metodologías y herramientas para la investigación forense digital en incidentes de seguridad.",
    date: "1 de diciembre, 2023",
    slug: "analisis-forense-digital",
    image: "/placeholder.svg?height=200&width=400",
    category: "Forense Digital",
  },
]


export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyber-50 via-slate-50 to-cyber-100 dark:from-gray-900 dark:via-gray-800 dark:to-cyber-950">
      <SiteHeader />
      <main className="container py-8 md:py-12">
        <div className="flex items-center gap-2 mb-8">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver
            </Link>
          </Button>
        </div>

        <section className="py-8">
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tight">Blog de Ciberseguridad</h1>
              <p className="text-muted-foreground max-w-3xl">
                Artículos, tutoriales y análisis sobre temas actuales de ciberseguridad, hacking ético y desarrollo
                seguro.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group rounded-lg border bg-white/80 dark:bg-gray-800/50 overflow-hidden flex flex-col hover:shadow-md transition-all"
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute top-2 right-2 bg-cyber-500 text-white text-xs px-2 py-1 rounded-full">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-4 flex-1 flex flex-col">
                    <p className="text-xs text-cyber-500 mb-2">{post.date}</p>
                    <h3 className="font-bold text-lg mb-2 group-hover:text-cyber-500 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm flex-1">{post.description}</p>
                    <div className="mt-4 flex items-center text-sm text-cyber-500 font-medium">
                      Leer más
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                      >
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
