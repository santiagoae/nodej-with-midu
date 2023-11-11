const fs = require('node:fs/promises');
// const { promisify } = require('node:util');
// const readFilePromise = promisify(fs.readFile); //en el caso de que un modulo no tenga promesas se usa este promisify

//esta es la forma de hacer como un oninit de angular
// (
//     async() => {
//         console.log('Leyendo el primer archivo...');
//         const text = await fs.readFile('./archivo.txt', 'utf-8')
//         console.log('primer texto: ' + text);

//         console.log('hacer cosas mientras lee el archivo');        
        
//         console.log('Leyendo el segundo archivo...');
//         const text2 = await fs.readFile('./archivo2.txt', 'utf-8')
//         console.log('segundo texto: ' + text);

//         console.log('hacer otrasssss cosas mientras lee el archivo');
        
//     }
// )();

//asi tambien se puede hacer y a mi parecer se ve mas entendible
const init = async() => {
    console.log('Leyendo el primer archivo...');
    const text = await fs.readFile('./archivo.txt', 'utf-8')
    console.log('primer texto: ' + text);
    console.log('hacer cosas mientras lee el archivo');        
    
    console.log('Leyendo el segundo archivo...');
    const text2 = await fs.readFile('./archivo2.txt', 'utf-8')
    console.log('segundo texto: ' + text);
    console.log('hacer otrasssss cosas mientras lee el archivo');
}

init();

