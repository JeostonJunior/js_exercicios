var saudar = document.getElementById("saudar");
var data = new Date();
var hora = data.getHours();
var img = document.getElementById("imagem");

var timer = setInterval(relogio, 1000);

if (hora < 12) {
  saudar.innerHTML = "Bom Dia!";
  img.src =
    "https://www.fotografemelhor.com.br/site/wp-content/uploads/2021/06/N%C3%A9voa-Amanhecer-Piraquara015Daniel-Castellano-9aee3c9b.jpg";
} else if (hora <= 18) {
  saudar.innerHTML = "Boa tarde!";
  img.src =
    "https://cdn.falauniversidades.com.br/wp-content/uploads/2020/06/18114924/Fim-de-tarde.jpg";
} else {
  saudar.innerHTML = "Boa noite!";
  img.src =
    "https://www.teusonhar.com.br/wp-content/uploads/2015/03/sonhar-com-noite.jpg";
}

function relogio() {
  var data = new Date();
  var hora = data.getHours();
  var minutos = data.getMinutes();
  var segundos = data.getSeconds();

  if (hora < 10) {
    hora = "0" + hora;
  } else if (minutos < 10) {
    minutos = "0" + minutos;
  } else if (segundos < 10) {
    segundos = "0" + segundos;
  }

  document.querySelector("#relogio").innerHTML =
    hora + ":" + minutos + ":" + segundos;
}
