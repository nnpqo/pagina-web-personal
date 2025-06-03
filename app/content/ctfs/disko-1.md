---
title: "DISKO 1 - picoCTF"
description: "CTF de imagen de disco de PicoCTF"
date: "2025-06-02"
tags: ["forense"]
link: "https://play.picoctf.org/challenge/123"
repo: ""
---
<p class="text-base leading-relaxed text-muted-foreground">
Para la resolucion de este realizamos:
</p>
<p class="text-base leading-relaxed text-muted-foreground">
Descargar la imagen que muestra en la imagen 
</p>

<img
  src="/ctf-content/ctf1/disk1.png"
  alt="Imagen del ctf"
  width="400"
  style="display: block; margin: 2rem auto; border-radius: 12px;"
/>
<p class="text-base leading-relaxed text-muted-foreground">
El cual nos dara este archivo comprimido 
</p>
<img
  src="/ctf-content/ctf1/disk2.png"
  alt="Archivo"
  width="400"
  style="display: block; margin: 2rem auto; border-radius: 12px;"
/>
<p class="text-base leading-relaxed text-muted-foreground">
Lo descomprimimos y tenemos un archivo con extension .dd
</p>
<img
  src="/ctf-content/ctf1/disk3.png"
  alt="Archivo"
  width="400"
  style="display: block; margin: 2rem auto; border-radius: 12px;"
/>
<p class="text-base leading-relaxed text-muted-foreground">
Una vez realizado, inspeccionamos la imagen(sin ejecutarlo), para esto nos posicionamos en el directorio del archivo y ejecutamos el siguiente comando 
</p>
 
<img
  src="/ctf-content/ctf1/disk4.png"
  alt="Archivo"
  width="400"
  style="display: block; margin: 2rem auto; border-radius: 12px;"
/>
<p class="text-base leading-relaxed text-muted-foreground">
strings : extrae texto plano legible por humanos desde archivos binarios.
</p>
<p class="text-base leading-relaxed text-muted-foreground">
grep : busca líneas que contengan cierto texto, en este caso: picoCTF.
</p>
<p class="text-base leading-relaxed text-muted-foreground">
Lo que hace es tomar el resultado de strings disko-1.dd y pasarlo a grep para que busque texto en este caso picoCTF, el cual nos da el siguiente resultado:
</p>
<img
  src="/ctf-content/ctf1/disk5.png"
  alt="Archivo"
  width="400"
  style="display: block; margin: 2rem auto; border-radius: 12px;"
/>
<p class="text-base leading-relaxed text-muted-foreground">
Ponemos y flag encontrada de la siguiente manera:
</p>
<img
  src="/ctf-content/ctf1/disk6.png"
  alt="Archivo"
  width="400"
  style="display: block; margin: 2rem auto; border-radius: 12px;"
/>
<p class="text-base leading-relaxed text-muted-foreground">
y resuelto!!!!
</p>