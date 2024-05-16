let primeiroValor = document.querySelector("#primeiroValor")
let segundoValor = document.querySelector("#segundoValor")
let terceiroValor = document.querySelector("#terceiroValor")
let quartoValor = document.querySelector("#quartoValor")
let verificarValor = document.querySelector("#verificarValor")

function verificar (){
    let v1 = Number(primeiroValor.value);
    let v2 = Number(segundoValor.value);
    let v3 = Number(terceiroValor.value);
    let v4 = Number(quartoValor.value);
    

    if (v1 < v2 && v3 && v4){
    alert(`O Primeiro valor é o Menor`)
    }else if(v2 < v1 && v3 && v4){
    alert(`O Segundo valor é o Menor`)
    }else if(v3 < v1 && v2 && v4){
    alert(`O Terceiro valor é o Menor`)
    }else if(v4 < v1 && v2 && v3){
    alert(`O Quarto valor é o Menor`)
    }else{
    alert(`o Valores são igauis`)
    }
    
}

verificarValor.onclick = function teste(){
    verificar()
}
