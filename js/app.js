// Tu código aquí

//Contador a incrementar y disminuir
let counter = 0;
let counterSelector = document.querySelector("#counter");

//Boton de incrementar assignado
let plusNum = document.querySelector(".nextBtn");
//Boton de disminuir assignado
let minusNum = document.querySelector(".prevBtn");

//Event listener al hacer click, nos aumenta el contador y luyego lo printa
//en el selector con id counter
plusNum.addEventListener("click", function () {
  counter++;
  counterSelector.innerHTML = counter.toString();
  colorNum();
});

//Event listener al hacer click, nos disminuye el contador y luyego lo printa
//en el selector con id counter
minusNum.addEventListener("click", function () {
  counter--;
  counterSelector.innerHTML = counter.toString();
  colorNum();
});

function colorNum() {
  if (counter < 0) {
    counterSelector.style.color = "red";
  } else if (counter === 0) {
    counterSelector.style.color = "#333333";
  } else {
    counterSelector.style.color = "green";
  }
}
