import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { getProjectBySlug, getAllProjects } from "@/lib/markdownProjects";
import { SiteHeader } from "@/components/site-header";
import { Footer } from "@/components/site-footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, ExternalLink, Github } from "lucide-react";
import rehypeRaw from "rehype-raw";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const projects = await getAllProjects();
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await Promise.resolve(params);
  const project = await getProjectBySlug(slug);
  if (!project) return notFound();

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyber-50 via-slate-50 to-cyber-100 dark:from-gray-900 dark:via-gray-800 dark:to-cyber-950">
      <SiteHeader />
      <main className="container py-8 md:py-12">
        <div className="flex items-center gap-2 mb-8">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/proyectos">
              <ArrowLeft className="h-4 w-4 mr-2" /> Volver
            </Link>
          </Button>
        </div>

        <article className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 ">{project.title}</h1>

          <div className="flex flex-wrap items-center gap-6 mb-6 text-sm text-muted-foreground"></div>
          <div className="relative h-64 md:h-96 w-full mb-8 rounded-lg overflow-hidden">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags?.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="bg-cyber-100 text-cyber-700 dark:bg-cyber-900/30 dark:text-cyber-300"
              >
                {tag}
              </Badge>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-6 mb-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{project.date}</span>
            </div>

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:underline"
              >
                <ExternalLink className="h-4 w-4" /> Demo en vivo
              </a>
            )}
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-cyber-500 transition-colors"
              >
              <Github className="h-4 w-4" />
              <span>Código fuente</span>
              </a>
            )}
          </div>
          <div className="prose prose-slate dark:prose-invert max-w-none mb-12">
          <ReactMarkdown
            rehypePlugins={[rehypeRaw]}
            components={{
              img: ({ src = "", alt = "" }) => (
                <img
                  src={src}
                  alt={alt}
                  className="rounded border shadow my-4 mx-auto"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              ),
            }}
          >
            {project.content}
          </ReactMarkdown>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}

