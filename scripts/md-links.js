#!/usr/bin/env node
'use strict';

const [, , ...args] = process.argv;
console.log(`Inserted path:  ${args}`);


//Verify existing path
let pathExist = (currentPath) => {
    if (currentPath == undefined) {
        console.log("Invalid or non existing path");
        return false;
    } else {
        return true;
    }
};

//Call functions from CLI
const insertUserPath = () => {
    readPath(args.toString());
};

insertUserPath();

module.exports = {
    pathExist,
    insertUserPath
};

/*
//Get statistics
const getStatistics = (arrLinksIterated) => {

};
*/


//readPath('C:\\Users\\Itina\\Documents\\LABORATORIA\\Proyectos-GDL02\\Proyecto-05\\GDL002-md-links\\README.md');
// readPath('/home/laboratoria-168/Documentos/ItzelMB/Proyects/Proyect-05/GDL002-md-links')