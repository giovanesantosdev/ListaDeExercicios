let valorkg = document.querySelector("#valorkg")
let quantidadeKg = document.querySelector("#quantidadeKg")
let submit = document.querySelector("#submit")

function calculaValorProduto (){
    const vkg = Number(valorkg.value);
    const qkg = Number(quantidadeKg.value);
    const valorproduto = vkg * qkg;
    return valorproduto
}



submit.onclick = function () {
    const valorProduto = calculaValorProduto();
    alert(`Dado o valor do KG e quantidade de Kg o Valor do produto é: ${valorProduto}`)
}
