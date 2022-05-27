function addNovaPalavra(){
    let palavrasExistentes = localStorage.getItem("palavras"); 
    console.log(palavras);

    var selecionandoTextArea = document.getElementById("palavraAdicionada");
    var selecionandoValor = selecionandoTextArea.value;
    console.log(selecionandoValor);
    
    var novasPalavras = palavras.push(selecionandoValor);
    console.log(novasPalavras);
      return novasPalavras;
    };
    


let palavrasExistentes = localStorage.getItem("palavras");
//let palavrasSalvas = localStorage.getItem("novasPalavras");


//console.log(palavrasSalvas);

var adicionarUmaNovaPalavra = document.querySelector(".salvarPalavra");

var salvarPalavra = adicionarUmaNovaPalavra.addEventListener("click", addNovaPalavra);

localStorage.setItem('palavras', palavras);