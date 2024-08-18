const choices = ["paper", "scissor", "rock"];
let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0; // Counts how many rounds have been played
const maxRounds = 5;  // We want to play 5 rounds

function getComputerChoice() {
    // Picks a random choice for the computer (paper, scissor, or rock)
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    // Compares player's choice and computer's choice to see who wins
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissor") ||
        (playerSelection === "scissor" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")
    ) {
        playerScore++; // Player wins, increase player's score
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
        computerScore++; // Computer wins, increase computer's score
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function updateScore() {
    // Updates the score display on the page
    document.getElementById("score").textContent = `Player: ${playerScore}  <><><><><><><><><> Computer: ${computerScore}`;
}

function checkWinner() {
    // If 5 rounds have been played, decide who the overall winner is
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
        // Stop the game by removing the ability to click the buttons
        document.getElementById("paper").onclick = null;
        document.getElementById("scissor").onclick = null;
        document.getElementById("rock").onclick = null;
    }
}

function handleClick(e) {
    // This function runs when you click on an image
    if (roundsPlayed < maxRounds) { // Only run if less than 5 rounds have been played
        const playerSelection = e.target.id; // Get the player's choice
        const computerSelection = getComputerChoice(); // Get the computer's choice
        const result = playRound(playerSelection, computerSelection); // See who wins this round
        document.getElementById("result").textContent = result; // Show the result of this round
        updateScore(); // Update the score on the page
        roundsPlayed++; // Increase the round counter
        checkWinner(); // Check if we need to end the game
    }
}

// Set up the game so clicking the images will run the handleClick function
document.getElementById("paper").onclick = handleClick;
document.getElementById("scissor").onclick = handleClick;
document.getElementById("rock").onclick = handleClick;
