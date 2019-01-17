import React from 'react'
import {View, ScrollView, StyleSheet, AsyncStorage, Alert, TouchableWithoutFeedback, Linking} from 'react-native'
import {FontAwesome} from '@expo/vector-icons'
import {Header, Text, Button, Icon} from 'react-native-elements'

class Pay extends React.Component {
  state= {
    data: ''
  }

  componentDidMount = async () => {
    const data = await AsyncStorage.getItem('bascket')
    if (data !== null) {
      this.setState({data: JSON.parse(data)})
    }
  }

  _onPressButton = () => {
    Alert.alert('Ошибка', 'Оплата еще не готова')
  }

  render() {
    const {wrapper, container, styleText, buttonStyleBack, buttonStyleBackConteiner, textStyle} = styles
    return (
      <View style={wrapper}>
        <Header
          backgroundColor='red'
          leftComponent={
            <TouchableWithoutFeedback onPress={() => this.props.router.pop({}, {type: 'right'})}>
              <Icon name='chevron-left' color='#fff' />
            </TouchableWithoutFeedback>
          }
          centerComponent={{ text: 'Оплата заказа', style: { color: '#fff' }}}
        />
        <ScrollView>
          <View style={container}>
            <Text style={styleText}>Ваш заказ на сумму: {this.state.data.priceAll} <FontAwesome name="rub" size={16} /></Text>
            <Button
              small
              icon={{name: 'payment'}}
              title='Оплатить заказ'
              color='white'
              buttonStyle={buttonStyleBack}
              containerViewStyle={buttonStyleBackConteiner}
              onPress={() => this._onPressButton()}
            />
            <Text>{'\t'}{'\t'}Оплачивая заказ, Вы соглашаетесь на обработку персональных данных:</Text>
            <Text style={textStyle} onPress={() => Linking.openURL('http://yuniline.ru/files/Положение152фз.docx')}>Положение об использовании персональных данных</Text>
            <Text style={textStyle} onPress={() => Linking.openURL('https://yuniline.ru/files/договороферта.docx')}>Договор оферты по подписке на переодические печатные издания</Text>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  container: {
    flex: 1,
    padding: 10
  },
  styleText: {
    textAlign: 'center',
    fontSize: 20
  },
  buttonStyleBack: {
    backgroundColor: 'red'
  },
  buttonStyleBackConteiner: {
    marginTop: 10,
    width: '100%',
    marginLeft: 0,
    height: 50
  },
  textStyle: {
    color: 'red'
  }
})

export {Pay}
