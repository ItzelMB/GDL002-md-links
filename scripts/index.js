const fs = require('fs');
//const path = require('path');

//Verify existing path
let pathExist = (currentPath) => {
  if(currentPath == undefined){
      console.log("Invalid or non existing path");
      return false;
  } else {
      return true;
  }
};


//Read .md from file
let readFileContent = fs.readFile('../README.md', 'UTF-8', (err, contents) => {
  if(err) {
    console.log(err);
  } 
  console.log(contents);
});


//Read .md from directory
/*
let readDir = fs.readdir('', 'UTF-8', (err, files) => {
  files.forEach(fileName => {
    let file = path.join(__dirname)
  });

});*/


module.exports = {
  pathExist,
  readFileContent
};