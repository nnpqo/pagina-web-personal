import { notFound } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { getCtfBySlug, getAllCtfs } from "@/lib/markdownCtfs";
import { SiteHeader } from "@/components/site-header";
import { Footer } from "@/components/site-footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, ExternalLink, Github } from "lucide-react";
import rehypeRaw from "rehype-raw";

interface CtfPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const ctfs = await getAllCtfs();
  return ctfs.map((ctf) => ({ slug: ctf.slug }));
}

export default async function CtfDetailPage({ params }: CtfPageProps) {
  const { slug } = await Promise.resolve(params);
  const ctf = await getCtfBySlug(slug);
  if (!ctf) return notFound();

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyber-50 via-slate-50 to-cyber-100 dark:from-gray-900 dark:via-gray-800 dark:to-cyber-950">
      <main className="container py-8 md:py-12">
        <div className="flex items-center gap-2 mb-8">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/ctf">
              <ArrowLeft className="h-4 w-4 mr-2" /> Volver
            </Link>
          </Button>
        </div>

        <article className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-8">
            {ctf.tags?.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="bg-cyber-500 text-white text-xs px-2 py-1 rounded-full"
              >
                {tag}
              </Badge>
            ))}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{ctf.title}</h1>

          <div className="flex flex-wrap items-center gap-6 mb-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{ctf.date}</span>
            </div>

            {ctf.link && (
              <a
                href={ctf.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:underline"
              >
                <ExternalLink className="h-4 w-4" /> Enlace del desafio
              </a>
            )}

            {ctf.repo && (
              <a
                href={ctf.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-cyber-500 transition-colors"
              >
                <Github className="h-4 w-4" />
                <span>Repositorio</span>
              </a>
            )}
          </div>

          <div className="prose prose-slate dark:prose-invert max-w-none mb-12">
            <ReactMarkdown
              rehypePlugins={[rehypeRaw]}
              components={{
                img: ({ src = "", alt = "" }) =>
                  src ? (
                    <img
                      src={src}
                      alt={alt}
                      className="rounded border shadow my-4 mx-auto"
                      style={{ maxWidth: "100%", height: "auto" }}
                    />
                  ) : null,
              }}
            >
              {ctf.content}
            </ReactMarkdown>
          </div>
        </article>
      </main>
    </div>
  );
}

