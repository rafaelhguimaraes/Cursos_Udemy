const reg1 = new RegExp('bola')
console.log(reg1.test("Tem bola?"))
console.log(reg1.test("Tem bol?"))

console.log(/[0-9]/.test("O numero 5 está aqui?"))
console.log(/[123]/.test("O numero 5 está aqui?"))

/*
    \d qualquer digito/caraceter
    \w alfanumérico ("Teste")
    \s qualquer espaço em branco
    \D caractertes que NAO sao digitos
    \W Caractere não alfanumerico
    \S Caractere que NAO seja espaco em branco
    . Qualquer caracter, menos novsa linha
*/

const pontoRegex = /./
const dReges = /\d/ // [0-9]
const dRegex2 = /\D/ // [^0-9]
console.log(pontoRegex.test("asd"))
console.log(dReges.test("arroz"))
console.log(dRegex2.test("ar2roz"))
console.log(dRegex2.test("123sad"))

let ano = /\d\d\d\d/
let dia = /\d\d/
console.log("Verifica ano")
console.log(ano.test("2020"))

console.log("Validando telefones")
let telefone = /\d{2} \d{4,5}-\d{4}/
console.log(telefone.test("34 98417-2680")) // true 
console.log(telefone.test("3498408-6130")) // false

console.log("Validando palavras especificados com OR")
let or = /\d+ (masculino|feminino)/
console.log(or.test("2 masculino"))
console.log(or.test("3 feminino"))

console.log("Validade SITES")
let validarDominio = /www.\w+\.com|com.br/
console.log(validarDominio.test("www.google.com"))
console.log(validarDominio.test("www.google.com.br"))

console.log("Validadando EMAIL")
let validarEmail = /\w+@\w+\.\w+/
console.log(validarEmail.test("rafalalai21@gmail.com"))
console.log(validarEmail.test("rafaelguimaraes@ufu.br"))
console.log(validarEmail.test("rafalalai21@gmailcom"))
console.log(validarEmail.test("rafalalai21gmail.com"))


