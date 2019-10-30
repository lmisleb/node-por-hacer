const { argv } = require('./config/yargs');
//const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');

let comando = argv._[0];

switch (comando) {

    case 'crear':
        let tarea = porHacer.crear(argv.descripcion); //función que retorna una tarea por hacer
        console.log('Tarea agragada');
        break;

    case 'listar':

        let listado = porHacer.getlistado();
        console.log('========== Por hacer =========='.green);
        for (let tarea of listado) {
            console.log(tarea.descripcion, '(', tarea.completado, ')');
        }
        console.log('==============================='.green);
        break;

    case 'actualizar':
        porHacer.actualizar(argv.descripcion, argv.completado);
        break;

    case 'borrar':
        porHacer.borrar(argv.descripcion);
        break;

    default:
        console.log('Comando no es reconocido.');
}