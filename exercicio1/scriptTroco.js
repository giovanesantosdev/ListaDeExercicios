function troco() {
  
    const numero1 = Number(document.getElementById('numero1').value);
    const numero2 = Number(document.getElementById('numero2').value);
    let subtracao = (numero1 - numero2);
    const resultado = subtracao
    return document.getElementById('resultado').value = resultado;
  }