const { crearArchivoDeTablaDe } = require('./helpers/multiplicar');
const { argv }                  = require('./config/yargs');

require('colors');

//console.clear();

crearArchivoDeTablaDe(argv.b, argv.h, argv.l)
    .then(fileName => console.log('Se creó el archivo'.bold, '['.bold + fileName.green.bold + ']'.bold))
    .catch(err     => console.log(`Error: [${err}]`.red.bold));
