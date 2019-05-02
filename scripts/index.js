#!/usr/bin/env node
const [,, ...args] = process.argv
console.log(`Inserted path:  ${args}`);
const fs = require('fs');
const http = require('http');
const https = require('https');


//Verify existing path
let pathExist = (currentPath) => {
  if(currentPath == undefined){
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
          urls.forEach(url => arrayLinks.push(url.replace('(','').replace(')','')));
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
  if(link.includes('https')){
    https.get(link, (res) => {
      const { statusCode } = res;
      if (statusCode == 200) {
        console.log('OK' + '\t||  ' + link);
      } else {
        console.log('X' + '\t||  ' + link);
      }
    });
  } else {
    http.get(link, (res) => {
      const { statusCode } = res;
      if (statusCode == 200) {
        console.log('OK' + '\t||  ' + link);
      } else {
        console.log('X' + '\t||  ' + link);
      }
    });
  }
};
//validateUrl();


//Get from a directory or a file
const readPath = (directory) => {
  if (directory.includes('.')) {
    if(directory.includes('.md')){
      return links(directory).forEach(link => validateUrl(link));
    }else{
      console.log('This is not a md file');
      return 'This is not a md file';
    }
  } else if (!directory.includes('.')) {
    let userPath = fs.readdirSync(directory);
    //console.log(userPath);
    if (userPath !== null) {
      userPath.forEach(file => {
        //console.log(file);
        if (file.includes('.md')) {
          //console.log(directory + '\\' + file);
          return links(directory + '\\' + file).forEach(link => validateUrl(link));
        }
      });
    }
  }
};
//readPath('C:\\Users\\Itina\\Documents\\LABORATORIA\\Proyectos-GDL02\\Proyecto-05\\GDL002-md-links\\README.md');

//Call functions from CLI
const insertUserPath = () => {
  readPath(args.toString());
};

insertUserPath();

module.exports = {
  pathExist,
  readPath,
  validateUrl,
  insertUserPath
};


/*
'C:\\Users\\Itina\\Documents\\LABORATORIA\\Proyectos-GDL02\\Proyecto-05\\GDL002-md-links\\README.md'
*/