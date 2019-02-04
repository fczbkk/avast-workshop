export const DATA_KEY = 'todoData'

export function getData (storage) {
  const data = storage.getItem(DATA_KEY) || '[]'
  return JSON.parse(data)
}

export function addData (storage, content) {
  const existingData = getData(storage)
  const newData = [].concat(existingData, content)
  storage.setItem(DATA_KEY, JSON.stringify(newData))
}

export function createInput () {
  const element = document.createElement('input')
  document.body.appendChild(element)
  element.handleSubmit = function () {
    addData(localStorage, element.value)
    element.value = ''
  }
  element.addEventListener('keyPress', function (event) {
    if (event.key === 'Enter') {
      element.handleSubmit()
    }
  })
  return element
}

export function createList () {

}

export function updateList () {

}
