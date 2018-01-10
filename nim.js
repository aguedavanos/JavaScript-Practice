let readline, rl, takeMatch, computerTakesMatch;
let currNumMatches = 11;
const totalNumMatches = 11;
let msgOutOfBounds = "Not a valid amount. Please take 1, 2, 3 or 4 matches.\n";

readline = require('readline');
rl = readline.createInterface(process.stdin, process.stdout);

takeMatch = function(numMatches){
    if(numMatches >= 1 && numMatches <= 4)
    {
        currNumMatches = currNumMatches - numMatches;

        if(currNumMatches <= 0)
        {
            console.log("You took the last match.\nYou lost!");
        }
        else
        {
            //computer's turn
            computerTakesMatch();
            //rl.question("There are " + currNumMatches + " matches.\nHow many would you like to take?\n> ", takeMatch);
        }
    }
    else
    {
        console.log(msgOutOfBounds);
        rl.question(question, takeMatch);
    }
}

computerTakesMatch = function()
{
    console.log("\nThere are " + currNumMatches +" matches.");

    let numMatches = Math.floor((Math.random() * 3) + 1);
    currNumMatches = currNumMatches - numMatches;

    if(currNumMatches <= 0)
    {
        console.log("The computer took the last match.\nYou won!");
    }
    else
    {
        console.log("The computer took " + numMatches + " matches.\n");
        rl.question("There are " + currNumMatches + " matches.\nHow many would you like to take?\n> ", takeMatch);
    }
}

rl.question("There are " + currNumMatches + " matches.\nHow many would you like to take?\n> ", takeMatch);

