function copyDirectory () {
  const fs = require('fs');
  const path = require('path');

  const filesFolder = path.join(__dirname,'files');
  const copyFolder = path.join(__dirname, 'files-copy');
 
  fs.rm(copyFolder, {force: true, recursive: true }, (err) => {
    if (err) throw err;  

    fs.mkdir(copyFolder,  { recursive: true }, err => {
      if (err) throw err;
   
      fs.readdir(filesFolder, (err, files) => { 
        if(err) return console.log(err); 

        for (let file of files) {
          fs.copyFile(path.join(__dirname, 'files', file ),
            path.join(__dirname, 'files-copy', file), err => {
              if(err) throw err; 
              console.log('Файл успешно скопирован.');
            });
        }
      });
    });
  });
}
copyDirectory ();

