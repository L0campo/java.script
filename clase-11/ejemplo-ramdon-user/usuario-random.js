const apiUrl = "https://randomuser.me/api/?results=4";

async function getUsuarios() {
    try {
        const respuesta = await fetch(apiUrl);
        const data = await respuesta.json();

        console.table(data.results);

        const usuCotainer = document.querySelector(".user-container");

        data.results.forEach(usu => {
            const cajaUsu = crearTarjetaUsuario(usu);
            usuCotainer.appendChild(cajaUsu);
        });

    } catch (error) {
        console.error("Error al obtener los usuarios: " + error);
    }
}

function crearTarjetaUsuario(usu) {
    const { title, first, last } = usu.name;
    const { gender, email, phone } = usu;
    const img = usu.picture.large;
    const age = usu.dob.age;
    const { city, state, country } = usu.location;

    const nombreFull = `${title} ${first} ${last}`;

    const cajaUsu = document.createElement("div");
    cajaUsu.classList.add("user-box");

    const range = document.createRange();
    const frag = range.createContextualFragment(
        `<h2>${nombreFull}</h2>
        <img src="${img}" alt="${nombreFull}">
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Teléfono:</strong> <a href="tel:${phone}">${phone}</a></p>
        <p><strong>Edad:</strong> ${age}</p>
        <p><strong>Género:</strong> ${gender}</p>
        <p><strong>Ubicación:</strong> ${city}, ${state}</p>
        <p><strong>País:</strong> ${country}</p>`
    );

    cajaUsu.appendChild(frag);
    return cajaUsu;
}

getUsuarios();
