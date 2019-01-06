import React from 'react'
import {View, StyleSheet} from 'react-native'
import {ListItem, Header} from 'react-native-elements'

const Menu = ({router}) => {
  const {wrapper} = styles

  return (
    <View style={wrapper}>
      <Header
        backgroundColor='red'
        centerComponent={{ text: 'Меню', style: { color: '#fff' } }}
        rightComponent={{ icon: 'chevron-right', color: '#fff', onPress: () => router.pop({}, {type: 'right'})}}
      />
      <View>
        <ListItem
          title='Подписка онлайн'
          leftIcon={{name: 'room', style: {color: 'red'}}}
          onPress={() => router.push.Main({type: 'left'})}
        />

        <ListItem
          title='Как оформить подписку'
          leftIcon={{name: 'help', style: {color: 'red'}}}
          onPress={() => router.push.Subscription({type: 'left'})}
        />

        <ListItem
          title='Оплата и доставка'
          leftIcon={{name: 'feedback', style: {color: 'red'}}}
          onPress={() => router.push.Delivery({type: 'left'})}
        />

        <ListItem
          title='Наши представительства'
          leftIcon={{name: 'supervisor-account', style: {color: 'red'}}}
          onPress={() => router.push.Representation({type: 'left'})}
        />

        <ListItem
          title='Сотрудничество'
          leftIcon={{name: 'card-travel', style: {color: 'red'}}}
          onPress={() => router.push.Cooperation({type: 'left'})}
        />

        <ListItem
          title='История издательства'
          leftIcon={{name: 'history', style: {color: 'red'}}}
          onPress={() => router.push.History({type: 'left'})}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  }
})

export {Menu}
