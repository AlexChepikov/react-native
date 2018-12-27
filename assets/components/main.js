import React from 'react'
import {Text, View, ScrollView} from 'react-native'
import {Card, Header, Button} from 'react-native-elements'

const Main = ({router}) => (
  <View style={{ flex: 1 }}>
    <Header
      backgroundColor='red'
      leftComponent={{ icon: 'menu', color: '#fff', onPress: () => router.push.Menu({value: 123}, {type: 'left'}) }}
      centerComponent={{ text: 'Подписка онлайн', style: { color: '#fff' }}}
      rightComponent={{ icon: 'shopping-cart', color: '#fff', style: {backgroundColor: 'red'} }}
    />
    <ScrollView>
      <Card
        title='1000 Советов'
        image={{uri: 'http://yuniline.ru/img/products/pr_1000-sovetov.png'}}
      >
        <Text style={{marginBottom: 10}}>
          2 раза в месяц - 100 руб.
        </Text>
        <Button
          icon={{name: 'keyboard-arrow-right'}}
          backgroundColor='red'
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
          title='Подписаться'
        />
      </Card>

      <Card
        title='1000 Советов'
        image={{uri: 'http://yuniline.ru/img/products/pr_1000-sovetov.png'}}
      >
        <Text style={{marginBottom: 10}}>
          2 раза в месяц - 100 руб.
        </Text>
        <Button
          icon={{name: 'keyboard-arrow-right'}}
          backgroundColor='red'
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
          title='Подписаться'
        />
      </Card>
    </ScrollView>
  </View>
)

export {Main}
