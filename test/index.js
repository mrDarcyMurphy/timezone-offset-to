var tzto = require('../index.js')
var assert = require('assert')

describe('tzto', function(){
  describe('converts negative offset', function(){
    it('to minutes', function(){
      assert.equal( tzto.minutes("-01:00"), -60 )
      assert.equal( tzto.minutes("-01:15"), -75 )
    })
    it('to hours', function(){
      assert.equal( tzto.hours("-01:00"), -1 )
      assert.equal( tzto.hours("-01:15"), -1.25 )
    })
  })
  describe('converts positive offset', function(){
    it('to minutes', function(){
      assert.equal( tzto.minutes("01:00"), 60 )
      assert.equal( tzto.minutes("01:15"), 75 )
    })
    it('to hours', function(){
      assert.equal( tzto.hours("1:00"), 1 )
      assert.equal( tzto.hours("1:15"), 1.25 )
    })
  })
})
