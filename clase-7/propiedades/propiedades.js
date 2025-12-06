//1. classList.length
const miDiv = document.getElementById("miElemento")
console.log("cantidad de clase del DIV", miDiv.classList.length);

// 2. classList y class.value
console.log("clases edl DIV: ", miDiv.classList.value);

// 3. classList.item(n)
console.log("segunda clase del DIV:", miDiv.classList.item(1));

// 4.classList.contains - verifica si una clase esta en lista de clases
console.log("Esta la clase  `clase3` en el DIv?: ", miDiv.classList.contains("clases3"));


// 5.classList.Add

miDiv.classList.add("clase3")

// 6.classList.remove
miDiv.classList.remove("clase1", "clase2")


// 7.classList.toggle()
// alterna la presencia de una clase en los atributos de un elemento HTML. si existe, borra la clase. si no existe la clase, crea la clase

function toggleClass() {
    miDiv.classList.toggle("clase4");
    console.log(miDiv.classList);
}

// classList.replace(old, new)

miDiv.classList.replace("clase3","clase5");