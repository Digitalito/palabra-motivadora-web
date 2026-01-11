const DATA = {
  words: [
    // A (Masculino)
    { term: "Amor", gender: "m" }, { term: "Ánimo", gender: "m" }, { term: "Arte", gender: "m" }, { term: "Apoyo", gender: "m" }, { term: "Asombro", gender: "m" }, { term: "Aprendizaje", gender: "m" }, { term: "Aire", gender: "m" }, { term: "Aliento", gender: "m" }, { term: "Amanecer", gender: "m" }, { term: "Avance", gender: "m" },
    // A (Femenino)
    { term: "Alegría", gender: "f" }, { term: "Armonía", gender: "f" }, { term: "Amistad", gender: "f" }, { term: "Alma", gender: "f" }, { term: "Abundancia", gender: "f" }, { term: "Acción", gender: "f" }, { term: "Actitud", gender: "f" }, { term: "Aceptación", gender: "f" }, { term: "Audacia", gender: "f" }, { term: "Aventura", gender: "f" }, { term: "Ambición", gender: "f" }, { term: "Autoestima", gender: "f" },
    
    // B
    { term: "Bondad", gender: "f" }, { term: "Belleza", gender: "f" }, { term: "Bendición", gender: "f" }, { term: "Bienestar", gender: "m" }, { term: "Balance", gender: "m" }, { term: "Brillo", gender: "m" },
    
    // C
    { term: "Calma", gender: "f" }, { term: "Confianza", gender: "f" }, { term: "Coraje", gender: "m" }, { term: "Creatividad", gender: "f" }, { term: "Claridad", gender: "f" }, { term: "Camino", gender: "m" }, { term: "Cambio", gender: "m" }, { term: "Cariño", gender: "m" }, { term: "Compromiso", gender: "m" }, { term: "Carácter", gender: "m" }, { term: "Crecimiento", gender: "m" }, { term: "Compasión", gender: "f" }, { term: "Constancia", gender: "f" }, { term: "Conexión", gender: "f" }, { term: "Certeza", gender: "f" }, { term: "Conciencia", gender: "f" }, { term: "Calidez", gender: "f" },
    
    // D
    { term: "Dedicación", gender: "f" }, { term: "Disciplina", gender: "f" }, { term: "Destino", gender: "m" }, { term: "Deseo", gender: "m" }, { term: "Deber", gender: "m" }, { term: "Decisión", gender: "f" }, { term: "Dignidad", gender: "f" }, { term: "Dulzura", gender: "f" }, { term: "Determinación", gender: "f" },
    
    // E
    { term: "Esperanza", gender: "f" }, { term: "Éxito", gender: "m" }, { term: "Esfuerzo", gender: "m" }, { term: "Energía", gender: "f" }, { term: "Entusiasmo", gender: "m" }, { term: "Equilibrio", gender: "m" }, { term: "Empatía", gender: "f" }, { term: "Enfoque", gender: "m" }, { term: "Evolución", gender: "f" }, { term: "Excelencia", gender: "f" }, { term: "Emoción", gender: "f" }, { term: "Esencia", gender: "f" }, { term: "Estabilidad", gender: "f" }, { term: "Espíritu", gender: "m" }, { term: "Eternidad", gender: "f" },
    
    // F
    { term: "Fe", gender: "f" }, { term: "Felicidad", gender: "f" }, { term: "Fuerza", gender: "f" }, { term: "Futuro", gender: "m" }, { term: "Fortaleza", gender: "f" }, { term: "Firmeza", gender: "f" }, { term: "Fogo", gender: "m" }, { term: "Fidelidad", gender: "f" }, { term: "Fluidez", gender: "f" },
    
    // G
    { term: "Gratitud", gender: "f" }, { term: "Generosidad", gender: "f" }, { term: "Gloria", gender: "f" }, { term: "Grandeza", gender: "f" }, { term: "Gracia", gender: "f" }, { term: "Gozo", gender: "m" },
    
    // H
    { term: "Humildad", gender: "f" }, { term: "Honor", gender: "m" }, { term: "Honestidad", gender: "f" }, { term: "Heroísmo", gender: "m" }, { term: "Historia", gender: "f" }, { term: "Humanidad", gender: "f" },
    
    // I
    { term: "Integridad", gender: "f" }, { term: "Inspiración", gender: "f" }, { term: "Imaginación", gender: "f" }, { term: "Ilusión", gender: "f" }, { term: "Innovación", gender: "f" }, { term: "Inteligencia", gender: "f" }, { term: "Instinto", gender: "m" }, { term: "Impulso", gender: "m" }, { term: "Impacto", gender: "m" }, { term: "Independencia", gender: "f" }, { term: "Igualdad", gender: "f" },
    
    // J, K, L
    { term: "Justicia", gender: "f" }, { term: "Júbilo", gender: "m" }, { term: "Karma", gender: "m" }, { term: "Libertad", gender: "f" }, { term: "Luz", gender: "f" }, { term: "Lealtad", gender: "f" }, { term: "Liderazgo", gender: "m" }, { term: "Logro", gender: "m" }, { term: "Limpieza", gender: "f" },
    
    // M
    { term: "Magia", gender: "f" }, { term: "Motivación", gender: "f" }, { term: "Mente", gender: "f" }, { term: "Madurez", gender: "f" }, { term: "Misión", gender: "f" }, { term: "Momento", gender: "m" }, { term: "Movimiento", gender: "m" }, { term: "Milagro", gender: "m" }, { term: "Maestría", gender: "f" }, { term: "Misterio", gender: "m" },
    
    // N, O
    { term: "Naturaleza", gender: "f" }, { term: "Nobleza", gender: "f" }, { term: "Novedad", gender: "f" }, { term: "Oportunidad", gender: "f" }, { term: "Optimismo", gender: "m" }, { term: "Orden", gender: "m" }, { term: "Orgullo", gender: "m" }, { term: "Originalidad", gender: "f" },
    
    // P
    { term: "Paz", gender: "f" }, { term: "Pasión", gender: "f" }, { term: "Paciencia", gender: "f" }, { term: "Poder", gender: "m" }, { term: "Propósito", gender: "m" }, { term: "Progreso", gender: "m" }, { term: "Perseverancia", gender: "f" }, { term: "Positivismo", gender: "m" }, { term: "Plenitud", gender: "f" }, { term: "Pureza", gender: "f" }, { term: "Persistencia", gender: "f" }, { term: "Potencial", gender: "m" }, { term: "Presente", gender: "m" }, { term: "Prosperidad", gender: "f" }, { term: "Promesa", gender: "f" },
    
    // R
    { term: "Respeto", gender: "m" }, { term: "Responsabilidad", gender: "f" }, { term: "Resiliencia", gender: "f" }, { term: "Rumbo", gender: "m" }, { term: "Realidad", gender: "f" }, { term: "Razón", gender: "f" }, { term: "Reflexión", gender: "f" }, { term: "Renovación", gender: "f" }, { term: "Resistencia", gender: "f" }, { term: "Risa", gender: "f" }, { term: "Riqueza", gender: "f" },
    
    // S
    { term: "Sabiduría", gender: "f" }, { term: "Salud", gender: "f" }, { term: "Sueño", gender: "m" }, { term: "Superación", gender: "f" }, { term: "Sinceridad", gender: "f" }, { term: "Serenidad", gender: "f" }, { term: "Solidaridad", gender: "f" }, { term: "Seguridad", gender: "f" }, { term: "Silencio", gender: "m" }, { term: "Sencillez", gender: "f" }, { term: "Simpatía", gender: "f" }, { term: "Sentido", gender: "m" }, { term: "Solución", gender: "f" }, { term: "Suerte", gender: "f" },
    
    // T
    { term: "Tiempo", gender: "m" }, { term: "Trabajo", gender: "m" }, { term: "Tenacidad", gender: "f" }, { term: "Talento", gender: "m" }, { term: "Templanza", gender: "f" }, { term: "Transformación", gender: "f" }, { term: "Tolerancia", gender: "f" }, { term: "Ternura", gender: "f" }, { term: "Trascendencia", gender: "f" }, { term: "Triunfo", gender: "m" },
    
    // U, V
    { term: "Unión", gender: "f" }, { term: "Universo", gender: "m" }, { term: "Valentía", gender: "f" }, { term: "Vida", gender: "f" }, { term: "Verdad", gender: "f" }, { term: "Valor", gender: "m" }, { term: "Visión", gender: "f" }, { term: "Victoria", gender: "f" }, { term: "Voluntad", gender: "f" }, { term: "Virtud", gender: "f" }, { term: "Vigor", gender: "m" }, { term: "Vitalidad", gender: "f" }, { term: "Vocación", gender: "f" }, { term: "Vuelo", gender: "m" },
    
    // Z
    { term: "Zen", gender: "m" }
  ],
  templates: [
    // Definiciones y Afirmaciones
    "{word}: tu motor para hoy.",
    "{word} es lo que necesitas.",
    "Todo comienza con {art_ind} {word_lower}.",
    "Tu superpoder es {art_def} {word_lower}.",
    "Cree en el poder de {art_def} {word_lower}.",
    "Donde hay {word_lower}, hay camino.",
    "La respuesta es: {word}.",
    "Hoy vibras en frecuencia de {word_lower}.",
    "Hazlo con {word_lower} o no lo hagas.",
    "{word}: la clave de tu éxito.",
    
    // Acción Directa
    "Abraza {art_def} {word_lower} hoy.",
    "Respira profundo y siente {art_def} {word_lower}.",
    "Cultiva {art_def} {word_lower} en tu interior.",
    "Protege tu {word_lower} a toda costa.",
    "Comparte {word_lower} con el mundo.",
    "Busca {art_def} {word_lower} en cada detalle.",
    "Llénate de {word_lower}.",
    "Camina con {word_lower} firme.",
    "Actúa con {word_lower}.",
    "Demuestra tu {word_lower}.",
    "Elige {art_def} {word_lower} hoy.",
    "Persigue {art_def} {word_lower}.",
    "Honra {art_def} {word_lower}.",
    
    // Inspiracional
    "Deja que {art_def} {word_lower} te guíe.",
    "Nada es imposible con {word_lower}.",
    "Tu {word_lower} mueve montañas.",
    "Brilla a través de {art_def} {word_lower}.",
    "El mundo necesita tu {word_lower}.",
    "Con {word_lower}, todo fluye.",
    "Eres fuente de {word_lower}.",
    "Siente la magia de {art_def} {word_lower}.",
    "Invoca {art_def} {word_lower}.",
    "{word} infinita para ti.",
    "Despierta con {word_lower}.",
    
    // Reflexivo
    "¿Y si hoy eliges {art_def} {word_lower}?",
    "Imagina una vida llena de {word_lower}.",
    "Date permiso para sentir {word_lower}.",
    "Recuerda: {word}.",
    "Mereces {word_lower} en abundancia.",
    "Agradece por {art_def} {word_lower}.",
    "Enfócate en {art_def} {word_lower}.",
    "Prioriza {art_def} {word_lower}.",
    "Sostén {art_def} {word_lower}.",
    "Nutre tu alma con {word_lower}.",
    
    // Cortos
    "Simplemente: {word}.",
    "Más {word_lower}, por favor.",
    "Pura {word_lower}.",
    "Modo: {word}.",
    "Siempre {word_lower}.",
    "Solo {word_lower}.",
    "Inhala {word_lower}.",
    "Vive {art_def} {word_lower}."
  ],
  colors: [
    { start: "#4cc9f0", end: "#4361ee", accent: "#f72585" }, // Cyber
    { start: "#ff006e", end: "#8338ec", accent: "#fb5607" }, // Sunset
    { start: "#38b000", end: "#007200", accent: "#ccff33" }, // Nature
    { start: "#ffbe0b", end: "#fb5607", accent: "#3a86ff" }, // Sun
    { start: "#00b4d8", end: "#0077b6", accent: "#90e0ef" }, // Ocean
    { start: "#9d4edd", end: "#240046", accent: "#e0aaff" }, // Royal
    { start: "#e07a5f", end: "#3d405b", accent: "#f2cc8f" }, // Earth
    { start: "#ef476f", end: "#118ab2", accent: "#ffd166" }, // Retro
    { start: "#06d6a0", end: "#118ab2", accent: "#073b4c" }, // Teal
    { start: "#8338ec", end: "#3a86ff", accent: "#ff006e" }, // Vivid
    { start: "#ff9f1c", end: "#2ec4b6", accent: "#e71d36" }  // Contrast
  ]
};

const MILESTONES = {
  2: "El comienzo",
  42: "El sentido de la vida",
  69: "Nice.",
  100: "¡Primeras 100!",
  404: "Motivación no encontrada",
  666: "¿No pasó nada?",
  777: "Suerte divina",
  1000: "¿No tienes nada que hacer?",
  1337: "Elite motivada",
  9001: "¡Es de más de 9000!",
  10000: "Dedícate a otra cosa",
  100000: "¡Imposible!",
  1000000: "Sal y toca pasto"
};

// State
let state = {
  mode: "word", // 'word' or 'phrase'
  currentWordData: null, 
  currentPhrase: "",
  favorites: JSON.parse(localStorage.getItem("motivadora_favs") || "[]"),
  soundEnabled: localStorage.getItem("motivadora_sound") !== "false",
  recentHistory: [], // Stores last 15 terms
  count: parseInt(localStorage.getItem("motivadora_count") || "0")
};

// DOM Elements
const els = {
  word: document.getElementById("word-display"),
  phrase: document.getElementById("phrase-display"),
  counter: document.getElementById("counter-display"),
  card: document.querySelector(".main-card"),
  modeBadge: document.querySelector(".mode-indicator"),
  favList: document.getElementById("fav-list"),
  favPanel: document.getElementById("fav-panel"),
  achiList: document.getElementById("achi-list"),
  achiPanel: document.getElementById("achi-panel"),
  toast: document.getElementById("toast"),
  btnFav: document.getElementById("btn-fav"),
  btnMode: document.getElementById("btn-mode"),
  btnSound: document.getElementById("btn-sound"),
  btnAchi: document.getElementById("btn-achi"),
  banner: null 
};

// Create Achievement Banner
function createBanner() {
  if (document.querySelector('.achievement-banner')) return; 
  const div = document.createElement("div");
  div.className = "achievement-banner";
  div.innerHTML = `
    <span class="achi-icon">🏆</span>
    <span class="achi-text">Logro Desbloqueado</span>
  `;
  document.body.appendChild(div);
  els.banner = div;
}
createBanner();

// Audio Context (Simple Synth)
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
function playSound(type) {
  if (!state.soundEnabled) return;
  if (audioCtx.state === "suspended") audioCtx.resume();

  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();

  osc.connect(gain);
  gain.connect(audioCtx.destination);

  if (type === "pop") {
    osc.type = "sine";
    // Pitch variation: base 400Hz +/- 50Hz
    const variance = Math.random() * 100 - 50;
    const baseFreq = 400 + variance;
    
    osc.frequency.setValueAtTime(baseFreq, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(baseFreq * 2, audioCtx.currentTime + 0.1);
    gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.1);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.1);
  } else if (type === "success") {
    osc.type = "triangle";
    osc.frequency.setValueAtTime(500, audioCtx.currentTime);
    osc.frequency.linearRampToValueAtTime(1000, audioCtx.currentTime + 0.2);
    gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
    gain.gain.linearRampToValueAtTime(0.001, audioCtx.currentTime + 0.3);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.3);
  } else if (type === "achi") {
    // Achievement Sound
    osc.type = "square";
    osc.frequency.setValueAtTime(400, audioCtx.currentTime);
    osc.frequency.setValueAtTime(600, audioCtx.currentTime + 0.1);
    osc.frequency.setValueAtTime(1000, audioCtx.currentTime + 0.2);
    gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
    gain.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 0.5);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.5);
  }
}

// Logic
function generate() {
  playSound("pop");
  
  // Increment Count
  state.count++;
  localStorage.setItem("motivadora_count", state.count);
  if(els.counter) els.counter.textContent = state.count;
  checkMilestones();

  // Animation Reset
  els.word.classList.remove("anim-enter");
  els.phrase.classList.remove("anim-enter");
  void els.word.offsetWidth; // Trigger reflow

  // Pick Data with Non-Repetition Logic
  let wordData;
  let attempts = 0;
  
  do {
    wordData = DATA.words[Math.floor(Math.random() * DATA.words.length)];
    attempts++;
  } while (state.recentHistory.includes(wordData.term) && attempts < 20);

  // Update History
  state.recentHistory.push(wordData.term);
  if (state.recentHistory.length > 15) {
    state.recentHistory.shift();
  }

  const colorScheme = DATA.colors[Math.floor(Math.random() * DATA.colors.length)];
  
  state.currentWordData = wordData;
  state.currentPhrase = buildPhrase(wordData);

  // Update DOM
  els.word.textContent = wordData.term;
  els.word.classList.add("anim-enter");

  if (state.mode === "phrase") {
    els.phrase.textContent = state.currentPhrase;
    els.phrase.style.opacity = "1";
    els.phrase.classList.add("anim-enter");
  } else {
    els.phrase.style.opacity = "0.5";
    els.phrase.textContent = "...";
  }

  // Update Theme
  document.documentElement.style.setProperty("--primary", colorScheme.start);
  document.documentElement.style.setProperty("--secondary", colorScheme.end);
  document.documentElement.style.setProperty("--accent", colorScheme.accent);
  
  randomizeOrbs();
  updateFavButton();
}

function checkMilestones() {
  // Check specific numbers
  if (MILESTONES[state.count]) {
    showAchievement(MILESTONES[state.count]);
    triggerSparks();
  } 
  // Check every 100
  else if (state.count % 100 === 0 && state.count > 0) { // Added state.count > 0 to avoid triggering on initial load if count is 0
    showAchievement(`¡Llevas ${state.count}!`);
    triggerSparks();
  }
}

function renderAchievements() {
  if(!els.achiList) return;
  els.achiList.innerHTML = "";
  
  // Sort milestones by number
  const sortedKeys = Object.keys(MILESTONES).map(Number).sort((a,b) => a - b);
  
  sortedKeys.forEach(num => {
    const isUnlocked = state.count >= num;
    const li = document.createElement("li");
    li.className = `achi-item ${isUnlocked ? "unlocked" : "locked"}`;
    
    li.innerHTML = `
      <div class="achi-info">
        <span class="achi-title">${MILESTONES[num]}</span>
        <span class="achi-desc">Alcanza ${num.toLocaleString()} frases</span>
      </div>
      <div class="achi-status">
        ${isUnlocked ? "🏆" : "🔒"}
      </div>
    `;
    els.achiList.appendChild(li);
  });
}

function showAchievement(text) {
  if(!els.banner) return;
  els.banner.querySelector(".achi-text").textContent = text;
  els.banner.classList.add("show");
  playSound("achi");
  setTimeout(() => {
    els.banner.classList.remove("show");
  }, 3000);
}

function triggerSparks() {
  const count = 30; // Number of sparks
  for (let i = 0; i < count; i++) {
    const spark = document.createElement("div");
    spark.className = "spark";
    document.body.appendChild(spark);
    
    // Random position centerish
    const startX = window.innerWidth / 2;
    const startY = window.innerHeight / 2;
    spark.style.left = startX + "px";
    spark.style.top = startY + "px";
    
    // Random direction
    const angle = Math.random() * Math.PI * 2;
    const dist = Math.random() * 200 + 50;
    const tx = Math.cos(angle) * dist + "px";
    const ty = Math.sin(angle) * dist + "px";
    
    spark.style.setProperty("--tx", tx);
    spark.style.setProperty("--ty", ty);
    
    // Cleanup
    setTimeout(() => spark.remove(), 1000);
  }
}

function buildPhrase(wordData) {
  const template = DATA.templates[Math.floor(Math.random() * DATA.templates.length)];
  const term = wordData.term;
  const gender = wordData.gender;
  
  // Replacements
  let phrase = template;
  
  phrase = phrase.replace(/{word}/g, term);
  phrase = phrase.replace(/{word_lower}/g, term.toLowerCase());
  
  // Articles
  // art_def = el/la
  // art_ind = un/una
  phrase = phrase.replace(/{art_def}/g, gender === 'm' ? 'el' : 'la');
  phrase = phrase.replace(/{art_ind}/g, gender === 'm' ? 'un' : 'una');
  
  return phrase;
}

function randomizeOrbs() {
  const orbs = document.querySelectorAll('.orb');
  orbs.forEach(orb => {
    const size = Math.random() * 200 + 150 + 'px'; // 150-350px
    const x = Math.random() * 100 + '%';
    const y = Math.random() * 100 + '%';
    
    orb.style.width = size;
    orb.style.height = size;
    orb.style.left = x;
    orb.style.top = y;
  });
}

function toggleMode() {
  state.mode = state.mode === "word" ? "phrase" : "word";
  els.modeBadge.textContent =
    state.mode === "word" ? "MODO: PALABRA" : "MODO: FRASE";
  els.btnMode.textContent = state.mode === "word" ? "🔤 Frase" : "✨ Palabra";
  
  // Update classes for color
  if (state.mode === "word") {
    els.modeBadge.classList.add("mode-word");
    els.modeBadge.classList.remove("mode-phrase");
  } else {
    els.modeBadge.classList.add("mode-phrase");
    els.modeBadge.classList.remove("mode-word");
  }

  generate();
}

function updateFavButton() {
  const content =
    state.mode === "word" ? state.currentWordData.term : state.currentPhrase;
  const isFav = state.favorites.includes(content);
  els.btnFav.classList.toggle("active", isFav);
}

function toggleFav() {
  const content =
    state.mode === "word" ? state.currentWordData.term : state.currentPhrase;
  if (!content) return;

  const idx = state.favorites.indexOf(content);
  if (idx === -1) {
    state.favorites.unshift(content);
    showToast("Guardado en favoritos");
    playSound("success");
  } else {
    state.favorites.splice(idx, 1);
    showToast("Eliminado de favoritos");
  }

  localStorage.setItem("motivadora_favs", JSON.stringify(state.favorites));
  updateFavButton();
  renderFavs();
}

function renderFavs() {
  els.favList.innerHTML = "";
  state.favorites.forEach((text) => {
    const li = document.createElement("li");
    li.className = "fav-item";
    li.innerHTML = `
      <span class="fav-text">${text}</span>
      <button class="delete-btn" onclick="removeFav('${text}')">✕</button>
    `;
    els.favList.appendChild(li);
  });
}

window.removeFav = (text) => {
  state.favorites = state.favorites.filter((t) => t !== text);
  localStorage.setItem("motivadora_favs", JSON.stringify(state.favorites));
  renderFavs();
  updateFavButton();
};

function share() {
  const text = state.mode === "word" ? state.currentWordData.term : state.currentPhrase;
  if (navigator.share) {
    navigator.share({
      title: "Palabra Motivadora",
      text: text,
      url: window.location.href,
    });
  } else {
    navigator.clipboard.writeText(text);
    showToast("Copiado al portapapeles");
  }
}

function showToast(msg) {
  els.toast.textContent = msg;
  els.toast.classList.add("show");
  setTimeout(() => els.toast.classList.remove("show"), 2000);
}

// Event Listeners
document.getElementById("content-area").addEventListener("click", generate);
els.btnMode.addEventListener("click", (e) => {
  e.stopPropagation();
  toggleMode();
});
els.btnFav.addEventListener("click", (e) => {
  e.stopPropagation();
  toggleFav();
});

function updateSoundIcon() {
  els.btnSound.innerHTML = state.soundEnabled
    ? '<svg viewbox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>'
    : '<svg viewbox="0 0 24 24"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73 4.27 3zM12 4L9.91 6.09 12 8.18V4z"/></svg>';
}

els.btnSound.addEventListener("click", () => {
  state.soundEnabled = !state.soundEnabled;
  localStorage.setItem("motivadora_sound", state.soundEnabled);
  updateSoundIcon();
  if (state.soundEnabled) playSound("pop");
});

// Sidebar
document.getElementById("btn-menu").addEventListener("click", () => {
  els.favPanel.classList.add("open");
});
document.getElementById("close-panel").addEventListener("click", () => {
  els.favPanel.classList.remove("open");
});

// Achievement Panel Events
document.getElementById("btn-achi").addEventListener("click", () => {
  renderAchievements();
  els.achiPanel.classList.add("open");
});
document.getElementById("close-achi-panel").addEventListener("click", () => {
  els.achiPanel.classList.remove("open");
});

document.getElementById("btn-reset").addEventListener("click", () => {
  if (confirm("¿Estás seguro de que quieres reiniciar TODO tu progreso? No hay vuelta atrás.")) {
    localStorage.clear();
    location.reload();
  }
});

// Init
// Set initial mode class
els.modeBadge.classList.add(state.mode === "word" ? "mode-word" : "mode-phrase");

generate();
renderFavs();
updateSoundIcon();
