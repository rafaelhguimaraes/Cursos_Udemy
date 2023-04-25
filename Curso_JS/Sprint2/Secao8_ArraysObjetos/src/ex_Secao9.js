let itens = [1,2,3,4,5]
console.log(itens[0])
console.log(itens[2])
console.log(itens[3])

const onibus = {
    rodas: 8,
    limite: 40,
    portas: 2
}

console.log(onibus.limite)
console.log(onibus.portas)
console.log(onibus.rodas)

onibus.janelas = 20;
delete onibus.rodas;
console.log(onibus.janelas)
console.log(onibus.rodas)
console.log(onibus)

// ex5
let nomes = ['Rafael', 'Julio', 'Aureliano', 'Lucas', 'Paulo']
if( nomes.includes('Rafael') )
    console.log(`Seu nome ${nomes[0]} está no array`)
else
    console.log(`Seu nome ${nomes[0]} não está no array`)

// ex 6
let nomes2 = ['Leo', 'Joao', 'Gabriel']
function tamanho(array){
    if (array.length >= 5)
        console.log("Muitos elementos")
    else
        console.log("Poucos elementos")
}
tamanho(nomes)
tamanho(nomes2)

//ex7

let vetor = [1,2,3,4,5]
function ex7(array){
    for(let i = 0; i < array.length; i++){
        array[i] += 1
    }
    console.log(array)
}
    
ex7(vetor)

//ex8 - JSON

let carro = {
    "rodas" : 4,
    "portas": 2,
    "motor" :"3.0 V6"
}

console.log(carro)
console.log(carro.motor)
console.log(carro.portas)
console.log(carro.rodas)

// ex9
let frase1 = "Esse carro é bonito"
let arrayfrase1 = frase1.split(" ")

for(let i = 0; i < arrayfrase1.length; i++)
    console.log(arrayfrase1[i])

//ex10 - calculadora
const calculadora = {
    somar(a,b){
        return console.log(a+b)
    },
    subtrair(a,b){
        return console.log(a-b)
    },
    multiplicar(a,b){
        return console.log(a*b)
    },
    dividir(a,b){
        return console.log(a/b)
    }
}

calculadora.somar(2,3)
calculadora.dividir(100,5)
calculadora.multiplicar(4,5)
calculadora.subtrair(500,250)