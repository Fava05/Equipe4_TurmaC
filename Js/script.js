document.addEventListener("DOMContentLoaded", () => {
    const caixaNomeSala = document.getElementById("nomeSala");
    const botaoCriarSala = document.getElementById("criarSala");

    botaoCriarSala.addEventListener("click", () => {
        // Obtém o texto da caixa
        console.log('oi')
        if (caixaNomeSala.textContent === "Nome da sala") {
            caixaNomeSala.textContent = ""; // Esvazia o texto padrão
        }
        const textoSala = caixaNomeSala.textContent.trim();

        // Verifica se o texto não está vazio
        if (textoSala === "") {
            alert("Por favor, digite um nome para a sala!");
            return;
        }

        // Cria o elemento <p>
        const balao = document.createElement("p");

        // Cria o link <a>
        const link = document.createElement("a");
        link.className = "baloes";
        link.href = "#"; // Pode ser alterado para o link desejado
        link.textContent = textoSala;

        // Adiciona o link ao parágrafo
        balao.appendChild(link);

        // Adiciona o parágrafo ao final do <main>
        const main = document.querySelector("main");
        main.appendChild(balao);

        // Limpa o texto da caixa
        caixaNomeSala.textContent = "";
    });
});
