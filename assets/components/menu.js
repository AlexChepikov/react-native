import React from 'react'
import {View, StyleSheet} from 'react-native'
import {ListItem, Header} from 'react-native-elements'

const list = [
  {
    title: 'Подписка онлайн',
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

const Menu = ({router}) => {
  const {wrapper} = styles

  return (
    <View style={wrapper}>
      <Header
        backgroundColor='red'
        centerComponent={{ text: 'Меню', style: { color: '#fff' } }}
        rightComponent={{ icon: 'chevron-right', color: '#fff', style: {backgroundColor: 'red'}, onPress: () => router.pop({}, {type: 'right'})}}
      />
      <View>
        {
          list.map((item) => (
            <ListItem
              key={item.title}
              title={item.title}
              leftIcon={{name: item.icon, style: {color: 'red'}}}
              onPress={() => router.push.Main({type: 'left'})}
            />
          ))
        }
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
