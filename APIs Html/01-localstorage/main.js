//Comprobar compatibilidad del navegador
if(typeof(Storage) == undefined){
    window.location.href = "google.com"
}

//Guardar datos en el navegador
localStorage.setItem("nombre", "Cristian Cardona")

//Recuperar datos del almacenamiento local
console.log(localStorage.getItem("nombre"))

//Borrar datos
localStorage.removeItem("nombre")