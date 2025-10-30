let boxes=document.querySelectorAll(".box");
let resetbtn=document.getElementById("reset");
let newgamebtn=document.querySelectorAll("#new-game");
let msgcontainer=document.querySelectorAll(".messagecontainer");
let msg=document.querySelectorAll("#message");
let turnO=true;
//winning patttern of game
const winpattern=[
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
]

//turn of each players moves
const startTic=()=>{
    boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("button was clicked");
        if(turnO==="true"){
            box.innerText="O";
            turnO="false";
        }
        else{
            box.innerText="X";
            turnO="true";
        }
        box.disabled="true";
        checkWinner();
    })
    
})

}
startTic();
//disable boxes
const disableBoxes=()=>{
    for(let box of boxes);
    boxes.disabled="true";
}
//showing winner
const showwinner=(winner)=>{
    msg.innerText=`congratulations!,winner is${winner}`;
    console.log(msgcontainer,"abc");
    msgcontainer[0].classList.remove("hide");
    disableBoxes();
}
//check winner
const checkWinner=()=>{
for(let pattern of winpattern){
    let pos1val=boxes[pattern[0]].innerText;
      let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        if(pos1val!=""&& pos2val !="" && pos3val !=""){
            if(pos1val===pos2val&& pos2val===pos3val){
                console.log("winner",pos1val);
                showwinner(pos1val);
            }
        }
}
}
//reset game
const resetGame=()=>{

    boxes.forEach((box) => {
        box.innerText="";
        
         box.disabled=false;
    })
    turnO="true";
    startTic();
    console.log(boxes);
}
// resetbtn.onClick=resetGame();