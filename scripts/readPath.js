'use strict';
const links = require('./getLinks.js');
const validateUrl = require('./linksValidation.js');
const fs = require('fs');

//Get from a directory or a file
const readPath = (directory) => {
    directory = directory.replace(/\\/g, '/').replace('C:', '').replace('c:', '');

    //Read from a file
    if (directory.includes('.')) {
        if (directory.includes('.md')) {
            let folderLinks = links(directory);
            return folderLinks.forEach(link => validateUrl(link));
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
                    let folderLinks = links(directory + '/' + file);
                    return folderLinks.forEach(link => validateUrl(link));
                } else {
                    console.log('There is not a md file');
                    return 'There is not a md file';
                }
            });
        }
    }
};

module.exports = {
    readPath,
};