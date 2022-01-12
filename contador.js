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
    window.alert("Faltam dados");
  } else {
    res.innerHTML = "Contando => ";
    var i = Number(inicio.value);
    var f = Number(fim.value);
    var p = Number(passo.value);

    for (var c = i; c <= f; c += p) {
      res.innerHTML += `${c} \u{1F4A8}`;
    }
  }
}
