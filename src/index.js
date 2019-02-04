export const DATA_KEY = 'todoData'

/**
 * Retrieves and parses data from storage.
 * @param {Object} storage
 * @return {Array.<string>}
 */
export function getData (storage) {
  const data = storage.getItem(DATA_KEY) || '[]'
  return JSON.parse(data)
}

/**
 * Adds new record to todo.
 * @param {Object} storage
 * @param {string} content
 */
export function addData (storage, content) {
  const existingData = getData(storage)
  const newData = [].concat(existingData, content)
  storage.setItem(DATA_KEY, JSON.stringify(newData))
}

/**
 * Creates input element.
 * @return {HTMLElement}
 */
export function createInput () {
  const element = document.createElement('input')
  document.body.appendChild(element)
  element.handleSubmit = function () {
    addData(localStorage, element.value)
    updateList(localStorage, element.todoList)
    element.value = ''
  }
  element.addEventListener('keypress', function (event) {
    console.log('event', event)
    if (event.key === 'Enter') {
      element.handleSubmit()
    }
  })
  return element
}

/**
 * Creates list element.
 * @return {HTMLElement}
 */
export function createList () {
  const element = document.createElement('ul')
  document.body.appendChild(element)
  return element
}

/**
 * Updates list of items in list element.
 * @param {Object} storage
 * @param {HTMLElement} element
 */
export function updateList (storage, element) {
  element.innerHTML = getData(storage)
    .map((item) => `<li>${item}</li>`)
    .join('')
}

export function createTodo (storage) {
  const input = createInput()
  const list = createList()
  updateList(localStorage, list)
  input.todoList = list
}
