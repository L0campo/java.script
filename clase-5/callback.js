// Callback es una funcion que recide comoparametro o devueleve otra funcion

//Ejemplo
//calculadora dinamica

//function calcular(number ,number, function)
function calcular(precio,cantidad, funCallback) {
    console.log (`\ncalculando ${cantidad} productos de $${precio.toLocaleString(`es-CO`)}`);
    funCallback(precio,cantidad);
}

const conIva = (precio, cant) => {
    const total = precio * cant * 1.19;
    console.log(`Total con IVA: $${total.toLocaleString(`es-CO`)}`);
}

const conDescuento = (precio, cant) => {
    const total = precio * cant * 0.85;
    console.log(`Total con 15% descuento: $${total.toLocaleString(`es-CO`)}`);
}
calcular(45000, 2, conIva);
calcular(45000, 2, conDescuento);