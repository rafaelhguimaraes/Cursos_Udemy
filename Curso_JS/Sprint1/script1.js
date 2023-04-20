function verifica_num(num_certo){       
    alert("Hello World!");
    var num = prompt("Digite um numero");  
        if (num == numcerto){
            alert("PARABÉNS, NÚMERO CORRETO!!");
        }
        else{
            alert("Errou.");
            verifica_num()
    }
    }
    console.log("Hello World!");
    var numcerto = 100;

    // Seção 3 do curso, contém exercícios básicos sobre tipos de dados.

function ex1(){
    console.log("duplas");
    console.log('simples');
    console.log(`acento tambem`);
}

function ex2(){
    console.log(1);
    console.log(1.5);
    console.log((1+2+3)/3);
}

function ex4(){
    console.log(2>1 && 3>2);
    console.log(3>2 || 1>2);
    console.log(!(1>2));
}


function ex5(){
    console.log(1*3*"nan");
}

// Seção 5 do curso de JS da Udemy
function ex1S5(){
    let teste1 = True, teste2 = "string" , teste3 = 1
}


// Função faz a verificação se o usuário é maior de idade, a partir de uma idade digitada
function ex2S5(){
    let idade = prompt("Digite a sua idade para entrada na balada:")
    if( idade >= 18){
        alert("Seja bem-vindo!!");
    }
    else{
        alert("Probido entrada de menores de 18 anos");
    }
}


function ex3S5(){
    let listanomes = ['Rafael','Luis','Ruan'];

    let resp = prompt("Digite o nome para entrada. (LISTA DE ENTRADA)");
    for(let i = 0; i < listanomes.length ; i++){
        if(resp == listanomes[i]){
            alert("Permitido a entrada");
        }
        else{
            alert("Entrada BARRADA. Motivo: NOME NÃO ESTÁ NA LISTA ");
        }

    }
}

function ex4S5(){
    console.log(Math.pow(2,2) );
    console.log(Math.pow(3,2) );
    console.log(Math.pow(18,2) );
}


// Verifica se a velocidade está dentro da permitida
function ex5S5(){
    let velocidadeCarro = 86;
    let velocidadePermitida = 80;
    if (velocidadeCarro > (velocidadePermitida*1,07))
        console.log(`${velocidadeCarro} está acima da velocidade permitida: ${velocidadePermitida}`);
    else
        console.log(`${velocidadeCarro} está dentro da velocidade permitida: ${velocidadePermitida}`);
}

function ex6S5(){
    let idadePessoa = 20, idadePermitida = 18;
    if (idadePessoa > idadePermitida)
        console.log(`Idade permitida: ${idadePermitida}`);
    else
        console.log(`${idadePessoa}não permite ela estar dirigindo. Idade permitida: ${idadePermitida}`);
}

function ex7S5(){
    for(let i = 0 ; i < 10 ; i++)
        console.log(i);
}

function ex8S5(){
    for(let i = 100 ; i > 50 ; i--)
        console.log(i);
}

function ex9S5(){
    for(let i = 0 ; i < 50 ; i++)
        if(i % 2 == 0)
            console.log("PAR!!");
        else
            console.log("IMPAR!!");

}

function ex10S5(numero){
    if( numero % numero == 0 && numero % 1 == numero )
        console.log("Primo");
    else
        console.log("Não primo");
}

