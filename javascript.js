const rps = ["ROCK", "PAPER", "SCISSORS"];
function getComputerChoice() {

    let rng = Math.floor(Math.random() * 3);

    return rps[rng];
}

function playRound(player, computer) {
    let result;

    if (player == "ROCK") {
        if (computer == "PAPER") {
            result = "You Lose! Paper beats Rock";
        } else if (computer == "SCISSORS") {
            result = "You Win! Rock beats Scissors";
        } else {
            result = "DRAW!";
        }
    } else if (player == "PAPER") {
        if (computer == "SCISSORS") {
            result = "You Lose! Scissors beats Paper";
        } else if (computer == "ROCK") {
            result = "You Win! Paper beats Rock";
        } else {
            result = "DRAW!";
        }
    } else {
        if (computer == "ROCK") {
            result = "You Lose! Rock beats Scissors";
        } else if (computer == "PAPER") {
            result = "You Win! Scissors beats Paper";
        } else {
            result = "DRAW!";
        }
    }
    console.log('Player: ' + player + ' | Computer: ' + computer);
    return result;
}

function getPlayerChoice() {
    let playerChoice;
    do {
        playerChoice = prompt("Pick: ROCK/PAPER/SCISSORS").toUpperCase();
    } while (!rps.includes(playerChoice));
    return playerChoice;
}


function game() {
    let playerScore = 0;
    let computerScore = 0;
    let round;
    for (let i = 0; i < 5; i++) {
        round = playRound(getPlayerChoice(), getComputerChoice())
        console.log(round);
        if (round.includes("Win")) {
            playerScore++;
        } else if (round.includes("Lose")) {
            computerScore++;
        }
        let scores = `Player Score: ${playerScore}\nComputer Score: ${computerScore}`;
        console.log(scores);
    }
    if (playerScore > computerScore) {
        console.log("\nYou Win!! :)");
    } else if (playerScore < computerScore) {
        console.log("\nYou Lose! :(");
    } else {
        console.log("\nDRAW!");
    }
}


game();