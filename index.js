const choices = ["paper", "scissor", "rock"];
let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;  
const maxRounds = 5;   

function getComputerChoice() {
     const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
     if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissor") ||
        (playerSelection === "scissor" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")
    ) {
        playerScore++;  
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
        computerScore++;  
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function updateScore() {
     document.getElementById("score").textContent = `Player: ${playerScore}     Computer: ${computerScore}`;
}

function checkWinner() {
     if (roundsPlayed === maxRounds) {
        let finalResult = "";
        if (playerScore > computerScore) {
            finalResult = "Congratulations! You won the best of five!";
        } else if (playerScore < computerScore) {
            finalResult = "The computer won the best of five. Better luck next time!";
        } else {
            finalResult = "It's a tie! No one wins the best of five.";
        }

        document.getElementById("result").textContent = finalResult;
         document.getElementById("paper").onclick = null;
        document.getElementById("scissor").onclick = null;
        document.getElementById("rock").onclick = null;
    }
}

function handleClick(e) {
     if (roundsPlayed < maxRounds) {  
        const playerSelection = e.target.id;  
        const computerSelection = getComputerChoice();  
        const result = playRound(playerSelection, computerSelection);  
        document.getElementById("result").textContent = result;  
        updateScore();  
        roundsPlayed++;  
        checkWinner();  
    }
}

document.getElementById("paper").onclick = handleClick;
document.getElementById("scissor").onclick = handleClick;
document.getElementById("rock").onclick = handleClick;
