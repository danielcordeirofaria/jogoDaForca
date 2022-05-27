function addNovaPalavra(){
    var selecionandoTextArea = document.getElementById("palavraAdicionada").value;
    console.log(selecionandoTextArea);
    var palavras = palavrasExistentes.push("selecionandoTextArea");
    console.log(palavras);
    localStorage.setItem('palavras', palavras);
};


let palavrasExistentes = localStorage.getItem("palavras").value;
console.log(palavrasExistentes);
var adicionarUmaNovaPalavra = document.querySelector("salvarPalavra");

var salvarPalavra = adicionarUmaNovaPalavra.addEventListener("click", addNovaPalavra);

console.log(salvarEComeçar);
