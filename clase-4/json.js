const camper = {
    nombre: "DIOMEDEZ",
    apellido: "Diaz",
    edad: 60,
    ocupacion: "cantante"
};


const mijson = JSON.stringify(camper); // JS -> JSON

console.log(typeof mijson);
console.log(mijson);

const strJson = '{"nombre": "Luis", "apellido":"Gomez", "edad": 34, "ocupacion": "ganadero"}';


const camper2 = JSON.parse(strJson); // JS <- JSON
console.log(typeof camper2);
console.log (camper2);