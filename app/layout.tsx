import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.techbynina.tech"),
  title: "Techbynina | Desarrolladora de Software",
  description:
    "Portafolio profesional de Yanina, desarrolladora especializada en ciberseguridad, control de calidad y desarrollo web moderno.",
  keywords: [
    "Desarrolladora web",
    "Ciberseguridad",
    "Portafolio",
    "Calidad de software",
    "Next.js",
    "React",
    "Frontend",
    "Backend",
    "Techbynina",
    "Yanina",
    "Desarrollador de paginas web",
    "Desarrolladora de software",
    "Desarrolladora de aplicaciones",
    "Desarrolladora de aplicaciones web",
    "Desarrolladora de aplicaciones móviles",
  ],
  authors: [{ name: "Yanina", url: "https://techbynina.tech" }],
  creator: "Yanina",
  robots: "index, follow",
  applicationName: "Techbynina",
  openGraph: {
    title: "Techbynina | Desarrolladora de Software",
    description:
      "Explora los proyectos, investigaciones y publicaciones de Yanina en su sitio web Techbynina.",
    url: "https://techbynina.tech",
    siteName: "Techbynina",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/Icon.png", 
        width: 1200,
        height: 630,
        alt: "Portafolio de Techbynina",
      },
    ],
  },
  icons: {
    icon: "/Icon.png",
    shortcut: "/Icon.png",
    apple: "/Icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
