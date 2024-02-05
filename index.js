let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#resetbtn");
let newbtn=document.querySelector("#newbtn");
let msgcontainer=document.querySelector(".winner-container");
let msg=document.querySelector("#msg");
let btn=0;
let playerO=true;
let playerX=false;
const win=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(playerO==true){
            box.innerText="O";
            playerO=false;
        }else{
            box.innerText="X";
            playerO=true;
        }
        box.disabled=true;
        btn++;
        let isWinner=checkWinner();
        console.log(btn);
        if(btn === 9 && !isWinner){
            gameDraw();
        }
    })
})

const resetGame=()=>{
    btn=0;
    playerO=true;
    enableBoxes();
    msgcontainer.classList.add("hide");
}

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const gameDraw=()=>{
    msg.innerText=`Game Draw, Play Again!`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
}
const showWinner=(winner)=>{
    msg.innerText=`Congratulation, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
}
const checkWinner=()=>{
    for(let pattern of win){
        let pos1=boxes[pattern[0]].innerText
        let pos2=boxes[pattern[1]].innerText
        let pos3=boxes[pattern[2]].innerText
        if(pos1!=""  &&  pos2!=""  && pos3!=""){
            if(pos1 === pos2 && pos2===pos3){
                showWinner(pos1);
            }
            // if(btn==9){
            //     gameDraw();
            // }
        }
    }
}

reset.addEventListener("click",resetGame);
newbtn.addEventListener("click",resetGame);