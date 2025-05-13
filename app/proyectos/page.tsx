import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { Shield, ArrowLeft } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/site-footer"

// Datos de proyectos
const projects = [
  {
    title: "Análisis de Vulnerabilidades en Aplicaciones Web",
    description:
      "Desarrollo de una herramienta automatizada para detectar vulnerabilidades comunes en aplicaciones web como XSS, CSRF y SQL Injection.",
    tags: ["Python", "OWASP", "Seguridad Web"],
    image: "/placeholder.svg?height=200&width=400",
    link: "#",
    slug: "analisis-vulnerabilidades-web",
  },
  {
    title: "Sistema de Detección de Intrusiones",
    description:
      "Implementación de un IDS basado en análisis de comportamiento para detectar actividades sospechosas en redes corporativas.",
    tags: ["Snort", "Linux", "Análisis de Tráfico"],
    image: "/placeholder.svg?height=200&width=400",
    link: "#",
    slug: "sistema-deteccion-intrusiones",
  },
  {
    title: "Auditoría de Seguridad en Infraestructura Cloud",
    description:
      "Desarrollo de metodología y herramientas para auditar la seguridad en entornos AWS y Azure, identificando configuraciones incorrectas.",
    tags: ["AWS", "Azure", "Cloud Security"],
    image: "/placeholder.svg?height=200&width=400",
    link: "#",
    slug: "auditoria-seguridad-cloud",
  },
  {
    title: "Análisis Forense Digital",
    description:
      "Proyecto de investigación sobre técnicas avanzadas de análisis forense en dispositivos móviles y recuperación de datos.",
    tags: ["Forense Digital", "Mobile", "Recuperación"],
    image: "/placeholder.svg?height=200&width=400",
    link: "#",
    slug: "analisis-forense-digital",
  },
  {
    title: "Framework de Pentesting",
    description:
      "Desarrollo de un framework personalizado para realizar pruebas de penetración siguiendo metodologías estándar de la industria.",
    tags: ["Pentesting", "Kali Linux", "Automatización"],
    image: "/placeholder.svg?height=200&width=400",
    link: "#",
    slug: "framework-pentesting",
  },
  {
    title: "Seguridad en IoT",
    description:
      "Investigación y desarrollo de protocolos de seguridad para dispositivos IoT, enfocado en la protección de datos y comunicaciones.",
    tags: ["IoT", "Seguridad", "Protocolos"],
    image: "/placeholder.svg?height=200&width=400",
    link: "#",
    slug: "seguridad-iot",
  },
  {
    title: "Herramienta de Análisis de Malware",
    description:
      "Desarrollo de una herramienta para el análisis estático y dinámico de malware, con capacidades de sandbox y generación de informes.",
    tags: ["Malware", "Análisis", "Python"],
    image: "/placeholder.svg?height=200&width=400",
    link: "#",
    slug: "herramienta-analisis-malware",
  },
  {
    title: "Seguridad en Aplicaciones Móviles",
    description:
      "Investigación y desarrollo de metodologías para evaluar la seguridad en aplicaciones móviles Android e iOS.",
    tags: ["Mobile", "Android", "iOS"],
    image: "/placeholder.svg?height=200&width=400",
    link: "#",
    slug: "seguridad-aplicaciones-moviles",
  },
  {
    title: "Hardening de Sistemas Linux",
    description: "Desarrollo de scripts y guías para el endurecimiento de sistemas Linux en entornos empresariales.",
    tags: ["Linux", "Hardening", "Bash"],
    image: "/placeholder.svg?height=200&width=400",
    link: "#",
    slug: "hardening-sistemas-linux",
  },
  {
    title: "Seguridad en Contenedores",
    description: "Implementación de soluciones de seguridad para entornos de contenedores Docker y Kubernetes.",
    tags: ["Docker", "Kubernetes", "DevSecOps"],
    image: "/placeholder.svg?height=200&width=400",
    link: "#",
    slug: "seguridad-contenedores",
  },
  {
    title: "Análisis de Tráfico de Red",
    description: "Desarrollo de herramientas para el análisis avanzado de tráfico de red y detección de anomalías.",
    tags: ["Wireshark", "Python", "Análisis"],
    image: "/placeholder.svg?height=200&width=400",
    link: "#",
    slug: "analisis-trafico-red",
  },
  {
    title: "Seguridad en APIs",
    description: "Metodología y herramientas para evaluar la seguridad en APIs REST y GraphQL.",
    tags: ["API", "REST", "GraphQL"],
    image: "/placeholder.svg?height=200&width=400",
    link: "#",
    slug: "seguridad-apis",
  },
]

export default function ProyectosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyber-50 via-slate-50 to-cyber-100 dark:from-gray-900 dark:via-gray-800 dark:to-cyber-950">
      <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-gray-900/80 dark:supports-[backdrop-filter]:bg-gray-900/60">
        <div className="container flex h-16 items-center justify-between">
          <SiteHeader />
        </div>
      </header>
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
              <h1 className="text-3xl font-bold tracking-tight">Todos mis proyectos</h1>
              <p className="text-muted-foreground max-w-3xl">
                Una colección completa de mis proyectos en el campo de la ciberseguridad, demostrando mis habilidades
                técnicas y mi enfoque en la protección de sistemas.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <ProjectCard
                  key={project.slug}
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  image={project.image}
                  link={project.link}
                  slug={project.slug}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
