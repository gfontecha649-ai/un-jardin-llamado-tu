
document.addEventListener("DOMContentLoaded", function () {

    // Identificamos el botón y la primera sección del jardín
    const enterButton = document.getElementById("enterGarden");
    const messageSection = document.getElementById("mensaje");

    // Verificamos que los elementos existan
    if (!enterButton || !messageSection) {
        console.error("No se encontró el botón o la sección del mensaje.");
        return;
    }

    // Acción al pulsar el botón de bienvenida
    enterButton.addEventListener("click", function () {

        // Creamos el primer mensaje para Sandra
        messageSection.innerHTML = `
            <div class="message-card">
                <p class="eyebrow">UN JARDÍN HECHO CON CARIÑO</p>

                <h2>Hay personas que dejan huellas bonitas...</h2>

                <p>
                    Sandra, hoy quiero regalarte un pequeño espacio
                    creado pensando en ti. Un lugar donde las flores,
                    los recuerdos y las palabras tienen algo que contarte.
                </p>

                <p>
                    No necesitas recorrerlo con prisa.
                    Cada rincón guarda un detalle preparado especialmente
                    para celebrar la persona que eres.
                </p>

                <div class="flower-decoration">✿</div>

                <p class="closing-message">
                    Feliz cumpleaños, Sandra. Que la vida siempre
                    encuentre motivos para hacerte florecer.
                </p>
            </div>
        `;

        // Cambiamos el texto del botón
        enterButton.textContent = "El jardín te está esperando 🦋";

        // Evitamos que se repita la acción
        enterButton.disabled = true;

        // Llevamos suavemente a Sandra hasta el mensaje
        messageSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});
