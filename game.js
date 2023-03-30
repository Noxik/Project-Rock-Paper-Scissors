
function playRound (playerSelection, computerSelection) {
if (playerSelection == computerSelection) {
    return "TIE"
} else if (playerSelection == "Scissors" && computerSelection == "Rock" || playerSelection == "Rock" && computerSelection == "Paper" || playerSelection == "Paper" && computerSelection == "Scissors") {
    compPoints++;
    return `You Lose! ${computerSelection} beats ${playerSelection}! :(`;
} else {
    humanPoints++;
    return `You Win! ${playerSelection} beats ${computerSelection}! :D`; }
}

/*  playerSelection parameter case-insensitive */
function capitalizePrompt (arg) {
    let lowerCaseArg = arg.toLowerCase();
    return lowerCaseArg[0].toUpperCase() + lowerCaseArg.slice(1);
    
}

let playerSelection
let computerSelection

let compPoints = 0
let humanPoints = 0

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

function getComputerChoice() {
    const randomPick = Math.floor(Math.random()*3)
    if (randomPick == 0) {
        return "Rock"
    } else if (randomPick == 1) {
        return "Paper"
    } else {return "Scissors"}
    }
    



