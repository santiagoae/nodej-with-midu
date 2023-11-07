const fs = require('node:fs');

fs.readdir('.', (err, files) => {
    if(err){
        console.error('Error alleer el diretorio: ', err);
    }
    files.forEach(file => {
        console.log(file);
    })
}); //que lea el directorio actual


