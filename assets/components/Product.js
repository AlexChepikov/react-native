import React from 'react'
import {View, ScrollView, StyleSheet, Image, Picker, TextInput, Alert, KeyboardAvoidingView, Platform, AsyncStorage, TouchableWithoutFeedback} from 'react-native'
import {Header, Text, Button, Icon, CheckBox} from 'react-native-elements'
import IOSPicker from 'react-native-ios-picker'
import {FontAwesome} from '@expo/vector-icons'
import {CountBascket} from './CountBascket'
import {w} from './Constants'

const month = ['2019 Январь', '2019 Февраль', '2019 Март', '2019 Апрель', '2019 Май', '2019 Июнь']
const counts = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
const delivery = ['Домой (до почтового ящика)', 'До востребования', 'Абонентский ящик']

const regions = [
  {
    label: 'Выберите регион',
    value: 0
  },
  {
    label: 'Адыгея республика',
    value: 100
  },
  {
    label: 'Алтай республика',
    value: 200
  },
  {
    label: 'Алтайский край',
    value: 90
  },
  {
    label: 'Амурская область',
    value: 30
  },
  {
    label: 'Архангельская область',
    value: 400
  },
  {
    label: 'Астраханская область',
    value: 600
  },
  {
    label: 'Башкортостан республика',
    value: 10
  },
  {
    label: 'Белгородская область',
    value: 100
  },
  {
    label: 'Брянская область',
    value: 100
  },
  {
    label: 'Бурятия республика',
    value: 100
  },
  {
    label: 'Владимирская область',
    value: 100
  },
  {
    label: 'Волгоградская область',
    value: 100
  },
  {
    label: 'Вологодская область',
    value: 100
  },
  {
    label: 'Воронежская область',
    value: 100
  },
  {
    label: 'Дагестан республика',
    value: 100
  },
  {
    label: 'Еврейская автономная область',
    value: 100
  },
  {
    label: 'Забайкальский край',
    value: 100
  },
  {
    label: 'Ивановская область',
    value: 100
  },
  {
    label: 'Ингушетия республика',
    value: 100
  },
  {
    label: 'Иркутская область',
    value: 100
  },
  {
    label: 'Кабардино-Балкария республика',
    value: 100
  },
  {
    label: 'Калининградская область',
    value: 100
  },
  {
    label: 'Калмыкия республика',
    value: 100
  },
  {
    label: 'Калужская область',
    value: 100
  },
  {
    label: 'Камчатский край',
    value: 100
  },
  {
    label: 'Карачаево-Черкессия республика',
    value: 100
  },
  {
    label: 'Карелия республика',
    value: 100
  },
  {
    label: 'Кемеровская область',
    value: 100
  },
  {
    label: 'Кировская область',
    value: 100
  },
  {
    label: 'Коми республика',
    value: 100
  },
  {
    label: 'Костромская область',
    value: 100
  },
  {
    label: 'Краснодарский край',
    value: 100
  },
  {
    label: 'Красноярский край',
    value: 100
  },
  {
    label: 'Крым',
    value: 100
  },
  {
    label: 'Курганская область',
    value: 100
  },
  {
    label: 'Курская область',
    value: 100
  },
  {
    label: 'Ленинградская область',
    value: 100
  },
  {
    label: 'Липецкая область',
    value: 100
  },
  {
    label: 'Магаданская область',
    value: 100
  },
  {
    label: 'Марий Эл республика',
    value: 100
  },
  {
    label: 'Мордовия республика',
    value: 100
  },
  {
    label: 'Москва',
    value: 100
  },
  {
    label: 'Московская область',
    value: 100
  },
  {
    label: 'Мурманская область',
    value: 100
  },
  {
    label: 'Ненецкий АО',
    value: 100
  },
  {
    label: 'Нижегородская область',
    value: 100
  },
  {
    label: 'Новгородская область',
    value: 100
  },
  {
    label: 'Новосибирская обасть',
    value: 100
  },
  {
    label: 'Омская область',
    value: 100
  },
  {
    label: 'Оренбургская область',
    value: 100
  },
  {
    label: 'Орловская область',
    value: 100
  },
  {
    label: 'Пензенская область',
    value: 100
  },
  {
    label: 'Пермский край',
    value: 100
  },
  {
    label: 'Приморский край',
    value: 100
  },
  {
    label: 'Псковская область',
    value: 100
  },
  {
    label: 'Ростовская область',
    value: 100
  },
  {
    label: 'Рязанская область',
    value: 100
  },
  {
    label: 'С.Осетия (Алания) республика',
    value: 100
  },
  {
    label: 'Самарская область',
    value: 100
  },
  {
    label: 'Санкт-Петербург',
    value: 100
  },
  {
    label: 'Саратовская область',
    value: 100
  },
  {
    label: 'Саха (Якутия) республика',
    value: 100
  },
  {
    label: 'Сахалинская область',
    value: 100
  },
  {
    label: 'Свердловская область',
    value: 100
  },
  {
    label: 'Смоленская область',
    value: 100
  },
  {
    label: 'Ставропольский край',
    value: 100
  },
  {
    label: 'Тамбовская область',
    value: 100
  },
  {
    label: 'Татарстан республика',
    value: 100
  },
  {
    label: 'Тверская область',
    value: 100
  },
  {
    label: 'Томская область',
    value: 100
  },
  {
    label: 'Тульская область',
    value: 100
  },
  {
    label: 'Тыва',
    value: 100
  },
  {
    label: 'Тюменская область',
    value: 100
  },
  {
    label: 'Удмуртия республика',
    value: 100
  },
  {
    label: 'Ульяновская область',
    value: 100
  },
  {
    label: 'Хабаровский край',
    value: 100
  },
  {
    label: 'Хакасия республика',
    value: 100
  },
  {
    label: 'Ханты-Мансийский АО',
    value: 100
  },
  {
    label: 'Челябинская область',
    value: 100
  },
  {
    label: 'Чеченская республика',
    value: 100
  },
  {
    label: 'Чувашия',
    value: 100
  },
  {
    label: 'Чукотский АО',
    value: 100
  },
  {
    label: 'Ямало-Ненецкий АО',
    value: 100
  },
  {
    label: 'Ярославская область',
    value: 100
  }
]

class Product extends React.Component {
  state = {
    id: this.props.data.id,
    name: this.props.data.name,
    src: this.props.data.image,
    type: 'Подписка',
    region: 'Выберите регион',
    price: 0,
    address: '',
    fio: '',
    count: '1',
    delivery: 'Домой (до почтового ящика)',
    deliveryType: 0,
    subscribeArray: [null, null, null, null, null, null, null, null, null, null, null, null],
    subscribeArrayChecked: [false, false, false, false, false, false, false, false, false, false, false, false],
    countMonth: 0,
    index: '',
    box: ''
  }

  _setStorage = async () => {
    const value = await AsyncStorage.getItem('bascket')
    if (value !== null) {
      const data = JSON.parse(value).items
      data.push(this.state)
      await AsyncStorage.setItem('bascket', JSON.stringify({items: data}))
    } else {
      await AsyncStorage.setItem('bascket', JSON.stringify({items: [this.state]}))
    }
    this.props.router.reset.Catalog({}, {type: 'right'})
    Alert.alert('Успех', 'Вы успешно добавили товар в корзину')
  }

  _onPressButton = () => {
    if (this.state.region === 'Выберите регион' || this.state.price === 0) {
      Alert.alert('Ошибка', 'Выберите пожалуйста свой регион')
    } else if (this.state.countMonth === 0) {
      Alert.alert('Ошибка', 'Выберите хотя бы 1 месяц подписки')
    } else if (this.state.deliveryType === 0) {
      if (this.state.address === '') {
        Alert.alert('Ошибка', 'Заполните пожалуйста свой адрес')
      } else if (this.state.fio === '') {
        Alert.alert('Ошибка', 'Заполните пожалуйста свое ФИО')
      } else {
        this._setStorage()
      }
    } else if (this.state.deliveryType === 1) {
      if (this.state.index === '') {
        Alert.alert('Ошибка', 'Заполните пожалуйста индекс')
      } else if (this.state.fio === '') {
        Alert.alert('Ошибка', 'Заполните пожалуйста свое ФИО')
      } else {
        this._setStorage()
      }
    } else if (this.state.deliveryType === 2) {
      if (this.state.index === '') {
        Alert.alert('Ошибка', 'Заполните пожалуйста индекс')
      } else if (this.state.box === '') {
        Alert.alert('Ошибка!', 'Заполните пожалуйста абонентский ящик')
      } else if (this.state.fio === '') {
        Alert.alert('Ошибка', 'Заполните пожалуйста свое ФИО')
      } else {
        this._setStorage()
      }
    }
  }

  render() {
    const {name, image} = this.props.data
    const {wrapper, container, cover, blockHeader, coverBlock, fontBold, fontBoldColor, block, blockTextHeader, blockTextHeaderTwo, fontSizeText, buttonStyleBack, buttonStyleBackConteiner, InputStyle, pikerStyle, pikerStyleIOS} = styles

    return (
      <View style={wrapper}>
        <Header
          backgroundColor='red'
          leftComponent={
            <TouchableWithoutFeedback onPress={() => this.props.router.pop({type: 'right'})}>
              <Icon name='chevron-left' color='#fff' />
            </TouchableWithoutFeedback>
          }
          centerComponent={{ text: name, style: { color: '#fff' }}}
          rightComponent={<CountBascket router={this.props.router} />}
        />
        <ScrollView>
          <KeyboardAvoidingView behavior='padding'>
            <View style={container}>
              <View style={blockHeader}>
                <Image style={cover} source={{ uri: image}} />
                <View style={coverBlock}>
                  <Text style={fontBold}>(В цену подписки включена стоимость доставки. Минимальный период подписки – 1 месяц.)</Text>
                  <Text style={fontBoldColor}>Цена (в месяц): {this.state.price} <FontAwesome name="rub" size={16} /></Text>
                  <Text style={fontBoldColor}>Итоговая цена: {this.state.price * this.state.count * this.state.countMonth} <FontAwesome name="rub" size={16} /></Text>
                </View>
              </View>

              <View style={block}>
                <Text style={blockTextHeader}>От Вашего региона зависит цена издания!</Text>
                <View style={pikerStyle}>
                  {
                    (Platform.OS === 'ios') ?
                      (
                        <IOSPicker
                          selectedValue={this.state.region}
                          onValueChange={item => {
                            const region = regions.find(value => value.label === item)
                            this.setState({ region: item, price: region.value })
                          }}
                          style={pikerStyleIOS}
                          mode={'modal'}
                        >
                          {
                            regions.map((item, index) =>
                              <Picker.Item key={index.toString()} label={item.label} value={item.label} />
                            )
                          }
                        </IOSPicker>
                      ) :
                      (
                        <Picker
                          selectedValue={this.state.region}
                          onValueChange={item => {
                            const region = regions.find(value => value.label === item)
                            this.setState({ region: item, price: region.value })
                          }}
                        >
                          {regions.map((i, index) => (
                            <Picker.Item key={index.toString()} label={i.label} value={i.label} />
                          ))}
                        </Picker>
                      )
                  }
                </View>
                <Text style={blockTextHeaderTwo}>Выберите месяцы подписки:</Text>
                <View>
                  {
                    month.map((i, index) => (
                      <CheckBox
                        key={index.toString()}
                        center
                        title={i}
                        iconType='material'
                        checkedIcon='check-box'
                        uncheckedIcon='check-box-outline-blank'
                        checkedColor='red'
                        checked={this.state.subscribeArrayChecked[index]}
                        onPress={() => {
                          if (this.state.subscribeArray[index] === null) {
                            this.state.subscribeArrayChecked[index] = true
                            this.state.subscribeArray[index] = month[index]
                            this.setState({subscribeArray: this.state.subscribeArray, subscribeArrayChecked: this.state.subscribeArrayChecked, countMonth: this.state.countMonth + 1})
                          } else {
                            this.state.subscribeArrayChecked[index] = false
                            this.state.subscribeArray[index] = null
                            this.setState({subscribeArray: this.state.subscribeArray, subscribeArrayChecked: this.state.subscribeArrayChecked, countMonth: this.state.countMonth - 1})
                          }
                        }}
                      />
                    ))
                  }
                </View>
                <Text style={blockTextHeaderTwo}>Тип доставки:</Text>
                <View style={pikerStyle}>
                  {
                    (Platform.OS === 'ios') ?
                      (
                        <IOSPicker
                          selectedValue={this.state.delivery}
                          onValueChange={item => {
                            if (item === 'Домой (до почтового ящика)') {
                              this.setState({ delivery: item, deliveryType: 0, box: '', index: ''})
                            } else if (item === 'До востребования') {
                              this.setState({ delivery: item, deliveryType: 1, address: '', box: ''})
                            } else {
                              this.setState({ delivery: item, deliveryType: 2, address: ''})
                            }
                          }}
                          style={pikerStyleIOS}
                          mode={'modal'}
                        >
                          {delivery.map((i, index) => (
                            <Picker.Item key={index.toString()} label={i} value={i} />
                          ))}
                        </IOSPicker>
                      ) :
                      (
                        <Picker
                          selectedValue={this.state.delivery}
                          onValueChange={item => {
                            if (item === 'Домой (до почтового ящика)') {
                              this.setState({ delivery: item, deliveryType: 0, box: '', index: ''})
                            } else if (item === 'До востребования') {
                              this.setState({ delivery: item, deliveryType: 1, address: '', box: ''})
                            } else {
                              this.setState({ delivery: item, deliveryType: 2, address: ''})
                            }
                          }}
                        >
                          {delivery.map((i, index) => (
                            <Picker.Item key={index.toString()} label={i} value={i} />
                          ))}
                        </Picker>
                      )
                  }

                </View>

                {
                  (this.state.deliveryType === 0) ?
                    (<View><Text style={blockTextHeaderTwo}>Адрес(<Text style={fontSizeText}>Например: 100000, г. Москва, ул. Ленина, д. 100, кв. 1</Text>):</Text>
                      <TextInput
                        style={InputStyle}
                        onChangeText={(text) => this.setState({address: text})}
                        value={this.state.address}
                      /></View>) : null
                }
                {
                  (this.state.deliveryType === 1) ?
                    (<View><Text style={blockTextHeaderTwo}>Индекс:</Text>
                      <TextInput
                        style={InputStyle}
                        onChangeText={(text) => this.setState({index: text})}
                        value={this.state.index}
                      /></View>) : null
                }
                {
                  (this.state.deliveryType === 2) ?
                    (<View><Text style={blockTextHeaderTwo}>Индекс:</Text>
                      <TextInput
                        style={InputStyle}
                        onChangeText={(text) => this.setState({index: text})}
                        value={this.state.index}
                      /><Text style={blockTextHeaderTwo}>Абонентский ящик:</Text>
                      <TextInput
                        style={InputStyle}
                        onChangeText={(text) => this.setState({box: text})}
                        value={this.state.box}
                      /></View>) : null
                }

                <Text style={blockTextHeaderTwo}>ФИО получателя:</Text>
                <TextInput
                  style={InputStyle}
                  onChangeText={(text) => this.setState({fio: text})}
                  value={this.state.fio}
                />

                <Text style={blockTextHeaderTwo}>Количество комплектов:</Text>
                <View style={pikerStyle}>
                  {
                    (Platform.OS === 'ios') ?
                      (
                        <IOSPicker
                          selectedValue={this.state.count}
                          onValueChange={item => this.setState({ count: item })}
                          mode={'modal'}
                          style={pikerStyleIOS}
                        >
                          {counts.map((i, index) => (
                            <Picker.Item key={index.toString()} label={i} value={i} />
                          ))}
                        </IOSPicker>
                      ) :
                      (
                        <Picker
                          selectedValue={this.state.count}
                          onValueChange={item => this.setState({ count: item })
                          }
                        >
                          {counts.map((i, index) => (
                            <Picker.Item key={index.toString()} label={i} value={i} />
                          ))}
                        </Picker>
                      )
                  }
                </View>
              </View>
              <Button
                icon={{name: 'add-shopping-cart'}}
                title='В корзину'
                color='white'
                buttonStyle={buttonStyleBack}
                containerViewStyle={buttonStyleBackConteiner}
                onPress={this._onPressButton}
              />
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
    justifyContent: 'space-between'
  },
  coverBlock: {
    width: w / 1.8
  },
  fontBold: {
    fontWeight: 'bold'
  },
  fontBoldColor: {
    fontWeight: 'bold',
    color: 'red',
    fontSize: 18
  },
  block: {
    marginBottom: 10,
    marginTop: 10,
    flex: 1
  },
  blockTextHeader: {
    paddingLeft: 10,
    color: 'red',
    fontWeight: 'bold'
  },
  blockTextHeaderTwo: {
    paddingLeft: 10,
    paddingTop: 10
  },
  fontSizeText: {
    fontSize: 10
  },
  buttonStyleBack: {
    backgroundColor: 'red'
  },
  buttonStyleBackConteiner: {
    width: '100%',
    marginLeft: 0,
    height: 50
  },
  InputStyle: {
    borderWidth: 1,
    borderColor: '#DCDCDC',
    height: 50,
    width: '100%',
    paddingLeft: 10
  },
  pikerStyle: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#DCDCDC'
  },
  pikerStyleIOS: {
    height: 50,
    paddingLeft: 10
  }
})

export {Product}
