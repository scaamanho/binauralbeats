/* ============ PWA ============ */
const PRODUCT_URL='https://scaamanho.github.io/binauralbeats/';
if('serviceWorker' in navigator){
  navigator.serviceWorker.register('./sw.js').catch(()=>{});
}
let deferredPrompt;
const installRequested=new URLSearchParams(window.location.search).get('install')==='1';
const installBanner=document.getElementById('installBanner');
const showInstallBanner=()=>{installBanner.style.display='block';};
if(installRequested) showInstallBanner();
window.addEventListener('beforeinstallprompt',e=>{
  e.preventDefault();
  deferredPrompt=e;
  if(installRequested) showInstallBanner();
});
document.getElementById('installBtn').onclick=async()=>{
  if(deferredPrompt){
    deferredPrompt.prompt();
    deferredPrompt=null;
    installBanner.style.display='none';
    return;
  }
  const help=language==='es'
    ? 'Usa el menú del navegador para elegir “Instalar aplicación” o “Añadir a pantalla de inicio”.'
    : 'Use your browser menu and choose “Install app” or “Add to Home Screen”.';
  toast(help);
};

/* ============ PRESETS ============ */
const TRANSLATIONS={
  es:{tagline:'Generador de ondas cerebrales',presetsTab:'Presintonías',editorTab:'Crear',savedTab:'Sesiones',player:'Reproductor',selectPreset:'Selecciona una presintonía',baseFrequency:'Frecuencia base',volume:'Volumen',start:'▶  INICIAR',stop:'■  DETENER',howToUse:'¿Cómo usar?',editorHelp:'Añade tramos con una frecuencia y duración. La suma de los tramos forma la sintonía completa.',clear:'Limpiar',save:'Guardar',play:'Reproducir',totalDuration:'Duración total',savedInfo:'Tus programas personalizados se guardan localmente en este dispositivo.',installAsApp:'Instalar como app',install:'Instalar',addSegment:'Añadir tramo',editSegment:'Editar tramo',segment:'Tramo',segments:'tramos',segmentFrequency:'Frecuencia del batido',segmentDuration:'Duración',seconds:'segundos',add:'Añadir',cancel:'Cancelar',duplicate:'Duplicar',moveUp:'Subir',moveDown:'Bajar',emptySegments:'Aún no hay tramos. Añade el primero para crear tu sintonía.',needSegment:'Añade al menos un tramo',invalidSegment:'Indica una frecuencia y duración válidas',selectFirst:'Selecciona una presintonía primero',finished:'Programa finalizado',programName:'Nombre del programa:',myProgram:'Mi programa',saved:'✓ Programa guardado',empty:'No hay programas guardados aún.',createSession:'Crear una sesión',load:'Cargar',delete:'Eliminar',deleted:'Eliminado',loaded:'Cargado en el editor',playing:'▶ Reproduciendo',confirmDelete:'¿Eliminar este programa?',points:'puntos',base:'Base',presets:{memoria:['Memoria','Aprendizaje','Beta 14Hz - Concentración y memoria'],relax:['Relajarse','Calma','Alpha 10Hz - Relajación profunda'],dormir:['Dormir','Sueño profundo','Delta 2Hz - Sueño profundo'],meditar:['Meditación','Atención plena','Theta 6Hz - Meditación'],deseo:['Intimidad','Relajación Sensua','Theta 6Hz - Sensualidad'],energia:['Energía','Motivación','Beta 20Hz - Energía']}},
  en:{tagline:'Brainwave generator',presetsTab:'Presets',editorTab:'Create',savedTab:'Sessions',player:'Player',selectPreset:'Select a preset',baseFrequency:'Base frequency',volume:'Volume',start:'▶  START',stop:'■  STOP',howToUse:'How to use',editorHelp:'Add sections with a beat frequency and duration. Together, the sections form the complete session.',clear:'Clear',save:'Save',play:'Play',totalDuration:'Total duration',savedInfo:'Your custom programs are stored locally on this device.',installAsApp:'Install as app',install:'Install',addSegment:'Add section',editSegment:'Edit section',segment:'Section',segments:'sections',segmentFrequency:'Beat frequency',segmentDuration:'Duration',seconds:'seconds',add:'Add',cancel:'Cancel',duplicate:'Duplicate',moveUp:'Move up',moveDown:'Move down',emptySegments:'No sections yet. Add the first one to create your session.',needSegment:'Add at least one section',invalidSegment:'Enter a valid frequency and duration',selectFirst:'Select a preset first',finished:'Program finished',programName:'Program name:',myProgram:'My program',saved:'✓ Program saved',empty:'No saved programs yet.',createSession:'Create a session',load:'Load',delete:'Delete',deleted:'Deleted',loaded:'Loaded in editor',playing:'▶ Playing',confirmDelete:'Delete this program?',points:'points',base:'Base',presets:{memoria:['Memory','Learning','Beta 14Hz - Focus and memory'],relax:['Relax','Calm','Alpha 10Hz - Deep relaxation'],dormir:['Sleep','Deep sleep','Delta 2Hz - Deep sleep'],meditar:['Meditation','Mindfulness','Theta 6Hz - Meditation'],deseo:['Intimacy','Sensual Relax','Theta 6Hz - Sensuality'],energia:['Energy','Motivation','Beta 20Hz - Energy']}}
};
Object.assign(TRANSLATIONS.es.presets,{
  creatividad:['Creatividad','Inspiración','Theta 8Hz - Flujo creativo'],
  enfoque:['Enfoque profundo','Productividad','Beta 18Hz - Atención sostenida'],
  claridad:['Claridad','Equilibrio','Alpha 12Hz - Claridad mental'],
  siesta:['Siesta','Descanso breve','Delta 3Hz - Descanso reparador'],
  respiracion:['Respiración','Serenidad','Theta 4Hz - Respiración consciente'],
  alerta:['Alerta','Activación','Gamma 30Hz - Estado de alerta']
});
Object.assign(TRANSLATIONS.en.presets,{
  creatividad:['Creativity','Inspiration','Theta 8Hz - Creative flow'],
  enfoque:['Deep focus','Productivity','Beta 18Hz - Sustained attention'],
  claridad:['Clarity','Balance','Alpha 12Hz - Mental clarity'],
  siesta:['Power nap','Short rest','Delta 3Hz - Restorative rest'],
  respiracion:['Breathing','Serenity','Theta 4Hz - Mindful breathing'],
  alerta:['Alertness','Activation','Gamma 30Hz - Alert state']
});
Object.assign(TRANSLATIONS.es.presets,{
  memoria:['Memoria','Aprendizaje','Beta 14Hz - Concentración suave y atención focalizada'],relax:['Relajarse','Calma','Alpha 10Hz - Relajación alerta y reducción de estrés'],dormir:['Dormir','Sueño profundo','Delta 2Hz - Sueño reparador y sanación profunda'],meditar:['Meditación','Atención plena','Theta 6Hz - Meditación ligera y visualización'],intuicion:['Intuición','Conexión interna','Theta 5Hz - Relajación profunda e intuición'],energia:['Energía','Motivación','Beta 20Hz - Concentración intensa y energía mental'],creatividad:['Creatividad','Inspiración','Theta 7Hz - Ideas creativas y estado hipnagógico'],enfoque:['Enfoque profundo','Productividad','Beta 18Hz - Concentración intensa y resolución de problemas'],claridad:['Claridad','Equilibrio','Alpha 12Hz - Pensamiento positivo y visualización clara'],siesta:['Siesta','Descanso breve','Delta 3Hz - Descanso profundo y recuperación física'],respiracion:['Respiración','Serenidad','Theta 4Hz - Meditación profunda y conexión subconsciente'],alerta:['Alerta','Activación','Gamma 30Hz - Procesamiento cognitivo y memoria']
});
Object.assign(TRANSLATIONS.en.presets,{
  memoria:['Memory','Learning','Beta 14Hz - Gentle concentration and focused attention'],relax:['Relax','Calm','Alpha 10Hz - Alert relaxation and stress reduction'],dormir:['Sleep','Deep sleep','Delta 2Hz - Restorative sleep and deep healing'],meditar:['Meditation','Mindfulness','Theta 6Hz - Light meditation and visualization'],intuicion:['Intuition','Inner connection','Theta 5Hz - Deep relaxation and intuition'],energia:['Energy','Motivation','Beta 20Hz - Intense concentration and mental energy'],creatividad:['Creativity','Inspiration','Theta 7Hz - Creative ideas and hypnagogic state'],enfoque:['Deep focus','Productivity','Beta 18Hz - Intense concentration and problem-solving'],claridad:['Clarity','Balance','Alpha 12Hz - Positive thinking and clear visualization'],siesta:['Power nap','Short rest','Delta 3Hz - Deep rest and physical recovery'],respiracion:['Breathing','Serenity','Theta 4Hz - Deep meditation and subconscious connection'],alerta:['Alertness','Activation','Gamma 30Hz - Cognitive processing and memory']
});
Object.assign(TRANSLATIONS.es,{
  brainwavesTab:'Ondas',brainwavesIntroTitle:'¿Qué son las ondas cerebrales?',brainwavesIntro:'Son patrones de actividad eléctrica del cerebro que se describen por su frecuencia, medida en hercios (Hz). Las asociaciones siguientes son orientativas y no sustituyen consejo médico.',deltaTitle:'Delta · 0,5–4 Hz',deltaInfo:'Se asocia habitualmente con el sueño profundo y el descanso.',thetaTitle:'Theta · 4–8 Hz',thetaInfo:'Se relaciona con relajación profunda, imaginación y meditación.',alphaTitle:'Alpha · 8–13 Hz',alphaInfo:'Suele aparecer en estados de calma despierta y relajación.',betaTitle:'Beta · 13–30 Hz',betaInfo:'Se vincula normalmente con atención, concentración y actividad mental.',gammaTitle:'Gamma · 30–100 Hz',gammaInfo:'Se estudia en relación con procesamiento de información y atención intensa.',binauralTitle:'¿Cómo funciona esta aplicación?',binauralInfo:'La aplicación reproduce dos tonos parecidos: uno en cada oído. La diferencia entre sus frecuencias crea la sensación de un ritmo binaural. Por ejemplo, 200 Hz en un oído y 210 Hz en el otro producen una diferencia de 10 Hz. Se recomienda usar auriculares y mantener un volumen cómodo.'
});
Object.assign(TRANSLATIONS.en,{
  brainwavesTab:'Brainwaves',brainwavesIntroTitle:'What are brainwaves?',brainwavesIntro:'They are patterns of electrical activity in the brain described by their frequency, measured in hertz (Hz). The associations below are general guidance and are not medical advice.',deltaTitle:'Delta · 0.5–4 Hz',deltaInfo:'Commonly associated with deep sleep and rest.',thetaTitle:'Theta · 4–8 Hz',thetaInfo:'Related to deep relaxation, imagination and meditation.',alphaTitle:'Alpha · 8–13 Hz',alphaInfo:'Often present during relaxed, awake states and calm.',betaTitle:'Beta · 13–30 Hz',betaInfo:'Usually linked with attention, concentration and mental activity.',gammaTitle:'Gamma · 30–100 Hz',gammaInfo:'Studied in relation to information processing and intense attention.',binauralTitle:'How does this application work?',binauralInfo:'The application plays two similar tones, one in each ear. The difference between their frequencies creates the perception of a binaural beat. For example, 200 Hz in one ear and 210 Hz in the other create a 10 Hz difference. Headphones and a comfortable volume are recommended.'
});
Object.assign(TRANSLATIONS.es,{
  suggestedUse:'Uso sugerido',effectsNote:'Las respuestas varían entre personas; estas asociaciones no sustituyen atención médica ni garantizan resultados.',
  presetDetails:{
    memoria:['Sesión beta suave pensada para acompañar periodos de estudio, lectura o repaso.','Puede favorecer una sensación de atención sostenida y organización mental.'],
    relax:['Sesión alpha para bajar el ritmo después de una actividad exigente.','Puede acompañar respiración lenta, calma despierta y desconexión gradual.'],
    dormir:['Sesión delta de ritmo lento para preparar una rutina nocturna tranquila.','Puede acompañar una sensación de somnolencia y transición hacia el descanso.'],
    meditar:['Sesión theta para crear un fondo estable durante prácticas contemplativas.','Puede acompañar introspección, imaginación y atención a la respiración.'],
    deseo:['Sesión theta lenta con una intención sensorial y personal.','Puede acompañar relajación corporal y una atmósfera íntima, según el contexto.'],
    energia:['Sesión beta activa para comenzar tareas o recuperar impulso durante el día.','Puede acompañar activación mental, motivación y disposición para actuar.'],
    creatividad:['Sesión theta alta para abrir un espacio de exploración sin distracciones.','Puede acompañar asociaciones libres, imaginación y fluidez de ideas.'],
    enfoque:['Sesión beta para bloques de trabajo que requieren continuidad.','Puede acompañar concentración, ritmo de trabajo y reducción de distracciones.'],
    claridad:['Sesión alpha alta para hacer una pausa antes de decidir o planificar.','Puede acompañar calma alerta y una sensación de claridad mental.'],
    siesta:['Sesión delta breve para una pausa de descanso controlada.','Puede acompañar desconexión rápida y recuperación subjetiva durante una pausa.'],
    respiracion:['Sesión theta lenta diseñada para acompañar ejercicios de respiración consciente.','Puede acompañar un ritmo más pausado, serenidad y atención al cuerpo.'],
    alerta:['Sesión gamma para tareas puntuales que piden vigilancia y energía mental.','Puede acompañar sensación de activación y atención intensa durante periodos breves.']
  }
});
Object.assign(TRANSLATIONS.es.presetDetails,{
  memoria:['Sesión beta de 14 Hz para acompañar concentración suave y atención focalizada.','Úsala para lectura, aprendizaje o tareas que requieren atención sostenida.'],relax:['Sesión alpha de 10 Hz para una relajación alerta y reducción de estrés.','Puede acompañar una pausa consciente sin buscar sueño.'],dormir:['Sesión delta de 2 Hz orientada a una rutina de sueño reparador.','Úsala antes de dormir o durante una pausa de descanso profundo.'],meditar:['Sesión theta de 6 Hz para meditación ligera y visualización.','Puede acompañar respiración tranquila y atención plena.'],intuicion:['Sesión theta de 5 Hz para relajación profunda y conexión interna.','Puede acompañar introspección, imaginación y una pausa personal.'],energia:['Sesión beta de 20 Hz para concentración intensa y energía mental.','Úsala en bloques breves de trabajo, estudio o activación.'],creatividad:['Sesión theta de 7 Hz para ideas creativas y transición hipnagógica.','Puede acompañar lluvia de ideas, escritura o exploración creativa.'],enfoque:['Sesión beta de 18 Hz para concentración intensa y resolución de problemas.','Úsala para tareas productivas que necesitan continuidad.'],claridad:['Sesión alpha de 12 Hz para pensamiento positivo y visualización clara.','Puede acompañar planificación, reflexión o una pausa antes de decidir.'],siesta:['Sesión delta de 3 Hz para descanso profundo y recuperación física.','Úsala sólo cuando puedas desconectar y no necesites mantenerte alerta.'],respiracion:['Sesión theta de 4 Hz para meditación profunda y conexión interna.','Puede acompañar ejercicios de respiración lenta y atención al cuerpo.'],alerta:['Sesión gamma de 30 Hz para procesamiento cognitivo y memoria.','Úsala con volumen cómodo durante intervalos breves de atención intensa.']
});
Object.assign(TRANSLATIONS.en.presetDetails||(TRANSLATIONS.en.presetDetails={}),{
  memoria:['A 14 Hz beta session for gentle concentration and focused attention.','Use it for reading, learning or tasks that require sustained attention.'],relax:['A 10 Hz alpha session for alert relaxation and stress reduction.','It can accompany a conscious break without aiming for sleep.'],dormir:['A 2 Hz delta session for a restorative sleep routine.','Use it before sleep or during a deep rest break.'],meditar:['A 6 Hz theta session for light meditation and visualization.','It can accompany calm breathing and mindfulness.'],intuicion:['A 5 Hz theta session for deep relaxation and inner connection.','It can accompany introspection, imagination and a personal pause.'],energia:['A 20 Hz beta session for intense concentration and mental energy.','Use it in short work, study or activation blocks.'],creatividad:['A 7 Hz theta session for creative ideas and a hypnagogic transition.','It can accompany brainstorming, writing or creative exploration.'],enfoque:['An 18 Hz beta session for intense concentration and problem-solving.','Use it for productive tasks that need continuity.'],claridad:['A 12 Hz alpha session for positive thinking and clear visualization.','It can accompany planning, reflection or a pause before deciding.'],siesta:['A 3 Hz delta session for deep rest and physical recovery.','Use it only when you can disconnect and do not need to stay alert.'],respiracion:['A 4 Hz theta session for deep meditation and inner connection.','It can accompany slow breathing exercises and attention to the body.'],alerta:['A 30 Hz gamma session for cognitive processing and memory.','Use it at a comfortable volume during short periods of intense attention.']
});
Object.assign(TRANSLATIONS.en,{
  suggestedUse:'Suggested use',effectsNote:'Responses vary from person to person; these associations are not medical advice and do not guarantee outcomes.',
  presetDetails:{
    memoria:['A gentle beta session intended to accompany study, reading or review periods.','May support a sense of sustained attention and mental organization.'],
    relax:['An alpha session to help slow down after demanding activity.','May accompany slow breathing, relaxed wakefulness and gradual unwinding.'],
    dormir:['A slow delta session for preparing a calm nighttime routine.','May accompany drowsiness and a transition toward rest.'],
    meditar:['A theta session that creates a steady background for contemplative practice.','May accompany introspection, imagination and attention to breathing.'],
    deseo:['A slow theta session with a personal, sensory intention.','May accompany physical relaxation and an intimate atmosphere, depending on context.'],
    energia:['An active beta session for starting tasks or regaining momentum during the day.','May accompany mental activation, motivation and readiness to act.'],
    creatividad:['A high-theta session for exploring ideas with fewer distractions.','May accompany free association, imagination and an easier flow of ideas.'],
    enfoque:['A beta session for work blocks that require continuity.','May accompany concentration, work rhythm and fewer distractions.'],
    claridad:['A high-alpha session for pausing before decisions or planning.','May accompany calm alertness and a sense of mental clarity.'],
    siesta:['A brief delta session for a controlled rest break.','May accompany quick disconnection and subjective recovery during a break.'],
    respiracion:['A slow theta session designed to accompany mindful breathing exercises.','May accompany a slower pace, serenity and attention to the body.'],
    alerta:['A gamma session for short tasks that call for vigilance and mental energy.','May accompany a sense of activation and intense attention for brief periods.']
  }
});
Object.assign(TRANSLATIONS.es.presets,{
  sanacion:['Sanación','Restauración','Delta 1.5Hz - Sueño muy profundo y restauración física'],
  alegria:['Alegría','Bienestar','Alpha 9Hz - Estado de ánimo positivo y bienestar'],
  estudio:['Estudio','Aprendizaje intensivo','Beta 16Hz - Atención sostenida para sesiones de estudio largas'],
  calma:['Calma profunda','Descompresión','Delta 3.5Hz - Descompresión física y mental profunda'],
  equilibrio:['Equilibrio','Estabilidad emocional','Alpha 13Hz - Estabilidad emocional y equilibrio interior'],
  percepcion:['Percepción','Agudeza sensorial','Gamma 40Hz - Procesamiento sensorial y percepción aguda'],
  lucidez:['Lucidez','Atención plena intensa','Gamma 35Hz - Lucidez mental y atención plena intensa'],
  expansion:['Expansión mental','Integración cognitiva','Gamma 45Hz - Expansión de la conciencia e integración cognitiva']
});
Object.assign(TRANSLATIONS.en.presets,{
  sanacion:['Healing','Restoration','Delta 1.5Hz - Very deep sleep and physical restoration'],
  alegria:['Joy','Wellbeing','Alpha 9Hz - Positive mood and wellbeing'],
  estudio:['Study','Intensive learning','Beta 16Hz - Sustained attention for long study sessions'],
  calma:['Deep calm','Decompression','Delta 3.5Hz - Deep physical and mental decompression'],
  equilibrio:['Balance','Emotional stability','Alpha 13Hz - Emotional stability and inner balance'],
  percepcion:['Perception','Sensory sharpness','Gamma 40Hz - Sensory processing and sharp perception'],
  lucidez:['Lucidity','Intense mindfulness','Gamma 35Hz - Mental lucidity and intense mindfulness'],
  expansion:['Mental expansion','Cognitive integration','Gamma 45Hz - Expanded awareness and cognitive integration']
});
Object.assign(TRANSLATIONS.es.presetDetails,{
  sanacion:['Sesión delta muy lenta pensada para acompañar un sueño largo y reparador.','Puede acompañar una sensación de descanso físico profundo y recuperación.'],
  alegria:['Sesión alpha para sostener un estado de ánimo positivo durante el día.','Puede acompañar ligereza emocional y una actitud optimista.'],
  estudio:['Sesión beta pensada para bloques largos de estudio o lectura técnica.','Puede acompañar concentración sostenida y retención durante sesiones extensas.'],
  calma:['Sesión delta lenta para soltar tensión acumulada tras un día exigente.','Puede acompañar una desconexión progresiva y relajación muscular.'],
  equilibrio:['Sesión alpha para recuperar estabilidad tras momentos de tensión emocional.','Puede acompañar serenidad y una sensación de centrado interior.'],
  percepcion:['Sesión gamma asociada clásicamente con procesamiento sensorial fino.','Úsala en periodos breves que requieran atención perceptiva aguda.'],
  lucidez:['Sesión gamma intensa para sostener una atención plena y muy despierta.','Puede acompañar sensación de lucidez y nitidez mental durante tareas breves.'],
  expansion:['Sesión gamma alta orientada a integrar información de distintas fuentes.','Puede acompañar una sensación de amplitud de conciencia y visión de conjunto.']
});
Object.assign(TRANSLATIONS.en.presetDetails,{
  sanacion:['A very slow delta session intended to accompany long, restorative sleep.','May accompany a sense of deep physical rest and recovery.'],
  alegria:['An alpha session to sustain a positive mood throughout the day.','May accompany emotional lightness and an optimistic attitude.'],
  estudio:['A beta session designed for long study or technical reading blocks.','May accompany sustained concentration and retention during extended sessions.'],
  calma:['A slow delta session to release tension built up after a demanding day.','May accompany progressive unwinding and muscle relaxation.'],
  equilibrio:['An alpha session to regain stability after emotionally tense moments.','May accompany serenity and a sense of inner centering.'],
  percepcion:['A gamma session classically associated with fine sensory processing.','Use it in short periods that call for sharp perceptual attention.'],
  lucidez:['An intense gamma session to sustain sharp, wide-awake attention.','May accompany a sense of mental lucidity and clarity during short tasks.'],
  expansion:['A high-gamma session aimed at integrating information from different sources.','May accompany a sense of expanded awareness and a broader perspective.']
});
TRANSLATIONS.es.darkTheme='🌙 Oscuro';
TRANSLATIONS.es.lightTheme='☀️ Claro';
TRANSLATIONS.en.darkTheme='🌙 Dark';
TRANSLATIONS.en.lightTheme='☀️ Light';
Object.assign(TRANSLATIONS.es,{darkTheme:'Oscuro',lightTheme:'Claro',monokaiTheme:'Monokai',monokaiThemeInfo:'Contraste cálido para código y foco.',desertTheme:'Arena',desertThemeInfo:'Paleta suave y cálida para el día.',oceanTheme:'Océano',oceanThemeInfo:'Azules profundos y turquesa.',solarizedTheme:'Solarizado',solarizedThemeInfo:'Baja fatiga visual y tonos suaves.'});
Object.assign(TRANSLATIONS.en,{darkTheme:'Dark',lightTheme:'Light',monokaiTheme:'Monokai',monokaiThemeInfo:'Warm contrast for code and focus.',desertTheme:'Desert sand',desertThemeInfo:'Soft, warm palette for daytime.',oceanTheme:'Ocean',oceanThemeInfo:'Deep blues and turquoise.',solarizedTheme:'Solarized',solarizedThemeInfo:'Low eye strain with gentle tones.'});
TRANSLATIONS.es.closePlayer='Volver';
TRANSLATIONS.es.closePlayerAria='Volver a las presintonías';
TRANSLATIONS.en.closePlayer='Back';
TRANSLATIONS.en.closePlayerAria='Back to presets';
TRANSLATIONS.es.savedSession='Sesión guardada';
TRANSLATIONS.en.savedSession='Saved session';
Object.assign(TRANSLATIONS.es,{settingsTab:'Ajustes',settingsAria:'Abrir ajustes',closeSettings:'Volver a presintonías',languageTitle:'Idioma',languageInfo:'Elige el idioma de la aplicación.',themeTitle:'Tema de la aplicación',themeInfo:'Personaliza la apariencia de Binaural Beats Lab.',darkTheme:'Oscuro',darkThemeInfo:'Fondo oscuro para sesiones nocturnas.',lightTheme:'Claro',lightThemeInfo:'Interfaz luminosa para el día.',settingsSaved:'Tus preferencias se guardan automáticamente en este dispositivo.',eightDTitle:'Audio 8D',eightDInfo:'Rota el sonido entre los auriculares con un período proporcional a la frecuencia elegida.',eightDToggleLabel:'Activar audio 8D',eightDToggleInfo:'Opcional. Si está desactivado, el comportamiento es el habitual (sin rotación).',channelLeft:'Izquierdo',channelRight:'Derecho'});
Object.assign(TRANSLATIONS.en,{settingsTab:'Settings',settingsAria:'Open settings',closeSettings:'Back to presets',languageTitle:'Language',languageInfo:'Choose the application language.',themeTitle:'Application theme',themeInfo:'Customize the appearance of Binaural Beats Lab.',darkTheme:'Dark',darkThemeInfo:'Dark background for night sessions.',lightTheme:'Light',lightThemeInfo:'Bright interface for daytime use.',settingsSaved:'Your preferences are saved automatically on this device.',eightDTitle:'8D audio',eightDInfo:'Rotates the sound between headphone channels with a period proportional to the chosen frequency.',eightDToggleLabel:'Enable 8D audio',eightDToggleInfo:'Optional. When disabled, playback behaves as usual (no rotation).',channelLeft:'Left',channelRight:'Right'});
Object.assign(TRANSLATIONS.es,{importClipboard:'Importar del portapapeles',share:'Compartir',shareClipboard:'Compartir por portapapeles',shareWhatsApp:'Compartir por WhatsApp',shareTelegram:'Compartir por Telegram',shareEmail:'Compartir por correo',appLinkLabel:'Reprodúcelo con Binaural Beats Lab:',productLinkLabel:'Conoce Binaural Beats Lab:',clipboardCopied:'Mensaje de sesión copiado al portapapeles',clipboardReadError:'No se pudo leer el portapapeles. Comprueba los permisos del navegador.',clipboardWriteError:'No se pudo copiar al portapapeles. Comprueba los permisos del navegador.',invalidSharedSession:'El contenido del portapapeles no contiene una sesión válida.',replaceSegments:'Esto reemplazará los tramos actuales del editor. ¿Continuar?',sessionBase:'Base',sessionDuration:'Duración',sessionSegments:'Tramos'});
Object.assign(TRANSLATIONS.en,{importClipboard:'Import from clipboard',share:'Share',shareClipboard:'Share via clipboard',shareWhatsApp:'Share via WhatsApp',shareTelegram:'Share via Telegram',shareEmail:'Share via email',appLinkLabel:'Play it with Binaural Beats Lab:',productLinkLabel:'Discover Binaural Beats Lab:',clipboardCopied:'Session message copied to clipboard',clipboardReadError:'Could not read the clipboard. Check your browser permissions.',clipboardWriteError:'Could not copy to the clipboard. Check your browser permissions.',invalidSharedSession:'The clipboard content does not contain a valid session.',replaceSegments:'This will replace the current editor sections. Continue?',sessionBase:'Base',sessionDuration:'Duration',sessionSegments:'Sections'});
Object.assign(TRANSLATIONS.es,{segmentName:'Nombre del tramo',segmentNamePlaceholder:'Ej. Relajación inicial',segmentCopy:'copia'});
Object.assign(TRANSLATIONS.en,{segmentName:'Section name',segmentNamePlaceholder:'e.g. Initial relaxation',segmentCopy:'copy'});
let language=localStorage.getItem('bb_language')||((navigator.language||'es').toLowerCase().startsWith('en')?'en':'es');
const t=key=>TRANSLATIONS[language][key]||key;
const savedTheme=localStorage.getItem('bb_theme');
let theme=savedTheme||((window.matchMedia&&window.matchMedia('(prefers-color-scheme: light)').matches)?'light':'dark');
function setTheme(value){
  const themes=['dark','light'];
  theme=themes.includes(value)?value:'dark';
  document.body.classList.remove('light','theme-monokai','theme-desert','theme-ocean','theme-solarized');
  document.body.classList.toggle('light',theme==='light');
  if(theme!=='dark'&&theme!=='light') document.body.classList.add(`theme-${theme}`);
  document.querySelectorAll('.theme-option').forEach(button=>button.classList.toggle('active',button.dataset.theme===theme));
  localStorage.setItem('bb_theme',theme);
}
function translateStatic(){
  document.documentElement.lang=language;
  document.querySelectorAll('[data-i18n]').forEach(el=>{el.innerHTML=t(el.dataset.i18n);});
  document.querySelectorAll('.language-option').forEach(button=>button.classList.toggle('active',button.dataset.language===language));
  document.querySelector('.theme-options').setAttribute('aria-label',language==='es'?'Tema':'Theme');
  document.getElementById('closePlayerBtn').setAttribute('aria-label',t('closePlayerAria'));
  document.getElementById('settingsTrigger').setAttribute('aria-label',t('settingsAria'));
  if(currentSavedSession) document.getElementById('playerTitle').textContent=t('savedSession');
}
const PRESETS = [
  // Agrupadas por onda (Delta→Theta→Alpha→Beta→Gamma) y ascendente por Hz dentro de cada grupo
  {id:'sanacion',name:'Sanación',sub:'Restauración',icon:'💧',beat:1.5,base:200,wave:'Delta',grad:'linear-gradient(135deg,#0ea5e9,#0369a1)',c1:'#0ea5e9',glow:'rgba(14,165,233,0.4)',desc:'Delta 1.5Hz - Sueño muy profundo y restauración física'},
  {id:'dormir',name:'Dormir',sub:'Sueño profundo',icon:'🌙',beat:2,base:200,wave:'Delta',grad:'linear-gradient(135deg,#6366f1,#312e81)',c1:'#6366f1',glow:'rgba(99,102,241,0.4)',desc:'Delta 2Hz - Sueño reparador y sanación profunda'},
  {id:'siesta',name:'Siesta',sub:'Descanso breve',icon:'🛌',beat:3,base:200,wave:'Delta',grad:'linear-gradient(135deg,#818cf8,#4f46e5)',c1:'#818cf8',glow:'rgba(129,140,248,0.4)',desc:'Delta 3Hz - Descanso profundo y recuperación física'},
  {id:'calma',name:'Calma profunda',sub:'Descompresión',icon:'🕯️',beat:3.5,base:200,wave:'Delta',grad:'linear-gradient(135deg,#4338ca,#1e1b4b)',c1:'#4338ca',glow:'rgba(67,56,202,0.4)',desc:'Delta 3.5Hz - Descompresión física y mental profunda'},
  {id:'respiracion',name:'Respiración',sub:'Serenidad',icon:'🌬️',beat:4,base:200,wave:'Theta',grad:'linear-gradient(135deg,#2dd4bf,#0d9488)',c1:'#2dd4bf',glow:'rgba(45,212,191,0.4)',desc:'Theta 4Hz - Meditación profunda y conexión subconsciente'},
  {id:'intuicion',name:'Intuición',sub:'Conexión interna',icon:'🔮',beat:5,base:200,wave:'Theta',grad:'linear-gradient(135deg,#ec4899,#be185d)',c1:'#ec4899',glow:'rgba(236,72,153,0.4)',desc:'Theta 5Hz - Relajación profunda e intuición'},
  {id:'meditar',name:'Meditación',sub:'Atención plena',icon:'🧘',beat:6,base:200,wave:'Theta',grad:'linear-gradient(135deg,#a855f7,#7e22ce)',c1:'#a855f7',glow:'rgba(168,85,247,0.4)',desc:'Theta 6Hz - Meditación ligera y visualización'},
  {id:'creatividad',name:'Creatividad',sub:'Inspiración',icon:'💡',beat:7,base:200,wave:'Theta',grad:'linear-gradient(135deg,#f97316,#ea580c)',c1:'#f97316',glow:'rgba(249,115,22,0.4)',desc:'Theta 7Hz - Ideas creativas y estado hipnagógico'},
  {id:'alegria',name:'Alegría',sub:'Bienestar',icon:'😊',beat:9,base:200,wave:'Alpha',grad:'linear-gradient(135deg,#fb7185,#e11d48)',c1:'#fb7185',glow:'rgba(251,113,133,0.4)',desc:'Alpha 9Hz - Estado de ánimo positivo y bienestar'},
  {id:'relax',name:'Relajarse',sub:'Calma',icon:'🌿',beat:10,base:200,wave:'Alpha',grad:'linear-gradient(135deg,#10b981,#059669)',c1:'#10b981',glow:'rgba(16,185,129,0.4)',desc:'Alpha 10Hz - Relajación alerta y reducción de estrés'},
  {id:'claridad',name:'Claridad',sub:'Equilibrio',icon:'🔎',beat:12,base:200,wave:'Alpha',grad:'linear-gradient(135deg,#38bdf8,#0284c7)',c1:'#38bdf8',glow:'rgba(56,189,248,0.4)',desc:'Alpha 12Hz - Pensamiento positivo y visualización clara'},
  {id:'equilibrio',name:'Equilibrio',sub:'Estabilidad emocional',icon:'⚖️',beat:13,base:200,wave:'Alpha',grad:'linear-gradient(135deg,#34d399,#059669)',c1:'#34d399',glow:'rgba(52,211,153,0.4)',desc:'Alpha 13Hz - Estabilidad emocional y equilibrio interior'},
  {id:'memoria',name:'Memoria',sub:'Aprendizaje',icon:'🧠',beat:14,base:200,wave:'Beta',grad:'linear-gradient(135deg,#00d4ff,#0066ff)',c1:'#00d4ff',glow:'rgba(0,212,255,0.4)',desc:'Beta 14Hz - Concentración suave y atención focalizada'},
  {id:'estudio',name:'Estudio',sub:'Aprendizaje intensivo',icon:'📚',beat:16,base:200,wave:'Beta',grad:'linear-gradient(135deg,#22d3ee,#0891b2)',c1:'#22d3ee',glow:'rgba(34,211,238,0.4)',desc:'Beta 16Hz - Atención sostenida para sesiones de estudio largas'},
  {id:'enfoque',name:'Enfoque profundo',sub:'Productividad',icon:'🎯',beat:18,base:200,wave:'Beta',grad:'linear-gradient(135deg,#14b8a6,#0f766e)',c1:'#14b8a6',glow:'rgba(20,184,166,0.4)',desc:'Beta 18Hz - Concentración intensa y resolución de problemas'},
  {id:'energia',name:'Energía',sub:'Motivación',icon:'⚡',beat:20,base:200,wave:'Beta',grad:'linear-gradient(135deg,#f59e0b,#dc2626)',c1:'#f59e0b',glow:'rgba(245,158,11,0.4)',desc:'Beta 20Hz - Concentración intensa y energía mental'},
  {id:'alerta',name:'Alerta',sub:'Activación',icon:'🚀',beat:30,base:200,wave:'Gamma',grad:'linear-gradient(135deg,#facc15,#eab308)',c1:'#facc15',glow:'rgba(250,204,21,0.4)',desc:'Gamma 30Hz - Procesamiento cognitivo y memoria'},
  {id:'lucidez',name:'Lucidez',sub:'Atención plena intensa',icon:'👁️',beat:35,base:200,wave:'Gamma',grad:'linear-gradient(135deg,#fde047,#ca8a04)',c1:'#fde047',glow:'rgba(253,224,71,0.4)',desc:'Gamma 35Hz - Lucidez mental y atención plena intensa'},
  {id:'percepcion',name:'Percepción',sub:'Agudeza sensorial',icon:'✨',beat:40,base:200,wave:'Gamma',grad:'linear-gradient(135deg,#e879f9,#a21caf)',c1:'#e879f9',glow:'rgba(232,121,249,0.4)',desc:'Gamma 40Hz - Procesamiento sensorial y percepción aguda'},
  {id:'expansion',name:'Expansión mental',sub:'Integración cognitiva',icon:'🌟',beat:45,base:200,wave:'Gamma',grad:'linear-gradient(135deg,#c084fc,#7e22ce)',c1:'#c084fc',glow:'rgba(192,132,252,0.4)',desc:'Gamma 45Hz - Expansión de la conciencia e integración cognitiva'}
];

/* ============ AUDIO ENGINE ============ */
Object.assign(TRANSLATIONS.en.presetDetails,{
  memoria:['A 14 Hz beta session for gentle concentration and focused attention.','Use it for reading, learning or tasks that require sustained attention.'],relax:['A 10 Hz alpha session for alert relaxation and stress reduction.','It can accompany a conscious break without aiming for sleep.'],dormir:['A 2 Hz delta session for a restorative sleep routine.','Use it before sleep or during a deep rest break.'],meditar:['A 6 Hz theta session for light meditation and visualization.','It can accompany calm breathing and mindfulness.'],intuicion:['A 5 Hz theta session for deep relaxation and inner connection.','It can accompany introspection, imagination and a personal pause.'],energia:['A 20 Hz beta session for intense concentration and mental energy.','Use it in short work, study or activation blocks.'],creatividad:['A 7 Hz theta session for creative ideas and a hypnagogic transition.','It can accompany brainstorming, writing or creative exploration.'],enfoque:['An 18 Hz beta session for intense concentration and problem-solving.','Use it for productive tasks that need continuity.'],claridad:['A 12 Hz alpha session for positive thinking and clear visualization.','It can accompany planning, reflection or a pause before deciding.'],siesta:['A 3 Hz delta session for deep rest and physical recovery.','Use it only when you can disconnect and do not need to stay alert.'],respiracion:['A 4 Hz theta session for deep meditation and inner connection.','It can accompany slow breathing exercises and attention to the body.'],alerta:['A 30 Hz gamma session for cognitive processing and memory.','Use it at a comfortable volume during short periods of intense attention.']
});
let audioCtx=null, leftOsc=null, rightOsc=null, merger=null, gainNode=null, analyserL=null, analyserR=null, panNode=null, panLfo=null, panLfoGain=null, eightDFilter=null, eightDDepthGain=null, eightDShaper=null, eightDFilterMod=null, eightDDepthMod=null;
let isPlaying=false, currentPreset=null, currentSavedSession=null, animId=null;
let customPlayData=null, customStartTime=0, playbackTimer=null;
let savedPlaybackStartTime=0;
// Ajuste opcional: audio 8D (rotación de panorama). Persistido en localStorage.
let eightD=localStorage.getItem('bb_8d')==='1';
// Curva 1-|x| reutilizada para simular acercamiento/alejamiento sincronizado con el pan
const EIGHT_D_CURVE=(()=>{
  const curve=new Float32Array(257);
  for(let i=0;i<curve.length;i++){
    const x=i/128-1;
    curve[i]=1-Math.abs(x);
  }
  return curve;
})();

// Initialize AudioContext and related nodes
function initAudio(){
  if(audioCtx) return;
  // Create a new AudioContext
  audioCtx=new (window.AudioContext||window.webkitAudioContext)();
  // Create a GainNode for volume control
  gainNode=audioCtx.createGain();
  // Set initial gain value (20% por defecto)
  gainNode.gain.value=0.2;
  // Create a ChannelMergerNode to merge left and right channels
  merger=audioCtx.createChannelMerger(2);
  // StereoPannerNode usado por el efecto opcional de audio 8D (centrado si está desactivado)
  panNode=audioCtx.createStereoPanner();
  // Filtro y ganancia de "profundidad": simulan que el sonido se aleja/atenúa al pasar detrás de la cabeza
  eightDFilter=audioCtx.createBiquadFilter();
  eightDFilter.type='lowpass';
  eightDFilter.frequency.value=20000; // abierto = transparente cuando el 8D está desactivado
  eightDDepthGain=audioCtx.createGain();
  eightDDepthGain.gain.value=1;
  // Analizadores por canal (splitter -> L/R -> merger de salida), para el espectrograma dual
  const splitter=audioCtx.createChannelSplitter(2);
  analyserL=audioCtx.createAnalyser();
  analyserR=audioCtx.createAnalyser();
  // FFT grande para tener buena resolución en graves, ya que sólo se reproduce hasta ~500Hz
  analyserL.fftSize=2048;
  analyserR.fftSize=2048;
  const outMerger=audioCtx.createChannelMerger(2);
  // Connect the nodes: gainNode -> panNode -> eightDFilter -> eightDDepthGain -> splitter -> analyserL/R -> outMerger -> destination
  gainNode.connect(panNode);
  panNode.connect(eightDFilter);
  eightDFilter.connect(eightDDepthGain);
  eightDDepthGain.connect(splitter);
  splitter.connect(analyserL,0);
  splitter.connect(analyserR,1);
  analyserL.connect(outMerger,0,0);
  analyserR.connect(outMerger,0,1);
  outMerger.connect(audioCtx.destination);
}

// Start generating binaural beats with specified base frequency, beat frequency, and volume
function startTone(baseFreq, beatFreq, volume){
  // Ensure the audio context is initialized
  initAudio();
  // Stop any existing tones before starting new ones
  stopTone();
  // Create left and right oscillators for binaural beats
  leftOsc=audioCtx.createOscillator();
  rightOsc=audioCtx.createOscillator();
  // Set the oscillator types to sine waves
  leftOsc.type='sine';
  rightOsc.type='sine';
  // Set the frequencies for left and right oscillators
  leftOsc.frequency.value=baseFreq;
  rightOsc.frequency.value=baseFreq+beatFreq;
  // Create GainNodes for left and right channels to control volume
  const gL=audioCtx.createGain();
  const gR=audioCtx.createGain();
  // Set the gain values for left and right channels
  gL.gain.value=volume;
  gR.gain.value=volume;
  // Connect the oscillators to their respective GainNodes and then to the merger
  leftOsc.connect(gL).connect(merger,0,0);
  rightOsc.connect(gR).connect(merger,0,1);
  // Connect the merger to the main GainNode
  merger.connect(gainNode);
  // Start the oscillators
  leftOsc.start();
  rightOsc.start();
  isPlaying=true;
  // Start the visualizer to display audio data
  startVisualizer();
  startPanRotation(beatFreq);
}

function stopTone(){
  if(playbackTimer){clearTimeout(playbackTimer);playbackTimer=null;}
  if(leftOsc){try{leftOsc.stop();}catch(e){}leftOsc.disconnect();leftOsc=null;}
  if(rightOsc){try{rightOsc.stop();}catch(e){}rightOsc.disconnect();rightOsc=null;}
  isPlaying=false;
  if(animId){cancelAnimationFrame(animId);animId=null;}
  customPlayData=null;
  savedPlaybackStartTime=0;
  stopPanRotation();
  document.getElementById('globalPlayback').hidden=true;
  if(currentSavedSession){
    playBtn.textContent=t('start');
    playBtn.classList.remove('playing');
  }
  playBtn.textContent=t('start');
  playBtn.classList.remove('playing');
  playCustomBtn.innerHTML=`▶ <span>${t('play')}</span>`;
  playCustomBtn.classList.remove('playing');
  playCustomBtn.classList.add('primary');
}

function schedulePlaybackEnd(duration,onFinish){
  if(playbackTimer) clearTimeout(playbackTimer);
  let remaining=duration;
  let previous=performance.now();
  const maxTimeoutMs=2147483000;
  const tick=()=>{
    const now=performance.now();
    remaining-=(now-previous)/1000;
    previous=now;
    if(remaining<=0){playbackTimer=null;onFinish();return;}
    playbackTimer=setTimeout(tick,Math.min(remaining*1000,maxTimeoutMs));
  };
  playbackTimer=setTimeout(tick,Math.min(remaining*1000,maxTimeoutMs));
}

// Arranca un LFO que mueve panNode.pan; el período (s) es proporcional a beatFreq. Sólo si el ajuste 8D está activo.
function startPanRotation(beatFreq){
  stopPanRotation();
  if(!eightD || !panNode || !audioCtx) return;
  const period=Math.max(2, Math.abs(beatFreq)||1);
  panLfo=audioCtx.createOscillator();
  panLfo.type='sine';
  panLfo.frequency.value=1/period;
  panLfoGain=audioCtx.createGain();
  panLfoGain.gain.value=1;
  panLfo.connect(panLfoGain).connect(panNode.pan);
  // Deriva de la misma LFO una señal "1-|x|" para atenuar volumen y agudos cuando el sonido pasa detrás de la cabeza
  eightDShaper=audioCtx.createWaveShaper();
  eightDShaper.curve=EIGHT_D_CURVE;
  eightDFilterMod=audioCtx.createGain();
  eightDFilterMod.gain.value=-14000; // 20000Hz (frente) a 6000Hz (detrás)
  eightDDepthMod=audioCtx.createGain();
  eightDDepthMod.gain.value=-0.35; // 1.0 (frente) a 0.65 (detrás)
  panLfo.connect(eightDShaper);
  eightDShaper.connect(eightDFilterMod).connect(eightDFilter.frequency);
  eightDShaper.connect(eightDDepthMod).connect(eightDDepthGain.gain);
  panLfo.start();
}
function stopPanRotation(){
  if(panLfo){try{panLfo.stop();}catch(e){}panLfo.disconnect();panLfo=null;}
  if(panLfoGain){panLfoGain.disconnect();panLfoGain=null;}
  if(eightDShaper){eightDShaper.disconnect();eightDShaper=null;}
  if(eightDFilterMod){eightDFilterMod.disconnect();eightDFilterMod=null;}
  if(eightDDepthMod){eightDDepthMod.disconnect();eightDDepthMod=null;}
  if(panNode && audioCtx) panNode.pan.setValueAtTime(0, audioCtx.currentTime);
  if(eightDFilter && audioCtx) eightDFilter.frequency.setValueAtTime(20000, audioCtx.currentTime);
  if(eightDDepthGain && audioCtx) eightDDepthGain.gain.setValueAtTime(1, audioCtx.currentTime);
}

function updateBeat(beatFreq){
  if(rightOsc && currentPreset){
    rightOsc.frequency.setValueAtTime(currentPreset.base+beatFreq, audioCtx.currentTime);
  }
}

/* ============ VISUALIZER ============ */
const vizCanvas=document.getElementById('visualizer');
const vizCtx=vizCanvas.getContext('2d');
function resizeViz(){
  const width=vizCanvas.clientWidth;
  if(!width) return;
  vizCanvas.width=width*2;
  vizCanvas.height=vizCanvas.clientHeight*2;
}
resizeViz();
window.addEventListener('resize',resizeViz);

// Oscurece un color hex un cierto porcentaje, para el segundo stop de los degradados de barras
function shadeHex(hex,percent){
  const num=parseInt(hex.replace('#',''),16);
  const amt=Math.round(2.55*percent);
  const r=Math.max(0,Math.min(255,(num>>16)+amt));
  const g=Math.max(0,Math.min(255,((num>>8)&0xff)+amt));
  const b=Math.max(0,Math.min(255,(num&0xff)+amt));
  return `rgb(${r},${g},${b})`;
}

function startVisualizer(){
  if(!analyserL||!analyserR) return;
  document.getElementById('globalPlayback').hidden=false;
  requestAnimationFrame(resizeViz);
  // Buffers de frecuencia para el canal izquierdo y derecho
  const dataL=new Uint8Array(analyserL.frequencyBinCount);
  const dataR=new Uint8Array(analyserR.frequencyBinCount);
  // La app nunca reproduce por encima de ~500Hz: recortamos los bins irrelevantes
  const binHz=audioCtx.sampleRate/analyserL.fftSize;
  const maxBins=Math.min(dataL.length, Math.max(8,Math.ceil(500/binHz)));
  function drawChannelBars(data,offsetX,width,colorTop,colorBottom){
    const barW=(width/maxBins)*0.82;
    const gap=(width/maxBins)-barW;
    let x=offsetX;
    for(let i=0;i<maxBins;i++){
      const h=(data[i]/255)*vizCanvas.height;
      const grad=vizCtx.createLinearGradient(0,vizCanvas.height-h,0,vizCanvas.height);
      grad.addColorStop(0,colorTop);
      grad.addColorStop(1,colorBottom);
      vizCtx.fillStyle=grad;
      vizCtx.fillRect(x,vizCanvas.height-h,barW,h);
      x+=barW+gap;
    }
  }
  function draw(){
    if(!isPlaying){vizCtx.clearRect(0,0,vizCanvas.width,vizCanvas.height);return;}
    if(!vizCanvas.clientWidth){animId=requestAnimationFrame(draw);return;}
    analyserL.getByteFrequencyData(dataL);
    analyserR.getByteFrequencyData(dataR);
    // Estela con el color de fondo real del canvas (varía por tema) en vez de negro fijo
    const canvasStyle=getComputedStyle(vizCanvas);
    vizCtx.fillStyle=canvasStyle.backgroundColor;
    vizCtx.fillRect(0,0,vizCanvas.width,vizCanvas.height);
    // Colores de canal según el tema activo (--viz-left/--viz-right), no fijos
    const rootStyle=getComputedStyle(document.body);
    const leftColor=rootStyle.getPropertyValue('--viz-left').trim()||'#00d4ff';
    const rightColor=rootStyle.getPropertyValue('--viz-right').trim()||'#a855f7';
    // Canal izquierdo y derecho lado a lado, en la misma fila
    const half=vizCanvas.width/2;
    drawChannelBars(dataL,0,half,leftColor,shadeHex(leftColor,-35));
    drawChannelBars(dataR,half,half,rightColor,shadeHex(rightColor,-35));
    vizCtx.fillStyle='rgba(255,255,255,0.08)';
    vizCtx.fillRect(half-1,0,2,vizCanvas.height);
    // Etiqueta de canal y frecuencia en tiempo real, arriba a la izquierda de cada mitad
    if(leftOsc&&rightOsc){
      // El canvas se renderiza al doble de resolución que su tamaño en CSS; escalamos texto y margen igual
      const scale=vizCanvas.width/(vizCanvas.offsetWidth||vizCanvas.width);
      const pad=10*scale;
      vizCtx.textBaseline='top';
      vizCtx.font=`bold ${13*scale}px -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif`;
      vizCtx.shadowColor='rgba(0,0,0,0.6)';
      vizCtx.shadowBlur=4*scale;
      vizCtx.fillStyle=leftColor;
      vizCtx.fillText(`${t('channelLeft')} · ${leftOsc.frequency.value.toFixed(1)}Hz`,pad,pad);
      vizCtx.fillStyle=rightColor;
      vizCtx.fillText(`${t('channelRight')} · ${rightOsc.frequency.value.toFixed(1)}Hz`,half+pad,pad);
      vizCtx.shadowBlur=0;
    }
    animId=requestAnimationFrame(draw);
  }
  draw();
}


/* ============ UI PRESETS ============ */
const presetGrid=document.getElementById('presetGrid');
function renderPresetCard(p){
  const card=document.querySelector(`.preset[data-id="${p.id}"]`);
  if(!card) return;
  const text=TRANSLATIONS[language].presets[p.id];
  card.querySelector('.name').innerHTML=`${text[0]}<span class="wave-badge">${p.wave}</span>`;
  card.querySelector('.hz').textContent=`${p.beat}Hz · ${text[1]}`;
}
PRESETS.forEach(p=>{
  if(p.wave!==presetGrid.dataset.lastWave){
    presetGrid.dataset.lastWave=p.wave;
    const header=document.createElement('div');
    header.className='preset-group-title';
    header.textContent=p.wave;
    presetGrid.appendChild(header);
  }
  const el=document.createElement('div');
  el.className='preset';
  el.dataset.id=p.id;
  el.style.setProperty('--grad',p.grad);
  el.style.setProperty('--c1',p.c1);
  el.style.setProperty('--glow',p.glow);
  el.innerHTML=`<div class="icon">${p.icon}</div>
    <div class="name"></div><div class="hz"></div>`;
  el.onclick=()=>selectPreset(p);
  presetGrid.appendChild(el);
  renderPresetCard(p);
});

function selectPreset(p){
  const text=TRANSLATIONS[language].presets[p.id];
  const details=TRANSLATIONS[language].presetDetails[p.id];
  currentPreset=p;
  currentSavedSession=null;
  playBtn.hidden=false;
  document.getElementById('playerTitle').textContent=t('player');
  document.getElementById('presetDetails').hidden=false;
  document.getElementById('presetGrid').style.display='none';
  document.getElementById('playerPanel').classList.remove('hidden');
  requestAnimationFrame(resizeViz);
  document.querySelectorAll('.preset').forEach(e=>e.classList.remove('active'));
  document.querySelector(`.preset[data-id="${p.id}"]`)?.classList.add('active');
  renderPresetCard(p);
  document.getElementById('currentMode').innerHTML=`${p.icon} ${text[0]} <span class="wave-badge">${text[2]}</span>`;
  document.getElementById('presetDetailsDescription').textContent=details[0];
  document.getElementById('presetDetailsEffects').textContent=details[1];
  document.getElementById('baseFreq').value=p.base;
  document.getElementById('baseVal').textContent=p.base;
  if(isPlaying){
    leftOsc.frequency.setValueAtTime(p.base, audioCtx.currentTime);
    rightOsc.frequency.setValueAtTime(p.base+p.beat, audioCtx.currentTime);
  }
}

/* ============ CONTROLES ============ */
const playBtn=document.getElementById('playBtn');
document.getElementById('globalStopBtn').onclick=()=>stopTone();
document.getElementById('closePlayerBtn').onclick=()=>{
  if(isPlaying) stopTone();
  playBtn.textContent=t('start');
  playBtn.classList.remove('playing');
  currentPreset=null;
  currentSavedSession=null;
  document.getElementById('playerTitle').textContent=t('player');
  document.getElementById('presetDetails').hidden=false;
  document.getElementById('playerPanel').classList.add('hidden');
  document.getElementById('presetGrid').style.display='grid';
};
playBtn.onclick=()=>{
  if(isPlaying){
    stopTone();
    playBtn.textContent=t('start');
    playBtn.classList.remove('playing');
  } else {
    if(currentSavedSession){playSaved(currentSavedSession.program);return;}
    if(!currentPreset){toast(t('selectFirst'));return;}
    const base=+document.getElementById('baseFreq').value;
    const vol=+document.getElementById('volume').value/100;
    initAudio();                      // ✅ Inicializar primero
    gainNode.gain.value=vol;          // ✅ Ahora gainNode ya existe
    startTone(base, currentPreset.beat, vol);
    playBtn.textContent=t('stop');
    playBtn.classList.add('playing');
  }
};

document.getElementById('baseFreq').oninput=e=>{
  document.getElementById('baseVal').textContent=e.target.value;
  if(isPlaying&&currentSavedSession){
    updateSavedSessionBase(+e.target.value);
    return;
  }
  if(isPlaying && currentPreset){
    leftOsc.frequency.setValueAtTime(+e.target.value, audioCtx.currentTime);
    rightOsc.frequency.setValueAtTime(+e.target.value+currentPreset.beat, audioCtx.currentTime);
  }
};
document.getElementById('volume').oninput=e=>{
  document.getElementById('volVal').textContent=e.target.value;
  if(gainNode) gainNode.gain.value=e.target.value/100;
};

/* ============ TABS ============ */
document.querySelectorAll('.tab').forEach(t=>{
  t.onclick=event=>{
    if(suppressTabClick&&event.detail!==0){suppressTabClick=false;return;}
    const previousIndex=carouselTabs.findIndex(tab=>tab.classList.contains('active'));
    const nextIndex=carouselTabs.indexOf(t);
    document.querySelectorAll('.tab').forEach(x=>x.classList.remove('active'));
    document.querySelectorAll('.view').forEach(x=>x.classList.remove('active'));
    t.classList.add('active');
    const nextView=document.getElementById('view-'+t.dataset.view);
    nextView.classList.remove('slide-from-left','slide-from-right');
    nextView.classList.add(nextIndex>=previousIndex?'slide-from-right':'slide-from-left','active');
    nextView.addEventListener('animationend',()=>nextView.classList.remove('slide-from-left','slide-from-right'),{once:true});
    if(t.dataset.view==='editor') renderSegments();
    if(t.dataset.view==='saved') renderSaved();
  };
});

/* Horizontal swipe / mouse drag between the three main views */
const carouselTabs=[...document.querySelectorAll('.tab[data-view]')];
let dragStart=null,suppressTabClick=false,suppressDragClick=false;
const swipeIgnore='button,input,textarea,select,a,[contenteditable="true"],.saved-actions,.segment-actions,.tabs';
document.querySelector('main').addEventListener('pointerdown',event=>{
  if(event.pointerType==='mouse'&&event.button!==0) return;
  if(event.target.closest(swipeIgnore)) return;
  const activeIndex=carouselTabs.findIndex(tab=>tab.classList.contains('active'));
  if(activeIndex<0) return;
  dragStart={x:event.clientX,y:event.clientY,pointerId:event.pointerId,index:activeIndex,moved:false};
});
document.querySelector('main').addEventListener('pointermove',event=>{
  if(!dragStart||dragStart.pointerId!==event.pointerId) return;
  const dx=event.clientX-dragStart.x,dy=event.clientY-dragStart.y;
  if(Math.abs(dx)>12&&Math.abs(dx)>Math.abs(dy)*1.25){
    dragStart.moved=true;
    if(event.cancelable) event.preventDefault();
  }
});
function finishCarouselDrag(event){
  if(!dragStart||dragStart.pointerId!==event.pointerId) return;
  const {x,y,index,moved}=dragStart;
  const dx=event.clientX-x,dy=event.clientY-y;
  dragStart=null;
  if(!moved||Math.abs(dx)<56||Math.abs(dx)<Math.abs(dy)*1.25) return;
  const nextIndex=Math.max(0,Math.min(carouselTabs.length-1,index+(dx<0?1:-1)));
  if(nextIndex===index) return;
  suppressTabClick=true;
  suppressDragClick=true;
  carouselTabs[nextIndex].click();
  setTimeout(()=>{suppressTabClick=false;suppressDragClick=false;},250);
}
document.addEventListener('click',event=>{
  if(!suppressDragClick||event.detail===0) return;
  event.preventDefault();
  event.stopImmediatePropagation();
},true);
window.addEventListener('pointerup',finishCarouselDrag);
window.addEventListener('pointercancel',()=>{dragStart=null;});

/* ============ EDITOR ============ */
const MAX_BEAT=40;
let segments=[];
let draftSessionName='';
const segmentList=document.getElementById('segmentList');

function formatDuration(seconds){
  const minutes=Math.floor(seconds/60);
  const remaining=seconds%60;
  return `${minutes}:${String(remaining).padStart(2,'0')}`;
}
function totalSegmentDuration(){
  return segments.reduce((total,segment)=>total+segment.duration,0);
}
function escapeHTML(value){
  return String(value).replace(/[&<>"']/g,character=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[character]));
}
function normalizeSegments(program){
  if(Array.isArray(program.segments)){
    return program.segments.map((segment,index)=>({
      name:typeof segment.name==='string'&&segment.name.trim()?segment.name.trim().slice(0,60):`${t('segment')} ${index+1}`,
      beat:Math.max(0,Math.min(MAX_BEAT,+segment.beat||0)),
      duration:Math.max(1,+segment.duration||1)
    }));
  }
  const points=Array.isArray(program.points)?[...program.points].sort((a,b)=>a.x-b.x):[];
  const duration=Math.max(1,+program.duration||60);
  return points.slice(0,-1).map((point,index)=>({
    name:`${t('segment')} ${index+1}`,
    beat:Math.round(Math.max(0,Math.min(MAX_BEAT,(+point.y||0)*MAX_BEAT))*10)/10,
    duration:Math.max(1,Math.round((points[index+1].x-point.x)*duration))
  }));
}
function renderSegments(){
  document.getElementById('segmentCount').textContent=segments.length;
  document.getElementById('durVal').textContent=formatDuration(totalSegmentDuration());
  if(!segments.length){
    segmentList.innerHTML=`<div class="empty-segments">${t('emptySegments')}</div>`;
    return;
  }
  segmentList.innerHTML=segments.map((segment,index)=>`
    <article class="segment-card" data-index="${index}">
      <label class="segment-name-field">${t('segmentName')}<input class="segment-input" data-field="name" type="text" maxlength="60" value="${escapeHTML(segment.name)}" placeholder="${escapeHTML(t('segmentNamePlaceholder'))}"></label>
      <div class="segment-values">
        <label>${t('segmentFrequency')}<input class="segment-input" data-field="beat" type="number" min="0" max="${MAX_BEAT}" step="0.1" value="${segment.beat}" inputmode="decimal"></label>
        <label>${t('segmentDuration')}<input class="segment-input" data-field="duration" type="number" min="1" step="1" value="${segment.duration}" inputmode="numeric"></label>
      </div>
      <div class="segment-actions">
        <button type="button" data-action="up" aria-label="${t('moveUp')}" ${index===0?'disabled':''}>↑</button>
        <button type="button" data-action="down" aria-label="${t('moveDown')}" ${index===segments.length-1?'disabled':''}>↓</button>
        <button type="button" data-action="duplicate">${t('duplicate')}</button>
        <button type="button" data-action="delete" class="danger">${t('delete')}</button>
      </div>
    </article>`).join('');
  segmentList.querySelectorAll('.segment-input[data-field="name"]').forEach(input=>input.addEventListener('input',()=>{
    const index=+input.closest('.segment-card').dataset.index;
    segments[index].name=input.value.slice(0,60);
  }));
  segmentList.querySelectorAll('.segment-input').forEach(input=>input.addEventListener('change',()=>{
    const card=input.closest('.segment-card');
    const index=+card.dataset.index;
    const field=input.dataset.field;
    if(field==='name'){
      segments[index].name=input.value.trim()||`${t('segment')} ${index+1}`;
      renderSegments();
      return;
    }
    const value=+input.value;
    const min=field==='beat'?0:1;
    const max=field==='beat'?MAX_BEAT:Number.MAX_VALUE;
    segments[index][field]=Number.isFinite(value)?Math.max(min,Math.min(max,value||0)):min;
    renderSegments();
  }));
  segmentList.querySelectorAll('[data-action]').forEach(button=>button.addEventListener('click',()=>{
    const card=button.closest('.segment-card');
    const index=+card.dataset.index;
    const action=button.dataset.action;
    if(action==='delete') segments.splice(index,1);
    if(action==='duplicate') segments.splice(index+1,0,{...segments[index],name:`${segments[index].name} (${t('segmentCopy')})`});
    if(action==='up'&&index>0) [segments[index-1],segments[index]]=[segments[index],segments[index-1]];
    if(action==='down'&&index<segments.length-1) [segments[index],segments[index+1]]=[segments[index+1],segments[index]];
    renderSegments();
  }));
}

document.getElementById('addSegmentBtn').onclick=()=>{
  segments.push({name:`${t('segment')} ${segments.length+1}`,beat:10,duration:60});
  renderSegments();
};
document.getElementById('clearBtn').onclick=()=>{segments=[];renderSegments();};
document.getElementById('importClipboardBtn').onclick=async()=>{
  let clipboardText;
  try{
    clipboardText=await navigator.clipboard.readText();
  }catch(error){
    toast(t('clipboardReadError'));
    return;
  }
  const imported=parseSharedSession(clipboardText);
  if(!imported){toast(t('invalidSharedSession'));return;}
  if(segments.length&&!confirm(t('replaceSegments'))) return;
  segments=imported.segments.map(segment=>({...segment}));
  draftSessionName=imported.name;
  const baseInput=document.getElementById('baseFreq2');
  baseInput.value=imported.base;
  document.getElementById('baseVal2').textContent=imported.base;
  renderSegments();
  toast(t('loaded'));
};
document.getElementById('baseFreq2').oninput=e=>{
  document.getElementById('baseVal2').textContent=e.target.value;
};

/* ============ REPRODUCIR CUSTOM ============ */
const playCustomBtn=document.getElementById('playCustomBtn');
playCustomBtn.onclick=()=>{
  if(isPlaying){
    stopTone();
    playCustomBtn.innerHTML=`▶ <span>${t('play')}</span>`;
    playCustomBtn.classList.remove('playing');
    playCustomBtn.classList.add('primary');
    return;
  }
  if(!segments.length){toast(t('needSegment'));return;}
  initAudio();
  const base=+document.getElementById('baseFreq2').value;
  const vol=+document.getElementById('volume').value/100;
  const duration=totalSegmentDuration();
  if(!Number.isFinite(duration)||duration<=0){toast(t('invalidSegment'));return;}
  gainNode.gain.value=vol;

  leftOsc=audioCtx.createOscillator();
  rightOsc=audioCtx.createOscillator();
  leftOsc.type='sine';rightOsc.type='sine';
  leftOsc.frequency.value=base;
  rightOsc.frequency.value=base;
  const gL=audioCtx.createGain();const gR=audioCtx.createGain();
  gL.gain.value=vol;gR.gain.value=vol;
  leftOsc.connect(gL).connect(merger,0,0);
  rightOsc.connect(gR).connect(merger,0,1);
  merger.connect(gainNode);

  // Programar cada frecuencia al comienzo de su tramo.
  const now=audioCtx.currentTime;
  let offset=0;
  segments.forEach(segment=>{
    rightOsc.frequency.setValueAtTime(base+segment.beat,now+offset);
    offset+=segment.duration;
  });
  // Auto-stop after the total duration, even beyond the browser timer limit.
  schedulePlaybackEnd(duration,()=>{
    if(isPlaying && customPlayData){
      stopTone();
      playCustomBtn.innerHTML=`▶ <span>${t('play')}</span>`;
      playCustomBtn.classList.remove('playing');
      playCustomBtn.classList.add('primary');
      toast(t('finished'));
    }
  });

  leftOsc.start();rightOsc.start();
  isPlaying=true;
  customPlayData={base,duration,segments:[...segments]};
  customStartTime=now;
  playCustomBtn.textContent=t('stop');
  playCustomBtn.classList.add('playing');
  playCustomBtn.classList.remove('primary');
  startVisualizer();
  const avgBeat=segments.reduce((sum,segment)=>sum+segment.beat,0)/segments.length;
  startPanRotation(avgBeat);
};

/* ============ GUARDAR / CARGAR ============ */
document.getElementById('saveBtn').onclick=()=>{
  if(!segments.length){toast(t('needSegment'));return;}
  const duration=totalSegmentDuration();
  if(!Number.isFinite(duration)||duration<=0){toast(t('invalidSegment'));return;}
  const name=prompt(t('programName'),draftSessionName||t('myProgram'));
  if(!name) return;
  const saved=JSON.parse(localStorage.getItem('bb_saved')||'[]');
  saved.push({
    id:Date.now(),
    name,
    segments:segments.map(segment=>({...segment})),
    duration,
    base:+document.getElementById('baseFreq2').value,
    created:Date.now()
  });
  localStorage.setItem('bb_saved',JSON.stringify(saved));
  draftSessionName='';
  toast(t('saved'));
  renderSaved();
};

function renderSaved(){
  const list=document.getElementById('savedList');
  const saved=JSON.parse(localStorage.getItem('bb_saved')||'[]');
  if(saved.length===0){
    const emptyState=document.createElement('div');
    emptyState.className='empty';
    const message=document.createElement('p');
    message.textContent=t('empty');
    const createButton=document.createElement('button');
    createButton.type='button';
    createButton.className='empty-create-btn';
    createButton.textContent=t('createSession');
    createButton.onclick=()=>document.querySelector('[data-view="editor"]').click();
    emptyState.append(message,createButton);
    list.replaceChildren(emptyState);
    return;
  }
  list.innerHTML='';
  saved.forEach(s=>{
    const el=document.createElement('div');
    el.className='saved-item';
    const details=document.createElement('div');
    const name=document.createElement('div');
    name.className='name';
    name.textContent=`🎵 ${s.name}`;
    const normalized=normalizeSegments(s);
    const meta=document.createElement('div');
    meta.className='meta';
    meta.textContent=`${normalized.length} ${t('segments')} · ${formatDuration(normalized.reduce((total,segment)=>total+segment.duration,0))} · ${t('base')} ${s.base}Hz`;
    details.append(name,meta);
    const actions=document.createElement('div');
    actions.className='saved-actions';
    const makeAction=(label,action,extraClass='')=>{
      const button=document.createElement('button');
      button.type='button';
      button.dataset.act=action;
      button.dataset.id=s.id;
      button.className=extraClass;
      button.textContent=label;
      actions.appendChild(button);
      return button;
    };
    const playButton=makeAction('▶','play','action-play');
    playButton.setAttribute('aria-label',t('play'));
    playButton.title=t('play');
    const loadButton=makeAction('','load','action-icon-button');
    loadButton.innerHTML='<svg class="action-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 19.5h16M6 17V5a2 2 0 0 1 2-2h8l4 4v10M14 3v5h5M12 11v6m-3-3 3 3 3-3"/></svg>';
    loadButton.setAttribute('aria-label',t('load'));
    loadButton.title=t('load');
    const shareControl=document.createElement('div');
    shareControl.className='share-control';
    const shareButton=makeAction('','share','action-icon-button');
    shareButton.innerHTML='<svg class="action-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.7 10.7 6.6-4.4m-6.6 7 6.6 4.2"/></svg>';
    shareButton.setAttribute('aria-label',t('share'));
    shareButton.title=t('share');
    shareControl.appendChild(shareButton);
    const shareOptions=document.createElement('div');
    shareOptions.className='share-options';
    shareOptions.hidden=true;
    const shareIcons={
      clipboard:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="8" y="4" width="12" height="16" rx="2"/><path d="M16 4V3a1 1 0 0 0-1-1H5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h3M11 9h6M11 13h6"/></svg>',
      whatsapp:'<svg viewBox="0 0 24 24" aria-hidden="true"><path class="brand-fill" d="M12 2a9.8 9.8 0 0 0-8.4 14.9L2 22l5.3-1.5A10 10 0 1 0 12 2Z"/><path class="brand-cutout" d="M9.1 7.5c-.3-.7-.6-.7-.9-.7h-.7c-.3 0-.7.1-1 .5s-1.3 1.3-1.3 3.1 1.3 3.5 1.5 3.7 2.5 4 6.1 5.4c3 .1 3.6 0 4.2-.6s1.2-1.2 1.3-1.7.1-1-.1-1.1-2.1-1-2.5-1.2-.6-.2-.8.2-.9 1.2-1.1 1.4-.4.3-.8.1a10.4 10.4 0 0 1-3-1.9 11.2 11.2 0 0 1-2.1-2.6c-.2-.4 0-.6.2-.8l.6-.7c.2-.2.2-.4.4-.7s.1-.5 0-.7L9.1 7.5Z"/></svg>',
      telegram:'<svg viewBox="0 0 24 24" aria-hidden="true"><path class="brand-fill" d="M22 3 2.8 10.4c-1.3.5-1.3 1.2-.2 1.5l4.9 1.5 1.9 5.8c.2.7.1 1 .8 1 .5 0 .8-.2 1.1-.5l2.4-2.3 5 3.7c.9.5 1.5.2 1.7-.8L23.7 4c.3-1.2-.4-1.7-1.7-1Z"/><path class="brand-cutout" d="m8.2 13.1 10.4-6.6c.5-.3.9-.1.5.2l-8.6 7.8-.3 3.4-2-4.8Z"/></svg>',
      email:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg>'
    };
    [['shareClipboard','clipboard'],['shareWhatsApp','whatsapp'],['shareTelegram','telegram'],['shareEmail','email']].forEach(([label,destination])=>{
      const button=document.createElement('button');
      button.type='button';
      button.dataset.share=destination;
      button.dataset.id=s.id;
      button.className=`share-option share-${destination}`;
      button.setAttribute('aria-label',t(label));
      button.title=t(label);
      button.innerHTML=shareIcons[destination];
      shareOptions.appendChild(button);
    });
    shareControl.appendChild(shareOptions);
    makeAction('✕','del','del').setAttribute('aria-label',t('delete'));
    el.append(details,actions);
    actions.insertBefore(shareControl,actions.lastChild);
    list.appendChild(el);
  });
  list.querySelectorAll('button').forEach(b=>{
    b.onclick=()=>{
      const id=+b.dataset.id;
      const s=saved.find(x=>x.id===id);
      if(!s) return;
      if(b.dataset.act==='del'){
        if(confirm(t('confirmDelete'))){
          const nw=saved.filter(x=>x.id!==id);
          localStorage.setItem('bb_saved',JSON.stringify(nw));
          renderSaved();
          toast(t('deleted'));
        }
      } else if(b.dataset.act==='load'){
        segments=normalizeSegments(s);
        document.getElementById('baseFreq2').value=s.base;
        document.getElementById('baseVal2').textContent=s.base;
        document.querySelector('[data-view="editor"]').click();
        toast(t('loaded'));
       } else if(b.dataset.act==='play'){
         playSaved(s);
        } else if(b.dataset.act==='share'){
          const options=b.closest('.share-control').querySelector('.share-options');
          options.hidden=!options.hidden;
          b.setAttribute('aria-expanded',String(!options.hidden));
          b.closest('.saved-item').classList.toggle('share-open',!options.hidden);
          if(!options.hidden){
            list.querySelectorAll('.share-options').forEach(other=>{
              if(other!==options){
                other.hidden=true;
                other.closest('.saved-item').classList.remove('share-open');
                other.closest('.share-control').querySelector('[data-act="share"]').setAttribute('aria-expanded','false');
              }
            });
          }
       }
     };
   });
  list.querySelectorAll('[data-share]').forEach(button=>{
    button.onclick=()=>{
      const s=saved.find(x=>String(x.id)===button.dataset.id);
      if(s) shareSavedSession(s,button.dataset.share);
    };
  });
}

function makeSharedSession(program){
  return {format:'binaural-beats-pro-session',version:1,name:String(program.name||t('myProgram')),base:+program.base,segments:normalizeSegments(program)};
}

function parseSharedSession(text){
  if(typeof text!=='string'||text.length>1000000) return null;
  const normalizedText=text.replace(/\r\n?/g,'\n').trim();
  const marker='BINAURAL_BEATS_SESSION';
  const markerIndex=normalizedText.lastIndexOf(marker);
  if(markerIndex!==-1){
    const jsonStart=normalizedText.indexOf('{',markerIndex+marker.length);
    const parsed=jsonStart===-1?null:parseSessionJson(normalizedText.slice(jsonStart));
    if(parsed) return parsed;
  }
  const direct=parseSessionJson(normalizedText);
  if(direct) return direct;
  const links=normalizedText.match(/https?:\/\/[^\s<>"']+/g)||[];
  for(const rawLink of links){
    try{
      const link=new URL(rawLink.replace(/[),.!?]+$/,''));
      const encoded=link.searchParams.get('session')||new URLSearchParams(link.hash.slice(1)).get('session');
      if(encoded){
        const parsed=parseSessionJson(encoded);
        if(parsed) return parsed;
      }
    }catch(error){}
  }
  return null;
}

function parseSessionJson(text){
  const start=text.indexOf('{');
  if(start===-1) return null;
  let depth=0;
  let inString=false;
  let escaped=false;
  let end=-1;
  for(let index=start;index<text.length;index++){
    const character=text[index];
    if(inString){
      if(escaped) escaped=false;
      else if(character==='\\') escaped=true;
      else if(character==='"') inString=false;
      continue;
    }
    if(character==='"'){inString=true;continue;}
    if(character==='{') depth++;
    if(character==='}'&&--depth===0){end=index+1;break;}
  }
  if(end===-1) return null;
  try{
    const data=JSON.parse(text.slice(start,end));
    if(data?.format!=='binaural-beats-pro-session'||data.version!==1) return null;
    if(typeof data.name!=='string'||!data.name.trim()||data.name.length>120) return null;
    if(!Number.isFinite(data.base)||data.base<100||data.base>300) return null;
    if(!Array.isArray(data.segments)||data.segments.length<1||data.segments.length>500) return null;
    const validSegments=data.segments.every(segment=>segment&&Number.isFinite(segment.beat)&&segment.beat>=0&&segment.beat<=MAX_BEAT&&Number.isFinite(segment.duration)&&segment.duration>=1&&segment.duration<=86400&&(segment.name===undefined||(typeof segment.name==='string'&&segment.name.length<=60)));
    if(!validSegments) return null;
    return {name:data.name.trim(),base:data.base,segments:data.segments.map((segment,index)=>({name:typeof segment.name==='string'&&segment.name.trim()?segment.name.trim():`${t('segment')} ${index+1}`,beat:segment.beat,duration:segment.duration}))};
  }catch(error){
    return null;
  }
}

function sharedMessage(session){
  return `${session.name}\n${t('appLinkLabel')}\n${sharedSessionLink(session)}\n\n${t('productLinkLabel')}\n${PRODUCT_URL}`;
}

function sharedSessionLink(session){
  const appUrl=new URL('./',window.location.href);
  appUrl.searchParams.set('session',JSON.stringify(session));
  return appUrl.href;
}

function shareSavedSession(program,destination){
  const session=makeSharedSession(program);
  const message=sharedMessage(session);
  if(destination==='clipboard'){
    if(!navigator.clipboard?.writeText){toast(t('clipboardWriteError'));return;}
    navigator.clipboard.writeText(message).then(()=>toast(t('clipboardCopied'))).catch(()=>toast(t('clipboardWriteError')));
    return;
  }
  let url;
  if(destination==='whatsapp') url=`https://wa.me/?text=${encodeURIComponent(message)}`;
  if(destination==='telegram') url=`https://t.me/share/url?url=&text=${encodeURIComponent(message)}`;
  if(destination==='email') url=`mailto:?subject=${encodeURIComponent(session.name)}&body=${encodeURIComponent(message)}`;
  if(!url) return;
  if(destination==='email') window.location.href=url;
  else {
    const link=document.createElement('a');
    link.href=url;
    link.target='_blank';
    link.rel='noopener noreferrer';
    link.style.display='none';
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
}

function playSaved(s){
  if(isPlaying) stopTone();
  const savedSegments=normalizeSegments(s);
  if(!savedSegments.length){toast(t('needSegment'));return;}
  document.querySelector('[data-view="presets"]').click();
  currentPreset=null;
  currentSavedSession={program:s,segments:savedSegments};
  document.getElementById('presetGrid').style.display='none';
  document.getElementById('playerPanel').classList.remove('hidden');
  document.getElementById('playerTitle').textContent=t('savedSession');
  document.getElementById('currentMode').textContent=`🎵 ${s.name}`;
  document.getElementById('presetDetailsDescription').textContent='';
  document.getElementById('presetDetailsEffects').textContent='';
  document.getElementById('presetDetails').hidden=true;
  document.getElementById('baseFreq').value=s.base;
  document.getElementById('baseVal').textContent=s.base;
  playBtn.hidden=false;
  playBtn.textContent=t('stop');
  playBtn.classList.add('playing');
  initAudio();
  gainNode.gain.value=+document.getElementById('volume').value/100;
  leftOsc=audioCtx.createOscillator();
  rightOsc=audioCtx.createOscillator();
  leftOsc.type='sine';rightOsc.type='sine';
  const duration=savedSegments.reduce((total,segment)=>total+segment.duration,0);
  const base=+document.getElementById('baseFreq').value;
  leftOsc.frequency.value=base;
  rightOsc.frequency.value=base;
  const gL=audioCtx.createGain();const gR=audioCtx.createGain();
  const v=+document.getElementById('volume').value/100;
  gL.gain.value=v;gR.gain.value=v;
  leftOsc.connect(gL).connect(merger,0,0);
  rightOsc.connect(gR).connect(merger,0,1);
  merger.connect(gainNode);
  const now=audioCtx.currentTime;
  let offset=0;
  savedSegments.forEach(segment=>{
    rightOsc.frequency.setValueAtTime(base+segment.beat,now+offset);
    offset+=segment.duration;
  });
  schedulePlaybackEnd(duration,()=>{
    if(isPlaying){
      stopTone();
      toast(t('finished'));
    }
  });
  leftOsc.start();rightOsc.start();
  isPlaying=true;
  savedPlaybackStartTime=performance.now();
  requestAnimationFrame(resizeViz);
  startVisualizer();
  toast(`${t('playing')} ${s.name}`);
  const avgBeat=savedSegments.reduce((sum,segment)=>sum+segment.beat,0)/savedSegments.length;
  startPanRotation(avgBeat);
}

function updateSavedSessionBase(base){
  if(!audioCtx||!leftOsc||!rightOsc||!currentSavedSession) return;
  const now=audioCtx.currentTime;
  const elapsed=Math.max(0,(performance.now()-savedPlaybackStartTime)/1000);
  let segmentOffset=0,currentBeat=currentSavedSession.segments[0].beat;
  for(const segment of currentSavedSession.segments){
    const end=segmentOffset+segment.duration;
    if(elapsed<end){currentBeat=segment.beat;break;}
    segmentOffset=end;
  }
  leftOsc.frequency.setValueAtTime(base,now);
  rightOsc.frequency.cancelScheduledValues(now);
  rightOsc.frequency.setValueAtTime(base+currentBeat,now);
  segmentOffset=0;
  for(const segment of currentSavedSession.segments){
    segmentOffset+=segment.duration;
    if(segmentOffset>elapsed) rightOsc.frequency.setValueAtTime(base+segment.beat,now+(segmentOffset-elapsed));
  }
}

/* ============ TOAST ============ */
let toastTimer;
function toast(msg){
  const t=document.getElementById('toast');
  t.textContent=msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer=setTimeout(()=>t.classList.remove('show'),2200);
}

/* ============ INIT ============ */
document.querySelectorAll('.theme-option').forEach(button=>{
  if(!button.dataset.theme) return;
  button.onclick=()=>setTheme(button.dataset.theme);
});
const eightDToggle=document.getElementById('eightDToggle');
function updateEightDUI(){
  eightDToggle?.classList.toggle('active',eightD);
}
eightDToggle.onclick=()=>{
  eightD=!eightD;
  localStorage.setItem('bb_8d',eightD?'1':'0');
  updateEightDUI();
  if(isPlaying){
    if(eightD) startPanRotation(currentPreset?currentPreset.beat:(customPlayData?customPlayData.segments.reduce((sum,segment)=>sum+segment.beat,0)/customPlayData.segments.length:0));
    else stopPanRotation();
  }
};
updateEightDUI();
document.getElementById('settingsTrigger').onclick=()=>{
  const settingsView=document.getElementById('view-settings');
  if(settingsView.classList.contains('active')){
    document.querySelector('[data-view="presets"]').click();
    return;
  }
  document.querySelectorAll('.tab').forEach(tab=>tab.classList.remove('active'));
  document.querySelectorAll('.view').forEach(view=>view.classList.remove('active'));
  settingsView.classList.add('active');
};
document.getElementById('settingsCloseBtn').onclick=()=>document.querySelector('[data-view="presets"]').click();
document.querySelectorAll('.language-option').forEach(button=>{
  button.onclick=()=>{
  language=button.dataset.language;
  localStorage.setItem('bb_language',language);
  translateStatic();
  PRESETS.forEach(renderPresetCard);
  if(currentPreset) selectPreset(currentPreset);
  renderSaved();
   renderSegments();
  };
});
setTheme(theme);
translateStatic();
renderSegments();
const sharedSessionParam=new URLSearchParams(window.location.search).get('session')||new URLSearchParams(window.location.hash.slice(1)).get('session');
if(sharedSessionParam){
  const incoming=parseSharedSession(sharedSessionParam);
  if(incoming){
    segments=incoming.segments.map(segment=>({...segment}));
    draftSessionName=incoming.name;
    document.getElementById('baseFreq2').value=incoming.base;
    document.getElementById('baseVal2').textContent=incoming.base;
    renderSegments();
    document.querySelector('[data-view="editor"]').click();
  }
  const cleanUrl=new URL(window.location.href);
  cleanUrl.searchParams.delete('session');
  const hashParams=new URLSearchParams(cleanUrl.hash.slice(1));
  hashParams.delete('session');
  cleanUrl.hash=hashParams.size?hashParams.toString():'';
  history.replaceState(null,'',`${cleanUrl.pathname}${cleanUrl.search}${cleanUrl.hash}`);
}
