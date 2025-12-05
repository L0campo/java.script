//Es una estructura con (llave y valor)

const artisculos = new Map();
artisculos.set("aguacate", 3000).set("banano", 700);

// acceder al valor de una llave
console.log(artisculos.get("banano"));

// existe de una llave
console.log(artisculos.has("mora"));

// borrar una llave
console.log (artisculos.delete("banano"));

// tamaño del mapa
console.log(artisculos.size);

// recorrelo

for (let [k, v] of artisculos) console.log(`${k} -> ${v}`);

artisculos.forEach((v, k) => console.log(`${k} -> ${v}`));


//solucion al problema del lanzamiento de dados

const dados = new Map();

let dado1, dado2, result;
for (let i = 1; i <= 10_000_000; ++i) {
    dado1 = Math.floor(Math.random() *6) +1;
    dado2 = Math.floor(Math.random() *6) +1;
    result = dado1 + dado2;

    dados.set(result, (dados.get(result) ?? 0 +1));
}

let mayor = 0, n;
for (let [num, veces] of dados.entries()) {
    if (veces > mayor)mayor =num, n = num;

}
console.log(n);

console.log(
    [...dados.entries()].reduce((a, b) => a[1] > b[1] ? a : b) [0]
);