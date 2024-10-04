//Objeto JSON
const antiguos_gadgets = {
    cuatro: "Radio Casette",
    cinco: "Telefono sobremesa",
    seis: "Compac disc"
}

//Los Maps crean objetos con valores únicos pero solo a nivel de índice, más no de valor
const gadgets = new Map(Object.entries(antiguos_gadgets))

gadgets.set(1, "iPhone")
       .set(2, "Tablet")
       .set(3, "PC")

//Acceder a un elemento en específico
console.log(gadgets)