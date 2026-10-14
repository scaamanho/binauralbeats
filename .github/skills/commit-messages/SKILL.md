---
name: commit-messages
description: Redacta mensajes de commit claros y específicos en castellano a partir de los cambios preparados o del diff indicado. Úsalo cuando se vaya a crear, revisar o mejorar un mensaje de commit.
---

# Mensajes de commit

Redacta el mensaje describiendo con precisión los cambios reales. Basa cada afirmación en los archivos modificados y en el contexto disponible; no supongas motivos ni resultados que el diff no demuestre.

## Formato

- La primera línea es el resumen: `tipo: descripción breve y concreta`.
- Escribe en castellano, con el tipo en minúsculas y una descripción que nombre qué cambió. Usa un verbo preciso, por ejemplo: `docs: cambiar el idioma de los ejemplos de código de inglés a castellano`.
- Elige un tipo acorde al cambio: `feat` para funcionalidad, `fix` para correcciones, `docs` para documentación, `style` para formato visual sin cambiar comportamiento, `refactor` para reestructuración, `perf` para rendimiento, `test` para pruebas y `chore` para mantenimiento. Si el cambio abarca tipos distintos, elige el que mejor represente su propósito principal.
- No uses asuntos vagos como `actualizar instrucciones`, `cambios varios` o `arreglos`; especifica qué archivo, función, comportamiento o contenido se modificó.
- El cuerpo es opcional. Añádelo cuando ayude a explicar detalles relevantes, el motivo conocido o el comportamiento afectado que no quepa en el resumen. Si el cambio es trivial y el resumen basta, entrega una sola línea.
- Separa el cuerpo del resumen con una línea en blanco. Mantén cada frase del cuerpo informativa y evita repetir el asunto.

## Procedimiento

1. Revisa los cambios que se incluirán en el commit. Si hay cambios preparados, usa esos cambios como fuente principal; distingue los cambios no preparados para no atribuirlos al commit. Si no hay cambios preparados, basa el borrador en el diff que el usuario indique.
2. Agrupa los cambios relacionados y determina su efecto observable. Si el alcance o la intención no pueden deducirse de los cambios, pregunta antes de inventarlos.
3. Entrega únicamente el mensaje de commit, en un bloque de texto plano, salvo que el usuario pida una explicación o alternativas.
4. No ejecutes `git commit` ni alteres el índice. Este skill redacta el mensaje; el usuario decide y ejecuta el commit.