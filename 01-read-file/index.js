const fs = require('fs');
const filePath = './01-read-file/text.txt';
const readStream = fs.createReadStream(filePath, { encoding: 'utf-8' });

readStream.on('data', (chunk) => {
  console.log(chunk);
});
