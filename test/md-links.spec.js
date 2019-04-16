const mdLinks = require('../scripts/index.js');
const index = require('../scripts/index.js');

describe('mdLinks', () => {
  it('should be a function', () => {
    expect(typeof(mdLinks)).toBe('function');
  });
});

//Test existing path
describe('pathExist', ()=> {
  it('should have an existing path and return true', () => {
    expect(index.pathExist('../README.md')).toBe(true);
  });

  it('should return false if there is not an existing path', () => {
    expect(index.pathExist()).toBe(false);
  });
});

describe('readPath', () => {
  it('should return a links array', () => {
    expect(index.links('../HI.md')).toBe('[(https://www.figma.com/file/aIfh7zOWjTYdWvJKqgHAFcbk/Main-interaction?node-id=0%3A1),(https://www.figma.com/file/aIfh7zOWjTYdWvJKqgHAFcbk/Main-interaction?node-id=0%3A1)]');
  });
});