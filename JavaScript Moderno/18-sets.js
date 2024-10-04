//Crear un Set
//Los Set a diferencia de los objetos no añaden datos repetidos, los elementos son únicos
let gadgets = new Set(["movil", "tablet", "portatil"])

console.log(gadgets)

//Agregar elementos al Set
gadgets.add("Sapo")
gadgets.add("Cabeza e verga")

//Sacar el tamaño del Set
console.log(gadgets.size)

//Recorrer el Set
/*for(let item of gadgets){
    console.log(item)
}*/

//Imprimir con foreach
gadgets.forEach(item => console.log(item))

//Eliminarlos
gadgets.delete("movil")
gadgets.delete("Sapo")

console.log(gadgets.size)

//Comprobar existencia
console.log(gadgets.has("tablet"), gadgets.has("Sapo"))

//Limpiar el Set
gadgets.clear()

console.log(gadgets)