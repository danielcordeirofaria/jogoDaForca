let palavrasExistentes = localStorage.getItem("palavras");

var sorteidoDaPalavra = Math.floor(Math.random() * palavras.length);
var palavraSorteada = palavras[sorteidoDaPalavra]
console.log(palavraSorteada);
var palavraPreparada = palavraSorteada.split("", palavraSorteada.value);
console.log(palavraPreparada);
