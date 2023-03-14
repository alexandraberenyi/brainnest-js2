function computerPlay(){
  const rps = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * rps.length);
  return rps[random];

};

let computerPoints = 0;
let playerPoints = 0;

function playRound(choosenObject){
  let winnerOfRound = document.getElementById("winnerID");
  let sumPoints = document.getElementById("currentPoints");
  let computerObject = document.getElementById("computerObject");
  let finalMessage = document.getElementById("finalWinner");

  let playerSelection = choosenObject;
  let computerSelection = computerPlay();

  if(playerSelection == computerSelection) {
    winnerOfRound.textContent = ("It's a tie. Nobody won this round.");  
  } 

  switch (playerSelection + computerSelection){
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      winnerOfRound.textContent = ("You lost. The computer won this round.");
      computerPoints++;
      break;
    case "paperrock":
    case "scissorspaper":
    case "rockscissors":
      winnerOfRound.textContent = ("You won this round!");
      playerPoints++;
      break;
  };
  sumPoints.textContent = playerPoints + "/" + computerPoints;
  computerObject.textContent = computerSelection;

};


const btnRock = document.querySelector("#rockButton")
const btnPaper = document.querySelector("#paperButton")
const btnScissors = document.querySelector("#scissorsButton")

btnRock.addEventListener('click', () => {
  playRound("rock");
});

btnPaper.addEventListener('click', () => {
  playRound("paper");
});

btnScissors.addEventListener('click', () => {
  playRound("scissors");
});



