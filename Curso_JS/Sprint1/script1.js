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

ex5();