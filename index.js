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
    console.log(`Scores: ${playerScore} | ${computerScore} (First to 3 wins!)`)
    playerChoice = prompt("Choose Rock, Paper or Scissors: ").toLowerCase();
    if ((playerChoice != "rock") && (playerChoice != "paper") && (playerChoice != "scissors")) {
        console.log(`${playerChoice} is not a valid choice, please try again..`);
        getPlayerChoice();
    }
}

const playRound = (playerChoice, computerChoice) => {
    if ((playerChoice === "rock" && computerChoice === "scissors") || (playerChoice === "paper" && computerChoice === "rock") || (playerChoice === "scissors" && computerChoice === "paper")) {
        console.log(`Computer chose ${computerChoice}, you win!`);
        ++playerScore;
    } else if (playerChoice === computerChoice) {
        console.log(`Computer chose ${computerChoice}, it's a draw!`);
    } else {
        console.log(`Computer chose ${computerChoice}, you lose!`);
        ++computerScore;
    }
}

const playGame = () => {
    while (playerScore < 3 && computerScore < 3) {
        getPlayerChoice();
        getComputerChoice();
        playRound(playerChoice, computerChoice);
    }
    if (playerScore === 3) {
        console.log("-----------------------");
        console.log("Congratulations! You won!");
        playAgain();
    } else {
        console.log("-----------------------");
        console.log("Unlucky.. You lost.")
        playAgain();
    }
}

const playAgain = () => {
    let answer = prompt("Play again? (Yes/No): ").toLowerCase();
    if (answer == "yes") {
        playerScore = 0;
        computerScore = 0;
        playGame();
    } else if (answer == "no") {
        return;
    } else {
        console.log("Invalid input, please try again...");
        playAgain();
    }
}


playGame();
