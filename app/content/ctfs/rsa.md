---
title: "EVEN RSA CAN BE BROKEN??? - picoCTF"
description: "Desafío que explota una implementación débil de RSA al usar un primo pequeño para factorizar el módulo y descifrar la flag."
date: "2025-06-03"
tags: ["Criptografia"]
link: "https://play.picoctf.org/practice/challenge/470?page=1&search="
repo: ""
---
<p class="text-base leading-relaxed text-muted-foreground">
La descripcion nos dice lo siguiente:
</p>
<p class="text-base leading-relaxed text-muted-foreground">
“Este servicio te proporciona una bandera (flag) encriptada. ¿Puedes desencriptarla solo con N y e?”
y nos pide conectarnos usando netcat, tambien nos da el codigo fuente del programa 
</p>
<img
  src="/ctf-content/ctf-rsa/rsa1.png"
  alt="Imagen del ctf"
  width="400"
  style="display: block; margin: 2rem auto; border-radius: 12px;"
/>
<p class="text-base leading-relaxed text-muted-foreground">
El enunciado sugiere que:
</p>

<p class="text-base leading-relaxed text-muted-foreground">• Se usa RSA </p>
<p class="text-base leading-relaxed text-muted-foreground">• El reto omite la clave privada (d) </p>
<p class="text-base leading-relaxed text-muted-foreground">• Se debe romper la seguridad con solo N, e y el ciphertext</p>

<h2 class="text-2xl font-bold mb-4 mt-8">¿Qué es RSA?</h2>
<p class="text-base leading-relaxed text-muted-foreground">
RSA es un algoritmo de criptografía asimétrica inventado en 1977 por Rivest, Shamir y Adleman (de ahí el nombre R–S–A).
</p>
<p class="text-base leading-relaxed text-muted-foreground">
¿Qué significa criptografía asimétrica?
</p>
<p class="text-base leading-relaxed text-muted-foreground">
Usa dos claves diferentes:
</p>

<p class="text-base leading-relaxed text-muted-foreground">• Una clave pública para cifrar </p>
<p class="text-base leading-relaxed text-muted-foreground">• Una clave privada para descifrar </p>
<p class="text-base leading-relaxed text-muted-foreground">
Descargamos el codigo fuente que contiene la siguiente informacion:
</p>
<img
  src="/ctf-content/ctf-rsa/rsa2.png"
  alt="Imagen del ctf"
  width="400"
  style="display: block; margin: 2rem auto; border-radius: 12px;"
/>
<p class="text-base leading-relaxed text-muted-foreground">
Vemos que el mensaje se cifra de la siguiente manera:
</p>
<img
  src="/ctf-content/ctf-rsa/rsa3.png"
  alt="Imagen del ctf"
  width="400"
  style="display: block; margin: 2rem auto; border-radius: 12px;"
/>
<p class="text-base leading-relaxed text-muted-foreground">
y se generaba con: 
</p>
<img
  src="/ctf-content/ctf-rsa/rsa4.png"
  alt="Imagen del ctf"
  width="400"
  style="display: block; margin: 2rem auto; border-radius: 12px;"
/>
<p class="text-base leading-relaxed text-muted-foreground">
Esto nos confirmó que si podíamos factorizar N, podíamos obtener d y descifrar c.
</p>
<p class="text-base leading-relaxed text-muted-foreground">
Usamos la pagina 
</p>
<a href="https://factordb.com/" class="text-cyber-500 underline hover:text-cyber-700">https://factordb.com/</a>

<p class="text-base leading-relaxed text-muted-foreground">
para ver si es factoriable:
</p>
<p class="text-base leading-relaxed text-muted-foreground">
N = 2 × q → esto no debería pasar nunca en RSA
</p>
<p class="text-base leading-relaxed text-muted-foreground">
Eso nos dio acceso a p = 2 y q = N // 2
</p>
<p class="text-base leading-relaxed text-muted-foreground">
Construimos el script :
</p>
<img
  src="/ctf-content/ctf-rsa/rsa5.png"
  alt="Imagen del ctf"
  width="400"
  style="display: block; margin: 2rem auto; border-radius: 12px;"
/>
<p class="text-base leading-relaxed text-muted-foreground">
tenemos: 
</p>
<img
  src="/ctf-content/ctf-rsa/rsa6.png"
  alt="Imagen del ctf"
  width="400"
  style="display: block; margin: 2rem auto; border-radius: 12px;"
/>
<p class="text-base leading-relaxed text-muted-foreground">
usando la formula:
</p>
<p class="text-base leading-relaxed text-muted-foreground">
m = pow(c, d, N)
</p>
<p class="text-base leading-relaxed text-muted-foreground">
Y luego lo convertimos de número a texto con:
</p>
<p class="text-base leading-relaxed text-muted-foreground">
long_to_bytes(m)
</p>
<p class="text-base leading-relaxed text-muted-foreground">
Ejecutando el script tenemos:
</p>
<img
  src="/ctf-content/ctf-rsa/rsa7.png"
  alt="Imagen del ctf"
  width="400"
  style="display: block; margin: 2rem auto; border-radius: 12px;"
/>
<p class="text-base leading-relaxed text-muted-foreground">
Una vez obtenida la flag lo ponemos en el desafio:
</p>
<img
  src="/ctf-content/ctf-rsa/rsa8.png"
  alt="Imagen del ctf"
  width="400"
  style="display: block; margin: 2rem auto; border-radius: 12px;"
/>
<p class="text-base leading-relaxed text-muted-foreground">
y Resuelto!!!!!!
</p>