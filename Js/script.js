document.addEventListener("DOMContentLoaded", () => {
    const nomeSala = document.getElementById("nomeSala");
    const criarSalaBtn = document.getElementById("criarSala");

    // Limpa o texto ao clicar na caixa de texto
    nomeSala.addEventListener("focus", () => {
        if (nomeSala.textContent === "Nome da sala") {
            nomeSala.textContent = "";
        }
    });

    // Evento de clique no botão "Criar Sala"
    criarSalaBtn.addEventListener("click", () => {
        const novoNomeSala = nomeSala.textContent.trim();

        if (novoNomeSala) {
            // Recuperar ou criar a lista de salas
            let salas = [];
            const salasExistentes = sessionStorage.getItem("salas");

            if (salasExistentes) {
                salas = JSON.parse(salasExistentes);
            }

            // Adicionar a nova sala
            salas.push(novoNomeSala);

            // Salvar a lista atualizada no sessionStorage
            sessionStorage.setItem("salas", JSON.stringify(salas));

            // Redirecionar para a página "pesquisar_materia_privado.html"
            window.location.href = "pesquisar_materia_privado.html";
        } else {
            alert("Digite um nome válido para a sala!");
        }
    });
});
