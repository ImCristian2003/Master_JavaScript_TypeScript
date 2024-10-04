"use strict";
let personas = ["Cristian", "Alejandro"];
personas.push("Dilan");
console.log(personas);
//Tuplas -> Array de datos variados ya definidos
let pelicula = ["Avengers", true, 2010];
//Enum - Enumeración -> Son datos definidos como si fueran una constante, no se pueden Setear
var DatosPersonales;
(function (DatosPersonales) {
    DatosPersonales["nombre"] = "Cristian";
    DatosPersonales["dni"] = "1006784763";
    DatosPersonales["direccion"] = "Calle 32 #18-31";
})(DatosPersonales || (DatosPersonales = {}));
//Cast o conversión de datos
let unknow = 51232;
let result = unknow; //-> forzar la conversión a string
