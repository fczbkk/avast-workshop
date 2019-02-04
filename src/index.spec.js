const assert = require('chai').assert;
const {getData, addData, DATA_KEY, createInput} = require('./index')

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

  describe('createInput', function () {

    it('should be created', function () {
      const result = createInput()
      assert.exists(result)
    })

    it('should be INPUT', function () {
      const result = createInput()
      assert.equal('INPUT', result.tagName)
    })

    it('should be added to document', function () {
      const result = createInput()
      assert.equal(result.parentNode, document.body)
    })

    it('should call `addData` on Enter', function () {
      const element = createInput()
      element.value = 'aaa'
      element.handleSubmit()
      assert.deepEqual(getData(localStorage), ['aaa'])
    })

    it('should empty value on Enter', function () {
      const element = createInput()
      element.value = 'aaa'
      element.handleSubmit()
      assert.equal(element.value, '')
    })

  })

})
