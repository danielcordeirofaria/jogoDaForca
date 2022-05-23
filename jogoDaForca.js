function adcElemento (){
    var divNova = document.createElement("div");
    main.appendChild(divNova);
    var divAtual = document.getElementById("main");
}


let palavrasExistentes = localStorage.getItem("palavras");

var sorteidoDaPalavra = Math.floor(Math.random() * palavras.length);
var palavraSorteada = palavras[sorteidoDaPalavra]
console.log(palavraSorteada);
var palavraPreparada = palavraSorteada.split("", palavraSorteada.value);
console.log(palavraPreparada);

var main = document.querySelector("main");

adcElemento();

//for (var i = 0; i < palavraPreparada.length; i++) {
//QQ    main.innerHTML = palavraPreparada[i];
//};

