document.addEventListener("DOMContentLoaded", () => {
    const nomeSala = document.getElementById("nomeSala");
    const criarSalaBtn = document.getElementById("criarSala");

    // Limpa o texto ao clicar na caixa de texto
    nomeSala.addEventListener("focus", () => {
        if (nomeSala.textContent === "Nome da sala") {
            nomeSala.textContent = "";
        }
        console.log('oi')
    });



    // Adiciona evento ao botão "Criar sala"
    criarSalaBtn.addEventListener("click", () => {
        const novoNomeSala = nomeSala.textContent.trim();

        if (novoNomeSala) {
            // Salvar o nome da sala no LocalStorage para transferir entre páginas
            const salas = JSON.parse(localStorage.getItem("salas")) || [];
            salas.push(novoNomeSala);
            localStorage.setItem("salas", JSON.stringify(salas));

            // Redirecionar para a página "pesquisar_materia_privado.html"
            window.location.href = "pesquisar_materia_privado.html";
        } else {
            alert("Digite um nome válido para a sala!");
        }
    });
});
