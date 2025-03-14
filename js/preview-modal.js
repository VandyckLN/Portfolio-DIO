let currentZoom = 1;
const zoomStep = 0.2;
const maxZoom = 4;
const minZoom = 0.5;
let isDragging = false;
let startX, startY, translateX = 0, translateY = 0;

function openPreview(imageSrc) {
    const modal = document.getElementById('preview-modal');
    const modalImg = document.getElementById('preview-image');

    modal.style.display = "block";
    modalImg.src = imageSrc;
    currentZoom = 1;
    translateX = 0;
    translateY = 0;

    setTimeout(() => {
        modalImg.classList.add('show');
    }, 10);
}

function updateTransform() {
    const modalImg = document.getElementById('preview-image');
    modalImg.style.transform = `translate(calc(-50% + ${translateX}px), calc(-50% + ${translateY}px)) scale(${currentZoom})`;
}

function zoomIn() {
    if (currentZoom < maxZoom) {
        currentZoom = Math.min(currentZoom + zoomStep, maxZoom);
        updateTransform();
    }
}

function zoomOut() {
    if (currentZoom > minZoom) {
        currentZoom = Math.max(currentZoom - zoomStep, minZoom);
        updateTransform();
    }
}

function resetZoom() {
    currentZoom = 1;
    translateX = 0;
    translateY = 0;
    updateTransform();
}

// Eventos de mouse para arrastar a imagem
document.getElementById('preview-image').addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX - translateX;
    startY = e.clientY - translateY;
    e.preventDefault();
});

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    translateX = e.clientX - startX;
    translateY = e.clientY - startY;
    updateTransform();
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});

// Zoom com roda do mouse
document.getElementById('preview-image').addEventListener('wheel', (e) => {
    e.preventDefault();
    const delta = e.deltaY * -0.002;
    const newZoom = Math.max(minZoom, Math.min(maxZoom, currentZoom + delta));

    if (newZoom !== currentZoom) {
        const rect = e.target.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        currentZoom = newZoom;
        updateTransform();
    }
});

// Fechar modal
document.querySelector('.close-modal').addEventListener('click', () => {
    const modal = document.getElementById('preview-modal');
    const modalImg = document.getElementById('preview-image');

    modalImg.classList.remove('show');
    setTimeout(() => {
        modal.style.display = "none";
    }, 300);
});

// Fechar com ESC
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.querySelector('.close-modal').click();
    }
});