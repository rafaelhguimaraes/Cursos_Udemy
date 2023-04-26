//Exercicio 1
let Maiuscula = /[A-Z]/
console.log("Inicio dos exercícios")
console.log(Maiuscula.test("AAA"))
console.log(Maiuscula.test("B"))
console.log(Maiuscula.test("abc"))

//Exercicio 2
let StringID = /\wID|id/
console.log("Exercicio 2    ")
console.log(StringID.test("TesteID"))
console.log(StringID.test("Testeid"))

//Exercicio 3
let Marca = /Marca: Volkswagen|Audi|Fiat/
console.log("Exercicio 3")
console.log(Marca.test("Marca: Volkswagen"))
console.log(Marca.test("Volkswagen"))
console.log(Marca.test("Marca: Fiat"))

//Exercicio 4
let validaIP = /\d{3}.\d.\d.\d /
console.log("Exercicio 4")
console.log("Valida IP: " + validaIP.test("128.0.0.1    "))
console.log("Valida IP: " + validaIP.test("18.0.0.1    "))

//Exercicio 5
let validaNome = /^(?=.{3,16}$)[a-z0-9-_]/
console.log("Exercicio 5")
console.log("Valida Nome: " + validaNome.test("rafael_123"))
