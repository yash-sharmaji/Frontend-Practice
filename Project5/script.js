const minNum = 1;
const maxNum = 100;
const answer = Math.ceil(Math.random()*(maxNum-minNum)) + minNum;

let attempts = 1;
let guess;
let numberof=0;
let username=window.prompt(`You are the ${numberof}th player participating`);

let running = true;
do{
    guess=window.prompt(`This is your ${attempts}th attempt \n Enter a guess\n`);
    guess = Number(guess);
    if(isNaN(guess)){
        window.alert("Please enter a valid number");
        continue;
    }
    if(guess>answer){
        attempts++;
        window.alert("Think Lower");
    }
    else if(guess<answer){
        attempts++;
        window.alert("Think higher");
    }
    else{
        running=false;
        window.alert(`You guessed the correct number on ${attempts}th attempt`)
        const table = document.getElementById("leaderboard");
        const row = document.createElement("tr");
        const usernameCell = document.createElement("td");
        usernameCell.textContent = username;

        const attemptsCell = document.createElement("td");
        attemptsCell.textContent = attempts;
        row.appendChild(usernameCell);
        row.appendChild(attemptsCell);
        table.appendChild(row);
    }
}
while(running);

