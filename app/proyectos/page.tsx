import Link from "next/link";
import Image from "next/image";
import { getAllProjects } from "@/lib/markdownProjects";
import { SiteHeader } from "@/components/site-header";
import { Footer } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default async function ProyectosPage() {
  const projects = await getAllProjects();

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
              <h1 className="text-3xl font-bold tracking-tight">Proyectos</h1>
              <p className="text-muted-foreground max-w-3xl">
              Algunos de los proyectos que he creado, investigado o experimentado.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <Link
                  key={project.slug}
                  href={`/proyectos/${project.slug}`}
                  className="group rounded-lg border bg-white/80 dark:bg-gray-800/50 overflow-hidden flex flex-col hover:shadow-md transition-all"
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute bottom-2 right-2 bg-cyber-500 text-white text-xs px-2 py-1 rounded-full">
                      {project.tags?.[0]}
                    </div>
                  </div>
                  <div className="p-4 flex-1 flex flex-col">
                    <p className="text-xs text-cyber-500 mb-2">{project.date}</p>
                    <h3 className="font-bold text-lg mb-2 group-hover:text-cyber-500 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm flex-1 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="mt-4 flex items-center text-sm text-cyber-500 font-medium">
                      Ver detalles
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
  );
}


