import { AsyncStorage } from 'react-native'

export const setItem = (key, value) => {
  AsyncStorage.setItem(key, JSON.stringify(value))
}

export const getItem = (key) => {
  return AsyncStorage.getItem(key)
}

export const removeItem = (key) => {
  AsyncStorage.removeItem(key)
}
