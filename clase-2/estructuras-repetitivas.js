/* For

    sintaxis
    for(inicializacion; parada ; incre,mento){
    expresiones;
    }

    EJEMPLO:
    imprima la tabla de multiplicar de un numero dado.
*/

let num = 7

for (let i=1; i< 10; i=i+1){
    console.log(`${num} * ${i} = ${num * i}`);
}

/*
    FOR .. OF

    sintaxis
    se usa para recorrer array, vectores o string

    for (let elemento of array) {
    expresiones;
    }

    EJEMPLO
    Imprimir las consonantes de una frase.
*/

let frase = "sintaxis";

let frase_min = frase.toLowerCase ();

let frase_result = ""

for (let letra of frase_min) {
    switch (letra){
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            break
        default :
        frase_result += letra;
    }
}

console.log(frase_result)

/* for .. in

    sintaxis
    se usa para recorrer las propiedades de un objeto

    for (let clave in objeto){
        expresiones;
    }
*/

/* while

    Sintaxis
    while (condicion){
    expresiones
    }

    ejemplo

    preguntar por la contraseña hasta que se diguite la correcta
*/

let contrasena = "123"
let secreto = "sintaxis"
let i= -1;
let pal = ""

while (contrasena !== "sintaxis"){
    console.log("Error. contraseña invalida. vuelva a intentar");
    pal += secreto.charAt(++i);
    contrasena = pal;
    

}
console.log ("bienvenido a la sala de los famosos");

/* do while

    sintaxis
    primero hace luego evalua

    do {
    expreciones
    } while (condicion)
*/

i = -1
pal = ""
contrasena = "                                                                                                                                                                                  "
do {
    console.log("Error. contraseña invalida. vuelva a intentar");
    pal += secreto.charAt(++i);
    contrasena = pal;

} while (  contrasena !== "sintaxis");