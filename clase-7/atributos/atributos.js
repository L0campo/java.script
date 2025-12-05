// 1. getAttribute()
const enlace = document.getElementById
("miEnlace");

const url = enlace.getAttribute("href");
console.log("URL: " + url);

// 2. setAttribute()
enlace.setAttribute("href",  "https://campuslands.com/");

// 3. getAttributeNames() - recupera una lista detodos los nombres de los atributos de un elemento

console.log("Nombre de atributos", enlace.getAttributeNames())

// 4.toggleAttribute()
// sintaxis : elemento.toggleAttribute ("atributo", force); force: true agrega | force : false elimina | force: mome alterna

function alternarEnlace() {
    enlace.toggleAttribute("hidden") ?
    "Mostrar" : "ocultar";

//     if( enlace.hasAttribute("hidden")) {
//         document.getElementsByTagName("button")
//         [0].textContent = "Mostrar";
//     } else {
//         document.getElementsByTagName("button")
//         [0].textContent = "ocultar"
//     }
// 

    // 4. removeAttribute()
    enlace.removeAttribute("target")

}





