document.addEventListener("DOMContentLoaded", () => {
    const mainElement = document.querySelector("main");

    // Recuperar as salas do sessionStorage
    const salas = JSON.parse(sessionStorage.getItem("salas")) || [];
    console.log("Salas recuperadas do sessionStorage:", salas);

    // Adiciona as salas existentes como balões
    salas.forEach((sala) => {
        const balao = document.createElement("p");
        const link = document.createElement("a");

        balao.classList.add("baloes");
        link.href = "#"; // Você pode definir uma ação para cada sala aqui
        link.textContent = sala;

        balao.appendChild(link);
        mainElement.appendChild(balao);

        console.log(`Balão criado para a sala: ${sala}`);
    });
});
