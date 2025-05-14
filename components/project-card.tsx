"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, ArrowRight } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  tags?: string[] 
  image: string
  link?: string
  slug?: string
}

export function ProjectCard({ title, description, tags = [], image, link, slug }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md bg-white/80 dark:bg-gray-800/50 border-cyber-100 dark:border-cyber-900/30 group">
      
      {/* Imagen con link */}
      <CardHeader className="p-0">
        <Link href={slug ? `/proyectos/${slug}` : "#"} className="block relative h-48 w-full overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title ?? "Imagen del proyecto"}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        </Link>
      </CardHeader>

      {/* Título y descripción */}
      <CardContent className="p-4">
        <h3 className="font-bold text-lg mb-2 group-hover:text-cyber-500 transition-colors">
          <Link href={slug ? `/proyectos/${slug}` : "#"} className="hover:underline">
            {title}
          </Link>
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-3">{description}</p>
      </CardContent>

      {/* Tags y enlaces */}
      <CardFooter className="flex flex-col items-start gap-4 p-4 pt-0">
        <div className="flex flex-wrap gap-2">
          {(tags || []).map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="text-xs bg-cyber-100 text-cyber-700 dark:bg-cyber-900/30 dark:text-cyber-300"
            >
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex w-full justify-between items-center">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-cyber-500 hover:underline"
            >
              Demo <ExternalLink className="h-3 w-3" />
            </a>
          )}
          <Link
            href={slug ? `/proyectos/${slug}` : "#"}
            className="inline-flex items-center gap-1 text-sm font-medium text-cyber-500 hover:underline"
          >
            Ver detalles <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </CardFooter>
    </Card>
  )
}


