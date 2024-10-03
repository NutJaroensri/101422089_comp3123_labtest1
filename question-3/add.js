const fs = require('fs');
const path = require('path');

const logsDirectory = path.join(__dirname, 'logs');

if(!fs.existsSync(logsDirectory)){
    fs.mkdirSync(logsDirectory);
    console.log('logs directory created.')
}

process.chdir(logsDirectory);
console.log('relocated to logs directory')

for(let i = 0; i < 10; i++){
    const fileName = 'log' + i + '.txt';
    const dataToWrite = `This is log${i}`;
    fs.writeFileSync(fileName, dataToWrite, 'utf8')
    console.log(fileName);
}