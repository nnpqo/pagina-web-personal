import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://techbynina.tech"),
  title: {
    default: "Techbynina | Desarrolladora de Software",
    template: "%s | Techbynina",
  },
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
    "Desarrollador de páginas web",
    "Desarrolladora de software",
    "Aplicaciones web",
    "Aplicaciones móviles",
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
        url: "https://techbynina.tech/Icon.png", 
        width: 1200,
        height: 630,
        alt: "Portafolio de Techbynina",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Techbynina | Desarrolladora de Software",
    description: "Portafolio de Yanina con enfoque en desarrollo web y ciberseguridad.",
    images: ["https://techbynina.tech/Icon.png"],
    creator: "@tu_usuario_twitter", 
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
