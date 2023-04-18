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
        return ["It's a tie!",0,0];
    } else if ((guessToNum(playerSelect)+1)%3 == guessToNum(computerSelection)) {
        return [`You Won! ${playerSelect} beats ${computerSelection}.`,1,0];
    } else if ((guessToNum(playerSelect)+2)%3 == guessToNum(computerSelection)) {
        return [`You Lost. ${computerSelection} beats ${playerSelect}.`,0,1];
    } else {
        return "Something broke again!";
    }
}

let playerScore = 0;
let computerScore = 0;

const gameBtns = document.querySelectorAll('button');

gameBtns.forEach(button => button.addEventListener('click',e => {
    console.log((game(button.id)));
}));


const divResults = document.querySelector("#results");
divResults.innerHTML = `Player: ${playerScore} || Computer: ${computerScore}`;

function game(playerChoice) {
    if (playerScore == 5 || computerScore == 5) {
        playerScore = 0;
        computerScore = 0;
    }
    let result = playRound(playerChoice,getComputerChoice());
    playerScore += result[1];
    computerScore += result[2];
    if (playerScore == 5 || computerScore == 5) {
        divResults.innerHTML = 
        `<p>${result[0]}</p>
        <p>Player: ${playerScore} || Computer: ${computerScore}</p>
        <p>${(playerScore>computerScore ? "You won!":"You Lost")}</p>`;
    } else {
    divResults.innerHTML = 
        `<p>${result[0]}</p>
        <p>Player: ${playerScore} || Computer: ${computerScore}</p>`;
    }
}

