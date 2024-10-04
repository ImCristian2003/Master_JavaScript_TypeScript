const coche = (function(){

    let _marca, _velocidad = 0, _nro_puertas

    function setMarca(marca){
        _marca = marca
    }

    function getMarca(){
        return _marca
    }

    function acelerar(){
        _velocidad++

        return _velocidad
    }

    function frenar(){
        _velocidad--

        return _velocidad
    }

    return {
        setMarca,
        getMarca,
        acelerar,
        frenar
    }

})()
  
coche.setMarca('Mercedez')

let velocidadMax = 50

for (let i = 0; i <= velocidadMax; i++) {
    
    coche.acelerar()
    
} 

coche.frenar()
coche.frenar()
coche.frenar()

console.log(coche.getMarca())
console.log(coche.acelerar())