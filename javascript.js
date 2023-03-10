const rps = ["ROCK", "PAPER", "SCISSORS"];
let playerScore = 0;
let computerScore = 0;
let rounds = 0;
function getComputerChoice() {

    let rng = Math.floor(Math.random() * 3);

    return rps[rng];
}

function playRound() {
    let result;

    var player = getPlayerChoice(this);
    var computer = getComputerChoice();


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
    console.log(result);

    getScore(result);
}

function getPlayerChoice(btnClicked) {
    for (var i = 0; i < btnClicked.classList.length; i++) {
        if (rps.includes(btnClicked.classList[i].toUpperCase())) return btnClicked.classList[i].toUpperCase();
    }
}


function game() {

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

function getScore(round) {
    if (round.includes("Win")) {
        playerScore++;
    } else if (round.includes("Lose")) {
        computerScore++;
    }
    let scores = `Player Score: ${playerScore}\nComputer Score: ${computerScore}`;
    console.log(scores);
    rounds++;

    if (rounds == 5) {
        
        if (playerScore > computerScore) {
            console.log("\nYou Win!! :)");
        } else if (playerScore < computerScore) {
            console.log("\nYou Lose! :(");
        } else {
            console.log("\nGAME ENDS IN DRAW!");
        }
        rounds = 0;
        playerScore = 0;
        computerScore = 0;
    }
}



const playerButtons = document.querySelectorAll(".playerBtn");
playerButtons.forEach(playerBtn => playerBtn.addEventListener('click', playRound));

//game();