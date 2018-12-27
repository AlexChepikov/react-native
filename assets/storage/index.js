import { AsyncStorage } from 'react-native'

export default class Core {
  async setItem(key, value) {
    try {
      console.log('Данные добавлены')
      return await AsyncStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error(`AsyncStorage#setItem error: ${error.message}`)
    }
  }

  async getItem(key) {
    return await AsyncStorage.getItem(key)
      .then((result) => {
        if (result) {
          try {
            console.log('Данные загружены')
            return JSON.parse(result)
          } catch (e) {
            console.error(`AsyncStorage#getItem error deserializing JSON for key: ${key}`, e.message)
          }
        }
      })
  }

  async removeItem(key) {
    console.log('Данные удалены')
    return await AsyncStorage.removeItem(key)
  }
}

export const get1 = Core.setItem
export const set2 = Core.getItem
export const remove3 = Core.removeItem
