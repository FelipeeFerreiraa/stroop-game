var texto = document.getElementById('cor');
var botao = document.getElementById('botao');

const coresTipo = [
    "blue", "green", "purple", "navy", "gray", "black",
    "white", "aqua", "orange", "pink",
    "brown"
];


const coresTexto = [
    "Azul", "Verde", "Roxo", "Verde-água", "Azul-marinho", "Cinza",
    "Preto", "Branco", "Marrom", "Laranja",
    "Rosa"
];


function mudarCor(){
    const randomText = Math.floor(Math.random() * (coresTexto.length));
    const randomTipo = Math.floor(Math.random() * (coresTexto.length));
    const randomBorda = Math.floor(Math.random() * (coresTexto.length));    

    texto.style['color'] = coresTipo[randomTipo];
    texto.textContent = coresTexto[randomText];
    texto.style['text-shadow'] =  '-3px -3px 0 ' + coresTipo[randomBorda] + ', 3px -3px 0 ' + coresTipo[randomBorda] + ', -3px 3px 0 ' + coresTipo[randomBorda] + ', 3px 3px 0 ' + coresTipo[randomBorda]

}

function comecar(){
    botao.style['display'] = 'none';    
    mudarCor();
    setInterval(function() {
        mudarCor();
    }, 2000);
}

