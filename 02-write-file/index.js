const fs = require('fs');
const readline = require('readline');

const filePath = './02-write-file/output.txt';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Greetings! Please enter some text:');

rl.question('', (enteredText) => {
  fs.writeFile(filePath, enteredText, 'utf8', () => {
    console.log(`Text has been written to ${filePath}`);
    rl.close();
  });
});
