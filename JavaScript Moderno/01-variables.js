//EcmaScript

//Variables: var, let, const


//Variable de ambito global
var nombre = "Cristian";

function mostrarNombre(){
    var nombre = "Cardona"
    console.log(nombre);
}

mostrarNombre();

console.log(nombre);

//let: Ámbito de bloque
let pais = 'Colombia';

console.log(pais)

if(pais == 'Colombia'){

    let continente = 'Sur America';
    console.log(continente);

}

//console.log(continente); -> Solo se puede usar la variable en el bloque definido (Ahorro de memoria)

//Variable constante
const pi = 3.1415;

console.log(pi)

