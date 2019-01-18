import React from 'react'
import {View, ScrollView, StyleSheet, Image, TextInput, AsyncStorage, Alert, KeyboardAvoidingView, TouchableWithoutFeedback} from 'react-native'
import {FontAwesome} from '@expo/vector-icons'
import {Header, Text, Button, Icon} from 'react-native-elements'
import {w} from './Constants'

class Bascket extends React.Component {
  state= {
    products: '',
    priceAll: 0,
    email: '',
    comment: ''
  }

  componentDidMount = async () => {
    const data = await AsyncStorage.getItem('bascket')
    if (data !== null) {
      this.setState({products: JSON.parse(data).items})
      const result = Object.values(this.state.products).map((item) => { return item.price * item.count * item.countMonth }).reduce((total, currentValue) => {
        return total + currentValue
      })
      this.setState({priceAll: result})
    }
  }

    _onPressButton = () => {
      AsyncStorage.removeItem('bascket').then(() => {
        this.props.router.reset.Catalog({}, {type: 'right'})
        Alert.alert('Успех', 'Вы успешно очистили корзину')
      })
    }

    _onPressButtonConfirmation = () => {
      if (this.state.email === '') {
        Alert.alert('Ошибка', 'Заполните пожалуйста email')
      } else {
        const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i)
        const valid = pattern.test(this.state.email)
        if (!valid) {
          Alert.alert('Ошибка', 'Заполните правильно email, он необходим для подтверждения платежа')
        } else {
          AsyncStorage.setItem('bascket', JSON.stringify({items: this.state.products, email: this.state.email, comment: this.state.comment, priceAll: this.state.priceAll}))
          this.props.router.push.Pay({}, {type: 'right'})
        }
      }
    }

    _onPressButtonDelete = (id) => {
      this.state.products.splice(id, 1)
      if (this.state.products.length === 0) {
        AsyncStorage.removeItem('bascket').then(() => {
          this.props.router.reset.Catalog({}, {type: 'right'})
          Alert.alert('Успех', 'Вы успешно удалили все товары')
        })
      } else {
        AsyncStorage.setItem('bascket', JSON.stringify({items: this.state.products})).then(() => {
          this.setState({products: this.state.products})
          const result = Object.values(this.state.products).map((item) => { return item.price * item.count * item.countMonth }).reduce((total, currentValue) => {
            return total + currentValue
          })
          this.setState({priceAll: result})
          Alert.alert('Успех', 'Вы успешно удалили товар')
        })
      }
    }

    render() {
      const {wrapper, blockHeader, cover, coverBlock, container, buttonStyleBack, buttonStyleBackConteiner, styleTextClear, styleTextName, styleTextPrice, InputStyle, blockTextHeaderTwo} = styles
      return (
        <View style={wrapper}>
          <Header
            backgroundColor='red'
            leftComponent={
              <TouchableWithoutFeedback onPress={() => this.props.router.push.Catalog({}, {type: 'left'})}>
                <Icon name='chevron-left' color='#fff' />
              </TouchableWithoutFeedback>
            }
            centerComponent={{ text: 'Корзина', style: { color: '#fff' }}}
            rightComponent={
              <TouchableWithoutFeedback onPress={() => this._onPressButton()}>
                <Icon name='delete-forever' color='#fff' />
              </TouchableWithoutFeedback>
            }
          />
          <ScrollView>
            <KeyboardAvoidingView behavior='padding'>
              <View style={container}>
                {
                  (this.state.products !== '') ? (
                    Object.values(this.state.products).map((item, index) => {
                      const period = item.subscribeArray.filter((x) => {
                        return x !== null
                      })
                      return (<View key={index.toString()} style={blockHeader}>
                        <Image style={cover} source={{ uri: item.src}} />
                        <View style={coverBlock}>
                          <Button
                            small
                            icon={{name: 'clear'}}
                            title='Удалить'
                            color='white'
                            buttonStyle={buttonStyleBack}
                            containerViewStyle={buttonStyleBackConteiner}
                            onPress={() => this._onPressButtonDelete(index)}
                          />
                          <Text style={styleTextName}>Название: {item.name}</Text>
                          <Text>Тип доставки: {item.delivery}</Text>
                          <Text>Комплектов: {item.count}</Text>
                          <Text>Регион: {item.region}</Text>
                          {
                            (item.address) ? (<Text>Адрес: {item.address}</Text>) : null
                          }
                          {
                            (item.index) ? (<Text>Индекс: {item.index}</Text>) : null
                          }
                          {
                            (item.box) ? (<Text>Абонентский ящик: {item.box}</Text>) : null
                          }
                          <Text>Период подписки: {period.join()}
                          </Text>
                          <Text style={styleTextPrice}>Цена (в месяц): {item.price} <FontAwesome name="rub" size={16} /></Text>
                          <Text style={styleTextPrice}>Итоговая цена: {item.price * item.count * item.countMonth} <FontAwesome name="rub" size={16} /></Text>
                        </View>
                      </View>)
                    })
                  ) : (<Text style={styleTextClear}>Ваша корзина пуста!</Text>)
                }
                {
                  (this.state.products !== '') ? (<View>
                    <Text style={blockTextHeaderTwo}>Email:</Text>
                    <TextInput
                      style={InputStyle}
                      onChangeText={(text) => this.setState({email: text})}
                      value={this.state.email}
                    /><Text style={blockTextHeaderTwo}>Комментарий:</Text>
                    <TextInput
                      style={InputStyle}
                      onChangeText={(text) => this.setState({comment: text})}
                      value={this.state.comment}
                    /><Text style={styleTextClear}>Сумма заказа: {this.state.priceAll} <FontAwesome name="rub" size={16} /></Text>
                    <Button
                      small
                      icon={{name: 'chevron-right'}}
                      title='Оформить заказ'
                      color='white'
                      buttonStyle={buttonStyleBack}
                      containerViewStyle={buttonStyleBackConteiner}
                      onPress={() => this._onPressButtonConfirmation()}
                    /></View>) : null
                }
              </View>
            </KeyboardAvoidingView>
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
    padding: 10
  },
  cover: {
    width: w / 3,
    height: w * 0.5
  },
  blockHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 2,
    borderBottomColor: '#DCDCDC',
    paddingBottom: 10,
    marginBottom: 10
  },
  coverBlock: {
    width: w / 1.8,
    paddingLeft: 10
  },
  buttonStyleBack: {
    backgroundColor: 'red'
  },
  buttonStyleBackConteiner: {
    width: '100%',
    marginLeft: 0,
    height: 50
  },
  styleTextClear: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 10
  },
  styleTextName: {
    fontWeight: 'bold'
  },
  styleTextPrice: {
    color: 'red',
    fontWeight: 'bold'
  },
  InputStyle: {
    borderWidth: 1,
    borderColor: '#DCDCDC',
    height: 50,
    width: '100%',
    paddingLeft: 10,
    marginBottom: 10
  },
  blockTextHeaderTwo: {
    paddingLeft: 10
  }
})

export {Bascket}
