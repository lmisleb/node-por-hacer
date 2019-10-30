// Configuración del objeto argv (modo mejorado)

const descripcion = {
    demand: true, //parametro obligatorio
    alias: 'd',
    desc: 'Descripción de la tarea por hacer.'
};

const completado = {
    default: true,
    alias: 'c',
    type: 'boolean',
    desc: 'Marca como completado o pendiente la tarea.'
};

const argv = require('yargs') // Los comandos con sus opciones en un objeto
    .command('crear', 'Crea un elemento por hacer.', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado coompletado de una tarea.', {
        descripcion,
        completado
    })
    .command('borrar', 'Elimina una tarea.', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}

// Configuración del objeto argv (modo simple)

// const argv = require('yargs')
//     .command('crear', 'Crear un elemento por hacer.', {
//         descripcion: {
//             demand: true, //parametro obligatorio
//             alias: 'd',
//             desc: 'Descripción de la tarea por hacer.'
//         }
//     })
//     .command('actualizar', 'Actualiza el estado coompletado de una tarea.', {
//         descripcion: {
//             demand: true, //parametro obligatorio
//             alias: 'd',
//             desc: 'Descripción de la tarea por hacer.'
//         },
//         completado: {
//             default: true,
//             alias: 'c',
//             desc: 'Marca como completado o pendiente la tarea.'
//         }
//     })
//     .help()
//     .argv;

// module.exports = {
//     argv
// }