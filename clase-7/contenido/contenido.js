// 1.texContent
const miDiv = document.getElementById("miElemento");

miDiv.textContent = "<b>contenido modificado</b>";

// 2.innerHtml
miDiv.innerHTML = "<i>contenido modificado</i>"

// 3. nodeName
// devuelve el nombre del nodo como una cadena de texto.
// El nombre del nodo es el nombre de la etiqueta html
const elemMensaje = document.querySelector(".message");
console.log("nombre del nodo: ",elemMensaje.nodeName);


// 4.outerText
// el contenido del nodo
console.log("contenido de nodo\n", elemMensaje.outerText);
console.log("contenido del container:\n", 
    document.querySelector(".container").outerText
);

// 5.outerHTML

console.log("contenido de nodo\n", elemMensaje.outerHTML);
console.log("contenido del container:\n", 
    document.querySelector(".container").outerHTML
);

// 6.setHTML
// agrega de forma segura html a un elemento en el DOM.
const htmlcode = "<b>Mi nombre es campus Lands</b>";
elemMensaje.setHTMLUnsafe(htmlcode);