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


const {createServer} = require("http")

let server = createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(`
    <h1> Hello World </h1>
    <p>Primeira página usando Node.JS</p>
    `);

    response.end();
});

server.listen(8000);
console.log("PORTA 8000")