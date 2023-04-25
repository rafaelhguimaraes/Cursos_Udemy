// Instanciando classes
function Cachorro(raca,patas,cor){
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
}
// adiciona métodos diretos a classe pai (cachorro)
Cachorro.prototype.uivar = function(){
    console.log("auuuuuuu")
}

let husky = new Cachorro('Husky',4,'Preto')
console.log(husky)
husky.uivar()
