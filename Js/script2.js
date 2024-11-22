document.addEventListener("DOMContentLoaded", () => {
    const main = document.querySelector("main");

    // Recupera os balões salvos no localStorage
    const salas = JSON.parse(localStorage.getItem("salas")) || [];

    // Cria e adiciona os balões ao <main>
    salas.forEach((sala) => {
        const balao = document.createElement("p");
        const link = document.createElement("a");
        link.className = "baloes";
        link.href = "#"; // Ajuste o link conforme necessário
        link.textContent = sala;

        balao.appendChild(link);
        main.appendChild(balao);
    });
});
