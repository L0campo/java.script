// ARRYS

const paises = new Array (5);
paises [0] = "colombia";
paises [1] = "venezuela";
paises [2] = "Ecuador";

 // recorrido por indice

 for (let i=0; i < paises.length; i++ ) {
    console.log(paises[i]);
 }




// Declaracion literal ([])

const frutas= [] // array vacio
const mixto = ["papas", "patacones", "chicharron", "arepas" ];

//Declaracion xon la arrray y elementos espesificos

const frutasExotica = new Array ("kiwi", "chontaduro", "granada");

// Declaracion con Array.from()

const letras = Array.from("HOLA"); //["h", "o", " l", "a"]



// Declaracion con Array.of

const numeros = Array.of (7) //[7]
const numeros2 = Array.of (5,10,20) // [5, 10, 20] 


// Recorrido de los Arrays por los elementos

for(let fe of frutasExotica) {
    console.log(fe);
}

// metodos de los Arrays

// Metodo Push : Agraga el final

numeros.push(13);
console.log(numeros);

// Metodo unshift : metodo agraga al inicio

numeros.unshift(80);
console.log(numeros);

// Metodo pop : metodo elimina el ultimo elemento

numeros.pop();
console.log(numeros);

// metodo shift : elimina el primer elemento
numeros.shift();
console.log(numeros);


// metodos funcionales

//metodo map
// recorre el Array y crea uno nuevo aplicandole una funcion a cada elemento

console.log(frutasExotica.map(fruta=> fruta.toUpperCase() ));


// METODO FILTER

// crea un nuevo array con todos los elementos que cumplen la condiocion de una funcion

console.log(
    frutasExotica.filter(f => f.endsWith("a"))
);

console.log(
    frutasExotica.filter(f => f. length > 5)
);


console.log(
    frutasExotica.filter(f => {
        let catidadVocales = 0;
        for(let letra of f){
            switch(letra){
                case "a":
                case "b":
                case "i":
                case "o":
                case "u":
                    ++catidadVocales;
                    break;
            }
        }
        return catidadVocales > 3;
    })
);


// foreach
// ejecuta una funcion por cada  elemento del arraye
/*
emais.foreach (e => enviarEmail(e));
*/

frutasExotica.forEach(f => console.log(f.toUpperCase()));

// some
// verisica si al menos un elemto cumple con la condicion

console.log(
    frutasExotica.some(f => f. length > 5)
);

// every
// verifica si todos cumplen con una la condicion

console.log(
    frutasExotica.every(f => f. length > 5)
);

// find ()

// busca y devuelve el primer elemento que cumpla con la condicion

console.log(
    frutasExotica.find(f => f. length > 5)
);