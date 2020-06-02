const { crearArchivoMultiplicar, listarArchivoMultiplicar } = require('./funciones/multiplicar');
const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('estoy en listar');
        listarArchivoMultiplicar(argv.base, argv.limite)
        break

    case 'crear':
        console.log('estoy en crear');
        crearArchivoMultiplicar(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado `, colors.rainbow(archivo)))
            .catch(e => console.log(e));
        break

    case 'borrar':
        console.log('estoy en borrar');
        break

    default:
        console.log('estoy en default');
}