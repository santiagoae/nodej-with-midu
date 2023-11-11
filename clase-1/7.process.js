//objeto global que proporicona informacon y control sobre el proceso actal de ejecucion.

//argumentos de entrada
console.log(process.argv);//ejm: node 7.process twitch curso node ---uuu midu

//controla el proceso y su salida
// process.exit(1);

//podemos controlar enventos del proceso
process.on('exit', () => {
    //limpiar los recursos
});

//current working directory, desde donde se inicializo el proceso
console.log(process.cwd());

//plataforma
console.log(process.env.NODE_ENV);