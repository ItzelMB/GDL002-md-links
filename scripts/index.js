const fs = require('fs');

const links = (path) =>{
  let getLinkLines = new RegExp('\\[+.*\\]s*\\(+.*\\)');
  let getLinks = new RegExp('\\(+.*\\)')
  let arrayLinks = [];

  let lines = fs.readFileSync(path,'utf-8').split('\n');

  //console.log(lines);

  lines.forEach( line => {
    let matches = getLinkLines.exec(line);
    if( matches !==null){
        matches.forEach( match  => {
          let urls = getLinks.exec(match);
          if ( urls !== null){
            //console.log(urls);
              urls.forEach(url => arrayLinks.push(url));
            
          }; 
        });
    }
  });

  console.log(arrayLinks );
};

const readPath = (directory) => {
  if(directory.includes('.md')){
    links(directory);
  } else if(!directory.includes('.')){
    let path = fs.readdirSync(directory);
    console.log(path);
    if(path !== null) {
      path.forEach(file=>{
        //console.log(file);
       if(file.includes('.md')){
        links(directory + '\\' + file);
       };
      }); 
    };
  };
};
readPath('C:\\Users\\Itina\\Documents\\LABORATORIA\\Proyectos-GDL02\\Proyecto-05\\GDL002-md-links');


module.exports = () => {
  readPath
  /*mdLinks:  () => {
    console.log('hello');
  };*/

};

/*let instream = fs. createReadStream('../README.md');
let outstream = new stream;
let readlines = readline.createInterface(instream, outstream);
let getLinkLines = new RegExp('\\[+.*\\]s*\\(+.*\\)');
let getLinks = new RegExp('\\(+.*\\)')

readlines.on('line',(line) => {
  let matches = getLinkLines.exec(line);
  if( matches !==null){
    //console.log(matches);
    matches.map(match=>{
      let urls = getLinks.exec(match);
      if ( urls !== null){
        console.log(urls);
      };
    });
  };
});

readlines.on('close', ()=>{
  console.log('close')
});*/

/*fs.readFile ('C:\\Users\\Itina\\Documents\\LABORATORIA\\Proyectos-GDL02\\Proyecto-05\\GDL002-md-links\\README.md', 
(err, data)=> {
  if (err) throw err;
  console.log(data);
});*/