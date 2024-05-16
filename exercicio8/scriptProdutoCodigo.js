let ipCodigo = document.querySelector('#ipCodigo')
let btCodigo = document.querySelector('#btCodigo')
let resutlado = document.querySelector('#resutlado')

function codigos (){
    let codigo = (ipCodigo.value); 
  
    if (codigo == "001") {
        alert("Parafuso")
    }else if (codigo == "002") {
        alert("Porca")
    }
    else if (codigo == "003") {
        alert("Prego")
    }else {
        alert("Diversos")
    }

}

btCodigo.onclick = function (){
    let resutladoCodigo = codigos;
    alert(`O Produto selecionado foi ${resutladoCodigo}`)
}