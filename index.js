function getComputerChoice() {
    let randNum = Math.floor(Math.random()*10);
    switch (randNum % 3) {
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissors";
            break;
        default:
            return "Something went wrong";
    }
}

console.log(getComputerChoice());