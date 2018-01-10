const QUOTES = [
    ["    galileo", "eppur si muove"],
    ["archimedes", "eureka!"],
    ["erasmus", "in regione caecorum rex est luscus"],
    ["socrates", "I know nothing except the fact of my ignorance"],
    ["rené descartes", "cogito, ergo sum"],
    ["sir isaac newton", "if I have seen further it is by standing on the shoulders of giants"],
    ["taako", "abraca fuck you!"],
    ["Merle", "I cast... ZONE OF TRUTH!"]
];

let displayQuote, getFormattedQuoteAndAuthor, getFormattedQuote, getFormattedAuthor;
let today = new Date();
let first = new Date(today.getFullYear(), 0, 1);
let nthDay = Math.round(((today - first) / 1000 / 60 / 60 / 24) + .5, 0);
let dateFormat = require('dateformat');


displayQuote = function()
{
    console.log("The quote for " + dateFormat(today, "dddd d mmmm yyyy") + " is: ");

    console.log(getFormattedQuote(nthDay%QUOTES.length) + " -- " + getFormattedAuthor(nthDay%QUOTES.length));

    console.log("\n\nAll quotes:")
    for(let i = 0; i<QUOTES.length; i++)
    {
        console.log(getFormattedQuote(i) + " -- " + getFormattedAuthor(i));
    }
}

getFormattedQuote = function(index)
{
    let rawQuote = QUOTES[index][1];
    let formattedQuote = rawQuote.trim();
    formattedQuote = formattedQuote.replace(formattedQuote.charAt(0), formattedQuote.charAt(0).toUpperCase());

    if(!formattedQuote.endsWith(".") && !formattedQuote.endsWith("?") && !formattedQuote.endsWith("!"))
    {
        formattedQuote = formattedQuote + ".";

    }

    formattedQuote = '"' + formattedQuote + '"';
    return formattedQuote;
}

getFormattedAuthor = function(index){
    let rawAuthor = QUOTES[index][0].trim();
    let formattedAuthor = "";
    let names = rawAuthor.split(" ");

    for(let i = 0; i < names.length; i++)
    {
        formattedAuthor = formattedAuthor + names[i].replace(names[i].charAt(0), names[i].charAt(0).toUpperCase()) + " ";
    }
    return formattedAuthor;
}


displayQuote();