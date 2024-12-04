var cont1 = 1; //variável pública criada fora da function
var img1 = "../img/Kawasaki_Ninja_e-1.png";
var img2 = "../img/Voltz_EVS.png";
var img3 = "../img/Shineray_SHE-S.png";
var tempo = 2000; //2000(milessegundos) : 1000 (milessegundo) = 2s
var exibir1 = setInterval("Exibindo1()", tempo);
// Inicia o looping trocando imagens de 2s em 2s

function Exibindo1() {
  document.images["slide1"].src = eval("img" + cont1);

  if (cont1 == 1) {
    /*document.getElementById("texto").style.backgroundColor="#ff0000";*/
    document.getElementById("titulo1").innerHTML = "Kawasaki Ninja e-1";
    document.getElementById("texto1").innerHTML =
      "é uma moto elétrica esportiva, que combina desempenho ágial, design aerodinâmico e tecnologia de pont apara uma pilotagem emocionante e sustentável.";
    cont1++;
  } else if (cont1 == 2) {
    document.getElementById("titulo1").innerHTML = "Voltz EVS";
    document.getElementById("texto1").innerHTML =
      "Moto elétrica compacta e eficiente, com design moderno e bateria de longa duração para o dia a dia urbano. <br>";
    cont1++;
  } else {
    document.getElementById("titulo1").innerHTML = "Shineray SHE-s";
    document.getElementById("texto1").innerHTML =
      "Moto elétrica potente e inoadora, oferecendo alto desempenho, zero emissões e baixo custo de manutenção <br>" ;
    cont1 = 1;
  }
}


var cont2 = 4; //variável pública criada fora da function
var img4 = "../img/imagem_car_cas1.jpg";
var img5 = "../img/imagem_car_cas2.jpg";
var img6 = "../img/imagem_car_cas3.jpg";
var exibir2 = setInterval("Exibindo2()", tempo);
// Inicia o looping trocando imagens de 2s em 2s

function Exibindo2() 
{
  document.images["slide2"].src = eval("img" + cont2);

  if (cont2 == 4) {
    /*document.getElementById("texto").style.backgroundColor="#ff0000";*/
    document.getElementById("titulo2").innerHTML = "Neo's";
    document.getElementById("texto2").innerHTML =
      "é uma moto elétrica esportiva, que combina desempenho ágial, design aerodinâmico e tecnologia de pont apara uma pilotagem emocionante e sustentável.";
    cont2++;
  } else if (cont2 == 5) {
    document.getElementById("titulo2").innerHTML = "Shineray SE3";
    document.getElementById("texto2").innerHTML =
      "Moto elétrica compacta e eficiente, com design moderno e bateria de longa duração para o dia a dia urbano";
    cont2++;
  } else {
    document.getElementById("titulo2").innerHTML = "Honda EM1";
    document.getElementById("texto2").innerHTML =
      "Moto elétrica potente e inoadora, oferecendo alto desempenho, zero emissões e baixo custo de manutenção";
    cont2 = 4;
  }
}
