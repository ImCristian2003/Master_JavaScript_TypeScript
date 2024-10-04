let lista = document.querySelectorAll('#lista li')

lista.forEach(elemento => {
    let cont = elemento.dataset.continent
    elemento.innerHTML += " - " + cont
})