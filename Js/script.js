imgMode.addEventListener('click', () => {
    // Verifica se está no modo escuro
    const isDarkMode = imgMode.src.includes('DarkModeON.png');

    // Altera a cor de fundo
    document.body.style.backgroundColor = isDarkMode ? '#5e5555' : '#FFFAFA';

    // Altera a cor de todas as palavras em preto para branco
    document.body.style.color = isDarkMode ? '#ffffff' : '#000000';

    // Seleciona todos os elementos com a classe 'resumo'
    const elementosResumo = document.querySelectorAll('.resumo');

    // Muda a cor das palavras da classe 'resumo' para azul escuro ou azul claro
    elementosResumo.forEach(elemento => {
        elemento.style.color = isDarkMode ? '#0845d4' : '#4dd2ff'; // Azul escuro no modo escuro, azul claro no modo claro
    });

});
