let personas:string[] = ["Cristian", "Alejandro"]

personas.push("Dilan")

console.log(personas)

//Tuplas -> Array de datos variados ya definidos
let pelicula:[string, boolean, number] = ["Avengers", true, 2010]

//Enum - Enumeración -> Son datos definidos como si fueran una constante, no se pueden Setear
enum DatosPersonales {
    nombre = "Cristian",
    dni = "1006784763",
    direccion = "Calle 32 #18-31"
}

//Cast o conversión de datos
let unknow:any = 51232

let result:string = <string> unknow //-> forzar la conversión a string