const fs = require('node:fs/promises');
// const { promisify } = require('node:util');
// const readFilePromise = promisify(fs.readFile); //en el caso de que un modulo no tenga promesas se usa este promisify

console.log('Leyendo el primer archivo...');
fs.readFile('./archivo.txt', 'utf-8')
.then(text => {
    console.log('primer texto: ' + text);
});
console.log('hacer cosas mientras lee el archivo');


console.log('Leyendo el segundo archivo...');
fs.readFile('./archivo2.txt', 'utf-8')
.then(text => {
    console.log('segundo texto: ' + text);
});
console.log('hacer otrasssss cosas mientras lee el archivo');

