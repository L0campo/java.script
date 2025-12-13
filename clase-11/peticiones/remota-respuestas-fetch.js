const fectRes = fetch("https://jsonplaceholder.typicode.com/todos/1");

fectRes
    .then(res => res.json())
    .then(datos => console.log(datos))
    .catch((error) => console.error("ERROR :" + error));


async function getData (){

    try {
        const result =  await fetch (
            "https://jsonplaceholder.typicode.com/todos/1"
        );

        const respuesta = {
            status : result.status,
            statusText: result.statusText,
            ok: result.ok,
            url: result.type,
            Headers: result.Headers
        };

        console.table(respuesta);

        console.log("\n==================================\n")

        if (result.ok) {
            const datos = await result.json();
            console.table(datos);
        }


        const datos = await result.json();
        console.log(datos);
    } catch (error) {
        console.error("ERROR :" + error);
    }

}

setTimeout(getData, 2000);