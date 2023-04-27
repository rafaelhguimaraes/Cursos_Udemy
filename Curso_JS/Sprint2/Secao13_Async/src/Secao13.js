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