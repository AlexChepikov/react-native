import { AsyncStorage } from 'react-native'

class Core {
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

  // _setData = async () => {
  //   try {
  //     await AsyncStorage.setItem('bascket', JSON.stringify(this.state))
  //   } catch (error) {
  //   // Error saving data
  //   }
  // }
  //
  // _getData = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem('bascket')
  //     if (value !== null) {
  //       // We have data!!
  //       console.log(value)
  //     }
  //   } catch (error) {
  //     // Error retrieving data
  //   }
  // }
  //
  // _removeData = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem('bascket')
  //     if (value !== null) {
  //       // We have data!!
  //       console.log(value)
  //     }
  //   } catch (error) {
  //     // Error retrieving data
  //   }
  // }
}

export {Core}
