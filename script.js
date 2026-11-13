const traitsMessages = {
    biologa: "Tienes el don de ver la magia donde otros solo ven hojas o tierra. Entiendes los ciclos de la vida con una sensibilidad que ilumina todo lo que tocas.",
    biologia: "Tienes el don de ver la magia donde otros solo ven hojas o tierra. Entiendes los ciclos de la vida con una sensibilidad que ilumina todo lo que tocas.",
    fortaleza: "Como las orquídeas que crecen aferradas a lo alto y florecen contra todo pronóstico, tu fuerza ante las dificultades es silenciosa, digna y profundamente admirable.",
    raiz: "Como las orquídeas que crecen aferradas a lo alto y florecen contra todo pronóstico, tu fuerza ante las dificultades es silenciosa, digna y profundamente admirable.",
    animales: "Tu empatía por cada animal y ser vivo habla de un corazón noble, incapaz de ser indiferente ante la vulnerabilidad del mundo.",
    ternura: "Tu empatía por cada animal y ser vivo habla de un corazón noble, incapaz de ser indiferente ante la vulnerabilidad del mundo.",
    familia: "Eres el refugio y el pilar de los tuyos. Esa entrega incondicional hacia tu familia es una de las cosas más hermosas que definen quién eres.",
    entrega: "Eres el refugio y el pilar de los tuyos. Esa entrega incondicional hacia tu familia es una de las cosas más hermosas que definen quién eres."
};

function abrirCarta() {
    const sobre = document.getElementById('envelopeWrapper');
    const carta = document.getElementById('letterContainer');
    if (sobre) sobre.classList.add('hidden');
    if (carta) carta.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function cerrarCarta() {
    const sobre = document.getElementById('envelopeWrapper');
    const carta = document.getElementById('letterContainer');
    if (carta) carta.classList.add('hidden');
    if (sobre) sobre.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function mostrarCualidad(key, boton) {
    const botones = document.querySelectorAll('.trait-btn');
    botones.forEach(b => b.classList.remove('active'));
    if (boton) boton.classList.add('active');

    const display = document.getElementById('traitDisplay');
    if (!display) return;

    let texto = traitsMessages[key];
    if (!texto && boton) {
        const label = boton.textContent.toLowerCase();
        if (label.includes('biól') || label.includes('biol')) texto = traitsMessages.biologa;
        else if (label.includes('raíz') || label.includes('raiz') || label.includes('fortaleza')) texto = traitsMessages.fortaleza;
        else if (label.includes('ternura') || label.includes('animal') || label.includes('vida')) texto = traitsMessages.animales;
        else if (label.includes('entrega') || label.includes('familia') || label.includes('tuyos')) texto = traitsMessages.familia;
    }

    display.style.opacity = 0;
    setTimeout(() => {
        display.innerHTML = `<p>${texto || traitsMessages.biologa}</p>`;
        display.style.opacity = 1;
    }, 180);
}

document.addEventListener('DOMContentLoaded', () => {
    const btnCerrar = document.getElementById('closeLetter');
    if (btnCerrar) {
        btnCerrar.addEventListener('click', cerrarCarta);
    }

    const ambientCanvas = document.getElementById('ambient-canvas');
    if (!ambientCanvas) return;

    for (let i = 0; i < 25; i++) {
        const firefly = document.createElement('div');
        firefly.classList.add('firefly');
        const size = Math.random() * 8 + 4 + 'px';
        firefly.style.width = size;
        firefly.style.height = size;
        firefly.style.left = Math.random() * 100 + 'vw';
        firefly.style.top = Math.random() * 100 + 20 + 'vh';
        firefly.style.animationDuration = Math.random() * 10 + 8 + 's';
        firefly.style.animationDelay = Math.random() * 6 + 's';
        ambientCanvas.appendChild(firefly);
    }
});
