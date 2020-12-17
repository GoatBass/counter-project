// Tu código aquí
let counter = 0;
let plusNum = document.querySelector(".nextBtn");
let minusNum = document.querySelector(".prevBtn");

plusNum.addEventListener("click", function () {
  counter++;
  document.querySelector("#counter").innerHTML = counter.toString();
});

minusNum.addEventListener("click", function () {
  counter--;
  document.querySelector("#counter").innerHTML = counter.toString();
});
