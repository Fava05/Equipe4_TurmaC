imgMode.addEventListener('click', () => {
    const isDarkMode = imgMode.src.includes('DarkModeOFF.png');
    document.body.style.backgroundColor = isDarkMode ? '#5e5555' : '#FFFAFA';
    document.body.style.color = isDarkMode ? '#ffffff' : '#000000';
});

//#0845d4 azul escuro

imgMode.addEventListener('click', function () {
    if (imgMode.src.includes('dark-mode-off.png')) {
        document.body.style.backgroundColor = '#2B2B2B';
        document.body.style.color = '#ffffff';
        document.querySelectorAll('.card').forEach(card =>{
            card.style.backgroundColor = '#334756';
        });
    } else {
        document.body.style.backgroundColor = '#FFFAFA';
        document.body.style.color = '#000000';
        document.querySelectorAll('.card').forEach(card =>{
            card.style.backgroundColor = '#FFFAFA';
        });
    }
});