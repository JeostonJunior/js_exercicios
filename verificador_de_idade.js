function verificar() {
  var date = new Date();
  var anoAtual = date.getFullYear();

  var anoNascimento = window.document.getElementById("txtano");
  var res = window.document.getElementById("res");

  if (
    anoNascimento.value.length == 0 ||
    Number(anoNascimento.value > anoAtual)
  ) {
    alert("Verifique os dados e tente novamente ");
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = anoAtual - Number(anoNascimento.value);
    var genero = "";

    var img = document.createElement("img");

    img.setAttribute("id", "foto");

    if (fsex[0].checked) {
      genero = "Homem";
      if (idade >= 0 && idade <= 12) {
        //Criança
        img.setAttribute(
          "src",
          "https://d8vlg9z1oftyc.cloudfront.net/marlanmalhas/image/product/28a0ea3158f919f28bce3d51049f222220200921102752/original/conjunto-bebe-masculino-pb-a-ggb-1-2-3-4-5-6-7-8-9-10-11-12-13-14-15-16_1066.jpg"
        );
      } else if (idade > 12 && idade <= 30) {
        //Jovem
        img.setAttribute(
          "src",
          "https://i.pinimg.com/736x/0e/a0/ec/0ea0ec1dfa8caa836169aa3e9212b30e.jpg"
        );
      } else if (idade > 30 && idade <= 50) {
        //Adulto
        img.setAttribute(
          "src",
          "https://images.tcdn.com.br/img/img_prod/485779/pijama_adulto_masculino_mixte_listrado_cinza_em_modal_9748_963_1_20200624150135.jpg"
        );
      } else {
        //idoso
        img.setAttribute(
          "src",
          "https://portaldrauziovarella.nyc3.digitaloceanspaces.com/wp-content/uploads/2011/11/31000013/201902_drauzio_idoso-homem_178957924_NatashaFedorova_1000x563.jpg"
        );
      }
    } else if (fsex[1].checked) {
      genero = "Mulher";
      if (idade >= 0 && idade <= 12) {
        //Criança
        img.setAttribute(
          "src",
          "https://699028l.ha.azioncdn.net/img/2020/04/produto/10019/1/large/conjunto-bebe-menina-0071.jpg"
        );
      } else if (idade > 12 && idade <= 30) {
        //Jovem
        img.setAttribute(
          "src",
          "https://i.pinimg.com/236x/ef/f9/97/eff997de73e9a5fde63e5aebb062a854--fashion-moda-physalis.jpg"
        );
      } else if (idade > 30 && idade <= 50) {
        //Adulto
        img.setAttribute(
          "src",
          "https://7999028l.ha.azioncdn.net/img/2021/01/produto/617/1/large/pijama-de-pizza-feminino-adulto-curto-de-algodao-mania-pijamas-1.jpg"
        );
      } else {
        //idoso
        img.setAttribute(
          "src",
          "https://fdr.com.br/wp-content/uploads/2021/05/como-cuidar-da-saude-do-idoso-1200x900.jpg"
        );
      }
    }
    res.style.textAlign = "center";
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
    res.appendChild(img);
  }
}
