document.addEventListener('DOMContentLoaded', () => {
    const forbiddenThings = [
        "Usar “123456” de contraseña.",
        "Compartir tu contraseña por WhatsApp.",
        "Dar clic a links raros o sospechosos.",
        "Conectarte a cualquier Wi-Fi público sin VPN.",
        "Subir tu INE o datos personales a redes."
    ];

    const cardContainer = document.getElementById('card-container');
    const resetButton = document.getElementById('reset-button');
    let revealedCards = 0;

    function createCard(content) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.textContent = content;
        card.addEventListener('click', () => {
            if (!card.classList.contains('hidden')) {
                card.classList.add('hidden');
                revealedCards++;
                checkAllCardsRevealed();
            }
        });
        return card;
    }

    function renderCards() {
        cardContainer.innerHTML = ''; // Limpiar el contenedor antes de añadir
        forbiddenThings.forEach(thing => {
            const card = createCard(thing);
            cardContainer.appendChild(card);
        });
        revealedCards = 0; // Reiniciar el contador de tarjetas reveladas
        resetButton.style.display = 'none'; // Ocultar el botón de reinicio
    }

    function checkAllCardsRevealed() {
        if (revealedCards === forbiddenThings.length) {
            // Animación final o mensaje
            setTimeout(() => {
                cardContainer.innerHTML = `
                    <div style="font-size: 2em; color: #555; text-align: center;">
                        ¡Muy bien! Has aprendido qué NO hacer.
                    </div>
                `;
                resetButton.style.display = 'block'; // Mostrar el botón de reinicio
            }, 700); // Pequeño retraso para que la última tarjeta desaparezca
        }
    }

    // Inicializar las tarjetas
    renderCards();

    // Evento para el botón de reinicio
    resetButton.addEventListener('click', renderCards);
});
