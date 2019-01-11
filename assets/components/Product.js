import React from 'react'
import {View, ScrollView, StyleSheet, Image, Picker, TextInput, Alert} from 'react-native'
import {Header, Text, Button, ButtonGroup} from 'react-native-elements'
import {FontAwesome} from '@expo/vector-icons'
import {CountBascket} from './CountBascket'
import {w} from './Constants'

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
    region: '',
    price: 0,
    address: '',
    fio: '',
    count: '1',
    delivery: 'Домой (до почтового ящика)',
    subscribe: 0
  }

  _onPressButton = () => {
    console.log(this.state)
    if (this.state.region === '') {
      Alert.alert('Ошибка!', 'Выберите пожалуйста свой регион')
    } else if (this.state.address === '') {
      Alert.alert('Ошибка!', 'Заполните пожалуйста свой адрес')
    } else if (this.state.fio === '') {
      Alert.alert('Ошибка!', 'Заполните пожалуйста свое ФИО')
    } else {
      Alert.alert('Вы успешно добавили товар в корзину!')
    }
  }

  _updateIndex = (selectedIndex) => {
    this.setState({subscribe: selectedIndex})
  }

  render() {
    const {name, image} = this.props.data
    const {wrapper, container, cover, textHeader, blockHeader, coverBlock, fontBold, fontBoldColor, block, blockTwo, blockTextHeader, blockTextHeaderTwo, fontSizeText, buttonStyleBack, buttonStyleBackConteiner} = styles
    return (
      <View style={wrapper}>
        <Header
          backgroundColor='red'
          leftComponent={{ icon: 'chevron-left', color: '#fff', onPress: () => this.props.router.pop({type: 'right'}) }}
          centerComponent={{ text: name, style: { color: '#fff' }}}
          rightComponent={<CountBascket />}
        />
        <ScrollView>
          <View style={container}>
            <Text style={textHeader}>(В цену подписки включена стоимость доставки. Минимальный период подписки – 1 месяц.)</Text>
            <View style={blockHeader}>
              <Image style={cover} source={{ uri: image}} />
              <View style={coverBlock}>
                <Text style={fontBold}>Характеристики:</Text>
                <Text>Выпусков в месяц: 2</Text>
                <Text>Вид: журнал</Text>
                <Text>Категория: 0+</Text>
                <Text>Формат: А4</Text>
                <Text>Количество страниц: 32{'\n'}</Text>
                <Text style={fontBold}>Главный редактор: Веремьев Юрий Николаевич{'\n'}</Text>
                <Text style={fontBoldColor}>Цена: {this.state.price * this.state.count} <FontAwesome name="rub" size={16} /></Text>
              </View>
            </View>

            <View style={block}>
              <Text style={blockTextHeader}>От Вашего региона зависит цена издания!</Text>
              <Picker
                selectedValue={this.state.region}
                onValueChange={item => {
                  const region = regions.find(value => value.label === item)
                  this.setState({ region: item, price: region.value })
                }}
              >
                {regions.map((i) => (
                  <Picker.Item key={i} label={i.label} value={i.label} />
                ))}
              </Picker>
            </View>
            <View style={block}>
              <Text style={blockTextHeaderTwo}>Выберите месяцы подписки:</Text>
              <ButtonGroup
                buttons={['2019 Январь', '2019 Февраль', '2019 Март', '2019 Апрель', '2019 Июнь', '2019 Июль']}
                selectedIndex={this.state.subscribe}
                onPress={this._updateIndex}
                selectedTextStyle={{color: 'red'}}
                textStyle={{textAlign: 'center'}}
              />
            </View>
            <View style={block}>
              <Text style={blockTextHeaderTwo}>Тип доставки:</Text>
              <Picker
                selectedValue={this.state.delivery}
                onValueChange={item => this.setState({ delivery: item })
                }
              >
                {delivery.map((i) => (
                  <Picker.Item key={i} label={i} value={i} />
                ))}
              </Picker>
            </View>
            <View style={block}>
              <Text style={blockTextHeaderTwo}>Адрес(<Text style={fontSizeText}>Например: 100000, г. Москва, ул. Ленина, д. 100, кв. 1</Text>):</Text>
              <TextInput
                style={blockTextHeaderTwo}
                onChangeText={(text) => this.setState({address: text})}
                value={this.state.address}
              />
            </View>
            <View style={block}>
              <Text style={blockTextHeaderTwo}>ФИО получателя:</Text>
              <TextInput
                style={blockTextHeaderTwo}
                onChangeText={(text) => this.setState({fio: text})}
                value={this.state.fio}
              />
            </View>
            <View style={blockTwo}>
              <Text style={blockTextHeaderTwo}>Количество комплектов:</Text>
              <Picker
                selectedValue={this.state.count}
                onValueChange={item => this.setState({ count: item })
                }
              >
                {counts.map((i) => (
                  <Picker.Item key={i} label={i} value={i} />
                ))}
              </Picker>
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
    width: w / 2.4,
    height: w * 0.63
  },
  textHeader: {
    fontWeight: 'bold',
    marginBottom: 5
  },
  blockHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  coverBlock: {
    width: w / 2
  },
  fontBold: {
    fontWeight: 'bold'
  },
  fontBoldColor: {
    fontWeight: 'bold',
    color: 'red',
    fontSize: 26
  },
  block: {
    borderBottomWidth: 2,
    borderBottomColor: '#DCDCDC',
    paddingTop: 5
  },
  blockTwo: {
    borderBottomWidth: 2,
    borderBottomColor: '#DCDCDC',
    paddingTop: 5,
    marginBottom: 10
  },
  blockTextHeader: {
    paddingLeft: 10,
    color: 'red',
    fontWeight: 'bold'
  },
  blockTextHeaderTwo: {
    paddingLeft: 10
  },
  fontSizeText: {
    fontSize: 10
  },
  buttonStyleBack: {
    backgroundColor: 'red'
  },
  buttonStyleBackConteiner: {
    width: '100%',
    marginLeft: 0
  }
})

export {Product}
