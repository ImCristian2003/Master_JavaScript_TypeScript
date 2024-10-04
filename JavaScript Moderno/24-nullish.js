//Nullish coalescing operator

function multiplicacion(n1, n2){
    //Uso de condición ternaria
    n1 = (n1 == null ? 1 : n1)
    n2 = (n2 == null ? 1 : n2)

    //Uso del nullish, resumido
    n1 = n1 ?? 1
    n2 = n2 ?? 1

    return n1 * n2
}

function mostrarUsuario(id, nombre){
    id = id ?? 0
    nombre = nombre ?? "Usuario desconocido"

    return id + " " + nombre
}

console.log(multiplicacion(5, 5647))
console.log(mostrarUsuario(null, 'Cristian'))