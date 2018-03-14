var assert = require('assert');
var adjacentElementsProduct = require('../4-adjacentElementsProduct.js');

describe('adjacentElementsProduct', function() {
    it('finds the pair of adjacent elements with largest product and returns product', function() {

        let result1 = adjacentElementsProduct([4, 10, 20, 1, 2, 1]);
        let result2 = adjacentElementsProduct([1, -10, 75, 10, 2]);

      assert.equal(result1, 200, 'adjacentElementsProduct([4, 10, 20, 1, 2, 1]) is 30');
      assert.equal(result2, 750, 'adjacentElementsProduct([1, -10, 75, 10, 2]) is 85');
    });
});