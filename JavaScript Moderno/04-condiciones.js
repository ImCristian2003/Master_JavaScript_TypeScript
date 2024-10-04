//Operador Ternario
let persona = ['Cristian', 18];

let edad = (persona[1] >= 18) ? "Es mayor de edad" : "Es menor de edad";

console.log(edad)

//Diferencia de == e ===, != y !==
/*
    == compara el resultado
    === compara resultado y tipo de dato
*/

let edad1 = 80;
let edad2 = "80";

console.log(
    (edad1 !== edad2  ? "Edades distintas" : "Edades iguales")
)