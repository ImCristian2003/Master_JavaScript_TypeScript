window.addEventListener('online', () => {
    alert("Estás melo de internet")
})

window.addEventListener('offline', () => {
    alert("Gas ese internet")
})

alert(navigator.onLine)