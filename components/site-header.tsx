"use client"

import Link from "next/link"
import { useState } from "react"
import { X, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { usePathname } from "next/navigation"
import Image from "next/image"

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/"
    return pathname.startsWith(path)
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white dark:bg-gray-900">
      <div className="container flex h-16 items-center justify-between px-4 md:grid md:grid-cols-3">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl" onClick={closeMenu}>
            <Image
              src="/Icon.png"
              alt="Logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <span>TechByNina</span>
          </Link>
        </div>

        {/* Enlaces centrados */}
        <nav className="hidden md:flex items-center justify-center gap-4 md:gap-6">
          <Link
            href="/#sobre-mi"
            className={`text-sm font-medium transition-colors whitespace-nowrap ${
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
            href="/#blog"
            className={`text-sm font-medium transition-colors ${
              isActive("/#blog") ? "text-cyber-500" : "hover:text-cyber-500"
            }`}
          >
            Blog
          </Link>
          <Link
            href="/#ctf"
            className={`text-sm font-medium transition-colors ${
              isActive("/#ctf") ? "text-cyber-500" : "hover:text-cyber-500"
            }`}
          >
            CTFs
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

        {/* Controles */}
        <div className="flex items-center justify-end gap-2 pr-4 md:pr-6">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={toggleMenu}
            aria-label="Abrir menú"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Menú móvil */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          <nav className="px-4 py-4 space-y-2">
            <Link
              href="/#sobre-mi"
              onClick={closeMenu}
              className="block text-base font-medium py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Sobre Mí
            </Link>
            <Link
              href="/#proyectos"
              onClick={closeMenu}
              className="block text-base font-medium py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Proyectos
            </Link>
            <Link
              href="/#blog"
              onClick={closeMenu}
              className="block text-base font-medium py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Blog
            </Link>
            <Link
              href="/#ctf"
              onClick={closeMenu}
              className="block text-base font-medium py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              CTFs
            </Link>
            <Link
              href="/#habilidades"
              onClick={closeMenu}
              className="block text-base font-medium py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Skills
            </Link>
            <Link
              href="/#contacto"
              onClick={closeMenu}
              className="block text-base font-medium py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Contacto
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}


