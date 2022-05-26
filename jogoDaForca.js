

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

var selecaoDaTeclaA = document.querySelector(".a");

var letraA = selecaoDaTeclaA.addEventListener("click", function() {
    for(i = 0; palavraPreparada.length < i; i++){
        if(palavraPreparada[i].includes("A")){
            var confirmandoA = document.querySelector(".cadaLetra");
            confirmandoA.classList.remove("cadaLetra");
            confirmandoA.classList.add("letraAcertada");
            console.log(confirmandoA.value);
        } else {
            var removendoA = document.querySelector(".a").classList.replace(".letraErrada")
        }
    }
});
