import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield, Settings, Brain } from "lucide-react"

export function HeroSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="space-y-2">
            {/* <div className="inline-flex items-center gap-2 rounded-full bg-cyber-100 dark:bg-cyber-900/30 px-4 py-1.5 text-sm font-medium text-cyber-700 dark:text-cyber-300 mb-4">
              <span>Blog</span>
            </div> */}
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              <span className="text-cyber-500">Tecnologia</span> & Investigación
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Proyectos, investigaciones y recursos sobre ciberseguridad, aprendizaje automatico y inteligencia artificial.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-cyber-600 to-cyber-500 hover:from-cyber-700 hover:to-cyber-600"
            >
              <Link href="#proyectos">Explorar Proyectos</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-cyber-200 dark:border-cyber-800">
              <Link href="#blog">Leer Blog</Link>
            </Button>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3 md:mt-12">
            <div className="flex flex-col items-center space-y-2 rounded-lg border bg-white/80 dark:bg-gray-800/50 p-4 transition-all hover:shadow-md">
              <div className="rounded-full bg-cyber-100 dark:bg-cyber-900/30 p-2">
                <Shield className="h-6 w-6 text-cyber-500" />
              </div>
              <h3 className="text-xl font-bold">Seguridad</h3>
              <p className="text-sm text-muted-foreground text-center">
              Análisis de amenazas, monitoreo de eventos y detección de incidentes en entornos de seguridad defensiva (SOC).
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border bg-white/80 dark:bg-gray-800/50 p-4 transition-all hover:shadow-md">
              <div className="rounded-full bg-cyber-100 dark:bg-cyber-900/30 p-2">
              <Settings className="h-6 w-6 text-cyber-500" />
              </div>
              <h3 className="text-xl font-bold">Automatización & Calidad</h3>
              <p className="text-sm text-muted-foreground text-center">
              Aplicación de buenas prácticas de testing, automatización de procesos y control de calidad para garantizar software confiable y eficiente.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border bg-white/80 dark:bg-gray-800/50 p-4 transition-all hover:shadow-md">
              <div className="rounded-full bg-cyber-100 dark:bg-cyber-900/30 p-2">
              <Brain className="h-6 w-6 text-cyber-500" />
              </div>
              <h3 className="text-xl font-bold">Inteligencia Artificial</h3>
              <p className="text-sm text-muted-foreground text-center">
              Exploración de modelos inteligentes para análisis de datos, detección de patrones y creación de soluciones innovadoras basadas en IA.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
