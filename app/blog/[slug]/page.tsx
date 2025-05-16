
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import ReactMarkdown from "react-markdown"
import { getBlogBySlug, getAllBlogs } from "@/lib/markdown"
import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/site-footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Share2 } from "lucide-react"
import { SocialLinks } from "@/components/social-links"
import BotonCompartir from "@/components/button-share";

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await Promise.resolve(params); 

  const post = await getBlogBySlug(slug);
  if (!post) return notFound();

  const allPosts = await getAllBlogs();
  const relatedPosts = post.relatedPosts
    ? allPosts.filter((p) => post.relatedPosts?.includes(p.slug)).slice(0, 2)
    : [];

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyber-50 via-slate-50 to-cyber-100 dark:from-gray-900 dark:via-gray-800 dark:to-cyber-950">
      <SiteHeader />
      <main className="container py-8 md:py-12">
        <div className="flex items-center gap-2 mb-8">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/blog">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver al blog
            </Link>
          </Button>
        </div>

        <article className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Badge className="bg-cyber-500 hover:bg-cyber-600 mb-4">{post.category}</Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>

            <div className="flex flex-wrap gap-6 mb-8 text-sm text-muted-foreground">
              
            </div>
          </div>

          <div className="relative h-64 md:h-96 w-full mb-8 rounded-lg overflow-hidden">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="bg-cyber-100 text-cyber-700 dark:bg-cyber-900/30 dark:text-cyber-300"
              >
                {tag}
              </Badge>
            ))}
          </div>
          <div className="flex flex-wrap gap-6 mb-8 text-sm text-muted-foreground">
              {/*<div className="flex items-center gap-2">
                <div className="relative w-8 h-8 rounded-full overflow-hidden">
                  <Image
                    src={post.authorImage || "/placeholder.svg"}
                    alt={post.authorName || "Autor"}
                    fill
                    className="object-cover"
                  /> 
                </div>
                <span>{post.authorName}</span>
              </div> */}
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <BotonCompartir />
            </div>

          <div className="prose prose-slate dark:prose-invert max-w-none mb-12">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>

          <div className="mb-10 p-6 bg-white/80 dark:bg-gray-800/50 rounded-lg border">
            <div className="flex items-start gap-4">
              <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0">
                <Image
                  src={post.authorImage || "/FotoYanina.jpg"}
                  alt={post.authorName || "Autor"}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Escrito por {post.authorName}</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Yanina P. Q. O. | Desarrolladora de software. 
                </p>
                <SocialLinks />
              </div>
            </div>
          </div>

          {relatedPosts.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-6">Artículos relacionados</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className="group rounded-lg border bg-white/80 dark:bg-gray-800/50 overflow-hidden flex flex-col hover:shadow-md transition-all"
                  >
                    <div className="relative h-40 w-full">
                      <Image
                        src={related.image || "/placeholder.svg"}
                        alt={related.title}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-xs text-cyber-500 mb-2">{related.date}</p>
                      <h3 className="font-bold text-lg mb-2 group-hover:text-cyber-500 transition-colors line-clamp-2">
                        {related.title}
                      </h3>
                      <p className="text-muted-foreground text-sm line-clamp-2">
                        {related.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>
      </main>
      <Footer />
    </div>
  );
}


