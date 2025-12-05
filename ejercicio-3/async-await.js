const inputNombre = document.getElementById("nombrepoke");
const nombreDisplay = document.getElementById("nompokemon");
const imagenDisplay = document.getElementById("imgpokemon");

async function consultar() {
    nombreDisplay.textContent = "";
    imagenDisplay.innerHTML = "";

    const nompoke = inputNombre.value.toLowerCase().trim();
    const url = `https://pokeapi.co/api/v2/pokemon/${nompoke}`;

    nombreDisplay.textContent = "Buscando el pokemon...";

    try { 
    const respuesta =  await fetch (url);
    if (!respuesta.ok) {
        throw new Error(`ERROR. Pokémon "${nompoke}" no encontrado`);
    }

    const datos = await respuesta.json();
    const nombreFormateado = datos.name.charAt(0).toUpperCase() + datos.name.slice(1);
    nombreDisplay.textContent = nombreFormateado;

    const rutaImg = datos.sprites.front_default;
    imagenDisplay.innerHTML = `<img src="${rutaImg}" alt="${datos.name}">`;
    } catch (error) {
        nombreDisplay.textContent = error.message;
    }

 }