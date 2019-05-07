'use strict';
const fs = require('fs');

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

module.exports = {
    links,
};