// 1.getElementById
const miElemento = document.getElementById('miElemento');
miElemento.innerHTML = 'Nuevo contenido para el elemento';


// .2getElementsClassName()
const miclases = document.getElementsByClassName("miclase")

for(let i = 0; i < miclases.length; i ++) {
    miclases[i].textContent =`Nuevo contenido para el div 
    ${i +1}`;
}


//3. getElementsByTagName()

let misDivs = document.getElementsByTagName("div")
for (let div of misDivs) {
    (div.our)
    if (div.textContent.includes("div")) {
        let texto = div.innerHTML;
        texto = texto.replace("div", "<b>div</b>");
        div.innerHTML = texto;

    }
}

// querySelector() -recupera el primer Elemento con la clase que se este buscando

const primerDiv = document.querySelector(".miclase");
primerDiv.innerHTML = `<em>${primerDiv.innerHTML}</em>`

// querySelectorAll() -recupera todos los elementos Html que coincidad con un selector css especificado

misDivs = document.querySelectorAll(".miclase");
misDivs.forEach(element => {
    element.style.color = "tomato";
    element.style.fontSize = "1.2em";
    });