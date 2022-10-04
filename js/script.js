
function capitalizeFirstLetter(string) {
    let stringLower = string.toLowerCase();
    return stringLower.charAt(0).toUpperCase() + stringLower.slice(1);
}


function getComputerChoice(){
    let choices = ['rock','paper','scissors'];
    
    let choice = choices[Math.floor(Math.random() * choices.length)];

    return choice;
}

function checkPlayerChoice(choice){
    if (choice == 'Rock' || choice == 'Paper' || choice == 'Scissors'){
        return false;
    }
    else{
        return true;
    }
}

function playRound(playerSelection, computerSelection) {
    let playerSelectionInsensitive = capitalizeFirstLetter(playerSelection);
    let computerSelectionInsensitive = capitalizeFirstLetter(computerSelection);

    if(playerSelectionInsensitive == computerSelectionInsensitive){
        return('It\'s a tie!!!');
    }
    else if(playerSelectionInsensitive == 'Rock' && computerSelectionInsensitive == 'Paper'){
        return(`You lose! ${computerSelectionInsensitive} beats ${playerSelectionInsensitive}`);    
    }
    else if(playerSelectionInsensitive == 'Rock' && computerSelectionInsensitive == 'Scissors'){
        return(`You win! ${playerSelectionInsensitive} beats ${computerSelectionInsensitive}`);    
    }
    else if(playerSelectionInsensitive == 'Paper' && computerSelectionInsensitive == 'Rock'){
        return(`You win! ${playerSelectionInsensitive} beats ${computerSelectionInsensitive}`);    
    }
    else if(playerSelectionInsensitive == 'Paper' && computerSelectionInsensitive == 'Scissors'){
        return(`You lose! ${computerSelectionInsensitive} beats ${playerSelectionInsensitive}`);    
    }
    else if(playerSelectionInsensitive == 'Scissors' && computerSelectionInsensitive == 'Rock'){
        return(`You lose! ${computerSelectionInsensitive} beats ${playerSelectionInsensitive}`);    
    }
    else if(playerSelectionInsensitive == 'Scissors' && computerSelectionInsensitive == 'Paper'){
        return(`You win! ${playerSelectionInsensitive} beats ${computerSelectionInsensitive}`);    
    }
}

function game(){
    let round;
    let playerChoiceInit;
    let playerChoice;
    let computerSelection;
    let response;
    let computerWins = 0;
    let playerWins = 0;

    for(round=1; round<=5; round++){
        
        playerChoiceInit = prompt('Rock, Papper or Scissors');
        playerChoice = capitalizeFirstLetter(playerChoiceInit);

        while(checkPlayerChoice(playerChoice)){
            playerChoiceInit = prompt('Rock, Papper or Scissors\nAcceptable answers are "Rock,Papper or Scissors"');
            playerChoice = capitalizeFirstLetter(playerChoiceInit);
        }
        computerSelection = getComputerChoice();

        response = playRound(playerChoice, computerSelection);

        console.log(response);

        if(response[4] == 'l'){
            computerWins++;
        }
        else if(response[4] == 'w'){
            playerWins++;
        }
    }

    if(computerWins>playerWins){
        console.log(`COMPUTER WINS WITH ${computerWins} POINTS`);
    }
    else if(computerWins<playerWins){
        console.log(`PLAYER WINS WITH ${playerWins} POINTS`);
    }
    else{
        console.log('It\'s a tie!!!')
    }
}

// game();




///////////////////////////////////////////////////
///////////////////////////////////////////////////

function gameRound(playerSelection, computerSelection) {

    if(playerSelection == computerSelection){
        return 0;
    }
    else if(playerSelection == 'rock' && computerSelection == 'paper'){
        return 2;    
    }
    else if(playerSelection == 'rock' && computerSelection == 'scissors'){
        return 1;    
    }
    else if(playerSelection == 'paper' && computerSelection == 'rock'){
        return 1;    
    }
    else if(playerSelection == 'paper' && computerSelection == 'scissors'){
        return 2;    
    }
    else if(playerSelection == 'scissors' && computerSelection == 'rock'){
        return 2;    
    }
    else if(playerSelection == 'scissors' && computerSelection == 'paper'){
        return 1;    
    }
}

var playerPoints = 0;
var computerPoints = 0;

var previousComputerChoice  = document.getElementById("rockComputer");


function playerChoiceFunction(playerChoice){
    let computerChoice = getComputerChoice();
    let rockBtn;
    let paperBtn;
    let scissorsBtn;
    let winner;

    console.log(playerChoice.id);


    //return to white before styling again
    previousComputerChoice.style.borderColor = "var(--clr-white)";
    previousComputerChoice.style.color = "var(--clr-white)";

    if (computerChoice == 'rock'){
        rockBtn = document.getElementById("rockComputer");
        rockBtn.style.borderColor = "var(--clr-orange-6)";
        rockBtn.style.color = "var(--clr-orange-6)";

        previousComputerChoice = rockBtn;

    }else if (computerChoice == 'paper'){
        paperBtn = document.getElementById("paperComputer");
        paperBtn.style.borderColor = "var(--clr-orange-6)";
        paperBtn.style.color = "var(--clr-orange-6)";

        previousComputerChoice = paperBtn;

    }if (computerChoice == 'scissors'){
        scissorsBtn = document.getElementById("scissorsComputer");
        scissorsBtn.style.borderColor = "var(--clr-orange-6)";
        scissorsBtn.style.color = "var(--clr-orange-6)";

        previousComputerChoice = scissorsBtn;
    }

    winner = gameRound(playerChoice.id, computerChoice);

    if (winner == 1){
        playerPoints = playerPoints + 1;
        document.getElementById("player-score").innerHTML = playerPoints.toString();
    }
    else if (winner == 2){
        computerPoints = computerPoints + 1;
        document.getElementById("computer-score").innerHTML = computerPoints.toString();
    }

    if (playerPoints == 5 || computerPoints == 5){
        playerPoints = 0;
        computerPoints = 0;
    }


}


