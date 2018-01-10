let readline, rl;
let createFlashcard,practiceWithCards, askQuestion, addFront, addBack, chooseQuestion, checkAnswer, checkIfUnansweredQuestionsLeft;
let flashcards = new Array();
let currIndex = -1;

readline = require('readline');
rl = readline.createInterface(process.stdin, process.stdout);

createFlashcard = function(input)
{
    if(input != "n")
    {
        if(input == "y") {
            console.log("adding question");
            rl.question("What's on the front of the card?\n> ", addFront);
        }
        else{
            console.log("I don't understand...");
            rl.question("Create a new flashcard?\n> ", createFlashcard);
        }
    }
    else
    {
        rl.question("Start Quiz? y/n\n> ", practiceWithCards);
    }
}

addFront = function (input) {
    flashcards.push(new Object());
    flashcards[flashcards.length-1].front = input;

    rl.question("What's on the back of the card?\n> ", addBack);
}

addBack = function(input)
{
    flashcards[flashcards.length-1].back = input;
    flashcards[flashcards.length-1].isAnswered = false;
    rl.question("Create a new flashcard?\n> ", createFlashcard);
}

practiceWithCards = function(input){
    if(input.toLowerCase() == "y")
    {
        askQuestion();
    }

    if(input.toLowerCase() == "n")
    {
        console.log("Goodbye!")
        process.exit();
    }
}

askQuestion = function () {
    if(checkIfUnansweredQuestionsLeft())
    {
        currIndex = chooseQuestion();
        rl.question("\nQuestion:\n" + flashcards[currIndex].front + "\n> ", checkAnswer)
    }
    else {
        console.log("All done!");
        process.exit();
    }
}

chooseQuestion = function ()
{
    let chosenIndex = -1;
    while(chosenIndex == -1)
    {
        let index = Math.floor((Math.random() * flashcards.length));
        if(flashcards[index].isAnswered == false)
        {
            chosenIndex = index;
            break;
        }
    }
    return chosenIndex;
}

checkAnswer = function (input) {
    let answer = input.trim();
    if(answer == flashcards[currIndex].back.trim())
    {
        console.log("Correct!");
        flashcards[currIndex].isAnswered = true;
    }
    else
    {
        console.log("Not correct")
    }
    askQuestion();
}

checkIfUnansweredQuestionsLeft = function(){
    for(let i = 0; i < flashcards.length; i++)
    {
        if(flashcards[i].isAnswered == false)
        {
            return true;
        }
    }
    return false;
}

rl.question("Create a new flashcard?\n> ", createFlashcard);
