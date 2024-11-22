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
    
    const nomeSala = document.getElementById("nomeSala");
    const criarSala = document.getElementById("criarSala");
    
    criarSala.addEventListener("click", function () {
        const nomeDigitado = nomeSala.textContent.trim();
    
        if (nomeDigitado) {
            // Salva o nome da sala no LocalStorage
            let salas = JSON.parse(localStorage.getItem("salas")) || [];
            salas.push(nomeDigitado);
            localStorage.setItem("salas", JSON.stringify(salas));
    
            // Reseta o campo de entrada
            nomeSala.textContent = "Nome da sala";
    
            // Redireciona de volta ao index.html (opcional)
            window.location.href = "index.html";
        } else {
            alert("Por favor, insira um nome para a sala.");
        }
    });

    const salaContainer = document.getElementById("salaContainer");

    // Recupera as salas do LocalStorage
    let salas = JSON.parse(localStorage.getItem("salas")) || [];

    // Adiciona as salas ao container
    salas.forEach(nomeSala => {
        const novaSala = document.createElement("p");
        const novoLink = document.createElement("a");

        novoLink.classList.add("baloes");
        novoLink.href = `${nomeSala.toLowerCase().replace(/\s+/g, "_")}.html`;
        novoLink.textContent = nomeSala;

        novaSala.appendChild(novoLink);
        salaContainer.appendChild(novaSala);
    });

    

});
