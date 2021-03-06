import React from 'react'
import {View, StyleSheet, AsyncStorage, TouchableWithoutFeedback} from 'react-native'
import {Icon, Badge} from 'react-native-elements'

class CountBascket extends React.Component {
  state = {
    count: 0
  }

  componentDidMount = async () => {
    const data = await AsyncStorage.getItem('bascket')
    if (data !== null) {
      this.setState({count: JSON.parse(data).items.length})
    }
  }

  render() {
    const { container, textStyle, backgroundStyle } = styles
    return (
      <TouchableWithoutFeedback onPress={() => this.props.router.push.Bascket({}, {type: 'right'})} >
        <View style={container} >
          <Icon name='shopping-cart' color='#fff' />
          {(this.state.count !== 0) ? (<Badge value={this.state.count} textStyle={textStyle} containerStyle={backgroundStyle} />) : null}
        </View>
      </TouchableWithoutFeedback>
    )
  }
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
