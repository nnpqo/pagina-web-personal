import Link from "next/link"
import Image from "next/image"
import { Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getAllCtfs } from "@/lib/markdownCtfs"

export default async function CTFSection() {
  const ctfs = await getAllCtfs()

  return (
    <section id="ctf" className="py-12 md:py-16 border-t">
      <div className="space-y-6">
        {/* Encabezado */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 rounded-md bg-cyber-100 dark:bg-cyber-900/30 px-3 py-1 text-sm font-medium">
            <Shield className="h-4 w-4" />
            <span>CTF</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight">CTF Resueltos</h2>
          <p className="text-muted-foreground max-w-3xl">
            Aquí comparto los retos de CTF (Capture The Flag) que he resuelto, junto con explicaciones detalladas paso a paso.
          </p>
        </div>

        {/* Tarjetas */}
        <div className="grid gap-6 md:grid-cols-3">
          {ctfs.map((challenge) => (
            <Link
              key={challenge.slug}
              href={`/ctf/${challenge.slug}`}
              className="group rounded-lg border bg-white/80 dark:bg-gray-800/50 overflow-hidden flex flex-col hover:shadow-md transition-all"
            >
              {/*<div className="relative h-48 w-full">
                <Image
                  src={challenge.image || "/placeholder.svg"}
                  alt={challenge.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>*/}
              <div className="p-4 flex-1 flex flex-col">
                <p className="text-xs text-cyber-500 mb-2">{challenge.date}</p>
                <h3 className="font-bold text-lg mb-2 text-foreground group-hover:text-cyber-500 transition-colors no-underline">
                  {challenge.title}
                </h3>
                <p className="text-muted-foreground text-sm flex-1">{challenge.description}</p>
                <div className="mt-4 flex items-center text-sm text-cyber-500 font-medium">
                  Ver solución
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
            <Link href="/ctf">Ver todos los CTFs</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}