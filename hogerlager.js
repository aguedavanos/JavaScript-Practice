let numToBeGuessed, readline, rl, makeGuess;
let maxNum = 10;
let minNum = 1;
let isGuessed = false;
let question = "Guess a number between " + minNum + " and " + maxNum + "\n";

readline = require('readline');
rl = readline.createInterface(process.stdin, process.stdout);

numToBeGuessed = Math.floor((Math.random() * maxNum) + minNum);

makeGuess = function(guessedNum){
    if(guessedNum == numToBeGuessed)
    {
        console.log("You guessed it!");
        isGuessed = true;
    }
    else
    {
        if(guessedNum < numToBeGuessed)
        {
            console.log("Higher!");
        }
        else if(guessedNum > numToBeGuessed)
        {
            console.log("Lower!");
        }

        rl.question(question, makeGuess);
    }
};

rl.question(question, makeGuess);

