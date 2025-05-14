import Link from "next/link";
import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { Footer } from "@/components/site-footer";
import { HeroSection } from "@/components/hero-section";
import { getAllProjects } from "@/lib/markdownProjects";
import { getAllBlogs } from "@/lib/markdown";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project-card";
import { Mail } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { SocialLinks } from "@/components/social-links";
import { Badge } from "@/components/ui/badge";

export default async function Home() {
  const projects = await getAllProjects();
  const blogs = await getAllBlogs();

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyber-50 via-slate-50 to-cyber-100 dark:from-gray-900 dark:via-gray-800 dark:to-cyber-950">
      <SiteHeader />
      <main className="container py-8 md:py-12">
        <HeroSection />

        <section id="proyectos" className="py-12 md:py-16 border-t">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">Proyectos</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <ProjectCard
                  key={project.slug}
                  title={project.title}
                  description={project.description}
                  tags={project.tags ?? []}
                  image={project.image}
                  link={project.link ?? ""}
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
            <h2 className="text-3xl font-bold tracking-tight">Blog</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {blogs.map((post) => (
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
                    {post.category && (
                      <div className="absolute top-2 right-2 bg-cyber-500 text-white text-xs px-2 py-1 rounded-full">
                        {post.category}
                      </div>
                    )}
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
