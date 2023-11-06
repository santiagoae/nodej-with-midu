const fs = require('node:fs');
const stats = fs.statSync('./archivo.txt');

console.log(`---File System---`);
console.log(
    stats.isFile(), // si es un fichero
    stats.isDirectory(), // si e sun directorio
    stats.isSymbolicLink(), // si e sun enlace simbolico
    stats.size // tamanio en bytes
);


