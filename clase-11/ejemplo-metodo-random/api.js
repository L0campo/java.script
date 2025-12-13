const API_URL = "http://localhost:3000/campers";

// Metodo GET
 export async function obtenerTodosCampers(param) {

    try{ 
    const respuesta = await fetch(API_URL);

    if (!respuesta.ok) {
        throw new Error (
            "error Get :", respuesta.status, respuesta.statusText)
    }

    const campers =await respuesta.json();
    return campers;
    
 } catch (error) {
    console.error(error);
    throw error

 }
}

export async function  createCamper(camper ) {
   try {
      const respuesta = await fetch(API_URL, {
         metodo: "POST",
         headers: {"Content-Type": "application / json",           
          },
          body: JSON.stringify(camper)
      });

      if (!respuesta.ok){
         throw new ("error al crear campers" + respuesta.status);
      }

      const camperCreado = await respuesta.json();
      console.table(camperCreado);

      return camperCreado;

   } catch (error) {
      console.log(`Error: `)
      throw error;
   }
}