//Molde
class Coche{

    //Propiedad pública
    npuertas = 4

    //Propiedad privada
    #npuertas1 = 8

    //Propiedad pública
    npuertas2 = 4

    constructor(marca, modelo, color, velocidad, anio){

        //Propiedades o Atributos
        this.marca = marca
        this.modelo = modelo
        this.color = color
        this.velocidad = velocidad
        this.anio = anio

    }

    //Metodos o acciones
    subirVelocidad(){
        this.velocidad += 1
    }

    bajarVelocidad(){
        this.velocidad -= 1
    }

    //Metodos SET y GET
    setMarca(marca){
        this.marca = marca
    }

    getMarca(){
        return this.marca
    }

    //Metodo que se debe crear para acceder a las propiedades
    numeroPuertas1(){
        return this.#npuertas1
    }

    //Método estático
    static saludar(nombre){
        return "Hola " + nombre
    }
    
}

//Crear objeto

let mi_coche = new Coche('Mazda', 'Mazda 3', 'Negro', 10, '2024')
mi_coche.subirVelocidad()

mi_coche.setMarca('Audi')

//console.log(mi_coche.getMarca() , mi_coche.anio, mi_coche.velocidad)

//Acceder a una propiedad pública
//console.log(mi_coche.numeroPuertas1())

//Herencia
class Quad extends Coche{

    constructor(marca, modelo, color, velocidad, anio, cilindraje){

        //Super sirve para utilizar las propiedades de la clase padre y poder añadir propiedades a la clase hija
        super(marca, modelo, color, velocidad, anio, cilindraje)

        this.cilindraje = cilindraje

    }

}

let mi_quad = new Quad()

console.log(mi_quad)