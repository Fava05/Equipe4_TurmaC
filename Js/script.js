imgMode.addEventListener('click', () => {
    const isDarkMode = imgMode.src.includes('DarkModeOFF.png');
    document.body.style.backgroundColor = isDarkMode ? '#5e5555' : '#FFFAFA';
    document.body.style.color = isDarkMode ? '#ffffff' : '#000000';

    const elementosResumo = document.querySelectorAll('.resumo');
    elementosResumo.forEach(elemento => {
        elemento.style.color = isDarkMode ? '#0845d4' : '#4dd2ff'; 
    });

});

