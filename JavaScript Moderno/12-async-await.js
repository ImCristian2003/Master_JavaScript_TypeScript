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

        setTimeout(() =>{
            resolve('Cristian')
        }, 3000)

    })
    
}

function conseguirNombre(){

    //Crear promesas -> Tiene como fin devolver un resultado que tenga un delay
    return new Promise((resolve, reject)=>{

        console.log('Cargando...')

        setTimeout(() =>{
            resolve(productos)
            reject(Error('Ocurrió un error!!'))
        }, 3000)

    })
    
}

async function getMisProductos(){

    try{

        console.log('Cargando Información')

        let informacion = await Promise.all([conseguirProductos(), conseguirNombre()])

        console.log(informacion[0], informacion[1])
    }catch(error){
        console.log(error.message)
    }
    console.log('Fuera del try')
}

getMisProductos()

