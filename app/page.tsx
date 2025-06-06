import Link from "next/link";
import Image from "next/image";
import { Shield, User, Mail} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SkillBadge } from "@/components/skill-badge";
import { HeroSection } from "@/components/hero-section";
import { ContactForm } from "@/components/contact-form";
import { SocialLinks } from "@/components/social-links";
import FeaturedProjectsSection from "@/components/featured-project-section";
import { getAllBlogs } from "@/lib/markdown";
import BlogSection from "@/components/blog-section";
import { ScrollReveal } from "@/components/scrollReveal";
import CtfSection from "@/components/ctfs-section"


export default async function Home() {
  const blogs = await getAllBlogs();

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyber-50 via-slate-50 to-cyber-100 dark:from-gray-900 dark:via-gray-800 dark:to-cyber-950">
      <main className="container py-8 md:py-12">
        <ScrollReveal>
        <HeroSection />
        </ScrollReveal>
        {/* SOBRE MÍ */}
        <ScrollReveal>
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
              Hola, soy Yanina, una desarrolladora en formación con una fuerte pasión 
              por la tecnología y el aprendizaje constante. A lo largo de mi camino he 
              explorado distintas áreas del desarrollo de software: desde la programación 
              y la automatización, hasta temas relacionados con la seguridad, la calidad y
               la inteligencia artificial. No me limito a un solo campo porque disfruto 
               entender cómo funcionan los sistemas desde distintas perspectivas 
               y cómo se pueden mejorar.
              Me considero autodidacta, curiosa y comprometida con mi crecimiento profesional.
              </p>
              <p className="text-muted-foreground text-center lg:text-left">
              Este blog es un espacio donde registro y comparto parte de ese proceso. 
              Aquí encontrarás ideas, reflexiones, investigaciones y recursos que surgen 
              mientras aprendo, construyo y evoluciono como desarrolladora. Mi objetivo es
               seguir creciendo, colaborar con otros y aportar valor desde donde me encuentre.
              </p>
              <div className="flex gap-4">
                <Button
                  asChild
                  variant="default"
                  className="bg-cyber-600 hover:bg-cyber-700 min-h-[44px]"
                >
                  <Link href="#contacto">Contactar</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-cyber-200 dark:border-cyber-800 min-h-[44px]"
                >
                  <Link href="#proyectos">Ver Proyectos</Link>
                </Button>
              </div>
            </div>
            {/* EDUCACIÓN, CERTIFICACIONES, IDIOMAS */}
            <div className="rounded-lg border bg-white/80 dark:bg-gray-800/50 p-8 shadow-sm">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Educación</h3>
                  <div className="border-l-2 border-cyber-500 pl-4">
                    <p className="font-medium">Ingeniería Informática</p>
                    <p className="text-sm text-muted-foreground">Universidad Mayor de San Simón, 2020-2025</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Certificaciones</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="rounded-md border p-2 text-center bg-white/50 dark:bg-gray-800/50">
                      <p className="font-medium">FCF - Threat Landscape 3.0</p>
                      <p className="text-xs text-muted-foreground">Fortinet</p>
                    </div>
                    <div className="rounded-md border p-2 text-center bg-white/50 dark:bg-gray-800/50">
                      <p className="font-medium">Seguridad Informática</p>
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
        </ScrollReveal>
        
        {/* SECCIÓN DE PROYECTOS DESTACADOS */}
        {/* PROYECTOS */}
        <ScrollReveal>
        <FeaturedProjectsSection />
        
        
        <BlogSection/>
        </ScrollReveal>
        {/* SECCIÓN DE BLOG */}
        <ScrollReveal>
          <CtfSection/>
        </ScrollReveal>
        
        {/* HABILIDADES */}
        <ScrollReveal>
        <section id="habilidades" className="py-12 md:py-16 border-t">
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 rounded-md bg-cyber-100 dark:bg-cyber-900/30 px-3 py-1 text-sm font-medium">
                <Shield className="h-4 w-4" />
                <span>Skills</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight">Competencias Técnicas</h2>
              <p className="text-muted-foreground max-w-3xl">
                Mis habilidades técnicas se desarrollan en el construir software con enfoque en la automatización, 
                la calidad y la seguridad, integrando soluciones que combinan lógica, análisis y tecnología
                para resolver problemas de forma eficiente y confiable.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
          
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Tecnologías y Herramientas</h3>
                <div className="flex flex-wrap gap-2">
                  <SkillBadge name="Kali" />
                  <SkillBadge name="Wireshark" />
                  <SkillBadge name="Burp Suite" />
                  <SkillBadge name="Power BI" />
                  <SkillBadge name="Next.js" />
                  <SkillBadge name="Figma" />
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Desarrollo y Programación</h3>
                <div className="flex flex-wrap gap-2">
                  <SkillBadge name="Python" />
                  <SkillBadge name="Bash" />
                  <SkillBadge name="React" />
                  <SkillBadge name="JavaScript" />
                  <SkillBadge name="SQL" />
                  <SkillBadge name="Java" />
                  <SkillBadge name="Assembly" />
                  <SkillBadge name="Haskell" />
                </div>
              </div>
            </div>
            <div className="space-y-4">
                <h3 className="text-xl font-bold">Seguridad</h3>
                <div className="flex flex-wrap gap-2">
                  <SkillBadge name="Ingeniería Social" />
                  <SkillBadge name="Forense Digital" />
                </div>
              </div>
          </div>
        </section>
        </ScrollReveal>
        {/* CONTACTO */}
        <ScrollReveal>
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
            </div>
            <div className="rounded-lg border bg-white/80 dark:bg-gray-800/50 p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-4">Envíame un mensaje</h3>
              <ContactForm />
            </div>
          </div>
        </section>
        </ScrollReveal>
      </main>
    </div>
  );
}

