class Coche{

    /*marca:string
    modelo:string
    encendido:boolean

    constructor(
        marca:string,
        modelo:string,
        encendido?:boolean
    ){ 
        this.marca = marca
        this.modelo = modelo
        this.encendido = false
    }*/

    //Publica: Accesible desde cualquier parte
    //Privada: Accesible dentro de esta clase solamente, desde un método
    //Protegida: Accesible desde la clase y clases hijas
    encendido:boolean

    constructor(
        public marca:string,
        public modelo:string
    ){
        this.encendido = false
    } 

    //Método que no devuelve nada
    arrancar():void{
        this.encendido = true
    }

}

//Asignar el tipo de dato de una clase a una variable
let mi_coche:Coche = new Coche("BMW", "X3 2024")

console.log(mi_coche)