# Historia de Usuario - Reverse String

## HDU-001: Invertir cadena de texto en tiempo real

**Como** usuario de la aplicación web,
**Quiero** escribir una palabra o frase y ver su versión invertida en tiempo real,
**Porque** necesito una herramienta rápida e interactiva para invertir cadenas de texto,
**Para** agilizar tareas de desarrollo, aprendizaje o entretenimiento.

---

## Criterios de Aceptacion

1. **Entrada reactiva**: Al escribir en el campo de texto, el resultado invertido se muestra en tiempo real debajo del input.
2. **Animacion de tipado**: La salida invertida se muestra con una animacion de tipado, como si la pagina estuviera "pensando" antes de mostrar el resultado.
3. **Borrado reactivo**: Si el usuario borra caracteres del input, el output se actualiza eliminando los caracteres correspondientes de forma reactiva.
4. **Boton condicional**: El boton "Reverse" solo aparece cuando el texto tiene mas de 3 caracteres.
5. **Boton Copy**: Debe existir un boton para copiar el resultado invertido al portapapeles.
6. **Mobile first**: El diseno debe ser responsive, priorizando la experiencia en dispositivos moviles.
7. **Estilo visual**: Tema minimalista interactivo inspirado en cientifico loco (Rick and Morty) usando Bootstrap como framework CSS.
8. **Ejemplo funcional**: Si introduzco "AI4Devs" devuelve "sveD4IA". Si introduzco "HOLA" retorna "ALOH".

---

## Criterios de No Aceptacion

1. **No debe** recargar la pagina para mostrar el resultado.
2. **No debe** requerir instalacion de dependencias o build tools (funciona solo con archivos estaticos).
3. **No debe** perder el foco del input al interactuar con los botones.
4. **No debe** mostrar el boton Reverse si el texto tiene 3 caracteres o menos.
5. **No debe** tener un estilo generico o corporativo; debe reflejar la tematica de cientifico loco.
6. **No debe** mostrar el boton Copy si no hay resultado invertido.

---

## Notas Tecnicas

- Framework CSS: Bootstrap 5 (via CDN)
- Archivos base: `template/index.html` y `template/script.js`
- Sin dependencias adicionales de backend
- Fuente tematica sugerida: Creepster o similar para titulos
