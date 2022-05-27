function addNovaPalavra(palavras){
    let palavrasExistentes = localStorage.getItem("palavras");
    var selecionandoTextArea = document.getElementById("palavraAdicionada");
        var selecionandoTextArea = document.getElementById("palavraAdicionada");
        console.log(selecionandoTextArea);
        var selecinandoValor = selecionandoTextArea.value;
        console.log(selecinandoValor);
    
        var novasPalavras = palavras.push(selecionandoValor);
        
    return novasPalavras
    };
    


let palavrasExistentes = localStorage.getItem("palavras");
//let palavrasSalvas = localStorage.getItem("novasPalavras");


//console.log(palavrasSalvas);

var adicionarUmaNovaPalavra = document.querySelector(".salvarPalavra");

var salvarPalavra = adicionarUmaNovaPalavra.addEventListener("click", addNovaPalavra);

console.log(novasPalavras)

localStorage.setItem('salvarPalavra', salvarPalavra);

