//const mdLinks = require('../scripts/index.js');
const index = require('../scripts/index.js');
//const linksArr = require('./mocks/links-array.json');


//Exist path test
describe('pathExist', () => {
  it('should have an existing path and return true', () => {
    expect(index.pathExist('../README.md')).toBe(true);
  });

  it('should return false if there is not an existing path', () => {
    expect(index.pathExist()).toBe(false);
  });
});

//Return links arr
describe('readPath', () => {
  it('should return a message: \'This is not a md file\'', () => {
    expect(index.readPath('C:\\Users\\Itina\\Documents\\LABORATORIA\\Proyectos-GDL02\\Proyecto-05\\GDL002-md-links\\package.json')).toBe('This is not a md file');
  });
 /* 
  it('should return an array links', () => {
    expect(index.readPath('C:\\Users\\Itina\\Documents\\LABORATORIA\\Proyectos-GDL02\\Proyecto-05\\GDL002-md-links\\README.md')).toEqual(linksArr.arr);
  });*/
});


/*
describe('mdLinks', () => {
  it('should be a function', () => {
    expect(typeof(mdLinks)).toBe('function');
  });
});
*/