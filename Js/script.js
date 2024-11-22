document.addEventListener("DOMContentLoaded", () => {
    const nomeSala = document.getElementById("nomeSala");
    const criarSalaBtn = document.getElementById("criarSala");

    // Limpa o texto ao clicar na caixa de texto
    nomeSala.addEventListener("focus", () => {
        if (nomeSala.textContent === "Nome da sala") {
            nomeSala.textContent = "";
        }
    });

    // Adiciona evento ao botão "Criar sala"
    criarSalaBtn.addEventListener("click", () => {
        const novoNomeSala = nomeSala.textContent.trim();

        if (novoNomeSala) {
            // Recupera a lista de salas existente ou cria uma nova lista
            let salas = JSON.parse(localStorage.getItem("salas")) || [];

            // Adiciona o novo nome à lista
            salas.push(novoNomeSala);

            // Salva a lista atualizada no localStorage
            localStorage.setItem("salas", JSON.stringify(salas));

            console.log("Sala criada e salva no localStorage:", salas);

            // Redireciona para a página "pesquisar_materia_privado.html"
            window.location.href = "pesquisar_materia_privado.html";
        } else {
            alert("Digite um nome válido para a sala!");
        }
    });
});
