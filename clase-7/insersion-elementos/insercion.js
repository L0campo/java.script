// 1.appendChild()
// inserta un elemento nuevo como hijo
const miDiv = document.querySelector(".parent");

const parrafo = document.createElement("p");
parrafo.textContent = "Hoy es viernes :D";
miDiv.appendChild(parrafo);

const parrafo2 = document.createElement("p");
parrafo2.textContent = "pidan Tutorias ;)";
miDiv.insertBefore(parrafo2, miDiv.firstChild);


// 2. removeChild()

const parrHola = document.querySelector(".parent > p ~ p");
miDiv.removeChild(parrHola);

// 3.replaceChild(new, old)
const parrMensaje = document.querySelector(".message");
const parrNuevo = document.createElement("p");
parrNuevo.innerHTML = "<p><b><em>Mi nombre es Maximus tercero meridium</p></b></em>";
miDiv.replaceChild(parrNuevo, parrMensaje);

// 4.insertBefore(new, node)
// inserta un elemento nuevo antes de otro elemento.
// El elemento nuevo se agraga la lista de hijos del elemento anterior
const miBoton = document.createElement("button");
miBoton.textContent = "conquistar javaScript";
miDiv.insertBefore(miBoton, miDiv.firstChild); //null => firstChild, va de ultimo

// 5. before(), after(), prepend(), append()
// before: antes del container
// after: despues del container
// prepend: dentro y al inicio container
// append: dentro y al final container
const container = document.querySelector(".container");
const lineaNueva = document.createElement("hr");
const lineaNueva2 = document.createElement("hr");
container.before(lineaNueva);
container.after(lineaNueva2);

// 6. replaceChildren()
// reemplaza TOODS los hijos de un elemento por otro
function reemplazarhijos(){
    container.replaceChildren(parrNuevo);
}

// 7.replaceWitch()
// remplaza TODO un elemento por otro.
function reemplazarcontainer() {
    const pVelitas = document.createElement("p")
    pVelitas.textContent = "\u{1F956} belen campanas de belen \u{1F956}";
    container.replaceWith(pVelitas)
}