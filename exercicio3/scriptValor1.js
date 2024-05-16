let valorInicial = document.querySelector('#valorInicial');
let resutadoString = document.querySelector('#resutadoString');
let btResultado = document.querySelector('#btResultado');

function calculoReajuste (){
    const valorInicialReajuste = Number(valorInicial.value);
    let calculoValorReajuste = (valorInicialReajuste / 100 ) * 1 ; 
    let calculoValorReajustado = calculoValorReajuste + valorInicialReajuste;
    resutadoString.textContent = String(calculoValorReajustado);
}  

btResultado.onclick = function (){
    calculoReajuste()
}