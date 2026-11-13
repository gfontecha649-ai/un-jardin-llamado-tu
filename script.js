const traitsMessages = {
    biologa: "Tienes el don de ver la magia donde otros solo ven hojas o tierra. Entiendes los ciclos de la vida con una sensibilidad que ilumina todo lo que tocas.",
    fortaleza: "Como las orquídeas que crecen aferradas a lo alto y florecen contra todo pronóstico, tu fuerza ante las dificultades es silenciosa, digna y profundamente admirable.",
    animales: "Tu empatía por cada animal y ser vivo habla de un corazón noble, incapaz de ser indiferente ante la vulnerabilidad del mundo.",
    familia: "Eres el refugio y el pilar de los tuyos. Esa entrega incondicional hacia tu familia es una de las cosas más hermosas que definen quién eres."
};

function abrirCarta() {
    document.getElementById('envelopeWrapper').classList.add('hidden');
    document.getElementById('letterContainer').classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function cerrarCarta() {
    document.getElementById('letterContainer').classList.add('hidden');
    document.getElementById('envelopeWrapper').classList.remove('hidden');
}

function mostrarCualidad(key, boton) {
    const botones = document.querySelectorAll('.trait-btn');
    botones.forEach(b => b.classList.remove('active'));
    boton.classList.add('active');

    const display = document.getElementById('traitDisplay');
    display.style.opacity = 0;
    setTimeout(() => {
        display.innerHTML = `<p>${traitsMessages[key]}</p>`;
        display.style.opacity = 1;
    }, 180);
}

// Crear luciérnagas doradas en el fondo
document.addEventListener('DOMContentLoaded', () => {
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
