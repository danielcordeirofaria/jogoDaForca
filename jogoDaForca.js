var palavraPreparada = [];



//function sorteandoPalavra(){
    let palavrasExistentes = localStorage.getItem("palavras");
    var sorteidoDaPalavra = Math.floor(Math.random() * palavras.length);
    var palavraSorteada = palavras[sorteidoDaPalavra];
    var palavraPreparada = palavraSorteada.split("", palavraSorteada.value);
    console.log(palavraPreparada);
    //return palavraPreparada
//};

//function criandoElementos(){
    for (var i = 0; i < palavraPreparada.length; i++) {
        var divParaPalavra = document.querySelector(".divParaPalavra")
        var div1 = document.createElement("div");
        div1.classList.add("cadaLetra");
        divParaPalavra.appendChild(div1);
        div1.textContent = palavraPreparada[i];
    };
//};

function confirmandoLetraA(){
    //for(i = 0; palavraPreparada.length <= i ; i++){
    var existeLetra = palavraPreparada.includes("a")
        if( existeLetra == true){
            console.log("deucerto");
            var localizacaoDaLetra = palavraPreparada.indexOf("a");
            console.log(localizacaoDaLetra);
        } else {
            console.log("não possui a letra")
        }
};


//sorteandoPalavra();
//criandoElementos();

//Verificar mediante um array do alfabeto. com textcontent e indexOf



var selecionandoBotaoLetraA = document.querySelector(".a");

selecionandoBotaoLetraA.addEventListener("click", confirmandoLetraA);

