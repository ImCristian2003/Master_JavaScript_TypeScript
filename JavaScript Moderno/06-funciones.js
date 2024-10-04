function saludo(persona = 'Arnulfo'){
    
    return "Hola " + persona + ", te mando un beso en la cabeza de la mondá"

}

console.log(
    saludo('Cristian')
)

//Funciones Flecha
let saludo3 = nombre => "Hola " + nombre + ", te mando un beso en la cabeza de la mondá"

console.log(saludo3('Eduardo'))

let saludo4 = (nombre, pais) => "Hola " + nombre + ", te mando un beso en la cabeza de la mondá. " + pais

console.log(saludo4('Eduardo', 'Brasil'))

let saludo5 = (nombre, pais, continente) => {
    let saludo = "Hola " + nombre + ", te mando un beso en la cabeza de la mondá. " + pais + ", " + continente
    return saludo
}

console.log(saludo5('Carlos', 'Canadá', 'América'))

//JSON

let tienda = {

    nombre: 'Game',
    juegos: ['GTA', 'FIFA', 'GOD OF WAR'],
    mostrar(){

        this.juegos.forEach(juego => console.log(juego))

    }

}

console.log(tienda.mostrar())