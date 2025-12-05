//1. classList.length
const miDiv = document.getElementById("miElemento")
console.log("cantidad de clase del DIV", miDiv.classList.length);

// 2. classList y class.value
console.log("clases edl DIV: ", miDiv.classList.value);

// 3. classList.item(n)
console.log("segunda clase del DIV:", miDiv.classList.item(1));

// 4.classList.contains - verifica si una clase esta en lista de clases
console.log("Esta la clase  `clase3` en el DIv?: ", miDiv.classList.contains("clases3"));