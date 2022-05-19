const fs = require('fs');
const path = require('path');

const secretFolder = path.join(__dirname,'secret-folder');

fs.readdir(secretFolder, {withFileTypes: true}, (err, files) => { 

  if(err) return console.log(err);

  for (let file of files) {
    if (file.isFile()) {
      let str = '';
      let fileName = file.name.split('.')[0];
      let fileExtension = path.extname(file.name).split('.').join('');      

      fs.stat(path.join(secretFolder, file.name), true, (err, data) =>{
        if(err) return console.log(err);
        let fileSize = data.size;        
        str = fileName + ' - ' + fileExtension + ' - ' + fileSize + 'byt';
        return console.log(str);
      });           
    } 
  }   
});