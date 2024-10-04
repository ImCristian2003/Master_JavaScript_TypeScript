//Notificaciones
//Pedir permiso para el uso de notificaciones
if(Notification.permission !== "granted"){
    Notification.requestPermission()
}
console.log(Notification.permission)
//Crear la notifiación
let principal = "Soy una notificación"//Título notificación
let opciones = {
    body: "Cuerpo de la notificación",
    icon: "https://e7.pngegg.com/pngimages/347/417/png-clipart-logo-dragon-dragon-logo-fictional-character-graphic-designer.png"
}

const notificacion = new Notification(principal, opciones)

//Acción al darle click a la notificación
notificacion.onclick = (event) => {
    event.preventDefault()
    window.open("https://google.com")
}

//Tiempo expirable
setTimeout(() => {
    notificacion.close()
}, 5000)