let greet, readline, rl;

readline = require('readline');
rl = readline.createInterface(process.stdin, process.stdout);

greet = function(name){
  console.log("Whaddup " + name);
};

rl.question("What's your name? ", greet);
