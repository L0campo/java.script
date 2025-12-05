// conjutos: son  estructuras de datos
// sin elementos repetidos y en teoria no ordenados

const frutas = new Set (["mango", "banano", "lulo", "guayaba", "mora", "banano"]);

frutas.add("anon").add("aguacate").add("tomate").add("aguacate");

console.log(typeof frutas);
console.log(frutas);


//si esxiste
console.log(frutas.has("aguacate"));


// borrra un elemento
console.log(frutas.delete ("aguacate"));


// Tamaño del conjunto
console.log(frutas.size());

for (let fruta of frutas.values())
    console.log (fruta);

//frutas.foreach(f => console.log(f));

frutas.clear();
console.log(frutas);
frutas = null;
console.log(frutas)
