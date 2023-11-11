const path = require('node:path');

console.log(path.sep); //para saber como es la separacion en nuestro sistema operativo

//unir rutas con path.join
const filePath = path.join('content', 'subfolder', 'test.txt');
console.log(filePath);

//nombre del fichero de una ruta completa con extension
const base = path.basename('/tmp/midu-secret-files/password.txt');
console.log(base);

//nombre de fichero sin extension
const filename = path.basename('/tmp/midu-secret-files/password.txt', '.txt');
console.log(filename);

//extension
const extension = path.extname('my.super.image.jpg')
console.log(extension);