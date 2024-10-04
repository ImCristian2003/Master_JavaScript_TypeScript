export function imprimirArray(datos){

    datos.forEach(dato => {
        console.log(dato)
    });

}

export  function mostrarNombre(nombre){
    console.log(nombre)
}

export default {
    imprimirArray,
    mostrarNombre
}