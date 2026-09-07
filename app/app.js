/* ============ PWA ============ */
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
  es:{tagline:'Generador de ondas cerebrales',presetsTab:'Presintonías',editorTab:'Crear',savedTab:'Sesiones',player:'Reproductor',selectPreset:'Selecciona una presintonía',baseFrequency:'Frecuencia base',volume:'Volumen',start:'▶  INICIAR',stop:'■  DETENER',howToUse:'¿Cómo usar?',editorHelp:'Toca el gráfico para añadir puntos. Arrástralos para definir la frecuencia del batido binaural a lo largo del tiempo. La línea muestra la diferencia entre oídos (Hz).',time:'Tiempo →',clear:'Limpiar',save:'Guardar',play:'Reproducir',totalDuration:'Duración total',savedInfo:'Tus programas personalizados se guardan localmente en este dispositivo.',installAsApp:'Instalar como app',install:'Instalar',addPoints:'Toca para añadir puntos',selectFirst:'Selecciona una presintonía primero',needTwo:'Añade al menos 2 puntos al gráfico',needTwoShort:'Añade al menos 2 puntos',finished:'Programa finalizado',programName:'Nombre del programa:',myProgram:'Mi programa',saved:'✓ Programa guardado',empty:'No hay programas guardados aún.<br>Crea uno en el Editor.',load:'Cargar',delete:'Eliminar',deleted:'Eliminado',loaded:'Cargado en el editor',playing:'▶ Reproduciendo',confirmDelete:'¿Eliminar este programa?',points:'puntos',base:'Base',presets:{memoria:['Memoria','Aprendizaje','Beta 14Hz - Concentración y memoria'],relax:['Relajarse','Calma','Alpha 10Hz - Relajación profunda'],dormir:['Dormir','Sueño profundo','Delta 2Hz - Sueño profundo'],meditar:['Meditación','Atención plena','Theta 6Hz - Meditación'],deseo:['Intimidad','Relajación Sensua','Theta 6Hz - Sensualidad'],energia:['Energía','Motivación','Beta 20Hz - Energía']}},
  en:{tagline:'Brainwave generator',presetsTab:'Presets',editorTab:'Create',savedTab:'Sessions',player:'Player',selectPreset:'Select a preset',baseFrequency:'Base frequency',volume:'Volume',start:'▶  START',stop:'■  STOP',howToUse:'How to use',editorHelp:'Tap the graph to add points. Drag them to define the binaural beat frequency over time. The line shows the difference between ears (Hz).',time:'Time →',clear:'Clear',save:'Save',play:'Play',totalDuration:'Total duration',savedInfo:'Your custom programs are stored locally on this device.',installAsApp:'Install as app',install:'Install',addPoints:'Tap to add points',selectFirst:'Select a preset first',needTwo:'Add at least 2 points to the graph',needTwoShort:'Add at least 2 points',finished:'Program finished',programName:'Program name:',myProgram:'My program',saved:'✓ Program saved',empty:'No saved programs yet.<br>Create one in the Editor.',load:'Load',delete:'Delete',deleted:'Deleted',loaded:'Loaded in editor',playing:'▶ Playing',confirmDelete:'Delete this program?',points:'points',base:'Base',presets:{memoria:['Memory','Learning','Beta 14Hz - Focus and memory'],relax:['Relax','Calm','Alpha 10Hz - Deep relaxation'],dormir:['Sleep','Deep sleep','Delta 2Hz - Deep sleep'],meditar:['Meditation','Mindfulness','Theta 6Hz - Meditation'],deseo:['Intimacy','Sensual Relax','Theta 6Hz - Sensuality'],energia:['Energy','Motivation','Beta 20Hz - Energy']}}
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
Object.assign(TRANSLATIONS.es,{settingsTab:'Ajustes',settingsAria:'Abrir ajustes',closeSettings:'Volver a presintonías',languageTitle:'Idioma',languageInfo:'Elige el idioma de la aplicación.',themeTitle:'Tema de la aplicación',themeInfo:'Personaliza la apariencia de Binaural Beats Pro.',darkTheme:'Oscuro',darkThemeInfo:'Fondo oscuro para sesiones nocturnas.',lightTheme:'Claro',lightThemeInfo:'Interfaz luminosa para el día.',settingsSaved:'Tus preferencias se guardan automáticamente en este dispositivo.',eightDTitle:'Audio 8D',eightDInfo:'Rota el sonido entre los auriculares con un período proporcional a la frecuencia elegida.',eightDToggleLabel:'Activar audio 8D',eightDToggleInfo:'Opcional. Si está desactivado, el comportamiento es el habitual (sin rotación).'});
Object.assign(TRANSLATIONS.en,{settingsTab:'Settings',settingsAria:'Open settings',closeSettings:'Back to presets',languageTitle:'Language',languageInfo:'Choose the application language.',themeTitle:'Application theme',themeInfo:'Customize the appearance of Binaural Beats Pro.',darkTheme:'Dark',darkThemeInfo:'Dark background for night sessions.',lightTheme:'Light',lightThemeInfo:'Bright interface for daytime use.',settingsSaved:'Your preferences are saved automatically on this device.',eightDTitle:'8D audio',eightDInfo:'Rotates the sound between headphone channels with a period proportional to the chosen frequency.',eightDToggleLabel:'Enable 8D audio',eightDToggleInfo:'Optional. When disabled, playback behaves as usual (no rotation).'});
let language=localStorage.getItem('bb_language')||((navigator.language||'es').toLowerCase().startsWith('en')?'en':'es');
const t=key=>TRANSLATIONS[language][key]||key;
const savedTheme=localStorage.getItem('bb_theme');
let theme=savedTheme||((window.matchMedia&&window.matchMedia('(prefers-color-scheme: light)').matches)?'light':'dark');
function setTheme(value){
  const themes=['dark','light','monokai','desert','ocean','solarized'];
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
}
const PRESETS = [
  {id:'memoria',name:'Memoria',sub:'Aprendizaje',icon:'🧠',beat:14,base:200,wave:'Beta',grad:'linear-gradient(135deg,#00d4ff,#0066ff)',c1:'#00d4ff',glow:'rgba(0,212,255,0.4)',desc:'Beta 14Hz - Concentración suave y atención focalizada'},
  {id:'relax',name:'Relajarse',sub:'Calma',icon:'🌿',beat:10,base:200,wave:'Alpha',grad:'linear-gradient(135deg,#10b981,#059669)',c1:'#10b981',glow:'rgba(16,185,129,0.4)',desc:'Alpha 10Hz - Relajación alerta y reducción de estrés'},
  {id:'dormir',name:'Dormir',sub:'Sueño profundo',icon:'🌙',beat:2,base:180,wave:'Delta',grad:'linear-gradient(135deg,#6366f1,#312e81)',c1:'#6366f1',glow:'rgba(99,102,241,0.4)',desc:'Delta 2Hz - Sueño reparador y sanación profunda'},
  {id:'meditar',name:'Meditación',sub:'Atención plena',icon:'🧘',beat:6,base:200,wave:'Theta',grad:'linear-gradient(135deg,#a855f7,#7e22ce)',c1:'#a855f7',glow:'rgba(168,85,247,0.4)',desc:'Theta 6Hz - Meditación ligera y visualización'},
  {id:'intuicion',name:'Intuición',sub:'Conexión interna',icon:'🔮',beat:5,base:200,wave:'Theta',grad:'linear-gradient(135deg,#ec4899,#be185d)',c1:'#ec4899',glow:'rgba(236,72,153,0.4)',desc:'Theta 5Hz - Relajación profunda e intuición'},
  {id:'energia',name:'Energía',sub:'Motivación',icon:'⚡',beat:20,base:220,wave:'Beta',grad:'linear-gradient(135deg,#f59e0b,#dc2626)',c1:'#f59e0b',glow:'rgba(245,158,11,0.4)',desc:'Beta 20Hz - Concentración intensa y energía mental'},
  {id:'creatividad',name:'Creatividad',sub:'Inspiración',icon:'💡',beat:7,base:210,wave:'Theta',grad:'linear-gradient(135deg,#f97316,#ea580c)',c1:'#f97316',glow:'rgba(249,115,22,0.4)',desc:'Theta 7Hz - Ideas creativas y estado hipnagógico'},
  {id:'enfoque',name:'Enfoque profundo',sub:'Productividad',icon:'🎯',beat:18,base:220,wave:'Beta',grad:'linear-gradient(135deg,#14b8a6,#0f766e)',c1:'#14b8a6',glow:'rgba(20,184,166,0.4)',desc:'Beta 18Hz - Concentración intensa y resolución de problemas'},
  {id:'claridad',name:'Claridad',sub:'Equilibrio',icon:'🔎',beat:12,base:200,wave:'Alpha',grad:'linear-gradient(135deg,#38bdf8,#0284c7)',c1:'#38bdf8',glow:'rgba(56,189,248,0.4)',desc:'Alpha 12Hz - Pensamiento positivo y visualización clara'},
  {id:'siesta',name:'Siesta',sub:'Descanso breve',icon:'🛌',beat:3,base:180,wave:'Delta',grad:'linear-gradient(135deg,#818cf8,#4f46e5)',c1:'#818cf8',glow:'rgba(129,140,248,0.4)',desc:'Delta 3Hz - Descanso profundo y recuperación física'},
  {id:'respiracion',name:'Respiración',sub:'Serenidad',icon:'🌬️',beat:4,base:190,wave:'Theta',grad:'linear-gradient(135deg,#2dd4bf,#0d9488)',c1:'#2dd4bf',glow:'rgba(45,212,191,0.4)',desc:'Theta 4Hz - Meditación profunda y conexión subconsciente'},
  {id:'alerta',name:'Alerta',sub:'Activación',icon:'🚀',beat:30,base:240,wave:'Gamma',grad:'linear-gradient(135deg,#facc15,#eab308)',c1:'#facc15',glow:'rgba(250,204,21,0.4)',desc:'Gamma 30Hz - Procesamiento cognitivo y memoria'}
];

/* ============ AUDIO ENGINE ============ */
Object.assign(TRANSLATIONS.en.presetDetails,{
  memoria:['A 14 Hz beta session for gentle concentration and focused attention.','Use it for reading, learning or tasks that require sustained attention.'],relax:['A 10 Hz alpha session for alert relaxation and stress reduction.','It can accompany a conscious break without aiming for sleep.'],dormir:['A 2 Hz delta session for a restorative sleep routine.','Use it before sleep or during a deep rest break.'],meditar:['A 6 Hz theta session for light meditation and visualization.','It can accompany calm breathing and mindfulness.'],intuicion:['A 5 Hz theta session for deep relaxation and inner connection.','It can accompany introspection, imagination and a personal pause.'],energia:['A 20 Hz beta session for intense concentration and mental energy.','Use it in short work, study or activation blocks.'],creatividad:['A 7 Hz theta session for creative ideas and a hypnagogic transition.','It can accompany brainstorming, writing or creative exploration.'],enfoque:['An 18 Hz beta session for intense concentration and problem-solving.','Use it for productive tasks that need continuity.'],claridad:['A 12 Hz alpha session for positive thinking and clear visualization.','It can accompany planning, reflection or a pause before deciding.'],siesta:['A 3 Hz delta session for deep rest and physical recovery.','Use it only when you can disconnect and do not need to stay alert.'],respiracion:['A 4 Hz theta session for deep meditation and inner connection.','It can accompany slow breathing exercises and attention to the body.'],alerta:['A 30 Hz gamma session for cognitive processing and memory.','Use it at a comfortable volume during short periods of intense attention.']
});
let audioCtx=null, leftOsc=null, rightOsc=null, merger=null, gainNode=null, analyser=null, panNode=null, panLfo=null, panLfoGain=null;
let isPlaying=false, currentPreset=null, animId=null;
let customPlayData=null, customStartTime=0;
// Ajuste opcional: audio 8D (rotación de panorama). Persistido en localStorage.
let eightD=localStorage.getItem('bb_8d')==='1';

// Initialize AudioContext and related nodes
function initAudio(){
  if(audioCtx) return;
  // Create a new AudioContext
  audioCtx=new (window.AudioContext||window.webkitAudioContext)();
  // Create a GainNode for volume control
  gainNode=audioCtx.createGain();
  // Set initial gain value
  gainNode.gain.value=0.5;
  // Create an AnalyserNode for visualizations
  analyser=audioCtx.createAnalyser();
  // Set the FFT size for the analyser
  analyser.fftSize=256;
  // Create a ChannelMergerNode to merge left and right channels
  merger=audioCtx.createChannelMerger(2);
  // StereoPannerNode usado por el efecto opcional de audio 8D (centrado si está desactivado)
  panNode=audioCtx.createStereoPanner();
  // Connect the nodes: merger -> gainNode -> panNode -> analyser -> destination
  gainNode.connect(panNode);
  panNode.connect(analyser);
  // Connect the analyser to the audio context's destination (speakers/headphones)
  analyser.connect(audioCtx.destination);
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
  if(leftOsc){try{leftOsc.stop();}catch(e){}leftOsc.disconnect();leftOsc=null;}
  if(rightOsc){try{rightOsc.stop();}catch(e){}rightOsc.disconnect();rightOsc=null;}
  isPlaying=false;
  if(animId){cancelAnimationFrame(animId);animId=null;}
  customPlayData=null;
  stopPanRotation();
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
  panLfo.start();
}
function stopPanRotation(){
  if(panLfo){try{panLfo.stop();}catch(e){}panLfo.disconnect();panLfo=null;}
  if(panLfoGain){panLfoGain.disconnect();panLfoGain=null;}
  if(panNode && audioCtx) panNode.pan.setValueAtTime(0, audioCtx.currentTime);
}

function updateBeat(beatFreq){
  if(rightOsc && currentPreset){
    rightOsc.frequency.setValueAtTime(currentPreset.base+beatFreq, audioCtx.currentTime);
  }
}

/* ============ VISUALIZER ============ */
const vizCanvas=document.getElementById('visualizer');
const vizCtx=vizCanvas.getContext('2d');
function resizeViz(){vizCanvas.width=vizCanvas.offsetWidth*2;vizCanvas.height=vizCanvas.offsetHeight*2;}
resizeViz();
window.addEventListener('resize',resizeViz);

function startVisualizer(){
  if(!analyser) return;
  // Create a Uint8Array to hold the frequency data
  const data=new Uint8Array(analyser.frequencyBinCount);
  // Define the draw function to visualize the audio data
  function draw(){
    if(!isPlaying){vizCtx.clearRect(0,0,vizCanvas.width,vizCanvas.height);return;}
    // Get the frequency data from the analyser
    analyser.getByteFrequencyData(data);
    // Clear the canvas with a semi-transparent fill to create a fading effect
    vizCtx.fillStyle='rgba(0,0,0,0.2)';
    // Fill the entire canvas with the fill style
    vizCtx.fillRect(0,0,vizCanvas.width,vizCanvas.height);
    // Calculate the width of each bar in the visualizer
    const barW=vizCanvas.width/data.length*2.5;
    let x=0;
    // Loop through the frequency data and draw bars on the canvas
    for(let i=0;i<data.length;i++){
      const h=(data[i]/255)*vizCanvas.height;
      const grad=vizCtx.createLinearGradient(0,vizCanvas.height-h,0,vizCanvas.height);
      grad.addColorStop(0,'#00d4ff');
      grad.addColorStop(1,'#a855f7');
      vizCtx.fillStyle=grad;
      vizCtx.fillRect(x,vizCanvas.height-h,barW-2,h);
      x+=barW;
      if(x>vizCanvas.width) break;
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
document.getElementById('closePlayerBtn').onclick=()=>{
  if(isPlaying) stopTone();
  playBtn.textContent=t('start');
  playBtn.classList.remove('playing');
  currentPreset=null;
  document.getElementById('playerPanel').classList.add('hidden');
  document.getElementById('presetGrid').style.display='grid';
};
playBtn.onclick=()=>{
  if(isPlaying){
    stopTone();
    playBtn.textContent=t('start');
    playBtn.classList.remove('playing');
  } else {
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
  t.onclick=()=>{
    document.querySelectorAll('.tab').forEach(x=>x.classList.remove('active'));
    document.querySelectorAll('.view').forEach(x=>x.classList.remove('active'));
    t.classList.add('active');
    document.getElementById('view-'+t.dataset.view).classList.add('active');
    if(t.dataset.view==='editor') resizeEditor();
    if(t.dataset.view==='saved') renderSaved();
  };
});

/* ============ EDITOR ============ */
const editorCanvas=document.getElementById('editor');
const ectx=editorCanvas.getContext('2d');
let points=[]; // {x:0..1, y:0..1} y=0 es 0Hz, y=1 es 40Hz
let dragging=null;
const MAX_BEAT=40;

function resizeEditor(){
  editorCanvas.width=editorCanvas.offsetWidth*2;
  editorCanvas.height=editorCanvas.offsetHeight*2;
  drawEditor();
}
window.addEventListener('resize',resizeEditor);

function pointBeat(point){
  return Math.round(point.y*MAX_BEAT*10)/10;
}

function drawEditor(){
  const W=editorCanvas.width, H=editorCanvas.height;
  ectx.clearRect(0,0,W,H);
  // grid
  ectx.strokeStyle='rgba(255,255,255,0.06)';
  ectx.lineWidth=1;
  for(let i=1;i<8;i++){
    const y=H*i/8;
    ectx.beginPath();ectx.moveTo(0,y);ectx.lineTo(W,y);ectx.stroke();
  }
  for(let i=1;i<10;i++){
    const x=W*i/10;
    ectx.beginPath();ectx.moveTo(x,0);ectx.lineTo(x,H);ectx.stroke();
  }
  // curva
  if(points.length>0){
    const sorted=[...points].sort((a,b)=>a.x-b.x);
    const grad=ectx.createLinearGradient(0,0,W,0);
    grad.addColorStop(0,'#00d4ff');
    grad.addColorStop(0.5,'#a855f7');
    grad.addColorStop(1,'#ec4899');
    ectx.strokeStyle=grad;
    ectx.lineWidth=4;
    ectx.beginPath();
    sorted.forEach((p,i)=>{
      const x=p.x*W, y=H-p.y*H;
      if(i===0) ectx.moveTo(x,y); else ectx.lineTo(x,y);
    });
    ectx.stroke();
    // relleno
    ectx.lineTo(sorted[sorted.length-1].x*W, H);
    ectx.lineTo(sorted[0].x*W, H);
    ectx.closePath();
    const fillGrad=ectx.createLinearGradient(0,0,0,H);
    fillGrad.addColorStop(0,'rgba(168,85,247,0.3)');
    fillGrad.addColorStop(1,'rgba(0,212,255,0)');
    ectx.fillStyle=fillGrad;
    ectx.fill();
    // puntos
    sorted.forEach(p=>{
      const x=p.x*W, y=H-p.y*H;
      ectx.fillStyle='#fff';
      ectx.beginPath();ectx.arc(x,y,10,0,Math.PI*2);ectx.fill();
      ectx.fillStyle='#00d4ff';
      ectx.beginPath();ectx.arc(x,y,6,0,Math.PI*2);ectx.fill();

      const beat=pointBeat(p);
      const label=`${beat.toFixed(1)} Hz`;
      ectx.font='600 18px sans-serif';
      const labelWidth=ectx.measureText(label).width+16;
      const labelX=Math.max(4,Math.min(W-labelWidth-4,x-labelWidth/2));
      const labelY=y<42?y+16:y-38;
      ectx.fillStyle='rgba(10,10,31,0.88)';
      ectx.fillRect(labelX,labelY,labelWidth,26);
      ectx.fillStyle='#fff';
      ectx.textAlign='center';
      ectx.textBaseline='middle';
      ectx.fillText(label,labelX+labelWidth/2,labelY+13);
    });
  } else {
    ectx.fillStyle='rgba(255,255,255,0.3)';
    ectx.font='24px sans-serif';
    ectx.textAlign='center';
    ectx.fillText(t('addPoints'),W/2,H/2);
  }
}

function getPos(e){
  const r=editorCanvas.getBoundingClientRect();
  const t=e.touches?e.touches[0]:e;
  const rawY=Math.max(0,Math.min(1,1-(t.clientY-r.top)/r.height));
  return {
    x:Math.max(0,Math.min(1,(t.clientX-r.left)/r.width)),
    y:Math.round(rawY*MAX_BEAT*10)/(MAX_BEAT*10)
  };
}

editorCanvas.addEventListener('touchstart',e=>{e.preventDefault();handleDown(e);},{passive:false});
editorCanvas.addEventListener('touchmove',e=>{e.preventDefault();handleMove(e);},{passive:false});
editorCanvas.addEventListener('touchend',e=>{e.preventDefault();dragging=null;},{passive:false});
editorCanvas.addEventListener('mousedown',handleDown);
editorCanvas.addEventListener('mousemove',handleMove);
editorCanvas.addEventListener('mouseup',()=>dragging=null);
editorCanvas.addEventListener('mouseleave',()=>dragging=null);

function handleDown(e){
  const p=getPos(e);
  // buscar punto cercano
  let closest=-1, minD=0.05;
  points.forEach((pt,i)=>{
    const d=Math.hypot(pt.x-p.x,pt.y-p.y);
    if(d<minD){minD=d;closest=i;}
  });
  if(closest>=0){
    dragging=closest;
  } else {
    points.push(p);
    dragging=points.length-1;
    drawEditor();
  }
}
function handleMove(e){
  if(dragging===null) return;
  const p=getPos(e);
  points[dragging]=p;
  drawEditor();
}

document.getElementById('clearBtn').onclick=()=>{points=[];drawEditor();};

document.getElementById('duration').oninput=e=>{
  document.getElementById('durVal').textContent=e.target.value;
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
  if(points.length<2){toast(t('needTwo'));return;}
  initAudio();
  const base=+document.getElementById('baseFreq2').value;
  const vol=+document.getElementById('volume').value/100;
  const duration=+document.getElementById('duration').value;
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

  // Programar curva
  const now=audioCtx.currentTime;
  const sorted=[...points].sort((a,b)=>a.x-b.x);
  sorted.forEach(p=>{
    const t=now+p.x*duration;
    const freq=base+p.y*MAX_BEAT;
    rightOsc.frequency.setValueAtTime(freq,t);
  });
  // Auto-stop
  setTimeout(()=>{
    if(isPlaying && customPlayData){
      stopTone();
      playCustomBtn.innerHTML=`▶ <span>${t('play')}</span>`;
      playCustomBtn.classList.remove('playing');
      playCustomBtn.classList.add('primary');
      toast(t('finished'));
    }
  },duration*1000);

  leftOsc.start();rightOsc.start();
  isPlaying=true;
  customPlayData={base,duration,sorted};
  customStartTime=now;
  playCustomBtn.textContent=t('stop');
  playCustomBtn.classList.add('playing');
  playCustomBtn.classList.remove('primary');
  startVisualizer();
  const avgBeat=sorted.reduce((s,p)=>s+p.y*MAX_BEAT,0)/sorted.length;
  startPanRotation(avgBeat);
};

/* ============ GUARDAR / CARGAR ============ */
document.getElementById('saveBtn').onclick=()=>{
  if(points.length<2){toast(t('needTwoShort'));return;}
  const name=prompt(t('programName'),t('myProgram'));
  if(!name) return;
  const saved=JSON.parse(localStorage.getItem('bb_saved')||'[]');
  saved.push({
    id:Date.now(),
    name,
    points:[...points],
    duration:+document.getElementById('duration').value,
    base:+document.getElementById('baseFreq2').value,
    created:Date.now()
  });
  localStorage.setItem('bb_saved',JSON.stringify(saved));
  toast(t('saved'));
  renderSaved();
};

function renderSaved(){
  const list=document.getElementById('savedList');
  const saved=JSON.parse(localStorage.getItem('bb_saved')||'[]');
  if(saved.length===0){
    list.innerHTML=`<div class="empty">${t('empty')}</div>`;
    return;
  }
  list.innerHTML='';
  saved.forEach(s=>{
    const el=document.createElement('div');
    el.className='saved-item';
    el.innerHTML=`
      <div>
        <div class="name">🎵 ${s.name}</div>
        <div class="meta">${s.points.length} ${t('points')} · ${s.duration}s · ${t('base')} ${s.base}Hz</div>
      </div>
      <div>
        <button data-act="load" data-id="${s.id}">${t('load')}</button>
        <button data-act="play" data-id="${s.id}">▶</button>
        <button class="del" data-act="del" data-id="${s.id}" aria-label="${t('delete')}">✕</button>
      </div>`;
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
        points=[...s.points];
        document.getElementById('duration').value=s.duration;
        document.getElementById('durVal').textContent=s.duration;
        document.getElementById('baseFreq2').value=s.base;
        document.getElementById('baseVal2').textContent=s.base;
        document.querySelector('[data-view="editor"]').click();
        toast(t('loaded'));
      } else if(b.dataset.act==='play'){
        playSaved(s);
      }
    };
  });
}

function playSaved(s){
  if(isPlaying) stopTone();
  initAudio();
  gainNode.gain.value=+document.getElementById('volume').value/100;
  leftOsc=audioCtx.createOscillator();
  rightOsc=audioCtx.createOscillator();
  leftOsc.type='sine';rightOsc.type='sine';
  leftOsc.frequency.value=s.base;
  rightOsc.frequency.value=s.base;
  const gL=audioCtx.createGain();const gR=audioCtx.createGain();
  const v=+document.getElementById('volume').value/100;
  gL.gain.value=v;gR.gain.value=v;
  leftOsc.connect(gL).connect(merger,0,0);
  rightOsc.connect(gR).connect(merger,0,1);
  merger.connect(gainNode);
  const now=audioCtx.currentTime;
  [...s.points].sort((a,b)=>a.x-b.x).forEach(p=>{
    rightOsc.frequency.setValueAtTime(s.base+p.y*MAX_BEAT, now+p.x*s.duration);
  });
  setTimeout(()=>{
    if(isPlaying){
      stopTone();
      toast(t('finished'));
    }
  },s.duration*1000);
  leftOsc.start();rightOsc.start();
  isPlaying=true;
  startVisualizer();
  toast(`${t('playing')} ${s.name}`);
  const sortedPoints=[...s.points].sort((a,b)=>a.x-b.x);
  const avgBeat=sortedPoints.reduce((sum,p)=>sum+p.y*MAX_BEAT,0)/sortedPoints.length;
  startPanRotation(avgBeat);
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
    if(eightD) startPanRotation(currentPreset?currentPreset.beat:(customPlayData?customPlayData.sorted.reduce((s,p)=>s+p.y*MAX_BEAT,0)/customPlayData.sorted.length:0));
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
  drawEditor();
  };
});
setTheme(theme);
translateStatic();
resizeEditor();
