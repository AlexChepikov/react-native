import React from 'react'
import {View, StyleSheet} from 'react-native'
import {Icon, Badge} from 'react-native-elements'

const CountBascket = () => {
  const { container, textStyle, backgroundStyle } = styles

  return (
    <View style={container}>
      <Icon name='shopping-cart' color='#fff' />
      <Badge value={0} textStyle={textStyle} containerStyle={backgroundStyle} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  textStyle: {
    color: 'red'
  },
  backgroundStyle: {
    backgroundColor: '#fff'
  }
})

export {CountBascket}
