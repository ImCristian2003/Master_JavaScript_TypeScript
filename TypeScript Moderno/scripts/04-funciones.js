"use strict";
//Uso normal de los tipos
function saludo(nombre) {
    return `La mala pa ${nombre}`;
}
console.log(saludo("Checho"));
//Nada / Void
function mostrarFecha() {
    console.log("29/08/2024");
}
//finApp()
mostrarFecha();
//Never / Fin de la aplicación
function finApp() {
    throw new Error("Aplicación finalizada");
}
//Parametros en funciones -> opcionales
function mostrarPais(pais, continente) {
    return `La buena pa ${pais}, ${continente}`;
}
console.log(mostrarPais("Brasil", "Sudamérica"));
//Tipo función
let grupos;
grupos = function (datos) {
    return "Mis grupos favoritos son " + datos.toString();
};
console.log(grupos(["Doble Porción", "Duki"]));
//Tipo literal -> información que yo parametrice
function tekken(personaje, atuendo) {
    return `El personaje es ${personaje} y el atuendo ${atuendo}`;
}
