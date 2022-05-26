

let palavrasExistentes = localStorage.getItem("palavras");
console.log(palavras)
var sorteidoDaPalavra = Math.floor(Math.random() * palavras.length);
var palavraSorteada = palavras[sorteidoDaPalavra]
console.log(palavraSorteada);
var palavraPreparada = palavraSorteada.split("", palavraSorteada.value);
console.log(palavraPreparada);

for (var i = 0; i < palavraPreparada.length; i++) {
    var divParaPalavra = document.querySelector(".divParaPalavra")
    console.log(divParaPalavra)
    var div1 = document.createElement("div");
    div1.classList.add("cadaLetra");
    divParaPalavra.appendChild(div1);
    div1.textContent = palavraPreparada[i];
};



var selecaoDaLetraA = document.querySelector(".a");
var letraA = selecaoDaLetraA.addEventListener("click", verificacaoDeLetraA)

function verificacaoDeLetraA (){
        if(a == palavraPreparada)
            var confirmandoA = document.querySelector("palavraPreparada");
            confirmandoA.classList.replace("cadaLetra", "letraAcertada");

}


