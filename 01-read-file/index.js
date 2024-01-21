const fs = require('fs');
const filePath = './01-read-file/text.txt';
fs.readFile(filePath, 'utf8', (err, data) => {
  console.log('File contents:');
  console.log(data);
});
