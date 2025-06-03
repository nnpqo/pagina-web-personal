---
title: "Hashcrack - picoCTF"
description: "CTF de crackeo de hashes débiles en servidor remoto de PicoCTF."
date: "2025-06-02"
tags: ["Criptografia"]
link: "https://play.picoctf.org/practice/challenge/475?page=1"
repo: ""
---
<p class="text-base leading-relaxed text-muted-foreground">
Nos da la siguiente descripcion:
</p>
<p class="text-base leading-relaxed text-muted-foreground">
"Una empresa almacenó un mensaje secreto en un servidor que fue vulnerado 
debido a que el administrador usaba contraseñas débilmente hasheadas. 
¿Puedes obtener acceso al secreto almacenado en el servidor?"
</p>
<img
  src="/ctf-content/ctf-hashcrack/hashcrack1.png"
  alt="Imagen del ctf"
  width="400"
  style="display: block; margin: 2rem auto; border-radius: 12px;"
/>
<p class="text-base leading-relaxed text-muted-foreground">
Lo primero que hacemos es conectarnos al servidor remoto a traves de netcat ya que nos da el dato del nombre del servidor(host) y el numero del puerto del servidor 
</p>
<p class="text-base leading-relaxed text-muted-foreground">
Es una herramienta de red que permite:
</p>

<p class="text-base leading-relaxed text-muted-foreground">• Conectarte a puertos TCP/UDP remotos </p>
<p class="text-base leading-relaxed text-muted-foreground">• Escuchar conexiones </p>
<p class="text-base leading-relaxed text-muted-foreground">• Hacer debugging o pruebas de red </p>

<img
  src="/ctf-content/ctf-hashcrack/hashcrack2.png"
  alt="Imagen del ctf"
  width="400"
  style="display: block; margin: 2rem auto; border-radius: 12px;"
/>
<p class="text-base leading-relaxed text-muted-foreground">
Una vez conectados identificamos que nos da un hash MD5 ya que tiene 32 caracteres hexadecimales(128 bits)
</p>    
<p class="text-base leading-relaxed text-muted-foreground">
Una vez tenemos el hash usamos una herramienta llamada 
</p>
<a href="https://crackstation.net/" class="text-cyber-500 underline hover:text-cyber-700">https://crackstation.net/</a>
<p class="text-base leading-relaxed text-muted-foreground">
Es un sitio web que permite crackear hashes de contraseñas mediante fuerza bruta con un diccionario masivo precomputado. 
</p>
<p class="text-base leading-relaxed text-muted-foreground">
Ingresando el hash tenemos como resultado: password123
</p>
<img
  src="/ctf-content/ctf-hashcrack/hashcrack3.png"
  alt="Imagen del ctf"
  width="400"
  style="display: block; margin: 2rem auto; border-radius: 12px;"
/>
<p class="text-base leading-relaxed text-muted-foreground">
Es correcto, pero nos da un nuevo hash de tipo SHA-1 (40 hexadecimales) para crackear:
</p>
<img
  src="/ctf-content/ctf-hashcrack/hashcrack4.png"
  alt="Imagen del ctf"
  width="400"
  style="display: block; margin: 2rem auto; border-radius: 12px;"
/>
<p class="text-base leading-relaxed text-muted-foreground">
Por lo tanto realizamos el mismo procedimiento y nos da como respuesta: letmein
</p>
<img
  src="/ctf-content/ctf-hashcrack/hashcrack5.png"
  alt="Imagen del ctf"
  width="400"
  style="display: block; margin: 2rem auto; border-radius: 12px;"
/>
<p class="text-base leading-relaxed text-muted-foreground">
Ingresamos y es correcto, a continuacion nos da un nuevo hash esta vez es un SHA-256 (64 hexadecimales)
</p>
<img
  src="/ctf-content/ctf-hashcrack/hashcrak6.png"
  alt="Imagen del ctf"
  width="400"
  style="display: block; margin: 2rem auto; border-radius: 12px;"
/>
<p class="text-base leading-relaxed text-muted-foreground">
Usamos nuevamente crackstation el cual nos da como resultado: qwerty098
</p>
<img
  src="/ctf-content/ctf-hashcrack/hashcrack7.png"
  alt="Imagen del ctf"
  width="400"
  style="display: block; margin: 2rem auto; border-radius: 12px;"
/>
<p class="text-base leading-relaxed text-muted-foreground">
Ingresamos el valor y es correcto, y nos da la flag: picoCTF{UseStr0nG_h@shEs_&PaSswDs!_eff9dbe0}
</p>

<img
  src="/ctf-content/ctf-hashcrack/hashcrack9.png"
  alt="Imagen del ctf"
  width="400"
  style="display: block; margin: 2rem auto; border-radius: 12px;"
/>
<p class="text-base leading-relaxed text-muted-foreground">
y resuelto!!!!
</p>
<img
  src="/ctf-content/ctf-hashcrack/hashcrack10.png"
  alt="Imagen del ctf"
  width="400"
  style="display: block; margin: 2rem auto; border-radius: 12px;"
/>