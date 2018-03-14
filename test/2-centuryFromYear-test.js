var assert = require('assert');
var centuryFromYear = require('../2-centuryFromYear.js');

describe('centuryFromYear', function() {
    it('when given a year, it returns the Century', function() {

        let result1 = centuryFromYear(1998);
        let result2 = centuryFromYear(1);
        let result3 = centuryFromYear(3008);

      assert.equal(result1, 20, 'centuryFromYear(1998) is 20');
      assert.equal(result2, 1, 'centuryFromYear(1) is 1');
      assert.equal(result3, 31, 'centuryFromYear(3008) is 31');
    });
});