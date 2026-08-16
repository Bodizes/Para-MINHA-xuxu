function abrirAba(aba) {

    const conteudo = document.getElementById("conteudo");

    if (aba === "amor") {

        conteudo.innerHTML = `
            <h2>Eu te amo ❤️</h2>

            <p>
                Eu te amo de um jeito que às vezes nem sei explicar.
                Você conseguiu transformar pequenos momentos
                em lembranças que eu quero guardar para sempre.
            </p>
        `;

    }

    else if (aba === "poemas") {

        conteudo.innerHTML = `
            <h2>Um pequeno poema 🌹</h2>

            <p>
                Se eu pudesse guardar um momento,<br>
                guardaria todos ao seu lado.<br>
                Porque entre tantos caminhos,<br>
                você se tornou meu lugar favorito.
            </p>
        `;

    }

    else if (aba === "piadas") {

        conteudo.innerHTML = `
            <h2>Hora da piada 😂</h2>

            <p>
                Você sabe por que eu nunca consigo ficar bravo com você?
                <br><br>
                Porque você olha pra mim e eu esqueço até o motivo. ❤️
            </p>
        `;

    }

    else if (aba === "motivos") {

        conteudo.innerHTML = `
            <h2>Alguns motivos 💗</h2>

            <p>
                Seu jeito.<br>
                Seu sorriso.<br>
                Nossas conversas.<br>
                As nossas brincadeiras.<br>
                Os momentos simples.<br>
                E principalmente...
                <br><br>
                Você.
            </p>
        `;

    }

    else if (aba === "surpresa") {

        conteudo.innerHTML = `
            <h2>🎁 Surpresa!</h2>

            <p>
                Se você chegou até aqui,
                significa que abriu todas as abas.
                <br><br>
                Então aqui vai a mais importante:
                <br><br>
                <strong>Eu escolheria você novamente. ❤️</strong>
            </p>
        `;

    }

}
const musica = document.getElementById("musica");
const botaoMusica = document.getElementById("botaoMusica");

function toggleMusica() {
    console.log("Botão de música clicado!");

    if (musica.paused) {
        musica.play()
            .then(() => {
                botaoMusica.textContent = "🔊";
                botaoMusica.classList.add("tocando");
            })
            .catch((erro) => {
                console.error("Erro ao tocar:", erro);
            });
    } else {
        musica.pause();
        botaoMusica.textContent = "🎵";
        botaoMusica.classList.remove("tocando");
    }
}
