// sum.js
function sum(a, b) {
    return a + b;
  }
  
  module.exports = sum;
  
  // sum.test.js
  const sumFunction = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sumFunction(1, 2)).toBe(3);
});
  
    
  