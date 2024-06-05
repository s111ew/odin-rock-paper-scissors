const checkWinner = () => {
    if (playerScore === 5) {
        gameState.textContent = "Congratulations! You won!!! 🍾";
        setTimeout(initGame, 4500);
    } else if (computerScore === 5) {
        gameState.textContent = "Unlucky! You lost... ☹️";
        setTimeout(initGame, 4500);
    }
};

const playRound = (playerChoice, computerChoice) => {
    if ((playerChoice === "rock" && computerChoice === "scissors") || 
        (playerChoice === "paper" && computerChoice === "rock") || 
        (playerChoice === "scissors" && computerChoice === "paper")) {
        gameState.textContent = "👍 Win! 👍";
        gameState.classList.add("computerPulse");
        setTimeout(() => {
            gameState.classList.remove('computerPulse');
        }, 500);
        ++playerScore;
    } else if (playerChoice === computerChoice) {
        gameState.textContent = "🤝 Draw! 🤝";
        gameState.classList.add("computerPulse");
        setTimeout(() => {
            gameState.classList.remove('computerPulse');
        }, 500);
    } else {
        gameState.textContent = "👎 Lose! 👎";
        gameState.classList.add("computerPulse");
        setTimeout(() => {
            gameState.classList.remove('computerPulse');
        }, 500);
        ++computerScore;
    }

    playerScoreText.textContent = `${playerScore}`;
    computerScoreText.textContent = `${computerScore}`;

    checkWinner();
};

const getComputerChoice = () => {
    let computerChoice = Math.random();
    if (computerChoice <= 0.3333) {
        const computerChosenEmoji = document.querySelector("#computerRock");
        computerChosenEmoji.classList.add('computerPulse');
    setTimeout(() => {
        computerChosenEmoji.classList.remove('computerPulse');
    }, 500);
        return "rock";
    } else if (computerChoice <= 0.6666) {
        const computerChosenEmoji = document.querySelector("#computerPaper");
        computerChosenEmoji.classList.add('computerPulse');
    setTimeout(() => {
        computerChosenEmoji.classList.remove('computerPulse');
    }, 500);
        return "paper";
    } else {
        const computerChosenEmoji = document.querySelector("#computerScissors");
        computerChosenEmoji.classList.add('computerPulse');
    setTimeout(() => {
        computerChosenEmoji.classList.remove('computerPulse');
    }, 500);
        return "scissors";
    }
};

const handlePlayerChoice = (event) => {
    const playerChoice = event.target.id;
    const computerChoice = getComputerChoice();
    const chosenEmoji = event.target;
    chosenEmoji.classList.add('pulse');
    setTimeout(() => {
        chosenEmoji.classList.remove('pulse');
    }, 500);
    playRound(playerChoice, computerChoice);
};

const initGame = () => {
    playerScore = 0;
    computerScore = 0;
    playerScoreText.textContent = `${playerScore}`;
    computerScoreText.textContent = `${computerScore}`;
    gameState.textContent="Pick Rock, Paper or Scissors to start the game! 👇 First to 5 wins!"
    const playerButtons = document.querySelectorAll(".playerIcons > .emoji");
    playerButtons.forEach((button) => {
        button.addEventListener("click", handlePlayerChoice);
    });
};

// Global variables
let playerScore = 0;
let computerScore = 0;

// Game state
const gameState = document.querySelector("#gameState");

// Score counters
const playerScoreText = document.querySelector("#playerScore");
playerScoreText.textContent = `${playerScore}`;
const computerScoreText = document.querySelector("#computerScore");
computerScoreText.textContent = `${computerScore}`;

// Initialize the game
initGame();