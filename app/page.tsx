import Link from "next/link";
import Image from "next/image";
import { Shield, Code, User, Mail, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SkillBadge } from "@/components/skill-badge";
import { HeroSection } from "@/components/hero-section";
import { ContactForm } from "@/components/contact-form";
import { SocialLinks } from "@/components/social-links";
import { SiteHeader } from "@/components/site-header";
import { Footer } from "@/components/site-footer";
import FeaturedProjectsSection from "@/components/featured-project-section";
import { getAllBlogs } from "@/lib/markdown";
import BlogSection from "@/components/blog-section";

export default async function Home() {
  const blogs = await getAllBlogs();

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyber-50 via-slate-50 to-cyber-100 dark:from-gray-900 dark:via-gray-800 dark:to-cyber-950">
      <SiteHeader />
      <main className="container py-8 md:py-12">
        <HeroSection />

        {/* SOBRE MÍ */}
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
                      <p className="font-medium">Carrera Seguridad Informática</p>
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

        {/* PROYECTOS */}
        <FeaturedProjectsSection />

        {/* BLOG */}
        <BlogSection posts={blogs} />
        
        {/* HABILIDADES */}
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

        {/* CONTACTO */}
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
      </main>
      <Footer />
    </div>
  );
}

