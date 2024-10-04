//interface -> Es un contrato, o una estructura que define qué debe tener la clase a la que se le implemente

interface VideoJuego{
    titulo:string
    categoria:string
    edad:number
    duracion?:number//Propiedad opcional
    lanzado?:boolean//Propiedad opcional
    mostrar():void
    actualizar(consola:string):string
}

//Interface a nivel de objeto
let gta:VideoJuego = {
    titulo: "GTA V",
    categoria: "Acción",
    edad: 18,
    duracion: 200,
    lanzado: true,
    mostrar() {
        console.log(this.titulo + " " + this.categoria)
    },
    actualizar(consola){
        return "Actualizado"
    }
}

//Interface a nivel de Clase

class FIFA implements VideoJuego{

    constructor(
        //Se deben definir las propiedades como públicas para poder acceder a ellas con el this
        public titulo:string,
        public categoria:string,
        public edad:number,
        public duracion?:number,//Propiedad opcional
        public lanzado?:boolean//Propiedad opcional
    ){}

    mostrar():void{
        console.log(this.titulo + " " + this.categoria)
    }

    actualizar(consola:string){
        return "Actualizado"
    }

}

let fifa23 = new FIFA("FIFA 23", "Deportes", 12, 210, true)

console.log(fifa23)