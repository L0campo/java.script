const cajaNombre = document.getElementById("nombre");
const txtnombres = document.getElementById("txtnombres")

function limpiar() {
    txtnombres.value = "";
}

function agregar() {
    const nombres = txtnombres.value.trim();
    const vnombre =(nombres !== "") ? nombres.split
    ("\n") : [];
    const nuevoNombre = cajaNombre.value.trim();
    
    vnombre.push(nuevoNombre);
    vnombre.sort((a, b) => 
        (a.toLowerCase() === b.toLowerCase()) ? 0 :  
        (a.toLowerCase() > b.toLowerCase()) ? 1 :  -1
    );

    txtnombres.value = vnombre.join("\n");

    cajaNombre.value= ""

}