const Btns = document.querySelectorAll("button");

Btns.forEach((button) => {
  button.addEventListener("click" , () => {
    playRound(button.textContent.toLowerCase());
  });
});

let winnerOfRound = document.querySelector("#winnerID");
let sumPoints = document.querySelector("#currentPoints");
let computerObject = document.querySelector("#computerObject");
let gameDisplay = document.querySelector("#endOfGame");
let gameWinnerAnnounce = document.querySelector("#annWinner");

let computerPoints = 0;
let playerPoints = 0;

function playRound(choosenObject){
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

  endGame();
};

function computerPlay(){
  const rps = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * rps.length);
  return rps[random];

};

function endGame() {
  if (computerPoints >= 5 && playerPoints < 5){
    gameDisplay.style.display = "flex";
    gameWinnerAnnounce.textContent = "The computer won this game :/"; 
  } else if (playerPoints >= 5 && computerPoints < 5) {
    gameDisplay.style.display = "flex";
    gameWinnerAnnounce.textContent = "You won this game :)";
  }
}

const newGameBtn = document.querySelector("#newGame");
newGameBtn.addEventListener("click", () => {
  computerPoints = 0;
  playerPoints = 0;
  sumPoints.textContent = playerPoints + "/" + computerPoints;
  winnerOfRound.textContent = ("");
  computerObject.textContent = "";
  gameDisplay.style.display = "none";
});

