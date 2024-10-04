//Uso normal de los tipos
function saludo(nombre:string):string{
    return `La mala pa ${nombre}`
}

console.log(saludo("Checho"))

//Nada / Void
function mostrarFecha():void{
    console.log("29/08/2024")
}

//finApp()

mostrarFecha()

//Never / Fin de la aplicación
function finApp():never{
    throw new Error("Aplicación finalizada");
}

//Parametros en funciones -> opcionales

function mostrarPais(pais:string, continente?:string):string {
    return `La buena pa ${pais}, ${continente}` 
}

console.log(mostrarPais("Brasil", "Sudamérica"))

//Tipo función
 let grupos: (datos:string[]) => string

 grupos = function(datos:string[]){

    return "Mis grupos favoritos son " + datos.toString()

}
console.log(grupos(["Doble Porción", "Duki"]))

//Tipo personalizado o alias
type traje = "especial" | 1 | 2 | 3 | 4

//Tipo literal -> información que yo parametrice
function tekken(personaje:string, atuendo: traje):string{
    return `El personaje es ${personaje} y el atuendo ${atuendo}`
}