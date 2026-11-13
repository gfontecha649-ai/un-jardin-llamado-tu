document.addEventListener('DOMContentLoaded', () => {
    const openSeal = document.getElementById('openSeal');
    const closeLetter = document.getElementById('closeLetter');
    const envelopeWrapper = document.getElementById('envelopeWrapper');
    const letterContainer = document.getElementById('letterContainer');
    const traitButtons = document.querySelectorAll('.trait-btn');
    const traitDisplay = document.getElementById('traitDisplay');
    const ambientCanvas = document.getElementById('ambient-canvas');

    const traitsMessages = {
        biologa: "Tienes el don de ver la magia donde otros solo ven hojas o tierra. Entiendes los ciclos de la vida con una sensibilidad que ilumina todo lo que tocas.",
        fortaleza: "Como las orquídeas que crecen aferradas a lo alto y florecen contra todo pronóstico, tu fuerza ante las dificultades es silenciosa, digna y profundamente admirable.",
        animales: "Tu empatía por cada animal y ser vivo habla de un corazón noble, incapaz de ser indiferente ante la vulnerabilidad del mundo.",
        familia: "Eres el refugio y el pilar de los tuyos. Esa entrega incondicional hacia tu familia es una de las cosas más hermosas que definen quién eres."
    };

    // Abrir el sobre
    if (openSeal) {
        openSeal.addEventListener('click', () => {
            envelopeWrapper.classList.add('hidden');
            letterContainer.classList.remove('hidden');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Cerrar y volver al sobre
    if (closeLetter) {
        closeLetter.addEventListener('click', () => {
            letterContainer.classList.add('hidden');
            envelopeWrapper.classList.remove('hidden');
        });
    }

    // Cambiar el mensaje al tocar cada botón de cualidad
    traitButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            traitButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const key = btn.getAttribute('data-trait');
            traitDisplay.style.opacity = 0;
            setTimeout(() => {
                traitDisplay.innerHTML = `<p>${traitsMessages[key]}</p>`;
                traitDisplay.style.opacity = 1;
            }, 180);
        });
    });

    // Luciérnagas en el fondo
    function createFireflies() {
        const count = 25;
        for (let i = 0; i < count; i++) {
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
    }

    createFireflies();
});
