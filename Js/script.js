

// Seleciona todos os elementos com a classe 'resumo'
const elementosResumo = document.querySelectorAll('.resumo');

// Muda a cor das palavras da classe 'resumo' para azul escuro ou azul claro
elementosResumo.forEach(elemento => {
    elemento.style.color = isDarkMode ? '#0845d4' : '#4dd2ff'; // Azul escuro no modo escuro, azul claro no modo claro
});

const nomeSala = document.getElementById("nomeSala");
const criarSala = document.getElementById("criarSala");
const salaContainer = document.getElementById("salaContainer");

criarSala.addEventListener("click", function () {
    const nomeDigitado = nomeSala.textContent.trim();

    if (nomeDigitado) {
        // Cria um novo elemento
        const novaSala = document.createElement("p");
        const novoLink = document.createElement("a");

        // Define os atributos e o conteúdo
        novoLink.classList.add("baloes");
        novoLink.href = `${nomeDigitado.toLowerCase().replace(/\s+/g, "_")}.html`;
        novoLink.textContent = nomeDigitado;

        // Adiciona o link ao parágrafo
        novaSala.appendChild(novoLink);

        // Adiciona o novo parágrafo ao container
        salaContainer.appendChild(novaSala);

        // Reseta o campo de entrada
        nomeSala.textContent = "Nome da sala";
    } else {
        alert("Por favor, insira um nome para a sala.");
    }
});


