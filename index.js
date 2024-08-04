let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choice = ["rock", "scissor", "paper"]
    const randomIndex = Math.floor(Math.random() * choice.length);
    return choice[randomIndex];
}
// function getHumanChoice() {
//     let choice = prompt("Enter your choice").toLowerCase();
//     while (choice !== 'rock' && choice !== 'paper' && choice !== 'scissor') {
//         choice = prompt("Enter your choice that should be 'rock', 'scissor' or 'paper").toLowerCase();
//     }
//     return choice;
// }
function playRound(humanChoice, computerChoice) {
    console.log(`computer choice is ${computerChoice}, Your choice is ${humanChoice}`)
    if (humanChoice === computerChoice) {

        return "draw"
    }
    else if (humanChoice === "rock" && computerChoice === "scissor" ||
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissor" && computerChoice === "paper") {
        humanScore++;
        return `You Win `
    }
    else {
        computerScore++;
        return 'You loose'
    }
}
// function playGame() {
//     let humanScore = 0;
//     let computerScore = 0;
   
//      for (let i = 0; i < 1; i++) {
//         const humanSelection = getHumanChoice();
//         const computerSelection = getComputerChoice();
//         let result = playRound(humanSelection, computerSelection);
//         if (result === "win") {
//             console.log("Your win this round")
//             humanScore++
//         }
//         else if (result === "loose") {
//             console.log("You loose this round")
//             computerScore++
//         }
//         else {
//             console.log("Its a draw in this round")
//         }
        
//     }
//     if (humanScore > computerScore) {
//         console.log("Congratulation you win the game.")
//     }
//     else if (humanScore < computerScore) {
//         console.log("Sorry! You loose the game. Try again next time.")

//     }
//     else {
//         console.log("Draw. Try again")
//     }
// }
// playGame()

const container = document.querySelector('#container');
const button = document.createElement('button');
button.textContent = "Paper";
button.classList.add('btn');
container.appendChild(button);
button.onclick = handleClick;
const button1 = document.createElement('button');
button1.textContent = "Scissor";
button1.classList.add('btn');
container.appendChild(button1);
button1.onclick = handleClick

const button2 = document.createElement('button');
button2.textContent = "Rock";
button2.classList.add('btn');
container.appendChild(button2);
button2.onclick = handleClick

function handleClick(e) {
    if(humanScore >= 5 || computerScore >= 5){
        return;
    }
    const playerSelection = e.target.textContent.toLowerCase();
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    document.getElementById('result').textContent = result;
    document.getElementById('humanScore').textContent = humanScore;
    document.getElementById('computerScore').textContent = computerScore;
    console.log({humanScore, computerScore})

    if(humanScore >=5){
        document.getElementById('winner').textContent = "Congratulations! You win the game."
    }
    else if(computerScore >= 5){
        document.getElementById('winner').textContent = "Sorry! You loose the game."
    }
 }