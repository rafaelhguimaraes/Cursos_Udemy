class Cachorro{
    constructor(raca,patas) {
        this.raca = raca
        this.patas = patas
    }
    // declaraçãop de métodos em JS para uma classe
    latir(){
        console.log("aaaaaaaaauuuuuuuuuuuuuuuuauuuuuuuuuuuuu")
    }

}


Cachorro.prototype.raca = 'SRD'     // Define o padrão para algum tipo
console.log(Cachorro.prototype.raca)
let labrador = new  Cachorro('Labrador')
console.log(labrador.raca )
//labrador.latir()

// Define o Symbol para algum atributo de classe utilizando Symbol
let patas = Symbol()
Cachorro.prototype[patas] = 4
console.log(Cachorro.prototype[patas])