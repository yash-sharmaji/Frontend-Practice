const choices = ["rock","paper","scissors"];

const playerDisplay = document.getElementById("player");
const computerDisplay = document.getElementById("computerDisplay");
const Result = document.getElementById("Results");

const playerscoreDisplay = document.getElementById("PlayerScoreDisplay");
const computerscoredisplay = document.getElementById("ComputerScoreDisplay");
let playerscore =0;
let compscore =0;

function playGame(playerChoice){
    const computerchoice = choices[Math.ceil(Math.random()*(2))];
    
    let result = "";

    if(playerChoice === computerchoice){
        result = "Its a Tie !"
    }
    else if(computerchoice === "rock"){
        if(playerChoice === "scissors"){
            result = "Computer Won";
        }
        else{
            result = "Player Won";
        }
    }
    else if(computerchoice === "scissors"){
        if(playerChoice === "paper"){
            result = "Computer Won";
        }
        else{
            result = "Player Won";
        }
    }
    else if(computerchoice === "paper"){
        if(playerChoice === "rock"){
            result = "Computer Won";
        }
        else{
            result = "Player Won";
        }
    }
    playerDisplay.textContent = `Player : ${playerChoice}` ;
    computerDisplay.textContent = `Computer : ${computerchoice}` ;
    Result.textContent=result;
    
    Result.classList.remove("greentext", "redtext","normal"); 

    if(result=== "Player Won"){
        Result.classList.add("greentext");
        playerscore++;
        playerscoreDisplay.textContent = playerscore;
    }
    else if(result === "Computer Won"){
        compscore++;
        computerscoredisplay.textContent = compscore;
        Result.classList.add("redtext");
    }
    else{
        Result.classList.add("normal");
    }

};

