// var firstPlayerName = prompt("first player what is your name")
// var secondPlayerName = prompt("second player what is your name")
// XturnCoun.innerText = firstPlayerName

var globalClick = "X";

const changeTurn = () =>{
  // if(globalClick == "X"){
  //   globalClick = "O"
  // }else if(globalClick == "O"){
  //   globalClick = "X"
  // }
  globalClick = globalClick == "X" ? "O" : "X"
  document.getElementById("playTurn").innerHTML = globalClick + " turn"
  checkWinner()
}

const checkWinner = () => {
  let fV1 = forClk1.innerText;
  let fV2 = forClk2.innerText;
  let fV3 = forClk3.innerText;
  let fV4 = forClk4.innerText;
  let fV5 = forClk5.innerText;
  let fV6 = forClk6.innerText;
  let fV7 = forClk7.innerText;
  let fV8 = forClk8.innerText;
  let fV9 = forClk9.innerText;
  if((fV1 == "X" && fV2 == "X" && fV3 == "X") || (fV4 == "X" && fV5 == "X" && fV6 == "X") || (fV7 == "X" && fV8 == "X" && fV9 == "X") || (fV1 == "X" && fV4 == "X" && fV7 == "X") || (fV2 == "X" && fV5 == "X" && fV8 == "X") || (fV3 == "X" && fV6 == "X" && fV9 == "X") || (fV1 == "X" && fV5 == "X" && fV9 == "X") || (fV3 == "X" && fV5 == "X" && fV7 == "X")){
    alert("X won")
    forClk1.innerText = ""
    forClk2.innerText = ""
    forClk3.innerText = ""
    forClk4.innerText = ""
    forClk5.innerText = ""
    forClk6.innerText = ""
    forClk7.innerText = ""
    forClk8.innerText = ""
    forClk9.innerText = ""
}
   if((fV1 == "O" && fV2 == "O" && fV3 == "O") || (fV4 == "O" && fV5 == "O" && fV6 == "O") || (fV7 == "O" && fV8 == "O" && fV9 == "O") || (fV1 == "O" && fV4 == "O" && fV7 == "O") || (fV2 == "O" && fV5 == "O" && fV8 == "O") || (fV3 == "O" && fV6 == "O" && fV9 == "O") || (fV1 == "O" && fV5 == "O" && fV9 == "O") || (fV3 == "O" && fV5 == "O" && fV7 == "O")){
    alert("O won")
    forClk1.innerText = ""
    forClk2.innerText = ""
    forClk3.innerText = ""
    forClk4.innerText = ""
    forClk5.innerText = ""
    forClk6.innerText = ""
    forClk7.innerText = ""
    forClk8.innerText = ""
    forClk9.innerText = ""
  } 
}

const clk1 = () =>{
  forClk1.innerText = globalClick
  changeTurn()
}
const clk2 = () =>{
  forClk2.innerText = globalClick
  changeTurn()
}
const clk3 = () =>{
  forClk3.innerText = globalClick
  changeTurn()
}
const clk4 = () =>{
  forClk4.innerText = globalClick
  changeTurn()
}
const clk5 = () =>{
  forClk5.innerText = globalClick
  changeTurn()
}
const clk6 = () =>{
  forClk6.innerText = globalClick
  changeTurn()
}
const clk7 = () =>{
  forClk7.innerText = globalClick
  changeTurn()
}
const clk8 = () =>{
  forClk8.innerText = globalClick
  changeTurn()
}
const clk9 = () =>{
  forClk9.innerText = globalClick
  changeTurn()
}