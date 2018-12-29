import React from 'react'
import {View, ScrollView, StyleSheet} from 'react-native'
import {Header, Text} from 'react-native-elements'

const Delivery = ({router}) => {
  const {wrapper, container, textStyle} = styles

  return (
    <View style={wrapper}>
      <Header
        backgroundColor='red'
        leftComponent={{ icon: 'menu', color: '#fff', onPress: () => router.push.Menu({}, {type: 'left'}) }}
        centerComponent={{ text: 'Оплата и доставка', style: { color: '#fff' }}}
        rightComponent={{ icon: 'shopping-cart', color: '#fff', style: {backgroundColor: 'red'}}}
      />
      <ScrollView>
        <View style={container}>
          <Text h4>Типы доставки подписных изданий</Text>
          <Text>{'\t'}{'\t'}«Домой (до почтового ящика)» – доставка изданий до почтового ящика по адресу, указанному Подписчиком при оформлении заказа, силами сотрудников филиалов ФГУП «Почта России».</Text>
          <Text>{'\t'}{'\t'}«До востребования» – доставка изданий до отделения почтовой связи филиала ФГУП «Почта России», в которое издание адресовано согласно почтовому индексу, указанному при оформлении Подписчиком заказа, до его востребования Подписчиком, при наличии в почтовом отделении условия для хранения периодических печатных изданий. Срок хранения периодического печатного издания в отделении почтовой связи определен нормативными документами, утвержденными для предприятий почтовой связи.</Text>
          <Text>{'\t'}{'\t'}«До а/я» – доставка изданий до абонентского или абонементного почтового ящика Подписчика, устанавливаемого в отделениях почтовой связи филиалов ФУП «Почта России» для получения почтовых отправлений.</Text>
          <Text h4>Доставка подписной продукции в другие страны</Text>
          <Text>{'\t'}{'\t'}Подписку на наши издания теперь можно оформить не только на территории РФ,а так же в других странах мира.</Text>
          <Text>{'\t'}{'\t'}Для России: https://yuniline.ru/</Text>
          <Text>{'\t'}{'\t'}Для стран Европы, Америки и всего мира: https://yuniline.com/</Text>
          <Text>{'\t'}{'\t'}Для Беларуси: http://yamedia.by/</Text>
          <Text>{'\t'}{'\t'}Для Казахстана: http://yuniline.kz/</Text>
          <Text style={textStyle}>{'\t'}{'\t'}Приятного чтения!</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  container: {
    padding: 10
  },
  textStyle: {
    color: 'red'
  }
})

export {Delivery}
