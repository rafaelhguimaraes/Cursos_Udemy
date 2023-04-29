let msg = "Hello World"
console.log(msg)

let {readFile, writeFile, write} = require("fs");

// lendo arquivos
readFile('arquivo.txt','utf8',(error,texto) => {
    if (error) {
        throw error;
    } else{
        console.log(texto)
    }
})
//escreve em arquivo
writeFile('arquivo.txt','Escrevendo', (error) => {

    if(error) {
            throw error;
    } else {
        console.log("Escrevemos no arquivo")
    }
});