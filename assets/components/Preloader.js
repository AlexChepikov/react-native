import React from 'react'
import {View, StyleSheet} from 'react-native'
import {Text, Button} from 'react-native-elements'

class Preloader extends React.Component {
  state={
    message: ''
  }

  componentDidMount = async () => {
    const hour = new Date().getHours()
    if (hour > 0 && hour <= 11) {
      this.setState({message: 'Доброе утро'})
    } else if (hour > 11 && hour <= 20) {
      this.setState({message: 'Добрый день'})
    } else if (hour > 20 && hour <= 24) {
      this.setState({message: 'Добрый вечер'})
    }
  }

  render() {
    const {wrapper, conteiner, buttonStyleBack, buttonStyleBackConteiner, textStyleHeader, textStyleBlock} = styles
    return (
      <View style={wrapper}>
        <View style={conteiner}>
          <Text style={textStyleHeader}>{this.state.message}, дорогой читатель!</Text>
          <Text style={textStyleBlock}>Для корректной работы приложения необходимо соединение с интернет!</Text>
          <Button
            small
            icon={{name: 'chevron-right'}}
            title='Ок'
            color='white'
            buttonStyle={buttonStyleBack}
            containerViewStyle={buttonStyleBackConteiner}
            onPress={() => this.props.router.push.Catalog({}, {type: 'right'})}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, .5)',
    padding: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  conteiner: {
    flex: 1,
    backgroundColor: 'white',
    textAlign: 'center',
    color: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonStyleBack: {
    backgroundColor: 'red'
  },
  buttonStyleBackConteiner: {
    width: 100,
    height: 50
  },
  textStyleHeader: {
    textAlign: 'center',
    fontSize: 20
  },
  textStyleBlock: {
    textAlign: 'center',
    fontSize: 16,
    padding: 10
  }
})

export {Preloader}
