var assert = require('assert');
var shapeArea = require('../5-shapeArea.js');

describe('shapeArea', function() {
    it('find the area of a polygon for a given n', function() {

        let result1 = shapeArea(1);
        let result2 = shapeArea(5);

      assert.equal(result1, 1, 'shapeArea(1) is 1');
      assert.equal(result2, 41, 'shapeArea(5) is 41');
    });
});

