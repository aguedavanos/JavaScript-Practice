let readline, rl, determineInput, determineLeapYear, year;
let question = "Please enter a year to check if it's a leap year. Write 'stop' to quit\n> ";

readline = require('readline');
rl = readline.createInterface(process.stdin, process.stdout);

determineInput = function(input)
{
    if(input == "stop")
    {
        process.exit();
    }
    else {
        determineLeapYear(input);
    }
}

determineLeapYear = function(year)
{
    if(year%100 == 0 && year%400 == 0)
    {
        console.log("The year " + year + " is a leap year.\n");
    }
    else
    {
        console.log("The year " + year + " is not a leap year.\n");
    }

    rl.question(question, determineInput);
}

rl.question(question, determineInput);