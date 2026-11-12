document.addEventListener('DOMContentLoaded', () => {
    const openBtn = document.getElementById('openBtn');
    const closeBtn = document.getElementById('closeBtn');
    const cardCover = document.getElementById('cardCover');
    const cardInside = document.getElementById('cardInside');
    const petalsContainer = document.getElementById('petals-container');

    // Abrir la invitación
    openBtn.addEventListener('click', () => {
        cardCover.classList.add('hidden');
        cardInside.classList.remove('hidden');
    });

    // Volver a la portada
    closeBtn.addEventListener('click', () => {
        cardInside.classList.add('hidden');
        cardCover.classList.remove('hidden');
    });

    // Crear pétalos flotantes sutiles en el fondo
    function createPetals() {
        const petalCount = 15;
        for (let i = 0; i < petalCount; i++) {
            const petal = document.createElement('div');
            petal.classList.add('petal');
            
            const size = Math.random() * 12 + 8 + 'px';
            petal.style.width = size;
            petal.style.height = size;
            petal.style.left = Math.random() * 100 + 'vw';
            petal.style.animationDuration = Math.random() * 6 + 6 + 's';
            petal.style.animationDelay = Math.random() * 5 + 's';
            
            petalsContainer.appendChild(petal);
        }
    }

    createPetals();
});
