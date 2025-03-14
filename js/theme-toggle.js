function toggleTheme() {
    const body = document.body;
    const html = document.documentElement;
    const isDark = body.classList.toggle('dark-mode');

    // Aplica a classe no HTML também
    html.classList.toggle('dark-mode', isDark);

    // Salva a preferência
    localStorage.setItem('theme', isDark ? 'dark' : 'default');

    // Atualiza o ícone
    const themeIcon = document.querySelector('.theme-icon');
    if (themeIcon) {
        themeIcon.src = isDark ? 'imagens/icones/a.svg' : 'imagens/icones/a.svg';
        themeIcon.alt = isDark ? 'Voltar para tema padrão' : 'Mudar para modo escuro';
    }
}

// Carrega o tema salvo
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark-mode');
        document.body.classList.add('dark-mode');
        const themeIcon = document.querySelector('.theme-icon');
        if (themeIcon) {
            themeIcon.src = 'imagens/icones/a.svg';
            themeIcon.alt = 'Voltar para tema padrão';
        }
    }
});