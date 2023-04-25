class Conta {
    constructor(saldo){
        this.saldo = saldo;
    }
    deposito(valor){
        this.saldo += valor
    }
    saque(valor){
        if(this.saldo < valor)
            throw new Error("saldo insufificiente")
        else
            this.saldo-=valor
    }
    getSaldo(){
        return console.log(`Saldo: ${this.saldo}`)
    }
}

let c1 = new Conta(1000)
console.log(c1.getSaldo())
c1.deposito(250)
console.log(c1.getSaldo())
c1.saque(200)
console.log(c1.getSaldo())

class Carrinho_Compras {
    constructor(itens = [],quantidadeTotal,valorTotal){
        this.itens = itens
        this.quantidadeTotal = quantidadeTotal
        this.valorTotal = valorTotal
    }

    adicionarItens(item,valor,quantidade){
        this.itens.push(item)
        this.quantidadeTotal += quantidade
        this.valorTotal += valor
        console.log(`Item ${item}, valor ${valor}, quantidade ${quantidade} adicionados.`)
    }

    removeItens(item,valor,quantidade){
        let index = this.itens.indexOf(item)
        if(index !== -1){
            this.itens.splice(index,1)
        }
        this.quantidadeTotal -= quantidade
        this.valorTotal -= valor
        this.itens.pop(item)
    }
    toString(){
        return console.log(this.Carrinho_Compras)
    }
}

//let carrinho = new Carrinho_Compras(['Arroz'],1,10.99)
//carrinho.adicionarItens('Feijao',5.99,2)
//console.log(carrinho.itens)
//carrinho.removeItens('Arroz',10.99,1)
//console.log(carrinho.itens)

// EX3

class Endereco{
    constructor(rua, bairro, cidade, estado) {
        this.rua = rua
        this.bairro = bairro
        this.cidade = cidade
        this.estado = estado
    }

    setNovaRua(novaRua){
        this.rua = novaRua
    }
    setNovoBairro(NovoBairro){
        this.bairro = NovoBairro
    }
    setNovaRua(novaCidade){
        this.cidade = novaCidade
    }
    setNovaRua(novoEstado){
        this.estado = novoEstado
    }
}

let end = new Endereco('Rua Brasil', 'São Lucas', 'Uberlandia', 'MG')
//console.log(end)

// EX4
class Carro{
    constructor(marca,cor,gasolina_rest){
        this.marca = marca
        this.cor = cor
        this.gasolina_rest = gasolina_rest
        this.consumo = 10
    }
    dirigir(dist){
        let litros = dist/this.consumo
        if(litros > this.gasolina_rest){
            let litrosNecessario = litros - this.gasolina_rest
            console.log(`Não há gasolina suficiente para andar ${dist} km.`)
            console.log(`É necessario abastecer ${litrosNecessario} litros para rodar ${dist} km`)
        }  
        else{
            for(let i = 1; i <= litros; i++){
                console.log(`${this.gasolina_rest - i} + litros restantes.`)
            }
            this.gasolina_rest -=litros     
        }            
    }

    abastecer(litros){
        this.gasolina_rest += litros
    }

}

let Fox = new Carro('Vw','branco',30)
Fox.dirigir(290)
console.log(Fox.gasolina_rest)
Fox.abastecer(5)
console.log(Fox.gasolina_rest)
Fox.dirigir(2000) // erro

//EX 5

class Conta5 {
    constructor(saldoCC,saldoCP,juros){
        this.saldo = saldoCC
        this.saldo = saldoCP
        this.juros = juros
    }

    deposito(valor){
        this.saldoCC += valor
    }

    saque(Valor){
        this.saldoCC -= Valor
    }

    transferirDinheiroCP(valor){
        this.saldoCC -=valor
        this.saldoCP += valor
    }
    transferirDinheiroCC(valor){
        this.saldoCC +=valor
        this.saldoCP -= valor
    }
    juros(){
        let juros = (saldoCP * this.juros / 100)
        this.saldoCP+=juros
    }
}

class ContaEspecial extends Conta{
    constructor(saldoCC,saldoCP,juros){
        super(saldoCC,saldoCP,juros*2)
    }
}
