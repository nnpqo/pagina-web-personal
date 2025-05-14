"use client"

import Link from "next/link"
import { useState } from "react"
import { TerminalSquare, X, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { usePathname } from "next/navigation"

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/"
    return pathname.startsWith(path)
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white dark:bg-gray-900">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl" onClick={closeMenu}>
        <TerminalSquare className="w-6 h-6 text-cyber-500" />
          <span>TechByNina</span>
        </Link>

        {/* Navegación de escritorio */}
        <nav className="hidden md:flex gap-6">
          <Link
            href="/#sobre-mi"
            className={`text-sm font-medium transition-colors ${
              isActive("/#sobre-mi") ? "text-cyber-500" : "hover:text-cyber-500"
            }`}
          >
            Sobre Mí
          </Link>
          <Link
            href="/#proyectos"
            className={`text-sm font-medium transition-colors ${
              isActive("/#proyectos") ? "text-cyber-500" : "hover:text-cyber-500"
            }`}
          >
            Proyectos
          </Link>
          <Link
            href="/blog"
            className={`text-sm font-medium transition-colors ${
              isActive("/blog") ? "text-cyber-500" : "hover:text-cyber-500"
            }`}
          >
            Blog
          </Link>
          <Link
            href="/#habilidades"
            className={`text-sm font-medium transition-colors ${
              isActive("/#habilidades") ? "text-cyber-500" : "hover:text-cyber-500"
            }`}
          >
            Skills
          </Link>
          <Link
            href="/#contacto"
            className={`text-sm font-medium transition-colors ${
              isActive("/#contacto") ? "text-cyber-500" : "hover:text-cyber-500"
            }`}
          >
            Contacto
          </Link>
        </nav>

        {/* Botones de escritorio */}
        <div className="hidden md:flex items-center gap-2">
          <ThemeToggle />
          <Button variant="outline" size="sm" asChild className="border-cyber-200 dark:border-cyber-800">
            <Link href="/cv.pdf" target="_blank">
              Descargar CV
            </Link>
          </Button>
        </div>

        {/* Controles móviles */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <Button variant="ghost" size="sm" onClick={toggleMenu} aria-label="Abrir menú">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Menú móvil */}
      {isMenuOpen && (
        <div className="block md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          <nav className="container py-4">
            <div className="flex flex-col space-y-3">
              <Link
                href="/#sobre-mi"
                className="text-base font-medium py-2 px-4 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={closeMenu}
              >
                Sobre Mí
              </Link>
              <Link
                href="/#proyectos"
                className="text-base font-medium py-2 px-4 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={closeMenu}
              >
                Proyectos
              </Link>
              <Link
                href="/blog"
                className="text-base font-medium py-2 px-4 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={closeMenu}
              >
                Blog
              </Link>
              <Link
                href="/#habilidades"
                className="text-base font-medium py-2 px-4 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={closeMenu}
              >
                Skills
              </Link>
              <Link
                href="/#contacto"
                className="text-base font-medium py-2 px-4 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={closeMenu}
              >
                Contacto
              </Link>
              <div className="pt-2 pb-3 px-4">
                <Button variant="outline" size="sm" asChild className="w-full border-cyber-200 dark:border-cyber-800">
                  <Link href="/cv.pdf" target="_blank" onClick={closeMenu}>
                    Descargar CV
                  </Link>
                </Button>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
