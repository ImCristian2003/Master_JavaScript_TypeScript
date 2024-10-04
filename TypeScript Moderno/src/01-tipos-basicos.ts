//Tipos de datos básicos -> después del valor definido no se puede asignar un valor diferente
//Las variables son globales a nivel de proyecto, por lo cuál no se pueden repetir
let texto:string = "Qué se dice"
let numero:number = 12.6
let valor:any = "Hablalo"//Este tipo de dato sí puede variar

//Tipo de dato desconocido -> La diferencia con any es que no se puede asignar una variable unknown a otra variable
let cualquiera:unknown = "Puedo variar"

console.log( numero)