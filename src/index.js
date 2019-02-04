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
