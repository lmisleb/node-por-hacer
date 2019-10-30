//Lógica de la aplicación
const fs = require('fs');

let listadoPorHacer = []; // arreglo vacío

const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer); // convierte el arreglo en un formato JSON para ser guardado
    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) throw new Error('No se puedo grabar', err);
    });
}

const cargarDB = () => {

    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
}

const crear = (descripcion) => { //funcion

    cargarDB();

    let porHacer = { //objeto
        descripcion,
        completado: Boolean = false
    };
    //Hacer un Push dentro del listado por hacer con por hacer
    listadoPorHacer.push(porHacer);
    guardarDB(); //Ejecuta la funcion de guardar
    return porHacer;
}

const getlistado = () => {
    cargarDB();
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {

    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        console.log('Tarea actulizada');
        return true;
    } else {
        console.log('Esa tarea no existe');
        return false;
    }
}

const borrar = (descripcion) => {

    cargarDB();
    let nuevoListado = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);
    if (listadoPorHacer.length === nuevoListado.length) {
        console.log('Esa tarea no existe');
    } else {
        listadoPorHacer = nuevoListado;
        guardarDB();
        console.log('Tarea borrada exitosamente');
    }
}

module.exports = {
    crear,
    getlistado,
    actualizar,
    borrar
}