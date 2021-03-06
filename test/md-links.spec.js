const mdLinks = require('../scripts/md-links.js');
const linksArr = require('./mocks/links-array.json');


//Exist path test
describe('pathExist', () => {
  it('should have an existing path and return true', () => {
    expect(mdLinks.pathExist('../README.md')).toBe(true);
  });

  it('should return false if there is not an existing path', () => {
    expect(mdLinks.pathExist()).toBe(false);
  });
});


//Return links arr
describe('readPath', () => {
  it('should return a message: \'This is not a md file\'', () => {
    expect(mdLinks.readPath('/home/laboratoria-168/Documentos/ItzelMB/Proyects/Proyect-05/GDL002-md-links/package.json')).toBe('This is not a md file');
  });

  it('should return an array links', () => {
    expect(mdLinks.readPath('/home/laboratoria-168/Documentos/ItzelMB/Proyects/Proyect-05/GDL002-md-links/README.md')).toEqual(linksArr.arr);
  });
});

/*
describe('mdLinks', () => {
 it('should be a function', () => {
   expect(typeof(mdLinks)).toBe('function');
 });
});
*/
