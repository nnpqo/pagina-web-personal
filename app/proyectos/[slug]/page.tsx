import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Shield, ArrowLeft, Calendar, ExternalLink, Github } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { Badge } from "@/components/ui/badge"
import { notFound } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/site-footer"

// Base de datos simulada de proyectos
const projectsData = [
  {
    slug: "analisis-vulnerabilidades-web",
    title: "Análisis de Vulnerabilidades en Aplicaciones Web",
    description:
      "Desarrollo de una herramienta automatizada para detectar vulnerabilidades comunes en aplicaciones web como XSS, CSRF y SQL Injection.",
    fullDescription: `
      ## Descripción del Proyecto

      Este proyecto se centra en el desarrollo de una herramienta automatizada para la detección de vulnerabilidades comunes en aplicaciones web, con especial énfasis en Cross-Site Scripting (XSS), Cross-Site Request Forgery (CSRF) y SQL Injection.

      ## Objetivos

      - Crear un escáner automatizado capaz de identificar vulnerabilidades web comunes
      - Desarrollar módulos específicos para la detección de XSS, CSRF y SQL Injection
      - Implementar un sistema de reportes detallados con recomendaciones de mitigación
      - Minimizar los falsos positivos mediante técnicas avanzadas de verificación

      ## Metodología

      El proyecto se desarrolló siguiendo una metodología iterativa:

      1. **Investigación**: Estudio de las vulnerabilidades objetivo y técnicas de detección
      2. **Diseño**: Arquitectura modular para permitir la extensibilidad
      3. **Implementación**: Desarrollo en Python utilizando bibliotecas como Requests, BeautifulSoup y SQLAlchemy
      4. **Pruebas**: Validación contra entornos controlados (DVWA, WebGoat, OWASP Juice Shop)
      5. **Refinamiento**: Mejora de algoritmos para reducir falsos positivos

      ## Resultados

      La herramienta desarrollada ha demostrado una tasa de detección del 92% en entornos de prueba controlados, con una tasa de falsos positivos inferior al 8%. Los módulos más efectivos fueron los de detección de SQL Injection y XSS Reflejado.

      ## Conclusiones

      Este proyecto demuestra la viabilidad de automatizar la detección de vulnerabilidades web comunes, aunque sigue siendo necesaria la intervención humana para el análisis final de los resultados. Las técnicas implementadas pueden servir como base para herramientas de seguridad más avanzadas.
    `,
    tags: ["Python", "OWASP", "Seguridad Web", "Automatización", "Pentesting"],
    image: "/placeholder.svg?height=400&width=800",
    demoLink: "#",
    githubLink: "https://github.com/username/web-vuln-scanner",
    date: "Noviembre 2023",
    screenshots: [
      "/placeholder.svg?height=300&width=500&text=Captura+1",
      "/placeholder.svg?height=300&width=500&text=Captura+2",
      "/placeholder.svg?height=300&width=500&text=Captura+3",
    ],
  },
  {
    slug: "sistema-deteccion-intrusiones",
    title: "Sistema de Detección de Intrusiones",
    description:
      "Implementación de un IDS basado en análisis de comportamiento para detectar actividades sospechosas en redes corporativas.",
    fullDescription: `
      ## Descripción del Proyecto

      Este proyecto consiste en la implementación de un Sistema de Detección de Intrusiones (IDS) que utiliza técnicas de análisis de comportamiento para identificar actividades sospechosas en redes corporativas. A diferencia de los IDS tradicionales basados en firmas, este sistema se enfoca en detectar anomalías en el comportamiento de la red.

      ## Objetivos

      - Desarrollar un IDS capaz de establecer una línea base del comportamiento normal de la red
      - Implementar algoritmos de detección de anomalías basados en machine learning
      - Crear un sistema de alertas en tiempo real con clasificación de severidad
      - Minimizar los falsos positivos mediante técnicas de correlación de eventos

      ## Metodología

      El proyecto se desarrolló siguiendo estas fases:

      1. **Captura de datos**: Recolección de tráfico de red utilizando herramientas como tcpdump y Wireshark
      2. **Preprocesamiento**: Extracción de características relevantes del tráfico de red
      3. **Modelado**: Entrenamiento de algoritmos de machine learning (Random Forest, Isolation Forest, DBSCAN)
      4. **Implementación**: Desarrollo del sistema en tiempo real utilizando Python y frameworks como Scikit-learn
      5. **Evaluación**: Pruebas con datasets públicos (CICIDS2017, NSL-KDD) y en entornos controlados

      ## Resultados

      El sistema ha demostrado una precisión del 94% en la detección de intrusiones, con una tasa de falsos positivos del 6%. Los mejores resultados se obtuvieron con el algoritmo Isolation Forest combinado con técnicas de correlación de eventos.

      ## Conclusiones

      El enfoque basado en comportamiento ha demostrado ser efectivo para detectar amenazas desconocidas (zero-day) que los sistemas tradicionales basados en firmas no pueden identificar. Sin embargo, requiere un periodo de entrenamiento significativo y ajustes continuos para adaptarse a los cambios legítimos en el comportamiento de la red.
    `,
    tags: ["Snort", "Linux", "Análisis de Tráfico", "Machine Learning", "Python", "Seguridad de Redes"],
    image: "/placeholder.svg?height=400&width=800",
    demoLink: "#",
    githubLink: "https://github.com/username/behavior-ids",
    date: "Octubre 2023",
    screenshots: [
      "/placeholder.svg?height=300&width=500&text=Dashboard+IDS",
      "/placeholder.svg?height=300&width=500&text=Análisis+de+Tráfico",
      "/placeholder.svg?height=300&width=500&text=Alertas",
    ],
  },
  {
    slug: "auditoria-seguridad-cloud",
    title: "Auditoría de Seguridad en Infraestructura Cloud",
    description:
      "Desarrollo de metodología y herramientas para auditar la seguridad en entornos AWS y Azure, identificando configuraciones incorrectas.",
    fullDescription: `
      ## Descripción del Proyecto

      Este proyecto se enfoca en el desarrollo de una metodología y conjunto de herramientas para realizar auditorías de seguridad en infraestructuras cloud, específicamente en entornos AWS y Azure. El objetivo principal es identificar configuraciones incorrectas que puedan representar riesgos de seguridad.

      ## Objetivos

      - Crear una metodología estructurada para auditar entornos cloud
      - Desarrollar herramientas automatizadas para escanear configuraciones en AWS y Azure
      - Implementar un sistema de puntuación de riesgo basado en estándares de la industria
      - Generar informes detallados con recomendaciones de remediación

      ## Metodología

      El proyecto se desarrolló siguiendo estas etapas:

      1. **Investigación**: Estudio de los servicios cloud y sus configuraciones de seguridad
      2. **Definición de reglas**: Establecimiento de reglas de auditoría basadas en CIS Benchmarks y AWS Well-Architected Framework
      3. **Desarrollo**: Implementación de herramientas utilizando AWS SDK, Azure SDK y Python
      4. **Validación**: Pruebas en entornos controlados con configuraciones deliberadamente inseguras
      5. **Refinamiento**: Ajuste de reglas y reducción de falsos positivos

      ## Resultados

      Las herramientas desarrolladas han permitido identificar un promedio de 15-20 configuraciones incorrectas en entornos de prueba, incluyendo:
      - Grupos de seguridad excesivamente permisivos
      - Buckets S3 con acceso público
      - Falta de cifrado en reposo
      - IAM roles con permisos excesivos
      - Registros de auditoría desactivados

      ## Conclusiones

      La auditoría automatizada de entornos cloud es esencial para mantener un nivel adecuado de seguridad, especialmente considerando la complejidad y constante evolución de estos servicios. Las herramientas desarrolladas permiten realizar estas auditorías de manera eficiente y consistente.
    `,
    tags: ["AWS", "Azure", "Cloud Security", "Python", "Automatización", "Auditoría"],
    image: "/placeholder.svg?height=400&width=800",
    demoLink: "#",
    githubLink: "https://github.com/username/cloud-security-audit",
    date: "Septiembre 2023",
    screenshots: [
      "/placeholder.svg?height=300&width=500&text=Dashboard+de+Auditoría",
      "/placeholder.svg?height=300&width=500&text=Reporte+de+Hallazgos",
      "/placeholder.svg?height=300&width=500&text=Recomendaciones",
    ],
  },
  // Añadiendo el proyecto que faltaba
  {
    slug: "framework-pentesting",
    title: "Framework de Pentesting",
    description:
      "Desarrollo de un framework personalizado para realizar pruebas de penetración siguiendo metodologías estándar de la industria.",
    fullDescription: `
      ## Descripción del Proyecto

      Este proyecto consiste en el desarrollo de un framework personalizado para la realización de pruebas de penetración (pentesting), siguiendo metodologías estándar de la industria como OSSTMM, PTES y OWASP. El framework integra diversas herramientas y técnicas en un flujo de trabajo coherente y eficiente.

      ## Objetivos

      - Crear un framework modular y extensible para pruebas de penetración
      - Automatizar tareas repetitivas del proceso de pentesting
      - Integrar herramientas existentes en un flujo de trabajo unificado
      - Implementar metodologías estándar de la industria
      - Generar informes detallados y personalizables

      ## Metodología

      El desarrollo del framework siguió estas etapas:

      1. **Análisis de requisitos**: Identificación de las necesidades y casos de uso típicos en pentesting
      2. **Diseño de arquitectura**: Creación de una arquitectura modular basada en plugins
      3. **Implementación**: Desarrollo en Python con integración de herramientas como Metasploit, Nmap, SQLmap, etc.
      4. **Pruebas**: Validación en entornos controlados y en pruebas de penetración reales
      5. **Documentación**: Creación de documentación detallada y ejemplos de uso

      ## Resultados

      El framework desarrollado ha demostrado reducir el tiempo de ejecución de pruebas de penetración en un 40%, automatizando tareas como:
      - Reconocimiento y enumeración
      - Escaneo de vulnerabilidades
      - Explotación básica
      - Documentación de hallazgos
      - Generación de informes

      ## Conclusiones

      La automatización de pruebas de penetración mediante un framework personalizado permite a los profesionales de seguridad enfocarse en aspectos más creativos y complejos del pentesting, mientras que las tareas rutinarias se ejecutan de manera consistente y eficiente. El enfoque modular facilita la adaptación a diferentes tipos de objetivos y requisitos específicos.
    `,
    tags: ["Pentesting", "Kali Linux", "Automatización", "Python", "Metasploit", "Seguridad Ofensiva"],
    image: "/placeholder.svg?height=400&width=800",
    demoLink: "#",
    githubLink: "https://github.com/username/pentest-framework",
    date: "Agosto 2023",
    screenshots: [
      "/placeholder.svg?height=300&width=500&text=Dashboard+del+Framework",
      "/placeholder.svg?height=300&width=500&text=Módulo+de+Reconocimiento",
      "/placeholder.svg?height=300&width=500&text=Generación+de+Informes",
    ],
  },
  // Añadiendo el resto de proyectos
  {
    slug: "analisis-forense-digital",
    title: "Análisis Forense Digital",
    description:
      "Proyecto de investigación sobre técnicas avanzadas de análisis forense en dispositivos móviles y recuperación de datos.",
    fullDescription: `
      ## Descripción del Proyecto

      Este proyecto de investigación se centra en el desarrollo y aplicación de técnicas avanzadas de análisis forense digital, con especial énfasis en dispositivos móviles y recuperación de datos eliminados o dañados.

      ## Objetivos

      - Investigar y documentar técnicas avanzadas de análisis forense digital
      - Desarrollar metodologías para la recuperación de datos en dispositivos móviles
      - Crear herramientas para automatizar procesos de análisis forense
      - Establecer protocolos de cadena de custodia digital
      - Documentar casos de estudio y mejores prácticas

      ## Metodología

      La investigación se llevó a cabo siguiendo estas fases:

      1. **Revisión bibliográfica**: Estudio de técnicas y herramientas existentes
      2. **Experimentación**: Pruebas con diferentes dispositivos y escenarios
      3. **Desarrollo**: Creación de scripts y herramientas para automatizar procesos
      4. **Validación**: Aplicación de las técnicas en casos reales
      5. **Documentación**: Elaboración de guías y protocolos

      ## Resultados

      La investigación ha permitido:
      - Recuperar datos de dispositivos móviles con daños físicos
      - Extraer información de sistemas de archivos cifrados
      - Reconstruir secuencias de eventos a partir de logs y metadatos
      - Establecer protocolos forenses que mantienen la integridad de la evidencia

      ## Conclusiones

      El análisis forense digital requiere una combinación de conocimientos técnicos, metodologías rigurosas y herramientas especializadas. Las técnicas desarrolladas en este proyecto permiten abordar casos complejos de recuperación de datos y análisis de evidencia digital, manteniendo la integridad de la información y la cadena de custodia.
    `,
    tags: ["Forense Digital", "Mobile", "Recuperación", "Análisis", "Cadena de Custodia"],
    image: "/placeholder.svg?height=400&width=800",
    demoLink: "#",
    githubLink: "https://github.com/username/digital-forensics",
    date: "Julio 2023",
    screenshots: [
      "/placeholder.svg?height=300&width=500&text=Recuperación+de+Datos",
      "/placeholder.svg?height=300&width=500&text=Análisis+de+Metadatos",
      "/placeholder.svg?height=300&width=500&text=Timeline+de+Eventos",
    ],
  },
  {
    slug: "seguridad-iot",
    title: "Seguridad en IoT",
    description:
      "Investigación y desarrollo de protocolos de seguridad para dispositivos IoT, enfocado en la protección de datos y comunicaciones.",
    fullDescription: `
      ## Descripción del Proyecto

      Este proyecto aborda los desafíos de seguridad en el Internet de las Cosas (IoT), centrándose en el desarrollo de protocolos y mecanismos para proteger tanto los datos como las comunicaciones en ecosistemas IoT.

      ## Objetivos

      - Analizar vulnerabilidades comunes en dispositivos y ecosistemas IoT
      - Desarrollar protocolos de comunicación seguros y eficientes para dispositivos con recursos limitados
      - Implementar mecanismos de autenticación y autorización ligeros
      - Crear un framework para la evaluación de seguridad en dispositivos IoT
      - Establecer mejores prácticas para el desarrollo seguro de aplicaciones IoT

      ## Metodología

      El proyecto se desarrolló siguiendo estas etapas:

      1. **Análisis de amenazas**: Identificación de vectores de ataque y vulnerabilidades en dispositivos IoT
      2. **Diseño de protocolos**: Desarrollo de protocolos de comunicación seguros adaptados a dispositivos con recursos limitados
      3. **Implementación**: Creación de prototipos y pruebas de concepto
      4. **Evaluación**: Pruebas de seguridad y rendimiento en entornos reales
      5. **Documentación**: Elaboración de guías y mejores prácticas

      ## Resultados

      El proyecto ha permitido:
      - Identificar y mitigar vulnerabilidades en protocolos de comunicación IoT
      - Desarrollar un protocolo de autenticación ligero con un overhead de solo 5%
      - Crear un framework de evaluación de seguridad específico para IoT
      - Establecer una metodología de desarrollo seguro para aplicaciones IoT

      ## Conclusiones

      La seguridad en IoT presenta desafíos únicos debido a las limitaciones de recursos de los dispositivos y la heterogeneidad de los ecosistemas. Los protocolos y metodologías desarrollados en este proyecto ofrecen un equilibrio entre seguridad y eficiencia, adaptándose a las necesidades específicas de los entornos IoT.
    `,
    tags: ["IoT", "Seguridad", "Protocolos", "Comunicaciones", "Autenticación"],
    image: "/placeholder.svg?height=400&width=800",
    demoLink: "#",
    githubLink: "https://github.com/username/iot-security",
    date: "Junio 2023",
    screenshots: [
      "/placeholder.svg?height=300&width=500&text=Arquitectura+de+Seguridad",
      "/placeholder.svg?height=300&width=500&text=Análisis+de+Protocolos",
      "/placeholder.svg?height=300&width=500&text=Pruebas+de+Penetración",
    ],
  },
  {
    slug: "herramienta-analisis-malware",
    title: "Herramienta de Análisis de Malware",
    description:
      "Desarrollo de una herramienta para el análisis estático y dinámico de malware, con capacidades de sandbox y generación de informes.",
    fullDescription: `
      ## Descripción del Proyecto

      Este proyecto consiste en el desarrollo de una herramienta integral para el análisis de malware, que combina técnicas de análisis estático y dinámico, con un entorno sandbox aislado y capacidades avanzadas de generación de informes.

      ## Objetivos

      - Crear una plataforma unificada para análisis de malware
      - Implementar técnicas de análisis estático (firmas, heurística, etc.)
      - Desarrollar un entorno sandbox seguro para análisis dinámico
      - Automatizar la extracción de indicadores de compromiso (IoCs)
      - Generar informes detallados y accionables

      ## Metodología

      El desarrollo de la herramienta siguió estas fases:

      1. **Diseño de arquitectura**: Creación de una arquitectura modular y segura
      2. **Implementación del análisis estático**: Desarrollo de módulos para análisis de código, strings, etc.
      3. **Creación del sandbox**: Implementación de un entorno aislado para ejecución segura
      4. **Monitorización dinámica**: Desarrollo de sistemas para capturar comportamientos durante la ejecución
      5. **Generación de informes**: Creación de un sistema de informes detallados y personalizables

      ## Resultados

      La herramienta desarrollada permite:
      - Analizar múltiples tipos de malware (PE, ELF, scripts, documentos maliciosos)
      - Extraer automáticamente IoCs como IPs, dominios, hashes, etc.
      - Monitorizar cambios en el sistema durante la ejecución
      - Detectar técnicas de evasión y anti-análisis
      - Generar informes detallados con recomendaciones de mitigación

      ## Conclusiones

      El análisis de malware requiere un enfoque multifacético que combine técnicas estáticas y dinámicas. La herramienta desarrollada proporciona un flujo de trabajo completo para analistas de seguridad, automatizando tareas repetitivas y permitiendo un análisis más profundo de amenazas complejas.
    `,
    tags: ["Malware", "Análisis", "Python", "Sandbox", "Seguridad Defensiva"],
    image: "/placeholder.svg?height=400&width=800",
    demoLink: "#",
    githubLink: "https://github.com/username/malware-analyzer",
    date: "Mayo 2023",
    screenshots: [
      "/placeholder.svg?height=300&width=500&text=Dashboard+de+Análisis",
      "/placeholder.svg?height=300&width=500&text=Resultados+de+Sandbox",
      "/placeholder.svg?height=300&width=500&text=Extracción+de+IoCs",
    ],
  },
  {
    slug: "seguridad-aplicaciones-moviles",
    title: "Seguridad en Aplicaciones Móviles",
    description:
      "Investigación y desarrollo de metodologías para evaluar la seguridad en aplicaciones móviles Android e iOS.",
    fullDescription: `
      ## Descripción del Proyecto

      Este proyecto se enfoca en la investigación y desarrollo de metodologías para evaluar y mejorar la seguridad en aplicaciones móviles, tanto para plataformas Android como iOS, abordando las vulnerabilidades específicas de cada ecosistema.

      ## Objetivos

      - Desarrollar una metodología integral para el análisis de seguridad en apps móviles
      - Crear herramientas para automatizar pruebas de seguridad en Android e iOS
      - Identificar patrones de vulnerabilidades comunes en aplicaciones móviles
      - Establecer mejores prácticas para el desarrollo seguro de apps
      - Generar guías de remediación para vulnerabilidades específicas

      ## Metodología

      El proyecto se desarrolló siguiendo estas etapas:

      1. **Investigación**: Estudio de vulnerabilidades y ataques específicos para aplicaciones móviles
      2. **Desarrollo de metodología**: Creación de un framework de análisis basado en OWASP Mobile Top 10
      3. **Implementación de herramientas**: Desarrollo de scripts y utilidades para automatizar pruebas
      4. **Validación**: Aplicación de la metodología en apps reales (con permiso)
      5. **Documentación**: Elaboración de guías y mejores prácticas

      ## Resultados

      El proyecto ha permitido:
      - Identificar vulnerabilidades en el almacenamiento de datos sensibles
      - Detectar problemas de comunicación insegura en más del 60% de las apps analizadas
      - Encontrar fallos en la implementación de criptografía
      - Desarrollar técnicas para el análisis de ofuscación y anti-tampering
      - Crear una suite de herramientas para pruebas automatizadas

      ## Conclusiones

      La seguridad en aplicaciones móviles presenta desafíos únicos debido a las características específicas de cada plataforma y los modelos de permisos. La metodología y herramientas desarrolladas permiten realizar evaluaciones sistemáticas y detectar vulnerabilidades que podrían comprometer la seguridad de los datos de los usuarios.
    `,
    tags: ["Mobile", "Android", "iOS", "OWASP", "Aplicaciones"],
    image: "/placeholder.svg?height=400&width=800",
    demoLink: "#",
    githubLink: "https://github.com/username/mobile-security",
    date: "Abril 2023",
    screenshots: [
      "/placeholder.svg?height=300&width=500&text=Análisis+Estático",
      "/placeholder.svg?height=300&width=500&text=Pruebas+Dinámicas",
      "/placeholder.svg?height=300&width=500&text=Reporte+de+Vulnerabilidades",
    ],
  },
  {
    slug: "hardening-sistemas-linux",
    title: "Hardening de Sistemas Linux",
    description: "Desarrollo de scripts y guías para el endurecimiento de sistemas Linux en entornos empresariales.",
    fullDescription: `
      ## Descripción del Proyecto

      Este proyecto se centra en el desarrollo de scripts, herramientas y guías para el endurecimiento (hardening) de sistemas Linux en entornos empresariales, siguiendo estándares de seguridad y mejores prácticas de la industria.

      ## Objetivos

      - Crear scripts automatizados para el hardening de diferentes distribuciones Linux
      - Desarrollar una metodología de endurecimiento adaptable a diferentes perfiles de seguridad
      - Implementar controles basados en CIS Benchmarks, NIST y otras normativas
      - Minimizar el impacto en la funcionalidad de los sistemas
      - Generar documentación detallada y guías de implementación

      ## Metodología

      El proyecto se desarrolló siguiendo estas etapas:

      1. **Análisis de requisitos**: Identificación de controles de seguridad necesarios según diferentes normativas
      2. **Desarrollo de scripts**: Creación de scripts modulares para diferentes aspectos del hardening
      3. **Pruebas**: Validación en entornos de laboratorio y producción controlada
      4. **Optimización**: Ajuste de configuraciones para equilibrar seguridad y funcionalidad
      5. **Documentación**: Elaboración de guías detalladas de implementación y personalización

      ## Resultados

      El proyecto ha permitido:
      - Desarrollar scripts para el hardening de Ubuntu, CentOS, Debian y RHEL
      - Implementar más de 200 controles de seguridad configurables
      - Reducir la superficie de ataque en sistemas Linux en un 70%
      - Crear perfiles de seguridad adaptados a diferentes tipos de servidores (web, base de datos, etc.)
      - Automatizar la verificación de cumplimiento con diferentes normativas

      ## Conclusiones

      El endurecimiento de sistemas Linux es fundamental para reducir la superficie de ataque en entornos empresariales. Los scripts y metodologías desarrollados permiten implementar controles de seguridad de manera consistente y adaptable, equilibrando la seguridad con la funcionalidad necesaria para cada tipo de sistema.
    `,
    tags: ["Linux", "Hardening", "Bash", "Seguridad", "Automatización"],
    image: "/placeholder.svg?height=400&width=800",
    demoLink: "#",
    githubLink: "https://github.com/username/linux-hardening",
    date: "Marzo 2023",
    screenshots: [
      "/placeholder.svg?height=300&width=500&text=Scripts+de+Hardening",
      "/placeholder.svg?height=300&width=500&text=Dashboard+de+Cumplimiento",
      "/placeholder.svg?height=300&width=500&text=Reporte+de+Configuración",
    ],
  },
  {
    slug: "seguridad-contenedores",
    title: "Seguridad en Contenedores",
    description: "Implementación de soluciones de seguridad para entornos de contenedores Docker y Kubernetes.",
    fullDescription: `
      ## Descripción del Proyecto

      Este proyecto aborda la seguridad en entornos de contenedores, centrándose en Docker y Kubernetes, mediante la implementación de soluciones y metodologías que protegen todo el ciclo de vida de los contenedores, desde el desarrollo hasta la producción.

      ## Objetivos

      - Desarrollar metodologías para asegurar imágenes de contenedores
      - Implementar políticas de seguridad para clústeres de Kubernetes
      - Crear herramientas para la detección de vulnerabilidades en contenedores
      - Establecer controles de seguridad en tiempo de ejecución
      - Generar guías de mejores prácticas para DevSecOps con contenedores

      ## Metodología

      El proyecto se desarrolló siguiendo estas etapas:

      1. **Análisis de amenazas**: Identificación de vectores de ataque específicos para contenedores
      2. **Desarrollo de controles**: Implementación de políticas y controles de seguridad
      3. **Integración con CI/CD**: Incorporación de escaneos de seguridad en pipelines
      4. **Monitorización**: Desarrollo de soluciones para la detección de anomalías en tiempo de ejecución
      5. **Documentación**: Elaboración de guías y mejores prácticas

      ## Resultados

      El proyecto ha permitido:
      - Reducir en un 85% las vulnerabilidades en imágenes de contenedores
      - Implementar políticas de seguridad basadas en OPA/Gatekeeper
      - Desarrollar un sistema de monitorización de comportamientos anómalos
      - Crear un framework de evaluación de seguridad específico para Kubernetes
      - Establecer un flujo de trabajo DevSecOps para entornos containerizados

      ## Conclusiones

      La seguridad en contenedores requiere un enfoque que abarque todo el ciclo de vida, desde la creación de imágenes hasta la monitorización en producción. Las soluciones desarrolladas permiten implementar seguridad de manera consistente y automatizada, facilitando la adopción de prácticas DevSecOps en entornos de contenedores.
    `,
    tags: ["Docker", "Kubernetes", "DevSecOps", "Contenedores", "CI/CD"],
    image: "/placeholder.svg?height=400&width=800",
    demoLink: "#",
    githubLink: "https://github.com/username/container-security",
    date: "Febrero 2023",
    screenshots: [
      "/placeholder.svg?height=300&width=500&text=Políticas+de+Seguridad",
      "/placeholder.svg?height=300&width=500&text=Escaneo+de+Vulnerabilidades",
      "/placeholder.svg?height=300&width=500&text=Monitorización+en+Tiempo+Real",
    ],
  },
  {
    slug: "analisis-trafico-red",
    title: "Análisis de Tráfico de Red",
    description: "Desarrollo de herramientas para el análisis avanzado de tráfico de red y detección de anomalías.",
    fullDescription: `
      ## Descripción del Proyecto

      Este proyecto se enfoca en el desarrollo de herramientas y metodologías para el análisis avanzado de tráfico de red, con especial énfasis en la detección de anomalías y comportamientos maliciosos mediante técnicas de machine learning y análisis estadístico.

      ## Objetivos

      - Desarrollar herramientas para la captura y procesamiento eficiente de tráfico de red
      - Implementar algoritmos de detección de anomalías basados en machine learning
      - Crear visualizaciones avanzadas para el análisis de patrones de tráfico
      - Establecer metodologías para la identificación de amenazas basadas en comportamiento
      - Generar sistemas de alertas con bajo índice de falsos positivos

      ## Metodología

      El proyecto se desarrolló siguiendo estas etapas:

      1. **Captura de datos**: Implementación de sistemas para la captura y almacenamiento eficiente de tráfico
      2. **Preprocesamiento**: Desarrollo de técnicas para la extracción de características relevantes
      3. **Modelado**: Implementación de algoritmos de machine learning para detección de anomalías
      4. **Visualización**: Creación de interfaces para el análisis visual de patrones
      5. **Evaluación**: Pruebas con datasets públicos y tráfico real

      ## Resultados

      El proyecto ha permitido:
      - Desarrollar un sistema capaz de procesar más de 10Gbps de tráfico en tiempo real
      - Implementar modelos de detección con una precisión superior al 95%
      - Crear visualizaciones interactivas para el análisis de patrones complejos
      - Detectar amenazas avanzadas como exfiltración de datos y C2 encubiertos
      - Reducir los falsos positivos en un 60% respecto a sistemas tradicionales

      ## Conclusiones

      El análisis avanzado de tráfico de red es fundamental para la detección de amenazas modernas que evaden los sistemas tradicionales. Las herramientas y metodologías desarrolladas permiten identificar comportamientos anómalos y potencialmente maliciosos, proporcionando una capa adicional de seguridad para las organizaciones.
    `,
    tags: ["Wireshark", "Python", "Análisis", "Machine Learning", "Redes"],
    image: "/placeholder.svg?height=400&width=800",
    demoLink: "#",
    githubLink: "https://github.com/username/network-traffic-analysis",
    date: "Enero 2023",
    screenshots: [
      "/placeholder.svg?height=300&width=500&text=Visualización+de+Tráfico",
      "/placeholder.svg?height=300&width=500&text=Detección+de+Anomalías",
      "/placeholder.svg?height=300&width=500&text=Análisis+de+Protocolos",
    ],
  },
  {
    slug: "seguridad-apis",
    title: "Seguridad en APIs",
    description: "Metodología y herramientas para evaluar la seguridad en APIs REST y GraphQL.",
    fullDescription: `
      ## Descripción del Proyecto

      Este proyecto se centra en el desarrollo de metodologías y herramientas para evaluar y mejorar la seguridad en APIs, tanto REST como GraphQL, abordando las vulnerabilidades específicas de estas arquitecturas y proporcionando soluciones prácticas.

      ## Objetivos

      - Desarrollar una metodología integral para el análisis de seguridad en APIs
      - Crear herramientas para la automatización de pruebas de seguridad en APIs
      - Identificar patrones de vulnerabilidades específicas para REST y GraphQL
      - Establecer mejores prácticas para el desarrollo seguro de APIs
      - Generar guías de remediación para vulnerabilidades comunes

      ## Metodología

      El proyecto se desarrolló siguiendo estas etapas:

      1. **Investigación**: Estudio de vulnerabilidades y ataques específicos para APIs
      2. **Desarrollo de metodología**: Creación de un framework de análisis basado en OWASP API Security Top 10
      3. **Implementación de herramientas**: Desarrollo de scripts y utilidades para automatizar pruebas
      4. **Validación**: Aplicación de la metodología en APIs reales (con permiso)
      5. **Documentación**: Elaboración de guías y mejores prácticas

      ## Resultados

      El proyecto ha permitido:
      - Identificar vulnerabilidades de autorización en el 70% de las APIs analizadas
      - Detectar problemas de rate limiting y protección contra ataques de fuerza bruta
      - Encontrar fallos en la validación de datos y sanitización de entradas
      - Desarrollar técnicas específicas para la seguridad en GraphQL
      - Crear una suite de herramientas para pruebas automatizadas de APIs

      ## Conclusiones

      La seguridad en APIs es un aspecto crítico en la arquitectura de aplicaciones modernas. Las metodologías y herramientas desarrolladas permiten realizar evaluaciones sistemáticas y detectar vulnerabilidades específicas de estas tecnologías, contribuyendo a la creación de APIs más seguras y robustas.
    `,
    tags: ["API", "REST", "GraphQL", "OWASP", "Web"],
    image: "/placeholder.svg?height=400&width=800",
    demoLink: "#",
    githubLink: "https://github.com/username/api-security",
    date: "Diciembre 2022",
    screenshots: [
      "/placeholder.svg?height=300&width=500&text=Análisis+de+Endpoints",
      "/placeholder.svg?height=300&width=500&text=Pruebas+de+Autorización",
      "/placeholder.svg?height=300&width=500&text=Reporte+de+Vulnerabilidades",
    ],
  },
]

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projectsData.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyber-50 via-slate-50 to-cyber-100 dark:from-gray-900 dark:via-gray-800 dark:to-cyber-950">
      <SiteHeader />
      
      <main className="container py-8 md:py-12">
        <div className="flex items-center gap-2 mb-8">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/proyectos">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver a proyectos
            </Link>
          </Button>
        </div>

        <article className="max-w-4xl mx-auto">
          <div className="relative h-64 md:h-96 w-full mb-8 rounded-lg overflow-hidden">
            <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
          </div>

          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>

            <div className="flex flex-wrap gap-3 mb-6">
              {project.tags.map((tag) => (
                <Badge key={tag} className="bg-cyber-100 text-cyber-700 dark:bg-cyber-900/30 dark:text-cyber-300">
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="flex flex-wrap gap-6 mb-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{project.date}</span>
              </div>

              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-cyber-500 transition-colors"
                >
                  <Github className="h-4 w-4" />
                  <span>Código fuente</span>
                </a>
              )}

              {project.demoLink && (
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-cyber-500 transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>Demo en vivo</span>
                </a>
              )}
            </div>
          </div>

          <div className="prose prose-slate dark:prose-invert max-w-none mb-12">
            {project.fullDescription.split("\n").map((paragraph, index) => {
              if (paragraph.startsWith("## ")) {
                return (
                  <h2 key={index} className="text-2xl font-bold mt-8 mb-4">
                    {paragraph.substring(3)}
                  </h2>
                )
              } else if (paragraph.startsWith("- ")) {
                return (
                  <li key={index} className="ml-6">
                    {paragraph.substring(2)}
                  </li>
                )
              } else if (paragraph.trim() === "") {
                return null
              } else if (paragraph.startsWith("1. ")) {
                const match = paragraph.match(/^\d+\.\s+\*\*([^*]+)\*\*:\s+(.+)$/)
                if (match) {
                  return (
                    <div key={index} className="ml-6 mb-2">
                      <strong>{match[1]}:</strong> {match[2]}
                    </div>
                  )
                }
                return (
                  <p key={index} className="ml-6">
                    {paragraph}
                  </p>
                )
              }
              return (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              )
            })}
          </div>

          {project.screenshots && project.screenshots.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Capturas de pantalla</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.screenshots.map((screenshot, index) => (
                  <div
                    key={index}
                    className="relative h-64 rounded-lg overflow-hidden border border-cyber-200 dark:border-cyber-800"
                  >
                    <Image
                      src={screenshot || "/placeholder.svg"}
                      alt={`Captura ${index + 1} del proyecto ${project.title}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex justify-between items-center">
            <Button asChild variant="outline" className="border-cyber-200 dark:border-cyber-800">
              <Link href="/proyectos">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Volver a proyectos
              </Link>
            </Button>

            {project.demoLink && (
              <Button asChild className="bg-cyber-600 hover:bg-cyber-700">
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                  Ver demo
                  <ExternalLink className="h-4 w-4 ml-2" />
                </a>
              </Button>
            )}
          </div>
        </article>
      </main>

      <Footer />
    </div>
  )
}
