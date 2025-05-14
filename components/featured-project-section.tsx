import Link from "next/link"
import { getAllProjects } from "@/lib/markdownProjects"
import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { Code } from "lucide-react"

export default async function FeaturedProjectsSection() {
  const projects = await getAllProjects()
  const featured = projects.slice(0, 3) 

  return (
    <section id="proyectos" className="py-12 md:py-16 border-t">
      <div className="space-y-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 rounded-md bg-cyber-100 dark:bg-cyber-900/30 px-3 py-1 text-sm font-medium">
            <Code className="h-4 w-4" />
            <span>Proyectos e Investigaciones</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight">Mis proyectos</h2>
          <p className="text-muted-foreground max-w-3xl">
            Una selección de mis proyectos e investigaciones más relevantes en el campo de la ciberseguridad,
            demostrando mis habilidades técnicas y mi enfoque en la protección de sistemas.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard
              key={project.slug}
              title={project.title}
              description={project.description}
              tags={project.tags ?? []}
              image={project.image}
              link={project.link || ""}
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
  )
}