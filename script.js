function getComputerChoice() {
    let cs = Math.floor(Math.random() * 3); // returns randint from 0 to 2 inclusive; map to rock, paper, scissors resp.
    if (cs === 0) {
        return 'rock';
    }
    else if (cs === 1) {
        return 'paper';
    }
    else {
        return 'scissors';
    }
}

function toSentenceCase(s) {
    return s[0].toUpperCase() + s.slice(1).toLowerCase();
}

function playRound(ps, computerSelection) {
    let playerSelection = ps.toLowerCase(); // lower case for player selection

    let win = false;

    if (playerSelection === computerSelection) {
        return 'Tie! ';
    }
    
    // Win conditions
    if (playerSelection === 'rock') {
        win = (computerSelection === 'scissors');
    }
    if (playerSelection === 'paper') {
        win = (computerSelection === 'rock');
    }
    if (playerSelection === 'scissors') {
        win = (computerSelection === 'paper');
    }

    if (win) {
        return 'You win! ' + toSentenceCase(playerSelection) + ' beats ' + toSentenceCase(computerSelection);
    }
    else {
        return 'You lose! ' + toSentenceCase(computerSelection) + ' beats ' + toSentenceCase(playerSelection);
    }
}

function game() {
    let score = 0;
    for(let i = 0; i < 5; i++) {
        let computerSelection = getComputerChoice();
        let playerSelection = prompt('Rock, paper, or scissors?');
        let result = playRound(playerSelection, computerSelection);
        console.log(result);
        if(result[4] === 'w') {
            score += 1;
        }
    }
    if(score >= 3) {
        console.log('You win the match!!!');
    }
    else {
        console.log('You lose the match!!!');
    }
    console.log('Final score: ' + score);
}

game();

// const playerSelection = 'rock';
// const computerSelection = getComputerChoice();
// console.log(playerSelection, computerSelection);
// console.log(playRound(playerSelection, computerSelection));