function addNovaPalavra(){
    var selecionandoTextArea = document.getElementById("palavraAdicionada").value;
    console.log(selecionandoTextArea);
    var palavras = palavrasExistentes.push("selecionandoTextArea");
    console.log(palavras);
    localStorage.setItem('palavras', palavras);

    return palavras
};

let palavrasExistentes = localStorage.getItem("palavras");

var adicionarUmaNovaPalavra = document.querySelector("salvarEComecar");

var salvarEComeçar = adicionarUmaNovaPalavra.addEventListener("click", addNovaPalavra);

console.log(palavras); 

