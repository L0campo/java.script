const inputNombre = document.getElementById("nombrepoke");
const nombreDisplay = document.getElementById("nompokemon");
const imagenDisplay = document.getElementById("imgpokemon");

function consultar() {
    nombreDisplay.textContent = "";
    imagenDisplay.innerHTML = "";

    const nompoke = inputNombre.value.toLowerCase().trim();
    const url = `https://pokeapi.co/api/v2/pokemon/${nompoke}`;

    nombreDisplay.textContent = "Buscando el pokemon...";

    fetch(url)
        .then(respuesta => {
            if (!respuesta.ok) {
                throw new Error(`ERROR. Pokémon "${nompoke}" no encontrado`);
            }
            return respuesta.json();
        })
        .then(datos => {
            const nombreFormateado = datos.name.charAt(0).toUpperCase() + datos.name.slice(1);
            nombreDisplay.textContent = nombreFormateado;

            const rutaImg = datos.sprites.front_default;
            imagenDisplay.innerHTML = `<img src="${rutaImg}" alt="${datos.name}">`;
        })
        .catch(error => {
            nombreDisplay.textContent = error.message;
        });
}
