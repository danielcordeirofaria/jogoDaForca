function addNovaPalavra{
    var selecionandoTextArea = document.getElementById("palavraAdicionada").value;
    var novasPalavras = palavrasExistentes.push("selecionandoTextArea");
    return novasPalavras
};
let palavrasExistentes = localStorage.getItem("palavras");

var adicionarUmaNovaPalavra = document.querySelector("salvarEComecar");

var salvarEComeçar = adicionarUmaNovaPalavra.addEventListener("click", addNovaPalavra());

console.log(salvarEComeçar);

