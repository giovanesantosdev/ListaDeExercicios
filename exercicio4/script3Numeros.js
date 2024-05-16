let  ipValor1 = document.querySelector('#ipValor1');
let  ipValor2 = document.querySelector('#ipValor2');
let  ipValor3 = document.querySelector('#ipValor3');
let  btResultado = document.querySelector('#btResultado');
let  h3Resultado = document.querySelector('#h3Resultado');

function calcular (){
    let vlr1 = Number(ipValor1.value);
    let vlr2 = Number(ipValor2.value);
    let vlr3 = Number(ipValor3.value);
    
    // Calcular a Média Aritimética
    let mediaAritimetica = (vlr1 + vlr2 + vlr3) / 3;

    // Calcular a Média Ponderada dos Números (3, 2 e 5)
    let somaValoresePesos = (vlr1 * 3) + (vlr2 * 2) + (vlr3 * 5);
    let somaPesos = 3 + 2 + 5;
    let mediaPonderada = somaValoresePesos / somaPesos;

    // Calcular a soma das Médias Aritimética e Ponderada dos Números
    let somaMedias = mediaAritimetica + mediaPonderada;

    // Calcular a Média das Médias
    let mediaDasMedias = somaMedias / 2;

    h3Resultado.innerHTML = 
    `Média aritimetica: ${mediaAritimetica}<br><br> 
    Média Ponderada: ${mediaPonderada}<br><br>
    Soma das Médias: ${somaMedias}<br><br> 
    Média das Médias: ${mediaDasMedias}`
}


btResultado.onclick = function(){
    calcular();
}
