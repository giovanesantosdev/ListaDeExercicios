let primeiroValor = document.querySelector("#primeiroValor")
let segundoValor = document.querySelector("#segundoValor")
let verificarValor = document.querySelector("#verificarValor")

function verificar (){
    let v1 = Number(primeiroValor.value);
    let v2 = Number(segundoValor.value);

    if (v1 > v2){
    alert(`o Valor ${v1} é o Maior`)
    }else if(v2 == v1){
    alert(`os Valores ${v1} e ${v2} são iguais`)
    }else{
    alert(`o Valor ${v2} é o Maior`)
    }
    
}

verificarValor.onclick = function teste(){
    verificar()
}
