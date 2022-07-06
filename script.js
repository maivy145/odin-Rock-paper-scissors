let computerScore = 0;
let playerScore = 0;
let draws = 0;

//computer choice
function computerPlay() {
    let computerChoices = ["rock", "paper", "scissors"];
    return computerChoices[Math.floor(Math.random() * computerChoices.length)];
    }

//play one round

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's draw";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You Win! rock beats scissors";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You Lose! paper beats paper";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You Win! paper beats rock";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You Lose! scissors beats paper";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You Lose! rock beats scissors";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You Win! scissors beats paper";
    } else {
        return "'rock' or 'paper' or 'scissors'!";
    }
}


for (let i = 0; i < 5; i++) {
    let playerChoices = prompt("rock, paper, scissors, shoot?");
    const playerSelection = playerChoices.toLowerCase();
    const computerSelection = computerPlay();
    let oneRoundResult = playRound(playerSelection, computerSelection)
    console.log(oneRoundResult);
    gameScore(oneRoundResult);
    console.log("Your score is " + playerScore);
    console.log("The computer's score is " + computerScore);
    if  (playerScore === 3 || computerScore === 3) {
        break;
    }
}

function gameScore(result) {
    if (result === "It's draw") {
        draws++;
    } else if (result === "You Win! rock beats scissors" || result === "You Win! paper beats rock" || result === "You Win! scissors beats paper") {
        playerScore++;
    } else {
        computerScore++;
    }

    if (playerScore === 3) {
        console.log("Player wins the game!");
        return;
    } 
    if (computerScore === 3) {
        console.log("Computer wins the game!");
        return;
    }
}