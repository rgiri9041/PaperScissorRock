function getComputerChoice() {
    const choice = ["rock", "scissor", "paper"]
    const randomIndex = Math.floor(Math.random() * choice.length);
    return choice[randomIndex];
}

function getHumanChoice() {
    let choice = prompt("Enter your choice").toLowerCase();
    while (choice !== 'rock' && choice !== 'paper' && choice !== 'scissor') {
        choice = prompt("Enter your choice that should be 'rock', 'scissor' or 'paper").toLowerCase();
    }
    return choice;
}
function playRound(humanChoice, computerChoice) {
    console.log(`computer choice is ${computerChoice}, Your choice is ${humanChoice}`)
    if (humanChoice === computerChoice) {

        return "draw"
    }
    else if (humanChoice === "rock" && computerChoice === "scissor" ||
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissor" && computerChoice === "paper") {
        return "win"

    }
    else {
        ;
        return "loose"
    }

}
function playGame() {

    let humanScore = 0;
    let computerScore = 0;
    const round = 5;

    for (let i = 0; i < round; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        let result = playRound(humanSelection, computerSelection);
        if (result === "win") {
            console.log("Your win this round")
            humanScore++
        }
        else if (result === "loose") {
            console.log("You loose this round")
            computerScore++
        }
        else {
            console.log("Its a draw in this round")
        }


    }
    if (humanScore > computerScore) {
        console.log("Congratulation you win the game.")
    }
    else if (humanScore < computerScore) {
        console.log("Sorry! You loose the game. Try again next time.")

    }
    else {
        console.log("Draw. Try again")
    }
}
playGame()