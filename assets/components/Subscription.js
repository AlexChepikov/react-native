import React from 'react'
import {View, ScrollView, StyleSheet} from 'react-native'
import {Header, Text} from 'react-native-elements'
import {CountBascket} from './CountBascket'

const Subscription = ({router}) => {
  const {wrapper, container, textStyle} = styles

  return (
    <View style={wrapper}>
      <Header
        backgroundColor='red'
        leftComponent={{ icon: 'menu', color: '#fff', onPress: () => router.push.Menu({}, {type: 'left'}) }}
        centerComponent={{ text: 'Как оформить подписку', style: { color: '#fff' }}}
        rightComponent={<CountBascket router={router} />}
      />
      <ScrollView>
        <View style={container}>
          <Text>{'\t'}{'\t'}1. В главном меню приложения выберите пункт «<Text style={textStyle}>Подписка онлайн</Text>» и выберите интересующее вас издание и нажмите на него для перехода к оформлению подписки.</Text>
          <Text>{'\t'}{'\t'}2. Укажите период, на который хотите подписаться (1 месяц – минимум).Далее укажите способ доставки (до дома/до востребования/до а/я). Заполните информацию о доставке (ФИО/адрес) и нажмите «<Text style={textStyle}>В корзину</Text>».</Text>
          <Text>{'\t'}{'\t'}3. Кликните на значок «<Text style={textStyle}>Корзина</Text>», где уже будет указано количество добавленных товаров или продолжите покупки.</Text>
          <Text>{'\t'}{'\t'}4. Введите Ваше Ф.И.О и электронный адрес (для того, чтобы мы могли отправить подтверждение заказа). Еще раз проверьте достоверность введенной информации и нажмите «<Text style={textStyle}>Оформить заказ</Text>» для перехода к вводу платежных данных.</Text>
          <Text>{'\t'}{'\t'}5. Выберите способ оплаты, заполните необходимые поля и нажмите «<Text style={textStyle}>Оплатить</Text>». Готово! На почту придет подтверждение об успешной оплате.</Text>
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

export {Subscription}
