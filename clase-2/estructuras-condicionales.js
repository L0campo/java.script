// ESTRUCTURAS CONDICIONALES

//IF
//sintaxis

/*
   if (condicion){
   instrucion};

   ejemplo
*/

let edad = 17

if (edad >= 18){
    console.log("es mayor de edad");
}

//IF - ELSE
/*
        Sintaxis
        if (condicion){
        expreciones-verdadero};

        else {
        expresion-falso;
    }

*/

edad = 22;
if (edad >= 18) {
    console.log("es mayor de eadad") ;

}
else {
        console.log("es mayor");
    }
//IF -ELSE IF -ELSE IF .... - ELSE

/*
Sintaxis

if (condicion){
 exprecion 1}

 else if (condicion 2){
  ecprecion 2}

  ....
  else{
  expresoin-else;
}
 ejemplo: imprimir el mensaje correspondiente  (niño,adolecente, adulto, adulto mayor)
*/

edad = 38 ;

if (edad > 59) {
    console.log ("es un adulto mayor");
} else if (edad > 17){
    console.log ("adulto");
} else if (edad > 14 ){
    console.log ("adolecente");
} else {
    console.log("niño");
}

// OPERADOR TERNARIO ?
/*
 Sintaxis
 (condicion) ? Expresion-verdadera : exprecion-falsa
*/

(edad > 59) ? console.log("es un adulto mayor "):
    (edad > 17) ? console.log("es un adulto"):
        (edad > 14)? console.log (" es un adolecente"):
            console.log("es un niño");


// SWITCH
/*
sintaxis

    switch(variable){
        case valor1:
            exprecion1;
            break;
        
       case valor2:
            exprecion2;
            break;

        case valor3:
            exprecion3;
            break;  
            
            
        default:
            expresion-deafault;    
      
}       
*/

let valDia = 7;
switch (valDia) {
    case 1:
        console.log("Domingo")
        break;
    
    case 2:
        console.log("Lunes")
        break;

    case 3:
        console.log("Martes")
        break;

    case 44:
        console.log("Miercoles")
        break;

    case 5:
        console.log("jueves")
        break;

    case 6:
        console.log("viernes")
        break;

    default:
        console.log("sabado");
}