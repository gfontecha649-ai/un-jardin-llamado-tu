
document.addEventListener("DOMContentLoaded", function () {

    const enterButton = document.getElementById("enterGarden");
    const messageSection = document.getElementById("mensaje");
    const hero = document.getElementById("inicio");

    if (!enterButton || !messageSection || !hero) {
        console.error("No se encontraron los elementos necesarios.");
        return;
    }

    let gardenOpened = false;

    // Crear las mariposas del jardín
    function createButterflies() {

        const positions = [8, 22, 38, 55, 72, 88];

        positions.forEach((position, index) => {

            const butterfly = document.createElement("span");

            butterfly.className = "butterfly";
            butterfly.textContent = "🦋";
            butterfly.setAttribute("aria-hidden", "true");

            butterfly.style.setProperty(
                "--start-left",
                position + "%"
            );

            butterfly.style.setProperty(
                "--butterfly-size",
                (20 + Math.random() * 16) + "px"
            );

            butterfly.style.setProperty(
                "--flight-duration",
                (12 + Math.random() * 8) + "s"
            );

            butterfly.style.setProperty(
                "--flight-delay",
                (index * 1.5) + "s"
            );

            hero.appendChild(butterfly);

        });
    }

    // Acción del botón principal
    enterButton.addEventListener("click", function () {

        if (!gardenOpened) {

            messageSection.innerHTML = `
                <div class="message-card">

                    <p class="eyebrow">
                        UN JARDÍN HECHO CON CARIÑO
                    </p>

                    <h2>
                        Hay personas que dejan huellas bonitas...
                    </h2>

                    <p>
                        Sandra, hoy quiero regalarte un pequeño
                        espacio creado pensando en ti.
                    </p>

                    <p>
                        Un lugar donde las flores, los recuerdos
                        y las palabras tienen algo que contarte.
                    </p>

                    <p>
                        No necesitas recorrerlo con prisa.
                        Cada rincón guarda un detalle preparado
                        para celebrar la persona que eres.
                    </p>

                    <div class="flower-decoration">✿</div>

                    <p class="closing-message">
                        Feliz cumpleaños, Sandra.
                        Que la vida siempre encuentre motivos
                        para hacerte florecer.
                    </p>

                </div>
            `;

            createButterflies();

            enterButton.textContent =
                "El jardín te está esperando 🦋";

            gardenOpened = true;

        }

        messageSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});

