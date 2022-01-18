const lista = [];
const reducer = (previousValue, currentValue) => previousValue + currentValue;

var num = document.getElementById("txtnum");
var analisar = document.getElementById("analisar");
var final = document.getElementById("finalizar");

function adicionar() {
  var numero = Number(num.value);
  var listagem = "";

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
  num.value = "";
  num.focus();
}

function finalizar() {
  lista.sort();
  let tamanho = lista.length;
  let min = Math.min(...lista);
  let max = Math.max(...lista);
  let total = lista.reduce(reducer);
  let media = total / tamanho;
  if (lista.length == 0) {
    window.alert("Adicione Valores Antes de Finalizar");
  } else {
    final.innerHTML = " ";
    final.innerHTML += `Ao todo, temos ${tamanho} números cadastrados <br><br>`;
    final.innerHTML += `O maior valor informado foi ${max} <br><br>`;
    final.innerHTML += `O menor valor informado foi ${min}<br><br>`;
    final.innerHTML += `Somando todos os valores, temos ${total}<br><br>`;
    final.innerHTML += `A media dos valores digitados é ${media}<br>`;
  }
}
