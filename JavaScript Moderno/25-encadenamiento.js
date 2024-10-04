let persona = {
    nombre: 'Cristian',
    apellidos: 'Cardona',
    dirección: {
        pais: 'Colombia',
        ciudad: {
            nombre: 'La Ceja',
            departamento: 'Antioquia'
        }
    }
}

//Encadenamiento opcional

let comprobar = (persona?.dirección?.ciudad?.departamento) == undefined ? false : true

console.log(comprobar)