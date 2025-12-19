let boxes = document.querySelectorAll(".box")
let playBtn = document.getElementById("playBtn");
let reset = document.getElementById("resetBtn")
let closeBtn=document.getElementById("closeBtn")
 let popup=document.getElementById("popup");
  let text=document.getElementById("winner");
let turnO = true
let i=0;
let winPos = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,4,8],
  [2,4,6],
  [0,3,6],
  [1,4,7],
  [2,5,8],
]
function checkDraw(){
console.log(i)
if(i===9){
  popUp("Ohh! it's Draw")
    playBtn.hidden = false
}
}
reset.addEventListener("click", () => {
  i=0;
  turnO = true
  playBtn.hidden = true

  for (let box of boxes) {
    box.innerText = ""
    box.disabled = false
  }
})

playBtn.addEventListener("click", () => {
  i=0
  turnO = true
  playBtn.hidden = true
 

  for (let box of boxes) {
    box.disabled = false
    box.innerText = ""
  }
})

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O"
      turnO = false
    } else {
      box.innerText = "X"
      turnO = true
    }

    box.disabled = true
    i++;
    checkDraw()
    checkWinner()
  })
})

let disabledBox = () => {
  for (let box of boxes) {
    box.disabled = true
  }
  
  playBtn.hidden = false
}

function popUp(win){
  popup.style.display="flex"
  text.innerText=win
  
}
closeBtn.addEventListener("click",()=>{
   popup.style.display="none";
})

const checkWinner = () => {
     
  for (let pos of winPos) {

    if (
      boxes[pos[0]].innerText !== "" &&
      boxes[pos[1]].innerText !== "" &&
      boxes[pos[2]].innerText !== ""
    ) {

      if (
        boxes[pos[0]].innerText === "X" &&
        boxes[pos[1]].innerText === "X" &&
        boxes[pos[2]].innerText === "X"
      ) {
       let win= "The winner is X!"
        popUp(win)
        disabledBox()
        return
      }

      if (
        boxes[pos[0]].innerText === "O" &&
        boxes[pos[1]].innerText === "O" &&
        boxes[pos[2]].innerText === "O"
      ) {
       let win= "The winner is O!"
        popUp(win)
        disabledBox()
        return
      }
    }
  }
}

