const btn = document.getElementById("submit");
const respuesta = document.getElementsByClassName("cantidad_numero")[0];
const devolver = document.querySelector("#mensaje div");
const devolver2 = document.querySelector("#mensaje .cantidad_numero");

var number = document.getElementsByClassName("numeros");
var conteo = 0;

for (let i = 0; i < 5; i++) {
  number[i].addEventListener("click", function () {
    number[i].classList.toggle("marcado");
  });
}

btn.addEventListener("click", function () {
  document.getElementById("select").classList.remove("mostrar");
  document.getElementById("select").classList.add("ocultar");

  document.getElementById("mensaje").classList.add("mostrar");
  document.getElementById("mensaje").classList.remove("ocultar");

  for (let index = 0; index < 5; index++) {
    if (number[index].classList == "numeros marcado") {
      conteo++;
    }
  }
  respuesta.textContent = `You Selected ${conteo} out of 5`;
});

devolver.addEventListener("click", function () {
  document.getElementById("select").classList.add("mostrar");
  document.getElementById("select").classList.remove("ocultar");

  document.getElementById("mensaje").classList.remove("mostrar");
  document.getElementById("mensaje").classList.add("ocultar");
  conteo = 0;
  for (let i = 0; i < 5; i++) {
    number[i].classList.remove("marcado");
  }
});
