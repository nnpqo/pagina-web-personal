import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Shield, ArrowLeft, Calendar, Share2 } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { Badge } from "@/components/ui/badge"
import { notFound } from "next/navigation"
import { SocialLinks } from "@/components/social-links"
import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/site-footer"

// Base de datos simulada de artículos del blog
const blogData = [
  {
    slug: "tendencias-ciberseguridad-2024",
    title: "Tendencias en Ciberseguridad para 2024",
    description:
      "Análisis de las principales tendencias y amenazas emergentes en el campo de la ciberseguridad para este año.",
    fullContent: `
      ## Introducción

      El panorama de la ciberseguridad evoluciona constantemente, presentando nuevos desafíos y oportunidades. En 2024, estamos viendo la convergencia de varias tendencias tecnológicas que están redefiniendo cómo debemos abordar la seguridad digital.

      ## Inteligencia Artificial en Ciberseguridad

      La IA se ha convertido en una herramienta de doble filo en el ámbito de la ciberseguridad. Por un lado, las organizaciones están implementando sistemas de seguridad basados en IA para detectar amenazas en tiempo real, analizar patrones de comportamiento sospechosos y automatizar respuestas a incidentes.

      Por otro lado, los ciberdelincuentes también están aprovechando la IA para desarrollar ataques más sofisticados, como:

      - Malware que evoluciona para evadir detección
      - Ataques de phishing personalizados usando IA generativa
      - Automatización de la búsqueda de vulnerabilidades
      - Deepfakes para ingeniería social avanzada

      ## Seguridad en Entornos de Nube Distribuida

      Con la adopción masiva de arquitecturas multi-nube e híbridas, la superficie de ataque se ha expandido significativamente. Las tendencias principales incluyen:

      - Adopción de modelos de seguridad Zero Trust
      - Herramientas CSPM (Cloud Security Posture Management) más sofisticadas
      - Seguridad para aplicaciones cloud-native y entornos de contenedores
      - Gestión centralizada de identidades a través de múltiples nubes

      ## Amenazas a la Cadena de Suministro Software

      Los ataques a la cadena de suministro siguen siendo una preocupación crítica, como demostraron casos como SolarWinds. Estamos viendo:

      - Mayor adopción de SBOM (Software Bill of Materials)
      - Herramientas avanzadas para verificar la integridad del código
      - Frameworks para validar la procedencia del software
      - Regulaciones más estrictas para proveedores de software

      ## Auge de la Computación Cuántica y sus Implicaciones

      Aunque la computación cuántica práctica todavía está en desarrollo, su potencial para romper los sistemas criptográficos actuales está impulsando:

      - Desarrollo e implementación de criptografía post-cuántica
      - Evaluación de riesgos cuánticos en infraestructuras críticas
      - Investigación en nuevos algoritmos de seguridad resistentes a ataques cuánticos
      - Estrategias de migración "crypto-ágiles"

      ## Evolución del Ransomware

      El ransomware continúa evolucionando con nuevas tácticas como:

      - Ataques de triple extorsión (cifrado, robo y amenaza de DDoS)
      - Grupos de ransomware enfocados en sectores específicos
      - Uso de vulnerabilidades de día cero para el acceso inicial
      - Explotación de tecnologías emergentes como IoT y dispositivos médicos conectados

      ## Conclusiones

      El panorama de la ciberseguridad en 2024 requiere un enfoque proactivo y adaptable. Las organizaciones deben invertir no solo en tecnologías de seguridad avanzadas, sino también en formación continua y concienciación para su personal. La colaboración entre sectores y con agencias gubernamentales será crucial para hacer frente a las amenazas emergentes.

      La carrera entre atacantes y defensores continúa acelerándose, pero con una comprensión clara de estas tendencias, las organizaciones pueden prepararse mejor para los desafíos de seguridad que nos esperan en el futuro próximo.
    `,
    date: "15 de abril, 2024",
    category: "Tendencias",
    image: "/placeholder.svg?height=400&width=800&text=Tendencias+Ciberseguridad+2024",
    authorName: "Tu Nombre",
    authorImage: "/placeholder.svg?height=100&width=100",
    tags: ["IA", "Ransomware", "Computación Cuántica", "Zero Trust", "Cadena de Suministro"],
    relatedPosts: ["tecnicas-evasion-ids", "seguridad-aplicaciones-web-modernas"],
  },
  {
    slug: "tecnicas-evasion-ids",
    title: "Técnicas Avanzadas de Evasión de IDS",
    description:
      "Investigación sobre las técnicas modernas utilizadas por atacantes para evadir sistemas de detección de intrusiones.",
    fullContent: `
      ## Introducción

      Los Sistemas de Detección de Intrusiones (IDS) constituyen una capa fundamental en la seguridad de red moderna. Sin embargo, los atacantes continúan desarrollando técnicas sofisticadas para evadir estos sistemas. Esta investigación explora las técnicas más avanzadas de evasión de IDS que están siendo utilizadas actualmente.

      ## Fundamentos de los IDS

      Antes de abordar las técnicas de evasión, es importante entender cómo funcionan los IDS. Generalmente, se clasifican en:

      - **IDS basados en firmas**: Detectan ataques comparando el tráfico con patrones conocidos de comportamiento malicioso.
      - **IDS basados en anomalías**: Establecen una línea base de tráfico "normal" y alertan sobre desviaciones significativas.
      - **IDS híbridos**: Combinan ambos enfoques para mejorar la detección.

      ## Técnicas de Fragmentación y Segmentación

      Una de las técnicas más antiguas pero aún efectivas consiste en fragmentar los paquetes de red:

      - **Fragmentación IP**: Dividir paquetes maliciosos en fragmentos más pequeños que individualmente no activan alertas.
      - **Segmentación TCP**: Dividir un ataque en múltiples segmentos TCP para evitar la detección.
      - **Solapamiento de fragmentos**: Crear fragmentos que se solapan de manera inconsistente, causando diferencias en la reconstrucción entre el IDS y el sistema objetivo.

      ## Evasión mediante Ofuscación de Protocolos

      Los atacantes manipulan los protocolos de red para confundir a los sistemas de detección:

      - **Túneles encriptados**: Ocultar tráfico malicioso dentro de conexiones cifradas (SSH, SSL/TLS).
      - **Tunelización a través de protocolos comunes**: Encapsular malware en protocolos rara vez bloqueados como DNS o ICMP.
      - **Manipulación de cabeceras HTTP**: Utilizar técnicas como codificación URL anidada o métodos HTTP poco comunes para evadir firmas.

      ## Ataques de Sincronización y Timeout

      Estas técnicas explotan diferencias en cómo los IDS y los sistemas objetivo manejan el tiempo:

      - **Ataques de inserción**: Inyectar paquetes que el IDS acepta pero el objetivo descarta.
      - **Ataques de evasión**: Enviar paquetes que el IDS ignora pero el objetivo procesa.
      - **Manipulación de TTL**: Configurar valores TTL para que los paquetes lleguen al objetivo pero no al sensor IDS, o viceversa.

      ## Técnicas basadas en Aprendizaje Automático

      Las técnicas más avanzadas ahora utilizan aprendizaje automático para evadir IDS basados en la misma tecnología:

      - **Ataques adversarios**: Manipular mínimamente el malware para que clasifique como benigno.
      - **Poisoning de modelos**: Contaminar gradualmente los datos de entrenamiento de IDS adaptativos.
      - **Mutación polimórfica avanzada**: Generar variantes de malware que aprenden a evadir detección específica.

      ## Técnicas de Evasión Específicas de IDS basados en Comportamiento

      Para los sistemas más avanzados basados en comportamiento:

      - **Ataques de baja y lenta intensidad**: Distribuir actividades maliciosas por largos períodos por debajo de umbrales de detección.
      - **Mimicry attacks**: Imitar patrones de tráfico legítimo mientras se realizan actividades maliciosas.
      - **Rotación de infraestructura**: Cambiar constantemente IPs, dominios y servidores para evitar la construcción de perfiles de comportamiento.

      ## Contramedidas y Recomendaciones

      Para defenderse contra estas técnicas avanzadas:

      - Implementar múltiples capas de detección que utilicen diferentes metodologías
      - Actualizar regularmente firmas y modelos de comportamiento
      - Utilizar análisis de tráfico cifrado (cuando sea legal y apropiado)
      - Implementar detección basada en el comportamiento del endpoint
      - Realizar auditorías de seguridad que incluyan pruebas de evasión de IDS

      ## Conclusión

      La carrera entre atacantes y defensores continúa evolucionando, con técnicas de evasión cada vez más sofisticadas. Comprender estas técnicas es fundamental para los profesionales de seguridad que buscan fortalecer sus sistemas de detección. La combinación de múltiples enfoques de detección, junto con la constante actualización de conocimientos, sigue siendo la mejor estrategia para contrarrestar las técnicas avanzadas de evasión de IDS.
    `,
    date: "2 de marzo, 2024",
    category: "Seguridad Defensiva",
    image: "/placeholder.svg?height=400&width=800&text=Evasión+IDS",
    authorName: "Tu Nombre",
    authorImage: "/placeholder.svg?height=100&width=100",
    tags: ["IDS", "Evasión", "Detección", "Redes", "Seguridad Defensiva"],
    relatedPosts: ["tendencias-ciberseguridad-2024", "analisis-malware-tecnicas-herramientas"],
  },
  {
    slug: "seguridad-aplicaciones-web-modernas",
    title: "Seguridad en Aplicaciones Web Modernas",
    description:
      "Guía completa sobre cómo implementar medidas de seguridad efectivas en aplicaciones web basadas en frameworks modernos.",
    fullContent: `
      ## Introducción

      Las aplicaciones web modernas se desarrollan utilizando frameworks y tecnologías que evolucionan rápidamente. Aunque estos frameworks ofrecen muchas funcionalidades incorporadas, la seguridad sigue siendo una responsabilidad compartida entre el framework y los desarrolladores. Esta guía aborda las mejores prácticas de seguridad para aplicaciones web modernas.

      ## El Panorama de Seguridad en Aplicaciones Web Modernas

      Los frameworks modernos como React, Angular, Vue, Next.js y demás han transformado el desarrollo web, pero también han creado nuevos vectores de ataque:

      - Arquitecturas SPA (Single Page Application) con complejos estados del cliente
      - Amplia dependencia de APIs y microservicios
      - Mayor superficie de ataque debido a múltiples dependencias de terceros
      - Nuevos patrones de autenticación y autorización

      ## Principios Fundamentales de Seguridad Web

      Independientemente del framework, estos principios siguen siendo esenciales:

      - **Defensa en profundidad**: Implementar múltiples capas de seguridad
      - **Mínimo privilegio**: Limitar accesos y permisos a lo estrictamente necesario
      - **Validación de datos completa**: Validar todas las entradas tanto en cliente como en servidor
      - **Manejo seguro de errores**: Evitar exponer información sensible en mensajes de error
      - **Actualizaciones regulares**: Mantener todas las dependencias actualizadas

      ## Seguridad en el Frontend

      ### Protección contra XSS en Frameworks Modernos

      Aunque frameworks como React proporcionan cierta protección contra XSS por defecto, sigue siendo necesario:

      - Evitar el uso inseguro de dangerouslySetInnerHTML o equivalentes
      - Implementar Content Security Policy (CSP) adecuadamente
      - Sanitizar datos antes de renderizarlos, especialmente en renderizado del lado del servidor
      - Utilizar propiedades seguras para manipulación del DOM

      ### Gestión Segura del Estado

      - Nunca almacenar datos sensibles en localStorage o sessionStorage
      - Implementar timeout para sesiones inactivas
      - Utilizar JWT de manera segura, con tiempos de expiración cortos
      - Considerar el uso de Web Crypto API para operaciones criptográficas en el cliente

      ## Seguridad en APIs y Backend

      ### Autenticación Robusta

      - Implementar OAuth 2.0/OpenID Connect correctamente
      - Utilizar autenticación multi-factor cuando sea posible
      - Implementar límites de intentos de login y captchas
      - Consideraciones para API keys y secretos

      ### Autorización Efectiva

      - Implementar verificaciones de autorización a nivel de API y datos
      - Utilizar RBAC (Role-Based Access Control) o ABAC (Attribute-Based Access Control)
      - Implementar CORS correctamente para prevenir accesos no autorizados

      ### Protección de Datos

      - Cifrar datos sensibles en tránsito y en reposo
      - Implementar tokenización para datos PII cuando sea apropiado
      - Considerar el uso de campos hash para búsquedas en datos sensibles

      ## Seguridad en DevOps y Infraestructura

      ### Integración de Seguridad en CI/CD

      - Automatizar escaneos de seguridad en código y dependencias
      - Implementar análisis estático y dinámico de código (SAST/DAST)
      - Verificar la firma e integridad de artefactos de despliegue

      ### Configuración Segura de Infraestructura

      - Implementar WAF (Web Application Firewall)
      - Configurar adecuadamente cabeceras de seguridad HTTP
      - Mantener separación de entornos con controles de acceso apropiados
      - Utilizar servicios gestionados cuando sea posible

      ## Frameworks Específicos: Consideraciones de Seguridad

      ### React y Next.js

      - Implementar getServerSideProps y similares con validaciones apropiadas
      - Gestionar correctamente la hidratación para prevenir discrepancias de seguridad
      - Consideraciones específicas para SSR (Server-Side Rendering)

      ### Angular

      - Utilizar correctamente HttpInterceptors para validaciones de seguridad
      - Implementar sanitizadores DomSanitizer adecuadamente
      - Manejar correctamente directivas y pipes para prevenir inyecciones

      ### Vue.js y Nuxt.js

      - Evitar el uso inseguro de v-html sin sanitización
      - Implementar correctamente middleware de seguridad
      - Consideraciones para SSR y reactividad

      ## Testing de Seguridad para Aplicaciones Modernas

      - Pruebas automatizadas de seguridad (SAST, DAST, IAST)
      - Pruebas de penetración específicas para SPAs y APIs
      - Fuzzing de APIs y entradas de usuario
      - Verificación de configuración de seguridad

      ## Conclusión

      La seguridad en aplicaciones web modernas requiere un enfoque holístico que abarque frontend, backend, infraestructura y procesos de desarrollo. Aunque los frameworks modernos proporcionan algunas protecciones por defecto, los desarrolladores deben comprender y abordar los riesgos específicos de sus aplicaciones.

      La seguridad no es una característica que se añade al final, sino un proceso continuo que debe integrarse en cada fase del ciclo de vida del desarrollo de software. Mantenerse actualizado sobre las últimas amenazas y técnicas de defensa es esencial para proteger efectivamente las aplicaciones web modernas.
    `,
    date: "18 de febrero, 2024",
    category: "Desarrollo Seguro",
    image: "/placeholder.svg?height=400&width=800&text=Seguridad+Web+Moderna",
    authorName: "Tu Nombre",
    authorImage: "/placeholder.svg?height=100&width=100",
    tags: ["Web", "Frameworks", "XSS", "API", "OWASP"],
    relatedPosts: ["tendencias-ciberseguridad-2024", "osint-tecnicas-reconocimiento"],
  },
  {
    slug: "analisis-malware-tecnicas-herramientas",
    title: "Análisis de Malware: Técnicas y Herramientas",
    description:
      "Metodologías y herramientas para el análisis efectivo de malware, desde análisis estático hasta dinámico.",
    fullContent: `
      ## Introducción al Análisis de Malware

      El análisis de malware es una disciplina esencial en la ciberseguridad moderna, permitiendo comprender cómo operan las amenazas informáticas, cómo detectarlas y cómo mitigar sus efectos. Esta guía explora las principales técnicas y herramientas utilizadas por analistas de seguridad para examinar código malicioso.

      ## Fundamentos del Análisis de Malware

      El análisis de malware se divide generalmente en dos categorías principales:

      - **Análisis Estático**: Examinar el malware sin ejecutarlo
      - **Análisis Dinámico**: Observar el comportamiento del malware durante su ejecución en un entorno controlado

      Cada enfoque tiene sus ventajas y limitaciones, por lo que un análisis completo suele combinar ambas técnicas.

      ## Análisis Estático: Técnicas y Herramientas

      ### Análisis Básico de Archivos

      - **Hashing**: Generar hashes (MD5, SHA-1, SHA-256) para identificación y búsqueda en bases de datos
        - Herramientas: \`HashMyFiles\`, \`md5sum\`, \`sha256sum\`

      - **Análisis de Strings**: Extraer cadenas de texto legibles del archivo
        - Herramientas: \`strings\` (Linux/Unix), \`FLOSS\` (FireEye Labs Obfuscated String Solver)

      - **Identificación de Tipo de Archivo**: Verificar la verdadera naturaleza del archivo independientemente de su extensión
        - Herramientas:amientas: \`file\` (Linux/Unix), \`TrID\`, \`Exiftool\`

      ### Análisis de Código y Estructura

      - **Análisis de PE (Portable Executable)**: Examinar la estructura de archivos ejecutables de Windows
        - Herramientas: \`PEiD\`, \`PEStudio\`, \`PE Explorer\`, \`CFF Explorer\`
      
      - **Disassembly**: Convertir código máquina a ensamblador para análisis
        - Herramientas: \`IDA Pro\`, \`Ghidra\`, \`Radare2\`, \`Binary Ninja\`
      
      - **Decompilación**: Intentar recuperar código fuente de nivel superior
        - Herramientas: \`JD-GUI\` (Java), \`dotPeek\` (NET), \`Ghidra\`, \`RetDec\`

      ### Análisis de Packing y Ofuscación

      - **Detección de Packers**: Identificar si el malware está comprimido o protegido
        - Herramientas: \`PEiD\`, \`Exeinfo PE\`, \`DIE (Detect It Easy)\`
      
      - **Unpacking**: Extraer el código original de malware empaquetado
        - Técnicas: Unpacking manual, dumping de memoria, herramientas específicas para packers conocidos

      ## Análisis Dinámico: Técnicas y Herramientas

      ### Preparación del Entorno

      - **Sandboxing**: Crear entornos aislados para ejecución segura
        - Herramientas: \`Cuckoo Sandbox\`, \`ANY.RUN\`, \`VMware/VirtualBox\` con snapshots
      
      - **Configuración de Red**: Simular Internet sin permitir conexiones reales
        - Configuraciones: INetSim, FakeNet-NG, ApateDNS

      ### Monitorización del Sistema

      - **Monitorización de Procesos**: Observar creación y comportamiento de procesos
        - Herramientas: \`Process Monitor\`, \`Process Explorer\`, \`Process Hacker\`
      
      - **Monitorización de Registro**: Capturar cambios en el registro de Windows
        - Herramientas: \`RegShot\`, \`Registry Monitor\`
      
      - **Captura de Tráfico de Red**: Analizar comunicaciones del malware
        - Herramientas: \`Wireshark\`, \`tcpdump\`, \`NetworkMiner\`
      
      - **Análisis de API Calls**: Observar llamadas a funciones del sistema
        - Herramientas: \`API Monitor\`, \`Frida\`, \`DynamoRIO\`

      ### Análisis de Memoria

      - **Volcados de Memoria**: Capturar y analizar el estado de la memoria durante la ejecución
        - Herramientas: \`Volatility\`, \`Rekall\`, \`WinDbg\`, \`DumpIt\`
      
      - **Análisis de Malware en Memoria**: Identificar artefactos y evidencias en memoria
        - Técnicas: Búsqueda de strings, reconstrucción de procesos, extracción de secretos

      ## Técnicas Avanzadas de Análisis

      ### Análisis de Código Shellcode

      - Extracción y decodificación de shellcode
      - Emulación utilizando herramientas como \`scdbg\`, \`libemu\`

      ### Ingeniería Inversa de Protocolos C2

      - Análisis de comunicaciones con servidores de comando y control
      - Decodificación de protocolos personalizados
      - Herramientas: Wireshark con disectores personalizados, \`CyberChef\`

      ### Análisis de Malware Evasivo

      - Técnicas anti-VM y anti-análisis
      - Bypassing de técnicas evasivas
      - Configuraciones personalizadas de sandbox

      ## Automatización y Frameworks

      - **Plataformas Integradas**: \`REMnux\`, \`FLARE VM\`, \`Tsurugi Linux\`
      - **Frameworks de Automatización**: \`YARA\` para detección, \`capa\` para identificación de capacidades
      - **Servicios Online**: \`VirusTotal\`, \`Hybrid Analysis\`, \`Joe Sandbox\`, \`AnyRun\`

      ## Documentación y Reporte

      Un análisis efectivo debe culminar con documentación estructurada:

      - Resumen ejecutivo de hallazgos
      - Indicadores de Compromiso (IoCs)
      - Comportamiento y capacidades observadas
      - Técnicas de evasión utilizadas
      - Recomendaciones de mitigación

      ## Consideraciones Éticas y Legales

      - Manipulación segura de malware
      - Restricciones en compartir muestras activas
      - Divulgación responsable de hallazgos
      - Consideraciones sobre malware dirigido a infraestructuras críticas

      ## Conclusión

      El análisis de malware es un campo complejo que requiere una combinación de herramientas, técnicas y conocimientos. La naturaleza evolutiva del malware exige que los analistas se mantengan actualizados constantemente y adapten sus metodologías. Una combinación efectiva de análisis estático y dinámico, junto con el uso apropiado de herramientas especializadas, permite desentrañar incluso las amenazas más sofisticadas, contribuyendo así a una postura de seguridad más robusta.
    `,
    date: "5 de febrero, 2024",
    category: "Análisis de Malware",
    image: "/placeholder.svg?height=400&width=800&text=Análisis+de+Malware",
    authorName: "Tu Nombre",
    authorImage: "/placeholder.svg?height=100&width=100",
    tags: ["Malware", "Análisis Estático", "Análisis Dinámico", "Reverse Engineering", "Sandboxing"],
    relatedPosts: ["tecnicas-evasion-ids", "hardening-servidores-linux"],
  },
  {
    slug: "introduccion-hacking-etico",
    title: "Introducción al Hacking Ético",
    description: "Guía para principiantes sobre hacking ético, metodologías y consideraciones legales y éticas.",
    fullContent: `
      ## ¿Qué es el Hacking Ético?

      El hacking ético, también conocido como pruebas de penetración o pentesting, es la práctica autorizada de intentar vulnerar sistemas de seguridad informática con el objetivo de encontrar y solucionar posibles vulnerabilidades antes de que sean explotadas por actores maliciosos. A diferencia del hacking malicioso, el hacking ético se realiza con el consentimiento explícito del propietario del sistema y con fines de mejora de la seguridad.

      ## Fundamentos del Hacking Ético

      ### Tipos de Hackers

      Es importante entender la diferencia entre los diferentes tipos de hackers:

      - **White Hat**: Hackers éticos que trabajan para mejorar la seguridad con autorización
      - **Black Hat**: Hackers maliciosos que comprometen sistemas con fines ilegales
      - **Gray Hat**: Operan en una zona ambigua, a veces sin autorización pero sin intenciones maliciosas
      - **Blue Team**: Profesionales de seguridad enfocados en la defensa
      - **Red Team**: Profesionales que simulan ataques para probar defensas

      ### Áreas de Conocimiento Necesarias

      El hacking ético requiere conocimientos en diversas áreas:

      - Redes y protocolos de comunicación
      - Sistemas operativos (Windows, Linux, macOS)
      - Lenguajes de programación (Python, Bash, PowerShell)
      - Seguridad web y aplicaciones
      - Bases de datos y SQL
      - Criptografía básica
      - Ingeniería social

      ## Metodologías de Pentesting

      Existen varias metodologías estructuradas para realizar pruebas de penetración:

      ### OSSTMM (Open Source Security Testing Methodology Manual)

      Desarrollada por ISECOM, esta metodología se centra en la evaluación operacional de la seguridad:

      - Seguridad física
      - Seguridad de la información
      - Seguridad de procesos
      - Seguridad en redes
      - Seguridad inalámbrica

      ### PTES (Penetration Testing Execution Standard)

      Una metodología completa que incluye siete fases principales:

      1. Interacción previa al compromiso
      2. Recolección de información
      3. Modelado de amenazas
      4. Análisis de vulnerabilidades
      5. Explotación
      6. Post-explotación
      7. Informes

      ### OWASP Testing Guide

      Enfocada específicamente en aplicaciones web, con pruebas categorizadas en:

      - Gestión de configuración
      - Autenticación
      - Gestión de sesiones
      - Validación de entradas
      - Manejo de errores
      - Criptografía
      - Lógica de negocio
      - Cliente-side

      ## Fases del Hacking Ético

      Independientemente de la metodología, las pruebas de penetración suelen seguir estas fases:

      ### 1. Reconocimiento (Footprinting)

      Recolección de información sobre el objetivo:

      - **Reconocimiento pasivo**: OSINT, búsquedas en Internet, redes sociales
      - **Reconocimiento activo**: Escaneos, enumeración de servicios
      - Herramientas: Google Dorks, theHarvester, Shodan, Maltego

      ### 2. Escaneo (Scanning)

      Identificación de sistemas activos y puertos abiertos:

      - Escaneo de puertos y servicios
      - Identificación de sistemas operativos (OS fingerprinting)
      - Herramientas: Nmap, Masscan, Angry IP Scanner

      ### 3. Enumeración

      Recopilación detallada de información sobre los servicios descubiertos:

      - Enumeración de usuarios y grupos
      - Recopilación de banners de servicios
      - Identificación de aplicaciones y versiones
      - Herramientas: enum4linux, SMBMap, LDAP enumeration

      ### 4. Análisis de Vulnerabilidades

      Identificación de posibles vulnerabilidades en los sistemas:

      - Escaneo automatizado de vulnerabilidades
      - Verificación manual de configuraciones
      - Herramientas: OpenVAS, Nessus, Nexpose, Qualys

      ### 5. Explotación

      Aprovechamiento de las vulnerabilidades detectadas:

      - Explotación de vulnerabilidades conocidas
      - Ataques de fuerza bruta o diccionario
      - Ataques de inyección (SQL, XSS, etc.)
      - Herramientas: Metasploit, Burp Suite, SQLmap

      ### 6. Post-explotación

      Acciones realizadas tras obtener acceso:

      - Elevación de privilegios
      - Movimiento lateral
      - Persistencia
      - Recolección de información sensible
      - Herramientas: Mimikatz, PowerSploit, Empire

      ### 7. Documentación y Reporte

      Presentación de los hallazgos al cliente:

      - Resumen ejecutivo
      - Metodología utilizada
      - Hallazgos detallados y su impacto
      - Recomendaciones de mitigación
      - Plan de remediación

      ## Herramientas Esenciales

      ### Distribuciones Especializadas

      - **Kali Linux**: La distribución más popular para pentesting
      - **Parrot Security OS**: Alternativa a Kali con enfoque en privacidad
      - **BlackArch Linux**: Contiene más de 2300 herramientas de seguridad

      ### Herramientas por Categoría

      - **Reconocimiento**: Maltego, Recon-ng, SpiderFoot
      - **Escaneo**: Nmap, Masscan, Nikto
      - **Explotación**: Metasploit, BeEF, SQLmap
      - **Wireless**: Aircrack-ng, Kismet, WiFite
      - **Ingeniería social**: SET (Social Engineer Toolkit), Gophish
      - **Análisis forense**: Autopsy, Volatility, The Sleuth Kit

      ## Aspectos Legales y Éticos

      ### Marco Legal

      El hacking ético debe realizarse dentro de un marco legal claro:

      - Obtener autorización escrita explícita
      - Definir el alcance de las pruebas
      - Conocer las leyes locales (CFAA en EE.UU., Ley de Delitos Informáticos en otros países)
      - Proteger la información confidencial

      ### Códigos de Ética

      Los profesionales del hacking ético siguen códigos de conducta:

      - Confidencialidad
      - Integridad
      - Disponibilidad
      - No causar daño
      - Informar de manera responsable
      - Respetar la privacidad

      ## Certificaciones Profesionales

      Para demostrar competencia en hacking ético, existen certificaciones reconocidas:

      - **CEH (Certified Ethical Hacker)**: De EC-Council, centrada en herramientas y técnicas básicas
      - **OSCP (Offensive Security Certified Professional)**: Práctica y hands-on, muy respetada
      - **GPEN (GIAC Penetration Tester)**: De SANS, enfocada en metodologías
      - **PenTest+**: De CompTIA, certificación de nivel intermedio

      ## Recursos para Aprendizaje

      - **Plataformas de práctica**: HackTheBox, TryHackMe, VulnHub
      - **CTFs (Capture The Flag)**: Competiciones de seguridad
      - **Laboratorios virtuales**: DVWA, WebGoat, Metasploitable
      - **Cursos en línea**: Udemy, Coursera, Pluralsight, eJPT

      ## Conclusión

      El hacking ético es una disciplina fundamental para mejorar la seguridad de los sistemas informáticos. Requiere una combinación de conocimientos técnicos, metodología estructurada y un fuerte compromiso ético. Para quienes estén interesados en este campo, es importante comenzar con una base sólida de conocimientos en redes y sistemas, practicar en entornos controlados y legales, y mantenerse constantemente actualizado con las nuevas tecnologías y técnicas de ataque y defensa.

      El camino para convertirse en un profesional del hacking ético es exigente pero gratificante, ofreciendo la oportunidad de contribuir significativamente a la seguridad digital de organizaciones y personas.
    `,
    date: "20 de enero, 2024",
    category: "Hacking Ético",
    image: "/placeholder.svg?height=400&width=800&text=Hacking+Ético",
    authorName: "Tu Nombre",
    authorImage: "/placeholder.svg?height=100&width=100",
    tags: ["Pentesting", "Ética", "Metodologías", "OWASP", "Seguridad Ofensiva"],
    relatedPosts: ["osint-tecnicas-reconocimiento", "seguridad-contenedores-docker"],
  },
]

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogData.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  // Encontrar posts relacionados
  const relatedPosts = post.relatedPosts ? blogData.filter((p) => post.relatedPosts?.includes(p.slug)).slice(0, 2) : []

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyber-50 via-slate-50 to-cyber-100 dark:from-gray-900 dark:via-gray-800 dark:to-cyber-950">
      <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-gray-900/80 dark:supports-[backdrop-filter]:bg-gray-900/60">
        <div className="container flex h-16 items-center justify-between">
          <SiteHeader />
        </div>
      </header>

      <main className="container py-8 md:py-12">
        <div className="flex items-center gap-2 mb-8">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/blog">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver al blog
            </Link>
          </Button>
        </div>

        <article className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Badge className="bg-cyber-500 hover:bg-cyber-600 mb-4">{post.category}</Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>

            <div className="flex flex-wrap gap-6 mb-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="relative w-8 h-8 rounded-full overflow-hidden">
                  <Image
                    src={post.authorImage || "/placeholder.svg"}
                    alt={post.authorName}
                    fill
                    className="object-cover"
                  />
                </div>
                <span>{post.authorName}</span>
              </div>

              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>

              <Button variant="ghost" size="sm" className="h-8 gap-1 text-muted-foreground">
                <Share2 className="h-4 w-4" />
                <span>Compartir</span>
              </Button>
            </div>
          </div>

          <div className="relative h-64 md:h-96 w-full mb-8 rounded-lg overflow-hidden">
            <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="bg-cyber-100 text-cyber-700 dark:bg-cyber-900/30 dark:text-cyber-300"
              >
                {tag}
              </Badge>
            ))}
          </div>

          <div className="prose prose-slate dark:prose-invert max-w-none mb-12">
            {post.fullContent.split("\n").map((paragraph, index) => {
              if (paragraph.startsWith("## ")) {
                return (
                  <h2 key={index} className="text-2xl font-bold mt-8 mb-4">
                    {paragraph.substring(3)}
                  </h2>
                )
              } else if (paragraph.startsWith("### ")) {
                return (
                  <h3 key={index} className="text-xl font-bold mt-6 mb-3">
                    {paragraph.substring(4)}
                  </h3>
                )
              } else if (paragraph.startsWith("- ")) {
                return (
                  <li key={index} className="ml-6">
                    {paragraph.substring(2)}
                  </li>
                )
              } else if (paragraph.trim() === "") {
                return null
              } else if (paragraph.trim().startsWith("1. ")) {
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

          {/* Autor */}
          <div className="mb-10 p-6 bg-white/80 dark:bg-gray-800/50 rounded-lg border">
            <div className="flex items-start gap-4">
              <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0">
                <Image
                  src={post.authorImage || "/placeholder.svg"}
                  alt={post.authorName}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Escrito por {post.authorName}</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Especialista en ciberseguridad y desarrollo seguro. Apasionado por compartir conocimientos sobre
                  seguridad informática y ayudar a construir un entorno digital más seguro.
                </p>
                <SocialLinks />
              </div>
            </div>
          </div>

          {/* Posts Relacionados */}
          {relatedPosts.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-6">Artículos relacionados</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className="group rounded-lg border bg-white/80 dark:bg-gray-800/50 overflow-hidden flex flex-col hover:shadow-md transition-all"
                  >
                    <div className="relative h-40 w-full">
                      <Image
                        src={related.image || "/placeholder.svg"}
                        alt={related.title}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-xs text-cyber-500 mb-2">{related.date}</p>
                      <h3 className="font-bold text-lg mb-2 group-hover:text-cyber-500 transition-colors line-clamp-2">
                        {related.title}
                      </h3>
                      <p className="text-muted-foreground text-sm line-clamp-2">{related.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>
      </main>

      <Footer />
    </div>
  )
}
