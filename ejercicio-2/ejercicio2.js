

console.log("A-aparece")
console.log("B-aparece inmediatamente depues de A")

setTimeout(() => {
    console.log("C-aparece 5 seg despues de A")
},5000);

setTimeout(() => {
    console.log("f-aparece 7 seg despues de B")
},7000);



const min = 2000
const max = 5000


setTimeout(() => {
    console.log("D-aparece aleatoriamente 2-5")
},Math.floor(Math.random() * (max - min + 1)) + min);





