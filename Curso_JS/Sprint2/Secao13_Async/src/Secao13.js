// Callback - setTimeout()
console.log("Antes de chamar")
setTimeout( function() {
    console.log("CALLBACK!!!!!!1")
}, 2000)
console.log("Ainda não chamou...")

// Promises - Promise.
let p = Promise.resolve(5)

console.log('outros códigos')
//console.log(p)
p.then((value) => {console.log(`O valor é ${value}`)})

async function somar(a,b){
    return a+b
}
console.log("Teste Async")
somar(2,2).then(value => console.log(value))

function somaComDelay(a,b){
    return new Promise(resolve => {
        setTimeout(function() {
            resolve(a+b)
        }, 4000)
    })
}

async function resSoma(a,b,c){
    let x = somaComDelay(a,b)
    let y = c

    return await x + y
}

console.log(resSoma(1,2,3).then(value => console.log(value)))

function* criadorID(){
    let id = 0
    while(true){
        yield id++
    }
        
}

let criaId = criadorID()
console.log(criaId.next().value)
console.log(criaId.next().value)
console.log(criaId.next().value)
console.log(criaId.next().value)
console.log(criaId.next().value)

console.log("acabou")