function confirmandoLetraA(){
    var selecionandoClasse = document.querySelectorAll(".cadaLetra");
    var valorSelecionandoClasse = selecionandoClasse.value;
    console.log(valorSelecionandoClasse);
    if (valorSelecionandoClasse.contains(A)) {
        selecionandoClasse.classList.replace("cadaLetra", "letraEncontrada");
    } else {
        var valorSelecionandoClasse = document.querySelector(".cadaLetra");
        selecionandoClasse.classList.replace("cadaLetra", "letraErrada");
    }
};


let palavrasExistentes = localStorage.getItem("palavras");
var sorteidoDaPalavra = Math.floor(Math.random() * palavras.length);
var palavraSorteada = palavras[sorteidoDaPalavra]
var palavraPreparada = palavraSorteada.split("", palavraSorteada.value);
console.log(palavraPreparada);


for (var i = 0; i < palavraPreparada.length; i++) {
    var divParaPalavra = document.querySelector(".divParaPalavra")
    var div1 = document.createElement("div");
    div1.classList.add("cadaLetra");
    divParaPalavra.appendChild(div1);
    div1.textContent = palavraPreparada[i];
};

var selecionandoBotaoLetraA = document.getElementById("letra");

var clickandoNaLetraA = selecionandoBotaoLetraA.addEventListener("click", confirmandoLetraA);

