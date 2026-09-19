/* ============================================================
   CONFIG — edita aquí todo el contenido de la página.
   Cada campo trae un ejemplo; reemplázalo por lo que quieras.
   ============================================================ */
const CONFIG = {

  nombre: "Anita",
  fraseHero: "Hoy el mundo tiene un motivo más para sonreír, el sabe que tienes cualidades tan propias, que por eso no va a permitir que lo más bonito para ti, se desvanezca.",

  razones: [
    "Por la forma en que te ríes de tus propios chistes antes de terminarlos, y la manera en que se enchinan los ojitos.",
    "Por seguir intentando incluso los días en los que todo pesa más, pues, sabes que aún en medio de todo, no puedes dejar de sonreír.",
    "Por tu manera de cuidar a la gente sin que se note el esfuerzo, sabes lo importante que son para ti, y de lejos, los ves.",
    "Por esa terquedad tuya que a veces desespera y casi siempre tiene razón.",
    "Por seguir siendo tú, incluso cuando el mundo te ha pedido cambiar, que es lo que más me encanta."
  ],

  carta: [
    "No sé bien cómo empezar esto sin que suene a lo mismo de siempre, así que voy a intentarlo simple.",
    "Hoy cumples años y quiero que sepas que no es una fecha cualquiera para mí. Es un día para decirte, en voz alta, lo que normalmente pienso en silencio.",
    "Gracias por estar. Por las conversaciones largas y las cortas, por las veces que escuchaste sin apurarte, por las veces que aguantaste sin decirlo.",
    "Simplemente, el mejor obsequio que tienes es poder ser con quienes tu consideras y con quienes te hacen ser tu, sin limitantes de nada, sin maquillajes, sin estampas, sin curitas... Eso es tan bonito y tan honesto de ti que atesoro.",
    "Espero este año te traiga menos de lo que cansa y más de lo que te hace sentir en casa, que pese <strong><em>TU</em></strong> alegría y tu gozo.",
    "Feliz cumpleaños. De verdad."
  ],

  recuerdos: [
    { año: "2026", texto: "La primera vez que hablamos en serio, sin saber que se volvería costumbre." },
    { año: "2026", texto: "Esos momentos que se dieron de una manera tan única que repetiría más de una vez."},
    { año: "2026", texto: "El primer <strong><em>TE QUIERO MUCHO</em></strong>" },
    { año: "2026", texto: "Esas miradas que solo tu y yo entendemos." },
    { año: "2026", texto: "Esa noche que nos quedamos hablando hasta tarde de algo que ya ni recuerdo, pero que se sintió importante." },
    { año: "2026", texto: "Esas jugaditas en parchis y en la batalla naval, en unas risas y cagadas, en otras desmotivación." },
    { año: "2026", texto: "- - - -" },
    { año: "2026", texto: "El día que me di cuenta de que contar contigo ya no era una opción, era un hecho." }
  ],

  cancion: {
    titulo: "Nombre de la canción",
    artista: "Artista",
    nota: "Esta la escuchamos ese día y desde entonces es tuya."
  },

  deseos: [
    "Que te rías más de lo que te preocupas.",
    "Que lo que empieces este año lo termines.",
    "Que la gente que te quiere te lo diga más seguido.",
    "Que descanses sin culpa.",
    "Que sepas, aunque no te lo diga todos los días, cuánto me importas."
  ],

  mensajeFinal: "Deseo cumplido: que sigas siendo exactamente así.",

  cierre: {
    mensaje: "Esto es solo una parte de lo que quería decirte. Lo demás te lo digo en persona, viéndola a los ojos, y deseando el contenerme el deseo de besarle esos labios bien ricos.",
    firma: "Con cariño, Edward."
  }
};

/* ============================================================
   RENDER — no necesitas tocar esto para editar el contenido.
   ============================================================ */

document.getElementById('hero-nombre').textContent = CONFIG.nombre;
document.getElementById('hero-frase').textContent = CONFIG.fraseHero;

const listaRazones = document.getElementById('lista-razones');
CONFIG.razones.forEach(r => {
  const li = document.createElement('li');
  li.textContent = r;
  listaRazones.appendChild(li);
});

const carta = document.getElementById('carta');
CONFIG.carta.forEach(p => {
  const el = document.createElement('p');
  el.innerHTML = p;
  carta.appendChild(el);
});

const timeline = document.getElementById('timeline');
CONFIG.recuerdos.forEach(r => {
  const item = document.createElement('div');
  item.className = 'timeline-item';
  item.innerHTML = `<span class="timeline-year">${r.año}</span><span>${r.texto}</span>`;
  timeline.appendChild(item);
});

document.getElementById('cancion-titulo').textContent = CONFIG.cancion.titulo;
document.getElementById('cancion-artista').textContent = CONFIG.cancion.artista;
document.getElementById('cancion-nota').textContent = CONFIG.cancion.nota;

document.getElementById('cierre-mensaje').textContent = CONFIG.cierre.mensaje;
document.getElementById('cierre-firma').textContent = CONFIG.cierre.firma;

// --- Pétalos cayendo ---
const petals = document.getElementById('petals');
for(let i=0;i<14;i++){
  const p = document.createElement('div');
  p.className = 'petal';
  p.style.left = Math.random()*100 + '%';
  p.style.animationDuration = (9 + Math.random()*8) + 's';
  p.style.animationDelay = (Math.random()*10) + 's';
  p.style.opacity = 0.35 + Math.random()*0.3;
  petals.appendChild(p);
}

// --- Velitas interactivas ---
const velasWrap = document.getElementById('velas');
const deseosLista = document.getElementById('deseos-lista');
const finalMsg = document.getElementById('final-msg');
finalMsg.textContent = CONFIG.mensajeFinal;
let apagadas = 0;

CONFIG.deseos.forEach((deseo, i) => {
  const btn = document.createElement('button');
  btn.className = 'vela';
  btn.setAttribute('aria-label', 'Apagar velita ' + (i+1));
  btn.innerHTML = `
    <svg viewBox="0 0 20 40" xmlns="http://www.w3.org/2000/svg">
      <ellipse class="flama" cx="10" cy="6" rx="4" ry="7" fill="var(--gold)"/>
      <ellipse class="humo" cx="10" cy="4" rx="3" ry="5" fill="var(--text-soft)" opacity="0"/>
      <rect x="7" y="12" width="6" height="24" rx="1.5" fill="var(--rose-soft)"/>
    </svg>`;

  const li = document.createElement('li');
  li.textContent = deseo;
  deseosLista.appendChild(li);

  btn.addEventListener('click', () => {
    if(btn.classList.contains('apagada')) return;
    btn.classList.add('apagada');
    li.classList.add('mostrado');
    apagadas++;
    if(apagadas === CONFIG.deseos.length){
      setTimeout(() => finalMsg.classList.add('visible'), 300);
    }
  });

  velasWrap.appendChild(btn);
});

// --- Navegación por módulos (tabs) ---
const navButtons = document.querySelectorAll('#nav button');
const panels = document.querySelectorAll('.panel');

const emptyState = document.getElementById('empty-state');

navButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.getAttribute('data-panel');

    emptyState.style.display = 'none';

    navButtons.forEach(b => b.setAttribute('aria-selected', b === btn ? 'true' : 'false'));

    panels.forEach(panel => {
      panel.classList.toggle('active', panel.getAttribute('data-panel') === target);
    });

    btn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  });
});
