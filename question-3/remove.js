const fs = require('fs');
const path = require('path');

const logsDirectory = path.join(__dirname, 'logs');
console.log(logsDirectory);

if (!fs.existsSync(logsDirectory)) {
  console.error('There is no logs directory');
} else {
  const allFiles = fs.readdirSync(logsDirectory);

  for (let file of allFiles) {
    console.log(`Delete files...${file}`);

    const filePath = path.join(logsDirectory, file);

    fs.unlink(filePath, (err) => {
      if (err) {
        console.error(err);
        return;
      }
      //console.log(`Delete ${file} successfully`);
      
    });
  }
  // Remove the directory
  fs.rmdir(logsDirectory, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('Logs directory has been removed');
  });
}