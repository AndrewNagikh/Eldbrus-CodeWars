const {assert} = require('chai');
const cakes = require('./cakes')

describe('cakes tests', function() {
  it('basic recipes', function() {
    let recipe = {flour: 500, sugar: 200, eggs: 1};
    let available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};
    let result = 2;
    assert.equal(cakes(recipe, available), result);
    
    recipe = {cream: 200, flour: 300, sugar: 150, milk: 100, oil: 100};
    available = {sugar: 1700, flour: 20000, milk: 20000, oil: 30000, cream: 5000};
    result = 11;
    assert.equal(cakes(recipe, available), result);
  });
  
  it('missing ingredient', function() {
    let recipe = {apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100};
    let available = {sugar: 500, flour: 2000, milk: 2000};
    let result = 0;
    assert.equal(cakes(recipe, available), result);
  });
  
  it('not enough ingredients', function() {
    let recipe = {apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100};
    let available = {sugar: 500, flour: 2000, milk: 2000, apples: 15, oil: 20};
    let result = 0;
    assert.equal(cakes(recipe, available), result);
  });
  
  it('no ingredients available', function() {
    let recipe = {eggs: 4, flour: 400};
    let available = {};
    let result = 0;
    assert.equal(cakes(recipe, available), result);
  });
  
  it('exactly enough ingredients for 1 cake', function() {
    let recipe = {cream: 1, flour: 3, sugar: 1, milk: 1, oil: 1, eggs: 1};
    let available = {cream: 1, flour: 3, sugar: 1, milk: 1, oil: 1, eggs: 1};
    let result = 1;
    assert.equal(cakes(recipe, available), result);
  });
});