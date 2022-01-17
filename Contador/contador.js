function contar() {
  var inicio = document.getElementById("txtinit");
  var fim = document.getElementById("txtend");
  var passo = document.getElementById("txtcnt");
  var res = document.getElementById("res");

  if (
    inicio.value.length == 0 ||
    fim.value.length == 0 ||
    passo.value.length == 0
  ) {
    res.innerHTML = "Impossivel contar";
  } else {
    res.innerHTML = "Contando: <br>";
    var i = Number(inicio.value);
    var f = Number(fim.value);
    var p = Number(passo.value);

    if (p <= 0) {
      window.alert("Passo inválido! Considerando Passo 1");
      p = 1;
    }
    if (i < f) {
      for (var c = i; c <= f; c += p) {
        res.innerHTML += `${c} \u{1F4A8}`;
      }
    } else {
      for (var c = i; c >= f; c -= p) {
        res.innerHTML += `${c} \u{1F4A8}`;
      }
    }
    res.innerHTML += `\u{1F3C1}`;
  }
}
