
import Link from "next/link"
import Image from "next/image"
import { BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getAllBlogs } from "@/lib/markdown"

export default async function BlogSection() {
  const posts = await getAllBlogs()

  return (
    <section id="blog" className="py-12 md:py-16 border-t">
      <div className="space-y-6">
        {/* Encabezado */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 rounded-md bg-cyber-100 dark:bg-cyber-900/30 px-3 py-1 text-sm font-medium">
            <BookOpen className="h-4 w-4" />
            <span>Blog</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight">Blog</h2>
          <p className="text-muted-foreground max-w-3xl">
            Un espacio donde documento ideas, prácticas y conceptos que encuentro interesantes en mi camino como desarrolladora.
          </p>
        </div>

        {/* Tarjetas */}
        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
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
                <h3 className="font-bold text-lg mb-2 text-foreground group-hover:text-cyber-500 transition-colors no-underline">
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

        {/* Botón más publicaciones */}
        <div className="flex justify-center">
          <Button asChild variant="outline" className="border-cyber-200 dark:border-cyber-800">
            <Link href="/blog">Ver todas las publicaciones</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
