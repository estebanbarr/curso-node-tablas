const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    describe: 'Es la base de la tabla que se va a mostrar',
                    demandOption: true,
                    default: 1,
                    type: 'number'
                })
                .option('h', {
                    alias: 'hasta',
                    describe: 'Es el limite de las multiplicaciones, es decir hasta donde se va a multiplicar',
                    demandOption: false,
                    default: 10,
                    type: 'number'
                })
                .option('l', {
                    alias: 'listar',
                    describe: 'Indica si mostrar por pantalla las multiplicaciones',
                    demandOption: false,
                    default: false,
                    type: 'boolean'
                })
                .check((argv, options) => {
                    if (isNaN(argv.b)) {
                        throw 'La base tiene que ser un número...';
                    }
                    if (isNaN(argv.h)) {
                        throw 'El límite tiene que ser un número...';
                    }
                    return true;
                })
                .argv;

module.exports = {
    argv
};
