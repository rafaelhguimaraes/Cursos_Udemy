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