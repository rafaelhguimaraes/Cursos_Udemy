function imprimirnoConsole(){
    console.log("olá, mundo");
}


function imprimirNumero(Numero){
    console.log("numero é: " + Numero);
}

const numeroAleatorio = function(){
    console.log(Math.random());
}
// Arrow Functions 
let consoleteste = () => {
    console.log("Olá, Mundo");
}

const multiplicaporDois = (x) => {
    return x * 2
}
// não precisou de parentese e nem de return
const multiplicaporDois2 = x => x*2;


// retrata o uso de um argumento de entrada UNDEFINED
function nomeComIdade(nome, idade) {
    if(idade == undefined) {
        console.log(`Recebeu apenas o nome: ${nome}`);
    } else {
        console.log(`Recebeu  o nome: ${nome} e a idade: ${idade}`);
    }
}
//nomeComIdade('Rafael')
//nomeComIdade('Rafael',20)

// argumento DEFAULT
function repetirFrase(frase,n=2){
    for (let x = 1; x <= n; x++)
        console.log(frase + " " + x);
}

//repetirFrase('cinco',5)
//repetirFrase('duas')

// Seção exercícios

// ex1
function imprimirnoConsole(){
    console.log("olá, mundo");
}

// ex2

function imprimirIdade(idade){
    console.log(`Você tem ${idade} anos`)
}
//imprimirIdade(10);

function soma(x,y){
    return console.log(x + y);
}

//soma(5,3)

function num_aleat(max){
    return console.log(Math.floor(Math.random() * max) + 1);
}
//num_aleat(1000)

function autoEscola(idade){
    if (idade >= 18)
        console.log("Bem-vindo a autoescola:");
    else
        console.log("Você não tem 18 anos ainda")
}
//autoEscola(20)
//autoEscola(14)

function queTipo(dado){
    
    if (typeof(dado) === 'number')
        return console.log("Number");
    else if (typeof dado === "string")
        return console.log("String");
    else if (typeof dado === "boolean")
        return console.log("boolean");
}
//queTipo(10)

function valorAbsoluto(num){
    return console.log(Math.abs(num));
}
//valorAbsoluto(-39)

function verificaTamanho(text){
    if ( text.length > 10)
        console.log("Texto muito longo");
    else
        console.log("Texto dentro do limite")
}

verificaTamanho('RafaelHenrique')
verificaTamanho('Rafael')

function potencia(base,pot){
    return console.log(base**pot);
}

function ex10(num){
    for(let i = num; i >= 1; i-- ){
        if(i%2==0)
            console.log(i)
    }
}

//ex10(10)