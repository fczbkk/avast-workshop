const assert = require('chai').assert;
const {getData, addData, DATA_KEY} = require('./index')

describe('TODO app', function () {

  beforeEach(function () {
    localStorage.removeItem(DATA_KEY)
  })

  afterEach(function () {
    localStorage.removeItem(DATA_KEY)
  })

  describe('getData', function () {

    it('should return empty object when not set', function () {
      const result = getData(localStorage)
      assert.deepEqual(result, [])
    })

    it('should return data from storage as object', function () {
      localStorage.setItem(DATA_KEY, '["aaa", "bbb"]')
      const result = getData(localStorage)
      assert.deepEqual(result, ["aaa", "bbb"])
    })

  })

  describe('addData', function () {

    it('should add to empty storage', function () {
      addData(localStorage, 'aaa')
      const result = getData(localStorage)
      assert.deepEqual(result, ['aaa'])
    })

    it('should add to existing storage', function () {
      addData(localStorage, 'aaa')
      addData(localStorage, 'bbb')
      const result = getData(localStorage)
      assert.deepEqual(result, ['aaa', 'bbb'])
    })

  })

})
