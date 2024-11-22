document.addEventListener("DOMContentLoaded", () => {
    const caixaNomeSala = document.getElementById("nomeSala");
    const botaoCriarSala = document.getElementById("criarSala");

    botaoCriarSala.addEventListener("click", () => {
        const textoSala = caixaNomeSala.textContent.trim();

        if (textoSala === "") {
            alert("Por favor, digite um nome para a sala!");
            return;
        }

        // Salvar o texto no localStorage
        let salas = JSON.parse(localStorage.getItem("salas")) || [];
        salas.push(textoSala);
        localStorage.setItem("salas", JSON.stringify(salas));

        // Redirecionar para a página pesquisar_materia_privado.html
        window.location.href = "pesquisar_materia_privado.html";
    });
});
