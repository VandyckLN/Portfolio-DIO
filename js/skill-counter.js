function animateCounter(element, start, end, duration) {
    let startTimestamp = null;

    function step(timestamp) {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const current = Math.floor(progress * (end - start) + start);
        element.textContent = `${current}%`;

        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    }

    window.requestAnimationFrame(step);
}

// Função para iniciar todos os contadores
function initializeCounters() {
    const percentageElements = document.querySelectorAll('.percentage');

    percentageElements.forEach(element => {
        const endValue = parseInt(element.textContent);
        animateCounter(element, 0, endValue, 2000);
    });
}

// Inicializa os contadores quando a página carregar
document.addEventListener('DOMContentLoaded', initializeCounters);