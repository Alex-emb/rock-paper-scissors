
function capitalizeFirstLetter(string) {
    let stringLower = string.toLowerCase();
    return stringLower.charAt(0).toUpperCase() + stringLower.slice(1);
}


function getComputerChoice(){
    let choices = ['rock','paper','scissors'];
    
    let choice = choices[Math.floor(Math.random() * choices.length)];

    return choice;
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

function checkPlayerChoice(choice){
    if (choice == 'Rock' || choice == 'Paper' || choice == 'Scissors'){
        return false;
    }
    else{
        return true;
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

