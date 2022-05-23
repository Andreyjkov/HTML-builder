const fs = require('fs');
const path = require('path');
const { pipeline } = require('stream');

const pathStyles = path.join(__dirname, 'styles');
const pathProjectDist = path.join(__dirname, 'project-dist');
const writeStream = fs.createWriteStream(path.join(pathProjectDist,'bundle.css'));
require('events').EventEmitter.defaultMaxListeners = Infinity;

fs.readdir(pathStyles, { withFileTypes: true }, (err, files) => {
  if (err) return console.log(err);

  for (let file of files) {    
    const pathFile = path.join(pathStyles, file.name);
    if (file.isFile() && path.extname(file.name) === '.css') {    
      const readStream = fs.createReadStream(pathFile, 'utf-8');   
      pipeline(readStream, writeStream, (err) => {
        if (err) return console.log(err);
      }); 
    }
  }  
  console.log('Done!'); 
});


