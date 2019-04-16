const mdLinks = require('../scripts/index.js').default.default;


describe('mdLinks', () => {
  it('should be a function', () => {
    expect(typeof(mdLinks)).toBe('function');
  });
});


describe ('thePath',() => {
  it('should be a string', () => {
    expect(typeof(thePath)).toBe('string');
  });
});