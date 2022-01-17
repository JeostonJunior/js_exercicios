function tabuada() {
  var num = document.getElementById("txtnum");
  var tab = document.getElementById("seltab");
  var n = Number(num.value);
  var tabuada = "";

  if (num.value.length == 0) {
    window.alert("Por favor, digite um número válido!");
  } else {
    /*
    //var n = Number(num.value);
    //var c = 1;
    
    tab.innerHTML = "";
    while (c <= 10) {
      var item = document.createElement("option");
      item.text = `${n} x ${c} = ${n * c}`;
      item.value = `tab${c}`;
      tab.appendChild(item);
      c++;
    }*/

    for (var c = 1; c <= 10; c++) {
      tabuada += `${n} x ${c} = ${n * c} <br/>`;
    }
    tab.innerHTML = tabuada;
  }
}
