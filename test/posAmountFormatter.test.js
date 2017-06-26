var assert = require('assert');
import posAmountFormatter from "..";

describe('Testing', function() {
  it('All test case must passing', function() {
    assert.equal(posAmountFormatter("0.00","0"), "0.00");
    assert.equal(posAmountFormatter("0.00","1"), "0.01");
    assert.equal(posAmountFormatter("0.01","4"), "0.14");
    assert.equal(posAmountFormatter("0.14","7"), "1.47");
    assert.equal(posAmountFormatter("1.47","6"), "14.76");
    assert.equal(posAmountFormatter("14.76","0"), "147.60");
    assert.equal(posAmountFormatter("147.60","back"), "14.76");
    assert.equal(posAmountFormatter("14.76","back"), "1.47");
    assert.equal(posAmountFormatter("1.47","back"), "0.14");
    assert.equal(posAmountFormatter("1.11","back"), "0.11");
    assert.equal(posAmountFormatter("0.14","back"), "0.01");
    assert.equal(posAmountFormatter("0.01","back"), "0.00");
    assert.equal(posAmountFormatter("0.00","back"), "0.00");
    assert.equal(posAmountFormatter("9999.99","back"), "999.99");
  });
});
