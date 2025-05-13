import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield, Code, User, Mail, BookOpen } from "lucide-react"
import { ProjectCard } from "@/components/project-card"
import { SkillBadge } from "@/components/skill-badge"
import { HeroSection } from "@/components/hero-section"
import Image from "next/image"
import { ThemeToggle } from "@/components/theme-toggle"
import { ContactForm } from "@/components/contact-form"
import { SocialLinks } from "@/components/social-links"
import { SiteHeader } from "@/components/site-header"

// Datos de proyectos destacados
const featuredProjects = [
  {
    title: "Análisis de Vulnerabilidades en Aplicaciones Web",
    description:
      "Desarrollo de una herramienta automatizada para detectar vulnerabilidades comunes en aplicaciones web como XSS, CSRF y SQL Injection.",
    tags: ["Python", "OWASP", "Seguridad Web"],
    image: "/placeholder.svg?height=200&width=400",
    link: "#",
    slug: "analisis-vulnerabilidades-web",
    type: "proyecto",
  },
  {
    title: "Sistema de Detección de Intrusiones",
    description:
      "Implementación de un IDS basado en análisis de comportamiento para detectar actividades sospechosas en redes corporativas.",
    tags: ["Snort", "Linux", "Análisis de Tráfico"],
    image: "/placeholder.svg?height=200&width=400",
    link: "#",
    slug: "sistema-deteccion-intrusiones",
    type: "proyecto",
  },
  {
    title: "Auditoría de Seguridad en Infraestructura Cloud",
    description:
      "Desarrollo de metodología y herramientas para auditar la seguridad en entornos AWS y Azure, identificando configuraciones incorrectas.",
    tags: ["AWS", "Azure", "Cloud Security"],
    image: "/placeholder.svg?height=200&width=400",
    link: "#",
    slug: "auditoria-seguridad-cloud",
    type: "investigacion",
  },
  {
    title: "Análisis Forense Digital",
    description:
      "Proyecto de investigación sobre técnicas avanzadas de análisis forense en dispositivos móviles y recuperación de datos.",
    tags: ["Forense Digital", "Mobile", "Recuperación"],
    image: "/placeholder.svg?height=200&width=400",
    link: "#",
    slug: "analisis-forense-digital",
    type: "investigacion",
  },
  {
    title: "Framework de Pentesting",
    description:
      "Desarrollo de un framework personalizado para realizar pruebas de penetración siguiendo metodologías estándar de la industria.",
    tags: ["Pentesting", "Kali Linux", "Automatización"],
    image: "/placeholder.svg?height=200&width=400",
    link: "#",
    slug: "framework-pentesting",
    type: "proyecto",
  },
  {
    title: "Seguridad en IoT",
    description:
      "Investigación y desarrollo de protocolos de seguridad para dispositivos IoT, enfocado en la protección de datos y comunicaciones.",
    tags: ["IoT", "Seguridad", "Protocolos"],
    image: "/placeholder.svg?height=200&width=400",
    link: "#",
    slug: "seguridad-iot",
    type: "investigacion",
  },
]

// Datos de publicaciones recientes del blog
const recentPosts = [
  {
    title: "Tendencias en Ciberseguridad para 2024",
    description:
      "Análisis de las principales tendencias y amenazas emergentes en el campo de la ciberseguridad para este año.",
    date: "15 de abril, 2024",
    slug: "tendencias-ciberseguridad-2024",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "Técnicas Avanzadas de Evasión de IDS",
    description:
      "Investigación sobre las técnicas modernas utilizadas por atacantes para evadir sistemas de detección de intrusiones.",
    date: "2 de marzo, 2024",
    slug: "tecnicas-evasion-ids",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "Seguridad en Aplicaciones Web Modernas",
    description:
      "Guía completa sobre cómo implementar medidas de seguridad efectivas en aplicaciones web basadas en frameworks modernos.",
    date: "18 de febrero, 2024",
    slug: "seguridad-aplicaciones-web-modernas",
    image: "/placeholder.svg?height=200&width=400",
  },
]

export default function Home() {
  return (
        <div className="min-h-screen bg-gradient-to-b from-cyber-50 via-slate-50 to-cyber-100 dark:from-gray-900 dark:via-gray-800 dark:to-cyber-950">
        <SiteHeader />
        <main className="container py-8 md:py-12">
        <HeroSection />

        <section id="sobre-mi" className="py-12 md:py-16">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col items-center lg:items-start space-y-4">
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-cyber-500 shadow-lg mb-4">
                <Image src="/FotoYanina.jpg" alt="Tu foto" fill className="object-cover" />
              </div>
              <div className="inline-flex items-center gap-2 rounded-md bg-cyber-100 dark:bg-cyber-900/30 px-3 py-1 text-sm font-medium">
                <User className="h-4 w-4" />
                <span>Sobre Mí</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-center lg:text-left">
                Desarrolladora de software
              </h2>
              <p className="text-muted-foreground text-center lg:text-left">
              Hola me llamo Yanina, soy una entusiasta de la tecnología con especial interés en ciberseguridad, control de calidad de software 
              e inteligencia artificial. Me apasiona aprender constantemente y aplicar mis conocimientos en entornos reales
               que representen desafíos técnicos. Actualmente me encuentro en formación como desarrolladora junior, explorando 
               herramientas, metodologías y marcos modernos que fortalezcan mis habilidades en defensa informática, automatización
                de pruebas y análisis de datos. Busco oportunidades que me permitan crecer profesionalmente, colaborar con equipos
                 dinámicos y contribuir con soluciones seguras, eficientes e innovadoras.
              </p>
              <p className="text-muted-foreground text-center lg:text-left">
                Este blog es un espacio donde comparto mis proyectos, investigaciones, conocimientos sobre
                ciberseguridad, control de calidad y herramientas de inteligencia artificial.
              </p>
              <div className="flex gap-4">
                <Button asChild variant="default" className="bg-cyber-600 hover:bg-cyber-700">
                  <Link href="#contacto">Contactar</Link>
                </Button>
                <Button asChild variant="outline" className="border-cyber-200 dark:border-cyber-800">
                  <Link href="#proyectos">Ver Proyectos</Link>
                </Button>
              </div>
            </div>
            <div className="rounded-lg border bg-white/80 dark:bg-gray-800/50 p-8 shadow-sm">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Educación</h3>
                  <div className="border-l-2 border-cyber-500 pl-4">
                    <p className="font-medium">Ingeniería Informática</p>
                    <p className="text-sm text-muted-foreground">Universidad Mayor de San Simon, 2020-2025</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Certificaciones</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="rounded-md border p-2 text-center bg-white/50 dark:bg-gray-800/50">
                      <p className="font-medium">FCF - Introduction to the Thread Landscape 3.0</p>
                      <p className="text-xs text-muted-foreground">Fortinet</p>
                    </div>
                    <div className="rounded-md border p-2 text-center bg-white/50 dark:bg-gray-800/50">
                      <p className="font-medium">Carrera de seguridad informática</p>
                      <p className="text-xs text-muted-foreground">Platzi</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Idiomas</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="rounded-md border p-2 text-center bg-white/50 dark:bg-gray-800/50">
                      <p className="font-medium">Español</p>
                      <p className="text-xs text-muted-foreground">Nativo</p>
                    </div>
                    <div className="rounded-md border p-2 text-center bg-white/50 dark:bg-gray-800/50">
                      <p className="font-medium">Inglés</p>
                      <p className="text-xs text-muted-foreground">A2</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="proyectos" className="py-12 md:py-16 border-t">
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 rounded-md bg-cyber-100 dark:bg-cyber-900/30 px-3 py-1 text-sm font-medium">
                <Code className="h-4 w-4" />
                <span>Proyectos e Investigaciones</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight">Mis Trabajos en Ciberseguridad</h2>
              <p className="text-muted-foreground max-w-3xl">
                Una selección de mis proyectos e investigaciones más relevantes en el campo de la ciberseguridad,
                demostrando mis habilidades técnicas y mi enfoque en la protección de sistemas.
              </p>

            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {featuredProjects.map((project) => (
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
            <div className="flex justify-center">
              <Button asChild variant="outline" className="border-cyber-200 dark:border-cyber-800">
                <Link href="/proyectos">Ver todos los proyectos</Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="blog" className="py-12 md:py-16 border-t">
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 rounded-md bg-cyber-100 dark:bg-cyber-900/30 px-3 py-1 text-sm font-medium">
                <BookOpen className="h-4 w-4" />
                <span>Blog</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight">Publicaciones Recientes</h2>
              <p className="text-muted-foreground max-w-3xl">
                Artículos, tutoriales y análisis sobre temas actuales de ciberseguridad, hacking ético y desarrollo
                seguro.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {recentPosts.map((post, index) => (
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
            <div className="flex justify-center">
              <Button asChild variant="outline" className="border-cyber-200 dark:border-cyber-800">
                <Link href="/blog">Ver todas las publicaciones</Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="habilidades" className="py-12 md:py-16 border-t">
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 rounded-md bg-cyber-100 dark:bg-cyber-900/30 px-3 py-1 text-sm font-medium">
                <Shield className="h-4 w-4" />
                <span>Skills</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight">Competencias Técnicas</h2>
              <p className="text-muted-foreground max-w-3xl">
              Mis habilidades técnicas se desarrollan en el área de la ciberseguridad defensiva, 
              con enfoque en la detección de amenazas, análisis de vulnerabilidades, automatización 
              de controles de calidad y buenas prácticas de desarrollo seguro. También exploro el 
              uso de la inteligencia artificial para fortalecer la gestión de incidentes y la toma
               de decisiones basada en datos.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Seguridad Ofensiva</h3>
                <div className="flex flex-wrap gap-2">
                  <SkillBadge name="Análisis de Vulnerabilidades" />
                  <SkillBadge name="Ingeniería Social" />
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Seguridad Defensiva</h3>
                <div className="flex flex-wrap gap-2">
                  <SkillBadge name="SIEM" />
                  <SkillBadge name="Análisis de Malware" />
                  <SkillBadge name="Forense Digital" />
                  <SkillBadge name="Gestión de Incidentes" />
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Tecnologías y Herramientas</h3>
                <div className="flex flex-wrap gap-2">
                  <SkillBadge name="Kali Linux" />
                  <SkillBadge name="Wireshark" />
                  <SkillBadge name="Burp Suite" />
                  <SkillBadge name="Power BI" />
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Desarrollo y Programación</h3>
                <div className="flex flex-wrap gap-2">
                  <SkillBadge name="Python" />
                  <SkillBadge name="Bash" />
                  <SkillBadge name="PowerShell" />
                  <SkillBadge name="JavaScript" />
                  <SkillBadge name="SQL" />
                  <SkillBadge name="Java" />
                  <SkillBadge name="Assembler" />
                  <SkillBadge name="Haskell" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contacto" className="py-12 md:py-16 border-t">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-md bg-cyber-100 dark:bg-cyber-900/30 px-3 py-1 text-sm font-medium">
                <Mail className="h-4 w-4" />
                <span>Contacto</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight">¿Hablamos?</h2>
              <p className="text-muted-foreground">
                Si tienes alguna consulta, propuesta de colaboración o simplemente quieres charlar,
                no dudes en contactarme. Estaré encantada de hablar contigo.
              </p>

              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Sígueme en redes</h3>
                <SocialLinks />
              </div>
              {/*
              <div className="mt-8 p-6 rounded-lg border bg-white/80 dark:bg-gray-800/50">
                <h3 className="text-xl font-bold mb-2">Newsletter</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Suscríbete para recibir actualizaciones sobre nuevos artículos, proyectos y recursos de
                  ciberseguridad.
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="tu@email.com"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                  <Button className="bg-cyber-600 hover:bg-cyber-700">Suscribirse</Button>
                </div>
              </div> 
              */} 
            </div>

            <div className="rounded-lg border bg-white/80 dark:bg-gray-800/50 p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-4">Envíame un mensaje</h3>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-white/50 dark:bg-gray-900/50">
        <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex items-center gap-4 px-8 md:px-0">
            <Shield className="h-5 w-5 text-cyber-500" />
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Techbynina. Todos los derechos reservados.
            </p>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <Link
              href="/politica-privacidad"
              className="text-xs text-muted-foreground hover:underline underline-offset-4"
            >
              Política de Privacidad
            </Link>
            <Link href="/terminos" className="text-xs text-muted-foreground hover:underline underline-offset-4">
              Términos de Servicio
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
