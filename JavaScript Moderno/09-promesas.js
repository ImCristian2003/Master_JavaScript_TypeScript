let productos = [
    {
        nombre: 'Arroz',
        marca: 'Roa',
        precio: 1500
    },
    {
        nombre: 'PC Gamer',
        marca: 'ASUS',
        precio: 10000000
    },
    {
        nombre: 'Tablet',
        marca: 'Lenovo',
        precio: 1000000
    }
]

function conseguirProductos(){

    //Crear promesas -> Tiene como fin devolver un resultado que tenga un delay
    return new Promise((resolve, reject)=>{
        console.log('Cargando')
        setTimeout(() =>{
            //resolve(productos)
            reject(Error('Ocurrió un error!!'))
        }, 1500)

    })
    
}

function productoComprado(){
    return new Promise((resolve, reject) => {

        console.log('Haciendo la compra')

        setTimeout(() =>{

            resolve({
                producto: 'PC Gamer',
                cliente: 'Cristian'
            })
            //reject(Error('Ocurrió un error!!'))

        }, 1000)

    })
}

//Recoger resultado del resolve de la promesa
/*conseguirProductos()
    .then(items => console.log(items))//Recibe el Resolve
    .catch(error => console.log(error.message))//Recibe el reject o error
    .finally(() => console.log('Promesa FINALIZADA'))//Mensaje cuando finaliza la promesa
    */

conseguirProductos()
    .then(items => {
        console.log('Productos disponibles: ', items)
        return productoComprado()
    })//Recibe el Resolve
    .then(venta => {
        console.log('Producto comprado: ', venta)
    })
    .catch(error => console.log(error.message))//Recibe el reject o error
    .finally(() => console.log('Promesa FINALIZADA'))//Mensaje cuando finaliza la promesa