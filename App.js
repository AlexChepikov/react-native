import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>КИСУНДРИЛЬ Я ТЕБЯ ЛЮБЛЮ!ВЫХОДИ ЗА МЕНЯ ЗАМУЖ!</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    textAlign:'center'
  }
})
