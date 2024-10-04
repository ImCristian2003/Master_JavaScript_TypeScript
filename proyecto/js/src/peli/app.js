import Add from './modules/add.js'
import List from './modules/list.js'
import Storage from './modules/storage.js'
import Search from './modules/search.js'

export default class App{

    constructor(){
        //Inicializar propiedades
        this.add = new Add()
        this.list = new List()
        this.storage = new Storage()
    }

    load(){
        //Añadir película
        this.add.peliSave()

        //Conseguir array objetos LocalStorage
        const pelis = this.storage.getData()

        //Listar película
        this.list.show(pelis)

        //Buscar película
        Search()

        console.log("La app ha sido inicializada...")
    }

}