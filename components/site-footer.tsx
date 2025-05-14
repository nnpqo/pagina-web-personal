"use client"

import Link from "next/link"
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t bg-white/50 dark:bg-gray-900/50">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex items-center gap-4 px-8 md:px-0">
          <Image
            src="/Icon.png"
            alt="Icono personalizado"
            width={24}
            height={24}
            className="object-contain"
            />
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Techbynina. Todos los derechos reservados.
          </p>
        </div>
        <nav className="flex gap-4 sm:gap-6">
          <Link
            href="/politica-privacidad"
            className="text-xs text-muted-foreground hover:underline underline-offset-4"
          >
            Política de Privacidad
          </Link>
          <Link
            href="/terminos"
            className="text-xs text-muted-foreground hover:underline underline-offset-4"
          >
            Términos de Servicio
          </Link>
        </nav>
      </div>
    </footer>
  )
}
