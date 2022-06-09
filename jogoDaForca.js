//Seletores e variáveis

var palavras = ["PALAVRA", "CARRO", "CANETA", "CACHORRO", "CADERNO", "NOME", "TECLADO", "LIVRO", "HOJE" , "CELULAR" , "HOSPITAL" , "BOMBA", "SOCO" , "MODEM" , "NOTEBOOK" , "TRONCO" , "MUNDO"];
var tabuleiro = document.getElementById("forca").getContext("2d");
var letras = [];
var palavraCorreta = "";
var erros = 0;
var somenteLetras = ["A", "B", "C", "D", "E", "F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","X","W","Y","Z" ];
var acertos = 0;
var selecionandoBotaoDesistir = document.querySelector(".botaoDesistir");
var selecionandoBotaoAdicionarNovaPalavra = document.querySelector(".botaoAdicionarNovaPalavra");
var canvas = document.getElementById("forca");
var clickNovoJogo = 0
var selecionarBotaoNovoJogo = document.querySelector(".novoJogo");
var selecionarTextArea = document.getElementById("palavraAdicionada");
var selecionarDivAreaSalvarPalavra = document.querySelector(".areaSalvarPalavra");

//Escolher palavra secreta
function escolherPalavraSecreta(){
    var palavra = palavras[Math.floor(Math.random() * palavras.length)];
    palavraSecreta = palavra
    console.log(palavra)
    return  palavra
};

//Funções para criar as DIVs
function escreverTracinhos(){
    tabuleiro.lineWidth = 6
    tabuleiro.lineCap = "round"
    tabuleiro.lineJoin = "round"
    tabuleiro.strokeStyle = "#0A3871"
    tabuleiro.beginPath()
    var eixo = 600/palavraSecreta.length
    for(let i = 0; i < palavraSecreta.length ; i++){
        tabuleiro.moveTo(550 + (eixo*i), 400)
        tabuleiro.lineTo(500 + (eixo*i), 400)
    }
    tabuleiro.stroke()
    tabuleiro.closePath()
}escreverTracinhos(escolherPalavraSecreta())

function escreverLetraCorreta(index){
    tabuleiro.font = "bold 52px Inter";
    tabuleiro.lineWidth = 6
    tabuleiro.lineCap = "round"
    tabuleiro.lineJoin = "round"
    tabuleiro.strokeStyle = "#0A3871"
    
    var eixo = 600/palavraSecreta.length
    tabuleiro.fillText(palavraSecreta[index], 505+(eixo*index), 380)
    tabuleiro.stroke()

}

function escreverLetraIncorreta(letra, errosLeft){
    tabuleiro.font = "bold 40px Inter";
    tabuleiro.lineWidth = 6
    tabuleiro.lineCap = "round"
    tabuleiro.lineJoin = "round"
    tabuleiro.strokeStyle = "#0A3871"
    tabuleiro.fillText(letra, 200 + (40*(10+errosLeft)), 450, 40)}

function verificarLetraCorreta(key){
    if(letras.length < 1 || letras.indexOf(key) < 0){
        letras.push(key)
        return false
    }
    else{
        letras.push(key.toUpperCase())
        return true
    }
}

function adicionarLetraCorreta(i){
    palavraCorreta += palavraSecreta[i].toUpperCase() // palavraCorreta = palavraCorreta + palavraSecreta[i]        
};

function adicionarLetraIncorreta(letter){
    //if(palavraSecreta.indexOf(letter) > 0){
        erros += 1
        
    }
//}

function botaoDesistir(){
    selecionandoBotaoDesistir.style.display = "inline";
}

function adicionarNovaPalavra(){
    selecionandoBotaoAdicionarNovaPalavra.style.display = "none";
}

function displayNoneCanvas(){
    canvas.style.display = "inline";
}

function textarea(){
    selecionarTextArea.style.display = "inline"
}

function areaSalvarPalavra(){
    selecionarDivAreaSalvarPalavra.style.display = "none"
}

function areaSalvarPalavraNone(){
    selecionarDivAreaSalvarPalavra.style.display = "none"
}

selecionarBotaoNovoJogo.addEventListener("click", function(){
    botaoDesistir()
    areaSalvarPalavraNone()
    adicionarNovaPalavra()
    if(clickNovoJogo == 0){
        displayNoneCanvas()

    }else{
        document.location.reload(true);
    }
    clickNovoJogo++
});


/*var selecionandoTextArea = document.getElementById("palavraAdicionada");
    var selecionandoValor = selecionandoTextArea.value;
    console.log(selecionandoValor);*/

selecionandoBotaoAdicionarNovaPalavra.addEventListener("click", function(){
    areaSalvarPalavra()

})



document.onkeydown = (e) => {
    var letra = e.key.toUpperCase()
    console.log(letra)
    if(somenteLetras.includes(letra)){
        if(!verificarLetraCorreta(e.key)){
            if(palavraSecreta.includes(letra)){
                adicionarLetraCorreta(palavraSecreta.indexOf(letra))
                for( let i = 0 ; i < palavraSecreta.length ; i++){
                    if(acertos == palavraSecreta.length){
                        alert("Parabéns")
                    } 
                    if(palavraSecreta[i] === letra){
                        escreverLetraCorreta(i)    
                        acertos ++
                       
                    }
                }
            }
    
        else{
            if (!verificarLetraCorreta(e.key)) 
            return 
            adicionarLetraIncorreta(letra)
            escreverLetraIncorreta(letra, erros)
            montarBoneco(erros)
            if(erros == 8 ){ 
                alert("Que pena, você perdeu! Clique ok para tentar novamente")  
                document.location.reload(true);

            };
        }
        } else{
            return false
        }
    }
    };
