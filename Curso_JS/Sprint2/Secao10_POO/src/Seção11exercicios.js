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



