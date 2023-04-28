let x = document.querySelector(".x")
let o = document.querySelector(".o")
let boxes = document.querySelectorAll(".box")
let butttons = document.querySelectorAll("#buttons-container button")
let messageContainer = document.querySelector("#message")
let messageText = document.querySelector("#message p")
let secondPlayet;

// Contando numero de jogadas
let player1 = 0, player2 = 0
console.log(player1)

// adiciona o click em cada quadrado
for(let i =0; i < boxes.length; i++) {

    //evento de click
    boxes[i].addEventListener("click", function() {
        let el= verificaJogador(player1,player2);
        if (el == x)
            player1++
        else
            player2++
            
        // verifica se já tem uma jogada no bloco
        if(this.childNodes.length == 0){
            let cloneEl = el.cloneNode(true)
            this.appendChild(cloneEl);
            // eu n coloquei if aqui n
        }

    });

    
}
// ve a vez de quem é
function verificaJogador(player1,player2){
    if(player1 == player2){
        // vez do x
        el = x
    } else{
        //vez da o
        el = o
    }
    return el
}