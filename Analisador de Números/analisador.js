const lista = [];
const reducer = (previousValue, currentValue) => previousValue + currentValue;
function adicionar() {
  var num = document.getElementById("txtnum");
  let analisar = document.getElementById("analisar");
  let numero = Number(num.value);
  let listagem = "";

  if (num.value.length == 0 || numero <= 0 || numero > 100) {
    window.alert("Por favor, digite um número válido!");
  } else {
    let procurar = lista.indexOf(numero);
    lista.push(numero);
    if (procurar === -1) {
      for (let c in lista) {
        listagem = `Valor ${lista[c]} foi adicionado <br>`;
      }
    } else {
      window.alert("O Número já foi adicionado");
    }
  }
  analisar.innerHTML += listagem;
}

function finalizar() {
  let finalizar = document.getElementById("finalizar");
  let tamanho = lista.length;
  lista.sort();
  let min = Math.min(...lista);
  let max = Math.max(...lista);
  let total = lista.reduce(reducer);
  let media = total / tamanho;

  finalizar.innerHTML = `Ao todo, temos ${tamanho} numeros cadastrados <br>`;
  finalizar.innerHTML += `O maior valor informado foi ${max} <br>`;
  finalizar.innerHTML += `O menor valor informado foi ${min}<br>`;
  finalizar.innerHTML += `Somando todos os valores, temos ${total}<br>`;
  finalizar.innerHTML += `A media dos valores digitados é ${media}<br>`;
}
