

document.addEventListener("DOMContentLoaded", () => {

    const enterButton = document.getElementById("enterGarden");
    const messageSection = document.getElementById("mensaje");
    const hero = document.getElementById("inicio");

    // Crear las mariposas al abrir la página
    function createButterflies() {

        if (document.querySelector(".butterfly")) return;

        const butterflies = [
            { left: "12%", top: "25%", size: "0.8", duration: "19s", delay: "0s" },
            { left: "28%", top: "55%", size: "1", duration: "23s", delay: "2s" },
            { left: "48%", top: "20%", size: "0.7", duration: "17s", delay: "1s" },
            { left: "68%", top: "45%", size: "1.1", duration: "21s", delay: "3s" },
            { left: "84%", top: "22%", size: "0.9", duration: "25s", delay: "1.5s" },
            { left: "55%", top: "70%", size: "0.75", duration: "20s", delay: "4s" }
        ];

        butterflies.forEach((item) => {

            const butterfly = document.createElement("div");

            butterfly.className = "butterfly";

            butterfly.style.left = item.left;
            butterfly.style.top = item.top;
            butterfly.style.setProperty("--duration", item.duration);
            butterfly.style.setProperty("--delay", item.delay);
            butterfly.style.scale = item.size;

            butterfly.innerHTML = `
                <span class="wing wing-left"></span>
                <span class="wing wing-right"></span>
                <span class="body"></span>
            `;

            hero.appendChild(butterfly);
        });
    }

    // Las mariposas aparecen inmediatamente
    createButterflies();

    // Acción del botón de bienvenida
    if (enterButton && messageSection) {

        enterButton.addEventListener("click", () => {

            if (!messageSection.dataset.opened) {

                messageSection.innerHTML = `
                    <div class="message-card">
                        <p class="eyebrow">UN JARDÍN LLAMADO TÚ</p>

                        <h2>Hay personas que hacen florecer la vida.</h2>

                        <p>
                            Sandra, hoy quiero regalarte un pequeño
                            universo de flores, recuerdos y palabras.
                        </p>

                        <p>
                            Este jardín fue pensado para celebrar
                            tu sensibilidad, tu pasión por la vida
                            y esa manera tan tuya de dejar huellas.
                        </p>

                        <div class="flower-decoration">✿</div>

                        <p class="closing-message">
                            Feliz cumpleaños. Que nunca te falten
                            motivos para florecer.
                        </p>
                    </div>
                `;

                messageSection.dataset.opened = "true";

                enterButton.textContent = "Volver a descubrir el jardín 🦋";
            }

            messageSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    }

});
