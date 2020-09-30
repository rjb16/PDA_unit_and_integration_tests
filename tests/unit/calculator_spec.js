var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('can add two numbers', function() {
    calculator.previousTotal = 1;
    calculator.add(4);
    assert.equal(5, calculator.runningTotal);
  })

  it('can subtract two numbers', function() {
    calculator.previousTotal = 7
    calculator.subtract(4)
    assert.equal(3, calculator.runningTotal);
  })

  it('can multiply two numbers', function() {
    calculator.previousTotal = 3
    calculator.multiply(5)
    assert.equal(15, calculator.runningTotal)
  })

  it('can divide two numbers', function() {
    calculator.previousTotal = 21
    calculator.divide(7)
    assert.equal(3, calculator.runningTotal)
  })

  it('can concatenate multiple number button clicks', function() {
    calculator.numberClick(2)
    calculator.numberClick(5)
    calculator.numberClick(2)
    assert.equal(252, calculator.runningTotal)
  })

  it('can chain multiple operations together', function() {
    calculator.numberClick(2)
    calculator.operatorClick("+")
    calculator.numberClick(8)
    calculator.operatorClick("/")
    calculator.numberClick(5)
    calculator.operatorClick("=")
    assert.equal(2, calculator.runningTotal)
  })

  it('can clear the running total without affecting calculation', function() {
    calculator.numberClick(2)
    calculator.operatorClick("+")
    calculator.clearClick()
    calculator.numberClick(2)
    calculator.operatorClick("=")
    assert.equal(4, calculator.runningTotal)
  }) 

});