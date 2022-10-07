//  OLD SCRIPT

// function capitalizeFirstLetter(string) {
//     let stringLower = string.toLowerCase();
//     return stringLower.charAt(0).toUpperCase() + stringLower.slice(1);
// }


// function getComputerChoice(){
//     let choices = ['rock','paper','scissors'];
    
//     let choice = choices[Math.floor(Math.random() * choices.length)];

//     return choice;
// }

// function checkPlayerChoice(choice){
//     if (choice == 'Rock' || choice == 'Paper' || choice == 'Scissors'){
//         return false;
//     }
//     else{
//         return true;
//     }
// }

// function playRound(playerSelection, computerSelection) {
//     let playerSelectionInsensitive = capitalizeFirstLetter(playerSelection);
//     let computerSelectionInsensitive = capitalizeFirstLetter(computerSelection);

//     if(playerSelectionInsensitive == computerSelectionInsensitive){
//         return('It\'s a tie!!!');
//     }
//     else if(playerSelectionInsensitive == 'Rock' && computerSelectionInsensitive == 'Paper'){
//         return(`You lose! ${computerSelectionInsensitive} beats ${playerSelectionInsensitive}`);    
//     }
//     else if(playerSelectionInsensitive == 'Rock' && computerSelectionInsensitive == 'Scissors'){
//         return(`You win! ${playerSelectionInsensitive} beats ${computerSelectionInsensitive}`);    
//     }
//     else if(playerSelectionInsensitive == 'Paper' && computerSelectionInsensitive == 'Rock'){
//         return(`You win! ${playerSelectionInsensitive} beats ${computerSelectionInsensitive}`);    
//     }
//     else if(playerSelectionInsensitive == 'Paper' && computerSelectionInsensitive == 'Scissors'){
//         return(`You lose! ${computerSelectionInsensitive} beats ${playerSelectionInsensitive}`);    
//     }
//     else if(playerSelectionInsensitive == 'Scissors' && computerSelectionInsensitive == 'Rock'){
//         return(`You lose! ${computerSelectionInsensitive} beats ${playerSelectionInsensitive}`);    
//     }
//     else if(playerSelectionInsensitive == 'Scissors' && computerSelectionInsensitive == 'Paper'){
//         return(`You win! ${playerSelectionInsensitive} beats ${computerSelectionInsensitive}`);    
//     }
// }

// function game(){
//     let round;
//     let playerChoiceInit;
//     let playerChoice;
//     let computerSelection;
//     let response;
//     let computerWins = 0;
//     let playerWins = 0;

//     for(round=1; round<=5; round++){
        
//         playerChoiceInit = prompt('Rock, Papper or Scissors');
//         playerChoice = capitalizeFirstLetter(playerChoiceInit);

//         while(checkPlayerChoice(playerChoice)){
//             playerChoiceInit = prompt('Rock, Papper or Scissors\nAcceptable answers are "Rock,Papper or Scissors"');
//             playerChoice = capitalizeFirstLetter(playerChoiceInit);
//         }
//         computerSelection = getComputerChoice();

//         response = playRound(playerChoice, computerSelection);

//         console.log(response);

//         if(response[4] == 'l'){
//             computerWins++;
//         }
//         else if(response[4] == 'w'){
//             playerWins++;
//         }
//     }

//     if(computerWins>playerWins){
//         console.log(`COMPUTER WINS WITH ${computerWins} POINTS`);
//     }
//     else if(computerWins<playerWins){
//         console.log(`PLAYER WINS WITH ${playerWins} POINTS`);
//     }
//     else{
//         console.log('It\'s a tie!!!')
//     }
// }

// game();







///////////////////////////////////////////////////
////////////// NEW SCRIPT /////////////////////////
///////////////////////////////////////////////////

function getComputerChoice(){
    let choices = ['rock','paper','scissors'];
    let choice = choices[Math.floor(Math.random() * choices.length)];

    return choice;
}

function gameRound(playerSelection, computerSelection) {
    /* 
    inputs:
    -------
    playerSelection : rock, paper or scissors
    computerSelection : rock, paper or scissors

    returns:
    -------
    0 --> tie
    1 --> player wins
    2 --> computer wins
    */ 

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

function handler(pressedBtn){
    playerChoiceFunction(pressedBtn.target.id);
}


function playerChoiceFunction(playerChoice){
    let computerChoice = getComputerChoice(); // choose randomly for computer choice
    let rockBtn;
    let paperBtn;
    let scissorsBtn;
    let winner;


    //return to white before styling again
    previousComputerChoice.style.borderColor = "var(--clr-white)";
    previousComputerChoice.style.color = "var(--clr-white)";

    //assing the current choice to previous choice for redecorating the computers choice
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

    //select winner
    winner = gameRound(playerChoice, computerChoice);

    if (winner == 1){
        playerPoints = playerPoints + 1;
        document.getElementById("player-score").innerHTML = playerPoints.toString();
    }
    else if (winner == 2){
        computerPoints = computerPoints + 1;
        document.getElementById("computer-score").innerHTML = computerPoints.toString();
    }

    //check if game is over
    if (playerPoints == 5 || computerPoints == 5){

        message.classList.add("showMessage");

        winner_score.innerHTML = `${playerPoints}-${computerPoints}`;

        if(computerPoints > playerPoints){
            winner_title.innerHTML = "Computer Wins";
        }
        else{
            winner_title.innerHTML = "Player Wins";
        }

        //make player buttons useless
        player_btn.forEach( button => {button.removeEventListener('click',handler)});

        playerPoints = 0;
        computerPoints = 0;
    }
}


var playerPoints = 0;  //global variable for player's points
var computerPoints = 0; // global variable for computer's points
var previousComputerChoice  = document.getElementById("rockComputer"); // initial computer choice

var message = document.getElementById("floatMessage");   //floating window for winner message
var winner_score = document.getElementById("score-title"); //score to be displayed inside floating window
var winner_title = document.getElementById("winner-title"); //title to be displayed inside floating window

// BUTTONS 
const player_btn = document.querySelectorAll('.btn-player');  //all player buttons (rock,paper,scissors)
const resetBtn = document.querySelectorAll('.answer-yes-btn'); //play-again-button inside floating window
const stopBtn = document.querySelectorAll('.answer-no-btn');   //no-more-play-button inside floating window


//refresh page for new game
resetBtn[0].addEventListener('click',() => location.reload());

//if you do not want to play again the floating 
//window disappears
stopBtn[0].addEventListener('click',function(){
        message.classList.remove("showMessage");
    }
);

//Event listener for when player makes a move
player_btn.forEach( button => {
    button.addEventListener('click',handler);
});




