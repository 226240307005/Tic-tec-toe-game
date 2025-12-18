let boxes=document.querySelectorAll(".box")
let playBtn= document.getElementById("playBtn");
let winner=document.getElementById("winner")
let reset=document.getElementById("resetBtn")
let turnO=true

let winPos=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8],

]
reset.addEventListener("click",()=>{
 for(let box of boxes){
      turnO=true
    box.innerText=""
     box.disabled=false
  }
})
playBtn.addEventListener("click",()=>{
  turnO=true
  playBtn.hidden=true
 winner.hidden=true
 winner.innerText=""
  for(let box of boxes){
    box.disabled=false
    box.innerText=""
  }

})

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
      
        if(turnO){
            box.innerText="O"
            turnO=false
        }
        else{
            box.innerText="X"
            turnO=true
        }
     
        box.disabled=true
        checkWinner()
    })
})
let disabledBox=()=>{
  for(let box of boxes){
    box.disabled=true
  }
 playBtn.hidden=false;
}
const checkWinner=()=>{
winner.hidden=false
    for(let pos of winPos){
       
         //console.log( pos[0],pos[1],pos[2])
       // console.log(boxes[pos[0]],boxes[pos[1]],boxes[pos[2]])
        if(boxes[pos[0]].innerText!="" && boxes[pos[1]].innerText!="" && boxes[pos[2]].innerText!=""){
       if(boxes[pos[0]].innerText=="X" && boxes[pos[1]].innerText=="X" && boxes[pos[2]].innerText=="X"){
            console.log("X win")
           winner.innerText="X win!!"
          disabledBox()
            
            
       }
       else if(boxes[pos[0]].innerText=="O" && boxes[pos[1]].innerText=="O" && boxes[pos[2]].innerText=="O"){
            console.log("O win")
          winner.innerText="O win!!"
           disabledBox()
           
       }
     
   
    }
       
    }
    
   
}