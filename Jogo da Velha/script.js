var jogador,
    vencedor = null;
var jogadorDaVez = document.querySelector("#jogador-selecionado");
var vencedorDaPartida = document.querySelector("#vencedor-selecionado");
var botao = document.querySelector("#btn");
var quadrados = [];
var cont = 0;

//pegando posição dos quadrados e iniciando função jogadorJoga
for (var i = 1; i <= 9; i++) {
    quadrados.push(document.getElementById(i));
    quadrados[i - 1].addEventListener("click", jogadorJoga);
}

//mudando o status inicial do jogador('null') para 'x'
mudaJogador("x");

//função que faz toda a lógica da jogada do jogador
function jogadorJoga() {
    if (vencedor !== null) {
        return;
    }
    var quadrado = document.getElementById(this.id);
    if (quadrado.innerHTML !== "-") {
        return;
    }
    quadrado.innerHTML = jogador;
    quadrado.style.color = "black";
    if (jogador === "x") {
        jogador = "o";
    } else {
        jogador = "x";
    }
    mudaJogador(jogador);
    mostraVencedor();
    if (jogador === "x" || jogador === "o") {
        cont++;
        if (cont === 9 && vencedor === null) {
            seEmpate();
            cont = 0;
        }
    }
}

//função que muda o status do jogador
function mudaJogador(valor) {
    jogador = valor;
    jogadorDaVez.innerHTML = jogador;
}

//função que checa se há uma sequência vencedora
function checaSequencia(elemento1, elemento2, elemento3) {
    venceu = false;
    if (
        elemento1.innerHTML !== "-" &&
        elemento1.innerHTML === elemento2.innerHTML &&
        elemento2.innerHTML === elemento3.innerHTML
    ) {
        venceu = true;
    }
    return venceu;
}

//função para mudar o status do vencedor
function mudaVencedor(quadrado) {
    vencedor = quadrado.innerHTML;
    vencedorDaPartida.innerHTML = vencedor;
}

//função para mudar cor dos quadrados se há um vencedor
function mudaCor(elemento1, elemento2, elemento3) {
    elemento1.style.background = "lightgreen";
    elemento2.style.background = "lightgreen";
    elemento3.style.background = "lightgreen";
}

//função para zerar o jogador corrente se há um vencedor
function zeraJogador() {
    jogadorDaVez.innerHTML = "";
}

//função para mostrar o vencedor
function mostraVencedor() {
    if (checaSequencia(quadrados[0], quadrados[1], quadrados[2])) {
        mudaVencedor(quadrados[0]);
        mudaCor(quadrados[0], quadrados[1], quadrados[2]);
        zeraJogador();
        alert("Você VENCEU!\nClique em Reiniciar e recomece.");
        return;
    }
    if (checaSequencia(quadrados[3], quadrados[4], quadrados[5])) {
        mudaVencedor(quadrados[3]);
        mudaCor(quadrados[3], quadrados[4], quadrados[5]);
        zeraJogador();
        alert("Você VENCEU!\nClique em Reiniciar e recomece.");
        return;
    }
    if (checaSequencia(quadrados[6], quadrados[7], quadrados[8])) {
        mudaVencedor(quadrados[6]);
        mudaCor(quadrados[6], quadrados[7], quadrados[8]);
        zeraJogador();
        alert("Você VENCEU!\nClique em Reiniciar e recomece.");
        return;
    }
    if (checaSequencia(quadrados[0], quadrados[3], quadrados[6])) {
        mudaVencedor(quadrados[0]);
        mudaCor(quadrados[0], quadrados[3], quadrados[6]);
        zeraJogador();
        alert("Você VENCEU!\nClique em Reiniciar e recomece.");
        return;
    }
    if (checaSequencia(quadrados[1], quadrados[4], quadrados[7])) {
        mudaVencedor(quadrados[1]);
        mudaCor(quadrados[1], quadrados[4], quadrados[7]);
        zeraJogador();
        alert("Você VENCEU!\nClique em Reiniciar e recomece.");
        return;
    }
    if (checaSequencia(quadrados[2], quadrados[5], quadrados[8])) {
        mudaVencedor(quadrados[2]);
        mudaCor(quadrados[2], quadrados[5], quadrados[8]);
        zeraJogador();
        alert("Você VENCEU!\nClique em Reiniciar e recomece.");
        return;
    }
    if (checaSequencia(quadrados[0], quadrados[4], quadrados[8])) {
        mudaVencedor(quadrados[0]);
        mudaCor(quadrados[0], quadrados[4], quadrados[8]);
        zeraJogador();
        alert("Você VENCEU!\nClique em Reiniciar e recomece.");
        return;
    }
    if (checaSequencia(quadrados[2], quadrados[4], quadrados[6])) {
        mudaVencedor(quadrados[2]);
        mudaCor(quadrados[2], quadrados[4], quadrados[6]);
        zeraJogador();
        alert("Você VENCEU!\nClique em Reiniciar e recomece.");
    }
}

//função para reiniciar o jogo
botao.addEventListener("click", reiniciar);
function reiniciar() {
    vencedor = null;
    vencedorDaPartida.innerHTML = "";
    for (var e in quadrados) {
        quadrados[e].style.background = "#eee";
        quadrados[e].style.color = "#eee";
        quadrados[e].innerHTML = "-";
        cont = 0;
    }
    mudaJogador("x");
}

//função para mostrar mensagem se há um empate
function seEmpate() {
    zeraJogador()
    alert(
        "Deu empate!\nClique em OK  e em Reiniciar para recomeçar a partida."
    );
}
