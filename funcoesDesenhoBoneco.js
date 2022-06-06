function montarBoneco(qnt){
    switch(qnt){
        case 1: baseForca(), trocoForca(), alcaForca(), cordaForca(); break;
        case 2: cabecaBoneco(); break;
        case 3: corpoBoneco(); break;
        case 4: bracoUmBoneco(); break;
        case 5: bracoDoisBoneco(); break;
        case 6: pernaUmBoneco(); break;
        case 7: pernaDoisBoneco();break;
    }
}
function baseForca(){
    tabuleiro.beginPath();
    tabuleiro.fillStyle = "#0A3871";
    tabuleiro.fillRect(50, 520, 400, 10);
    tabuleiro.fill();
}
function trocoForca(){
    tabuleiro.beginPath();
    tabuleiro.fillStyle = "#0A3871";
    tabuleiro.fillRect(100, 100, 10, 420);
    tabuleiro.fill();
}

function alcaForca(){
    tabuleiro.beginPath();
    tabuleiro.fillStyle = "#0A3871";
    tabuleiro.fillRect(100, 100, 250, 10);
    tabuleiro.fill();
}

function cordaForca(){
    tabuleiro.beginPath();
    tabuleiro.fillStyle = "#0A3871";
    tabuleiro.fillRect(350, 100, 10, 70);
    tabuleiro.fill();
}

// funcoes desenhar boneco
function cabecaBoneco(){
    tabuleiro.beginPath();
    tabuleiro.arc(355, 210, 40, 0, Math.PI*2);
    tabuleiro.lineWidth = 5;
    tabuleiro.strokeStyle = "#0A3871";
    tabuleiro.stroke()
}

function corpoBoneco(){
    tabuleiro.beginPath();
    tabuleiro.fillStyle = "#0A3871";
    tabuleiro.fillRect(350, 250, 10, 150);
    tabuleiro.fill();
}

function bracoUmBoneco(){
    tabuleiro.beginPath();
    tabuleiro.moveTo(355,260);
    tabuleiro.lineTo(300,330);
    tabuleiro.lineWidth = 10;
    tabuleiro.strokeStyle = "#0A3871";
    tabuleiro.stroke();
}

function bracoDoisBoneco(){
    tabuleiro.beginPath();
    tabuleiro.moveTo(355,260);
    tabuleiro.lineTo(405,330);
    tabuleiro.lineWidth = 10;
    tabuleiro.strokeStyle = "#0A3871";
    tabuleiro.stroke()
}

function pernaUmBoneco(){
    tabuleiro.beginPath();
    tabuleiro.fillStyle = "#0A3871";
    tabuleiro.moveTo(355, 395);
    tabuleiro.lineTo(300,470);
    tabuleiro.lineWidth = 10;
    tabuleiro.strokeStyle = "#0A3871";
    tabuleiro.stroke()
}

function pernaDoisBoneco(){
    tabuleiro.beginPath();
    tabuleiro.fillStyle = "#0A3871";
    tabuleiro.moveTo(355, 395);
    tabuleiro.lineTo(405,470);
    tabuleiro.lineWidth = 10;
    tabuleiro.strokeStyle = "#0A3871";
    tabuleiro.stroke()
}