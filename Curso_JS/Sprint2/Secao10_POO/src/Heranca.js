class Pessoa {
    constructor(cpf,nome){
        this.nome = nome;
        this.cpf = cpf;
    }
}

class Funcionario extends Pessoa{
    constructor(cpf,nome,cargo,idioma){
        super(cpf,nome)
        this.cargo = cargo
        this.idioma = idioma
    }
}

let Vendedor = new Funcionario('123','Rafael','Vendedor', 'Portugues')
console.log(Vendedor)

console.log(new Funcionario instanceof(Pessoa))
