function mostrarMensajee(){
    console.log("Proyectando")
}

//El valor que devuelve la función debe ser any para evitar que marque error
function proyectar(constructor:Function){
    
    constructor.prototype.hacerProyeccion = function(activar:boolean):void{
        if(activar){
            console.log("Proyectando ", this.titulo)
        }else{
            console.log("Cerrado")
        }
    }

}

@proyectar
class Pelicula{

    constructor(
        public titulo:string,
        public genero:string
    ){}

}

let batman:any = new Pelicula("Batman Begins", "Acción")
batman.hacerProyeccion(true)