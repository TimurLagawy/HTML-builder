const fs = require('fs');
const path = require('path');

const folderPath = './03-files-in-folder/secret-folder';

fs.readdir(folderPath, (err, files) => {
  console.log(`Files in ${folderPath}:`);
  files.forEach((file, index) => {
    const filePath = path.join(folderPath, file);
    const stats = fs.statSync(filePath);

    console.log(`  ${index + 1}. ${file}`);
    console.log(`     Size: ${stats.size} bytes`);
    console.log(`     Last Modified: ${stats.mtime}`);
  });
});
