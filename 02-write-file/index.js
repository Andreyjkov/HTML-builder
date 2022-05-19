const { stdin, stdout } = process;
const fs = require('fs');
const path = require('path');
const readline = require('readline');
const rl = readline.createInterface(process.stdin);
const output = fs.createWriteStream(path.join(__dirname,'text.txt'));

stdout.write('Привет, напиши какой нибудь текст, пожалуйста.\n');
stdin.on('data', chunk => {  
  rl.on('line', line => {
    if (line == 'exit') {
      stdout.write('Спасибо. Удачи в изучении Node.js!');  
      process.exit();
    } 
  });
  output.write(chunk);  
});

process.on('SIGINT', () => { 
  stdout.write('Спасибо. Удачи в изучении Node.js!');  
  process.exit();
});