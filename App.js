import React from 'react'
import Router from 'react-native-easy-router'
import {Text, View, ScrollView} from 'react-native'
import {Card, ListItem, Header, Button} from 'react-native-elements'

const list = [
  {
    title: 'Подписка',
    icon: 'room'
  },
  {
    title: 'Прошлые номера',
    icon: 'description'
  },
  {
    title: 'Детские номера',
    icon: 'description'
  }
]

const Menu = ({router}) => (
  <View style={{ flex: 1 }}>
    <Header
      backgroundColor='red'
      centerComponent={{ text: 'Меню', style: { color: '#fff' } }}
    />
    <View>
      {
        list.map((item) => (
          <ListItem
            key={item.title}
            title={item.title}
            leftIcon={{name: item.icon, style: {color: 'red'}}}
          />
        ))
      }
    </View>
    <Button
      onPress={() => router.pop({type: 'right'})}
      icon={{name: 'accessibility'}}
      title='Назад'
      buttonStyle={{marginTop: 10, marginBottom: 10}}
    />
  </View>
)

const First = ({ router }) => (
  <View style={{ flex: 1 }}>
    <Header
      backgroundColor='red'
      leftComponent={{ icon: 'menu', color: '#fff' }}
      centerComponent={{ text: 'Главная страница', style: { color: '#fff' } }}
      rightComponent={{ icon: 'shopping-cart', color: '#fff' }}
    />
    <Button
      onPress={() => router.push.Menu({type: 'left'})}
      icon={{name: 'accessibility'}}
      title='Меню'
    />
    <Button
      onPress={() => router.push.Second({type: 'left'})}
      icon={{name: 'accessibility'}}
      title='Каталог'
    />
  </View>
)

const Second = ({ router}) => (
  <View style={{ flex: 1 }}>
    <Header
      backgroundColor='red'
      leftComponent={{ icon: 'menu', color: '#fff' }}
      centerComponent={{ text: 'Каталог', style: { color: '#fff' } }}
      rightComponent={{ icon: 'shopping-cart', color: '#fff' }}
    />
    <ScrollView>
      <Card
        title='1000 Советов'
        image={{uri: 'http://yuniline.ru/img/products/pr_1000-sovetov.png'}}
        imageStyle={{width: '100%', height: 'auto'}}
        style={{ flex: 1,
          width: null,
          height: null,
          resizeMode: 'cover'}}
      >
        <Text style={{marginBottom: 10}}>
          2 раза в месяц - 100 руб.
        </Text>
        <Button
          icon={{name: 'keyboard-arrow-right'}}
          backgroundColor='red'
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
          title='Побробнее'
        />
      </Card>

      <Card
        title='1000 Советов'
        image={{uri: 'http://yuniline.ru/img/products/pr_1000-sovetov.png'}}
        imageStyle={{width: '100%', height: 'auto'}}
        style={{ flex: 1,
          width: null,
          height: null,
          resizeMode: 'cover'}}
      >
        <Text style={{marginBottom: 10}}>
          2 раза в месяц - 100 руб.
        </Text>
        <Button
          icon={{name: 'keyboard-arrow-right'}}
          backgroundColor='red'
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
          title='Побробнее'
        />
      </Card>
      <Button
        onPress={() => router.push.Menu({type: 'left'})}
        icon={{name: 'accessibility'}}
        title='Меню'
        buttonStyle={{marginTop: 10, marginBottom: 10}}
      />
    </ScrollView>

  </View>
)

const routes = { First, Second, Menu }
const App = () => <Router routes={routes} initialRoute="First" />

export default App
