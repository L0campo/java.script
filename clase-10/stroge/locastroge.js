if (typeof (Storage) !== 'undefined') {
    localStorage.setItem("nombre", "andres")
    console.log (localStorage.getItem("nombre"));
} else {
    close.log ("no soporto el estilo neutron digo el localStorage");
}