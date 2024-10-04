console.log(navigator.geolocation)

//Conseguir posición del dispositivo
navigator.geolocation.getCurrentPosition(
    (position) => {
        console.log(position.coords.longitude)
    },
    error => {
        console.log("Error")
    }
)