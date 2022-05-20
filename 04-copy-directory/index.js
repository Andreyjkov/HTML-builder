// const fs = require('fs');
// const path = require('path');

// fs.rmdir(path.join(__dirname, 'files-copy'),  err => {
//   if (err) throw err;  
// });
// fs.mkdir(path.join(__dirname, 'files-copy'),  err => {
//   if (err) throw err;
//   console.log('Папка была создана');
// });

// fs.copyFile(path.join(__dirname, 'files'), path.join(__dirname, 'files-copy'), (err) => {
//   if (err) {
//     throw new Error(err);
//   }
//   console.log('ok');
// });
// async  function cop (){
//   await  fs.copyFile(((path.join(__dirname, 'files')), 'test-css.css') ,(path.join(__dirname, 'files-copy'),'test-css.css'), err => {
//     if(err) throw err; // не удалось скопировать файл
//     console.log('Файл успешно скопирован');
//   });
// }
// cop ();

// let fs = require('fs');
// const path = require('path');

// const filesFolder = path.join(__dirname,'files');
// let fs = require('fs');
// const path = require('path');

// const filesFolder = path.join(__dirname,'files');
// const copyFolder = path.join(__dirname, 'files-copy');

// fs.rm(copyFolder, {force: true, recursive:true }, (err) => {
//   if (err) throw err;
//   console.log('Папка успешно удалена');     
// });

function copyDirectory () {
  let fs = require('fs');
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

