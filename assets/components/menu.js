import React from 'react'
import {View, StyleSheet, Linking, TouchableWithoutFeedback} from 'react-native'
import {ListItem, Header, Text, Icon} from 'react-native-elements'
import {FontAwesome} from '@expo/vector-icons'

const Menu = ({router}) => {
  const {wrapper, textStyle, socialStyleWrapper, socialStyle, textAlign} = styles
  return (
    <View style={wrapper}>
      <Header
        backgroundColor='red'
        centerComponent={{ text: 'Меню', style: { color: '#fff' } }}
        rightComponent={
          <TouchableWithoutFeedback onPress={() => router.pop({}, {type: 'right'})}>
            <Icon name='chevron-right' color='#fff' />
          </TouchableWithoutFeedback>
        }
      />
      <View>
        <ListItem
          title='Подписка онлайн'
          leftIcon={{name: 'room', style: {color: 'red'}}}
          onPress={() => router.push.Catalog({type: 'left'})}
          titleStyle={textStyle}
        />

        <ListItem
          title='Как оформить подписку'
          leftIcon={{name: 'help', style: {color: 'red'}}}
          onPress={() => router.push.Subscription({type: 'left'})}
          titleStyle={textStyle}
        />

        <ListItem
          title='Оплата и доставка'
          leftIcon={{name: 'feedback', style: {color: 'red'}}}
          onPress={() => router.push.Delivery({type: 'left'})}
          titleStyle={textStyle}
        />

        <ListItem
          title='Наши представительства'
          leftIcon={{name: 'supervisor-account', style: {color: 'red'}}}
          onPress={() => router.push.Representation({type: 'left'})}
          titleStyle={textStyle}
        />

        <ListItem
          title='Сотрудничество'
          leftIcon={{name: 'card-travel', style: {color: 'red'}}}
          onPress={() => router.push.Cooperation({type: 'left'})}
          titleStyle={textStyle}
        />

        <ListItem
          title='История издательства'
          leftIcon={{name: 'history', style: {color: 'red'}}}
          onPress={() => router.push.History({type: 'left'})}
          titleStyle={textStyle}
        />
        <View style={socialStyleWrapper}>
          <Text style={textAlign}>Мы в социальных сетях:</Text>
          <View style={socialStyle}>
            <FontAwesome name="vk" size={32} style={{ color: 'red' }} onPress={() => Linking.openURL('https://vk.com/yunilineofficial')} />
            <FontAwesome name="instagram" size={32} style={{ color: 'red' }} onPress={() => Linking.openURL('https://www.instagram.com/_yuniline_/')} />
            <FontAwesome name="odnoklassniki" size={32} style={{ color: 'red' }} onPress={() => Linking.openURL('https://ok.ru/yuniline')} />
            <FontAwesome name="facebook" size={32} style={{ color: 'red' }} onPress={() => Linking.openURL('https://www.facebook.com/yunilineID/')} />
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  textStyle: {
    color: 'black'
  },
  socialStyleWrapper: {
    paddingTop: 10,
    paddingBottom: 10
  },
  socialStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 10,
    paddingBottom: 10
  },
  textAlign: {
    textAlign: 'center'
  }
})

export {Menu}
