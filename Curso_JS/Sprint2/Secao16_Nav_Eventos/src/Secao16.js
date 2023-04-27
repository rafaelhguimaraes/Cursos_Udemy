//console.log('oi')
//console.log(document.getElementById("esse_vai"))
//console.log(document.getElementsByClassName('itens'))

let novoElemento = document.createElement("p")
let texto = document.createTextNode("Textoooo")
novoElemento.appendChild(texto)
let elementoAlvo= document.querySelector('#titulo-principal')
let pai = document.querySelector('#container-principal')

pai.insertBefore(novoElemento,elementoAlvo)


