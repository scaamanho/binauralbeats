# Binaural Beats Pro

Aplicación web para crear y reproducir tonos binaurales estéreo. Ofrece presintonías, controles de frecuencia y volumen, un editor de sesiones temporizadas y almacenamiento local de los programas creados. La aplicación principal es una PWA instalable y puede seguir funcionando sin conexión después de cargar sus recursos.

> Los ritmos binaurales no sustituyen atención médica ni garantizan resultados. Úsalos con auriculares estéreo, a un volumen cómodo, y nunca mientras conduces o realizas tareas que requieran atención externa continua.

## Características

- Doce presintonías organizadas en bandas Delta, Theta, Alpha, Beta y Gamma.
- Reproducción de un tono senoidal por cada canal de audio.
- Ajuste de frecuencia base entre 100 y 500 Hz y volumen entre 0 y 100 %.
- Editor visual para diseñar variaciones del batido entre 0 y 40 Hz durante una sesión de 10 a 600 segundos.
- Guardado, carga, reproducción y eliminación de sesiones en el navegador.
- Interfaz en español e inglés con seis temas visuales.
- Aplicación instalable (PWA) y caché offline del shell de la app.

## Estructura

```text
.
├── index.html          Landing informativa
├── landing.css         Estilos de la landing
├── landing.js          Idioma, animación y limpieza de service workers heredados
└── app/
	├── index.html      Interfaz de la aplicación
	├── app.js          Audio, interfaz, sesiones y preferencias
	├── styles.css      Estilos y temas de la aplicación
	├── manifest.json   Metadatos de instalación PWA
	├── sw.js           Caché offline del shell
	└── icon-*          Iconos de la aplicación
```

## Inicio rápido

No hay dependencias, compilación ni backend. Sirve la carpeta raíz mediante HTTP local; el service worker no se registra correctamente al abrir los archivos con `file://`.

```powershell
cd c:\proyectos\scaamanho\binauralbeatspro
py -m http.server 8080
```

Abre `http://localhost:8080/` para la landing o `http://localhost:8080/app/` para la aplicación. Para probar la instalación y el modo offline en producción, publícala bajo HTTPS.

## Uso

1. Abre la aplicación y selecciona una presintonía.
2. Conecta auriculares estéreo y ajusta el volumen antes de iniciar la reproducción.
3. Ajusta la frecuencia base si quieres cambiar la altura de los tonos sin cambiar el batido del preset.
4. En **Crear**, añade al menos dos puntos al gráfico, define duración y frecuencia base, y reproduce o guarda el programa.
5. En **Sesiones**, carga, reproduce o elimina los programas guardados en el dispositivo actual.

## Cómo se genera el audio

Para una frecuencia base $f_b$ y una frecuencia de batido $f_\Delta$, la aplicación reproduce:

$$
f_L = f_b \qquad f_R = f_b + f_\Delta
$$

Por ejemplo, con $f_b = 200\,Hz$ y $f_\Delta = 10\,Hz$, el canal izquierdo recibe 200 Hz y el derecho 210 Hz. La separación de canales hace necesario el uso de auriculares para la experiencia binaural prevista.

## Privacidad y datos

La aplicación no requiere cuenta ni envía sesiones a un servidor. Las preferencias de idioma y tema, junto con los programas personalizados, permanecen en `localStorage` del navegador. Al borrar los datos del sitio se eliminan esas preferencias y sesiones.

## Documentación técnica

La descripción de la arquitectura, el modelo de datos, el flujo de audio, la PWA y las consideraciones de desarrollo se encuentra en [app/README.md](app/README.md).

