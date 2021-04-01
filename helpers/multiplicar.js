const fs     = require('fs');

const crearArchivoDeTablaDe = async (base, hasta=10, listar=false) => {
    try {
        let salida_consola = '', salida_archivo = '';

        let fileName = `tabla_del_${base}.txt`;
        
        for (let i = 1; i <= hasta; ++i) {
            //salida_consola += base.toString().bold.blue + ' x '.bold.red + i.toString().bold + ' = '.bold.red + `${base * i}\n`.bold.green;
            salida_consola += `${base.toString().bold.blue} ${'x'.bold.red} ${i.toString().bold} ${'='.bold.red} ${(base * i).toString().bold.green}\n`;
            salida_archivo += `${base} x ${i} = ${base * i}\n`;
        }

        if (listar) {
            console.log('========================'.bold);
            console.log('   Tabla del'.bold, base.toString().bold.blue);
            console.log('========================'.bold);

            console.log(salida_consola);
        }

        fs.writeFileSync('./salida/' + fileName, salida_archivo);

        return fileName;
    } catch (err) {
        throw err;
    }
}

module.exports = {
    crearArchivoDeTablaDe
};