// ROCK PAPER SCISSORS
// -------------------
// INITIALISE SCORE VARIABLES
// GET COMPUTER CHOICE
// GET PLAYER CHOICE
// COMPARE CHOICES
// PRINT WINNER
// UPDATE SCORES
// LOOP UNTIL 3 GAMES WON BY PLAYER OR COMPUTER
// PRINT WINNER

let playerScore = 0;
let computerScore = 0;
const prompt = require("prompt-sync")();

let computerChoice;
let playerChoice;

const getComputerChoice = () => {
    computerChoice = Math.random();
    if (computerChoice <= 0.3333) {
        computerChoice = "rock";
    } else if (computerChoice <= 0.6666) {
        computerChoice = "paper"
    } else {
        computerChoice = "scissors"
    }
}

const getPlayerChoice = () => {
    playerChoice = prompt("Choose Rock, Paper or Scissors: ").toLowerCase();
    if ((playerChoice != "rock") && (playerChoice != "paper") && (playerChoice != "scissors")) {
        console.log(`${playerChoice} is not a valid choice, please try again..`);
        getPlayerChoice();
    }
}

