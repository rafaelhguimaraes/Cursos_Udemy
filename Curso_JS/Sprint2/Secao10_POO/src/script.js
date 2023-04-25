// inicialização de conteúdo de classes

let cachorro = {
    raca: 'Pastor ',
    setRaca(raca){
        this.raca = raca;
    },
    getRaca(){
        return "A raça é " + this.raca;
    },
    latir(){
        console.log("AuAuAu")
    },
}

function criarCachorro(raca){
    let cachorro = Object.create({})
    cachorro.raca = raca;
    cachorro.getRaca = function() {
        console.log("A raça é " + cachorro.raca)
    }
    return cachorro
}
// método não utilizado, mas funcional
const cachorroNovo = Object.create(cachorro)
console.log(cachorroNovo.raca)

let Shihtzu = Object.create(cachorro)
Shihtzu.raca = 'Shihtzu'
console.log(Shihtzu.getRaca())
Shihtzu.latir()

let salsicha = criarCachorro('DascHund')
console.log(salsicha.getRaca())
//console.log(cachorro.raca)
//cachorro.setRaca("Buldogue")
//console.log(cachorro.raca)
//console.log(cachorro.getRaca())

