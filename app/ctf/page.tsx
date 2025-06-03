import Link from "next/link";
import { getAllCtfs } from "@/lib/markdownCtfs";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default async function CtfsPage() {
  const ctfs = await getAllCtfs();

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyber-50 via-slate-50 to-cyber-100 dark:from-gray-900 dark:via-gray-800 dark:to-cyber-950">
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
              <h1 className="text-3xl font-bold tracking-tight">CTFs Resueltos</h1>
              <p className="text-muted-foreground max-w-3xl">
                Aquí comparto los retos de CTF (Capture The Flag) que he resuelto, junto con explicaciones detalladas paso a paso.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {ctfs.map((ctf) => (
                <Link
                  key={ctf.slug}
                  href={`/ctf/${ctf.slug}`}
                  className="group rounded-lg border bg-white/80 dark:bg-gray-800/50 overflow-hidden flex flex-col hover:shadow-md transition-all"
                >
                  <div className="p-4 flex-1 flex flex-col">
                    <p className="text-xs text-cyber-500 mb-2">{ctf.date}</p>
                    <h3 className="font-bold text-lg mb-2 group-hover:text-cyber-500 transition-colors">
                      {ctf.title}
                    </h3>
                    <p className="text-muted-foreground text-sm flex-1 line-clamp-3">
                      {ctf.description}
                    </p>
                    {ctf.tags?.[0] && (
                      <span className="mt-2 self-start inline-block bg-cyber-500 text-white text-xs px-2 py-1 rounded-full">
                        {ctf.tags[0]}
                      </span>
                    )}
                    <div className="mt-4 flex items-center text-sm text-cyber-500 font-medium">
                      Ver resolución
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
    </div>
  );
}
