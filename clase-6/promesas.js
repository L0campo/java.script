// Promesas

/*
    sisntaxis

    1. DECLARACION
    const miPromesa = new promisse((resolve , reject) => { ... });

    2. EJECUCION 
    miPromesa
        .then(resuelve => { ... })
        .catch(Error => { ... });
*/


// Cosnstrucion de la promesa
const miPromesa = new Promise((resolve, reject) => {
    const exito = true

    if (exito) {
        console.log("Esperando...")
        setTimeout(() => resolve("promesa cumplida"), 2000);
    } else {
        reject("promesa rechazada")
    }
});

// Ejecucion de la promesa

miPromesa
    .then(respuesta => {
        console.log("no hubo errores en la promesa");
        console.log(respuesta);
    }) .catch(error => {
        console.log("error en la promesa")
        console.log(error);
    })