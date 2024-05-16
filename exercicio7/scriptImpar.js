let ipNumero = document.querySelector("#ipNumero");
let btImpar = document.querySelector("#btImpar");

btImpar.onclick = function () {
  const divisao = Number(ipNumero.value);

  if (divisao % 2 == 0) {
    alert("é PAR");
  } else {
    alert("é IMPAR");
  }
};

