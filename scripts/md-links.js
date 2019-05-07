'use strict';

const [, , ...args] = process.argv;
console.log(`Inserted path:  ${args}`);

const fs = require('fs');
const http = require('http');
const https = require('https');
const colors = require('colors');


let validCount;
let invalidCount;
let folderLinks = [];

//Verify existing path
let pathExist = (currentPath) => {
    if (currentPath == undefined) {
        console.log("Invalid or non existing path");
        return false;
    } else {
        return true;
    }
};


//Read file and get links in an array
const links = (path) => {
    let getLinkLines = new RegExp('\\[+.*\\]s*\\(+.*\\)');
    let getLinks = new RegExp('\\([http]+.*\\)');
    let arrayLinks = [];

    let lines = fs.readFileSync(path, 'utf-8').split('\n');
    //console.log(lines);

    lines.forEach(line => {
        let matches = getLinkLines.exec(line);
        if (matches !== null) {
            matches.forEach(match => {
                let urls = getLinks.exec(match);
                if (urls !== null) {
                    //console.log(urls);
                    urls.forEach(url => arrayLinks.push(url.replace('(', '').replace(')', '')));
                }
            });
        }
    });

    //console.log(arrayLinks);
    return arrayLinks;
};


//Request url validation
const validateUrl = (link) => {
    //console.log(link);
    if (link.includes('https')) {
        https.get(link, (res) => {
            const { statusCode } = res;
            if (statusCode == 200) {
                validCount++;
                console.log('StatCode '.green + colors.green(statusCode) + '  ' + '✔ '.green + ' OK '.bold.bgGreen + '\t||  ' + link);
            } else {
                invalidCount++;
                console.log('StatCode '.red + colors.red(statusCode) +  '  ' + '✖ '.red + ' FAIL '.bold.bgRed + '\t||  '.red + colors.red(link));
            }
        });
    } else {
        http.get(link, (res) => {
            const { statusCode } = res;
            if (statusCode == 200) {
                validCount++;
                console.log('StatCode '.green + colors.green(statusCode) +  '  '  + '✔ '.green + ' OK '.bold.bgGreen + '\t||  ' + link);
            } else {
                invalidCount++;
                console.log('StatCode '.red + colors.red(statusCode) +  '  '  + '✖ '.red + ' FAIL '.bold.bgRed + '\t||  '.red + colors.red(link));
            }
        });
    }
};
//validateUrl();


//Get statistics
const getStatistics = () => {
    console.log('Unique: ' + validCount);
    console.log('Broken: ' + invalidCount);
    console.log('Total: ' + folderLinks.length);
};

//Get from a directory or a file
const readPath = (directory) => {
    directory = directory.replace(/\\/g, '/').replace('C:', '').replace('c:', '');
    validCount = 0;
    invalidCount = 0;
    //Read from a file
    if (directory.includes('.')) {
        if (directory.includes('.md')) {
            folderLinks = links(directory);
            folderLinks.forEach(link =>  validateUrl(link));
            getStatistics();          
        } else {
            console.log('There are not md files');
            return 'There are not md files';
        }

    //Read from a directory
    } else if (!directory.includes('.')) {
        let filePath = fs.readdirSync(directory);
        //console.log(filePath);
        if (filePath !== null) {
            filePath.forEach(file => {
                //console.log(file);
                if (file.includes('.md')) {
                    console.log(directory + '/' + file);
                    folderLinks = links(directory + '/' + file);
                    folderLinks.forEach(link => validateUrl(link));
                    //getStatistics();
                } else {
                    console.log('There is not a md file');
                    return 'There is not a md file';
                }
            });
        }
    }
};
//readPath('C:\\Users\\Itina\\Documents\\LABORATORIA\\Proyectos-GDL02\\Proyecto-05\\GDL002-md-links\\README.md');
//readPath('/home/laboratoria-168/Documentos/ItzelMB/Proyects/Proyect-05/GDL002-md-links/README.md');

//Call functions from CLI
const insertUserPath = () => {
    readPath(args.toString());
};
insertUserPath();

module.exports = {
    pathExist,
    readPath,
    validateUrl,
    getStatistics,
    insertUserPath
};