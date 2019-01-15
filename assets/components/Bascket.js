import React from 'react'
import {View, ScrollView, StyleSheet, Image, AsyncStorage, Alert} from 'react-native'
import {FontAwesome} from '@expo/vector-icons'
import {Header, Text, Button} from 'react-native-elements'
import {w} from './Constants'

class Bascket extends React.Component {
  state= {
    products: '',
    priceAll: 0
  }

  componentDidMount = async () => {
    const data = await AsyncStorage.getItem('bascket')
    if (data !== null) {
      this.setState({products: JSON.parse(data)})
      const result = Object.values(this.state.products).map((item) => { return item.price * item.count }).reduce((total, currentValue) => {
        return total + currentValue
      })
      this.setState({priceAll: result})
    }
  }

    _onPressButton = () => {
      AsyncStorage.removeItem('bascket').then(() => {
        this.props.router.reset.Catalog({}, {type: 'right'})
        Alert.alert('Успех!', 'Вы успешно очистили корзину!')
      })
    }

    render() {
      const {wrapper, blockHeader, cover, coverBlock, container, buttonStyleBack, buttonStyleBackConteiner, styleTextClear, styleTextName, styleTextPrice} = styles
      return (
        <View style={wrapper}>
          <Header
            backgroundColor='red'
            leftComponent={{ icon: 'chevron-left', color: '#fff', onPress: () => this.props.router.pop({type: 'right'}) }}
            centerComponent={{ text: 'Корзина', style: { color: '#fff' }}}
          />
          <ScrollView>
            <View style={container}>
              <Button
                icon={{name: 'delete-forever'}}
                title='Очистить корзину'
                color='white'
                buttonStyle={buttonStyleBack}
                containerViewStyle={buttonStyleBackConteiner}
                onPress={this._onPressButton}
              />
              {
                (this.state.products !== '') ? (
                  Object.values(this.state.products).map((item) => {
                    return (<View key={item.id} style={blockHeader}>
                      <Image style={cover} source={{ uri: item.src}} />
                      <View style={coverBlock}>
                        <Button
                          small
                          icon={{name: 'edit'}}
                          title='Изменить'
                          color='white'
                          buttonStyle={buttonStyleBack}
                          containerViewStyle={buttonStyleBackConteiner}
                        />
                        <Button
                          small
                          icon={{name: 'clear'}}
                          title='Удалить'
                          color='white'
                          buttonStyle={buttonStyleBack}
                          containerViewStyle={buttonStyleBackConteiner}
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
                        <Text style={styleTextPrice}>Цена: {item.price * item.count} <FontAwesome name="rub" size={16} /></Text>
                      </View>
                    </View>)
                  })
                ) : <Text style={styleTextClear}>Ваша корзина пуста!</Text>
              }
              {
                (this.state.products !== '') ? (<Text style={styleTextClear}>Сумма заказа: {this.state.priceAll} <FontAwesome name="rub" size={16} /></Text>) : null
              }
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
    padding: 10
  },
  cover: {
    width: w / 3,
    height: w * 0.5
  },
  blockHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#DCDCDC',
    paddingBottom: 10
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
    fontSize: 20
  },
  styleTextName: {
    fontWeight: 'bold'
  },
  styleTextPrice: {
    color: 'red',
    fontWeight: 'bold'
  }
})

export {Bascket}
