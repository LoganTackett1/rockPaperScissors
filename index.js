function getComputerChoice() {
    let randNum = Math.floor(Math.random()*100);
    switch (randNum % 3) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
        default:
            return "Something went wrong";
    }
}

function guessToNum(guess) {
    if (guess=="rock") {
        return 1;
    } else if (guess=="paper") {
        return 0;
    } else if (guess=="scissors") {
        return 2;
    } else {
        console.log("Something broke!");
    }
}

function playRound(playerSelection,computerSelection) {
    let playerSelect = playerSelection.toLowerCase();
    if (playerSelect == computerSelection) {
        return "It's a tie!";
    } else if ((guessToNum(playerSelect)+1)%3 == guessToNum(computerSelection)) {
        return `You Won! ${playerSelect} beats ${computerSelection}.`;
    } else if ((guessToNum(playerSelect)+2)%3 == guessToNum(computerSelection)) {
        return `You Lost. ${computerSelection} beats ${playerSelect}.`;
    } else {
        console.log("Something broke again!");
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i=1; i<=5; i++) {
        let playerChoice = prompt("Rock, Paper, or Scissors?");
        let computerChoice = getComputerChoice();
        console.log(playRound(playerChoice,computerChoice));
        if (playerChoice == computerChoice) {
            console.log("No Score Change.");
        } else if ((guessToNum(playerChoice)+1)%3 == guessToNum(computerChoice)) {
            playerScore++;
        } else if ((guessToNum(playerChoice)+2)%3 == guessToNum(computerChoice)) {
            computerScore++;
        } else {
            console.log("Something broke again!");
        }
        console.log(`score: Player ${playerScore}, Computer ${computerScore}`);
    }
    if (playerScore == computerScore) {
        console.log("Tie game!");
    } else if (playerScore > computerScore) {
        console.log("You won!");
    } else if (playerScore < computerScore) {
        console.log("The Computer Won!");
    }
}

game();