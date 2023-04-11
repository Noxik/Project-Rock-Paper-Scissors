let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");

let selected = document.getElementById("selected");

let round = document.getElementById("round");

let playerScore = document.getElementById("pp");
let compScore = document.getElementById("cp");

let playerSelection
let computerSelection

let compPoints = 0
let humanPoints = 0

rock.addEventListener("click", () => {
    playerSelection = "Rock";
   playRound(playerSelection, computerSelection);
});

paper.addEventListener("click", () => {
    playerSelection = "Paper";
    playRound(playerSelection, computerSelection);
});

scissors.addEventListener("click", () => {
    playerSelection = "Scissors";
    playRound(playerSelection, computerSelection);
});

function playRound (playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    console.log("p: ", playerSelection, " c: ", computerSelection)
    let chose = `You have choosen: ${playerSelection} and computer: ${computerSelection}!`;
if (playerSelection == computerSelection) {
    selected.textContent = chose;
    round.style.color = "";
    round.textContent = "TIE - no points, play again!";
    jsNodeText ();
} else if (playerSelection == "Scissors" && computerSelection == "Rock" ||
 playerSelection == "Rock" && computerSelection == "Paper" || 
 playerSelection == "Paper" && computerSelection == "Scissors") {
    compPoints++;
    selected.textContent = chose;
    round.style.color = "red";
    round.textContent = `You Lose! ${computerSelection} beats ${playerSelection}! :(`;
    jsNodeText ();
} else {
    humanPoints++;
    selected.textContent = chose;
    round.style.color = "green";
    round.textContent = `You Win! ${playerSelection} beats ${computerSelection}! :D`; 
    jsNodeText ()}
}

function jsNodeText () {
    playerScore.textContent = humanPoints;
    compScore.textContent = compPoints;
}

function getComputerChoice() {
    const randomPick = Math.floor(Math.random()*3)
    if (randomPick == 0) {
        return "Rock"
    } else if (randomPick == 1) {
        return "Paper"
    } else {return "Scissors"}
    }

/* 
function game() {
    for (let i=0; i<5; i++) {
    playerSelection = capitalizePrompt(prompt("Write rock, Paper or SciSSorS", "paper"))
    computerSelection = getComputerChoice();   
    console.log(playRound(playerSelection, computerSelection));}
        
    if (compPoints == humanPoints) {
        alert("TIE")
    } else if (compPoints > humanPoints) {
        alert("Comp Win")
    } else {alert("You Win")}
}
*/


    



