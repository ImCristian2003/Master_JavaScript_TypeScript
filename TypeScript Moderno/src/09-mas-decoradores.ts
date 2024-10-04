//Decorador aplicado a un método
function info(target:object, propertyKey:string, descriptor:any){//Parametros requeridos
    console.log(target)
    console.log(propertyKey)
    console.log(descriptor)
}

class Ordenador{

    @info
    encender(mensaje:string){
        console.log("Encendiendo")
        console.log(mensaje)
    }

}