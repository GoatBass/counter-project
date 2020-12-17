// Tu código aquí

//Contador a incrementar y disminuir
let counter = 0;

//Boton de incrementar assignado
let plusNum = document.querySelector(".nextBtn");
//Boton de disminuir assignado
let minusNum = document.querySelector(".prevBtn");

//Event listener al hacer click, nos aumenta el contador y luyego lo printa
//en el selector con id counter
plusNum.addEventListener("click", function () {
  counter++;
  document.querySelector("#counter").innerHTML = counter.toString();
});

//Event listener al hacer click, nos disminuye el contador y luyego lo printa
//en el selector con id counter
minusNum.addEventListener("click", function () {
  counter--;
  document.querySelector("#counter").innerHTML = counter.toString();
});
