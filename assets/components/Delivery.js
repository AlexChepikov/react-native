import React from 'react'
import {View, ScrollView, StyleSheet, Linking} from 'react-native'
import {Header, Text} from 'react-native-elements'
import {CountBascket} from './CountBascket'

const Delivery = ({router}) => {
  const {wrapper, container, textStyle, textAlign} = styles

  return (
    <View style={wrapper}>
      <Header
        backgroundColor='red'
        leftComponent={{ icon: 'menu', color: '#fff', onPress: () => router.push.Menu({}, {type: 'left'}) }}
        centerComponent={{ text: 'Оплата и доставка', style: { color: '#fff' }}}
        rightComponent={<CountBascket />}
      />
      <ScrollView>
        <View style={container}>
          <Text h4 style={textAlign}>Типы доставки подписных изданий</Text>
          <Text>{'\t'}{'\t'}«Домой (до почтового ящика)» – доставка изданий до почтового ящика по адресу, указанному Подписчиком при оформлении заказа, силами сотрудников филиалов ФГУП «Почта России».</Text>
          <Text>{'\t'}{'\t'}«До востребования» – доставка изданий до отделения почтовой связи филиала ФГУП «Почта России», в которое издание адресовано согласно почтовому индексу, указанному при оформлении Подписчиком заказа, до его востребования Подписчиком, при наличии в почтовом отделении условия для хранения периодических печатных изданий. Срок хранения периодического печатного издания в отделении почтовой связи определен нормативными документами, утвержденными для предприятий почтовой связи.</Text>
          <Text>{'\t'}{'\t'}«До а/я» – доставка изданий до абонентского или абонементного почтового ящика Подписчика, устанавливаемого в отделениях почтовой связи филиалов ФУП «Почта России» для получения почтовых отправлений.</Text>
          <Text h4 style={textAlign}>Доставка подписной продукции в другие страны</Text>
          <Text>{'\t'}{'\t'}Подписку на наши издания теперь можно оформить не только на территории РФ,а так же в других странах мира.</Text>
          <Text>{'\t'}{'\t'}Для России: <Text style={textStyle} onPress={() => Linking.openURL('https://yuniline.ru')}>https://yuniline.ru</Text></Text>
          <Text>{'\t'}{'\t'}Для стран Европы, Америки и всего мира: <Text style={textStyle} onPress={() => Linking.openURL('https://yuniline.com')}>https://yuniline.com</Text></Text>
          <Text>{'\t'}{'\t'}Для Беларуси: <Text style={textStyle} onPress={() => Linking.openURL('http://yamedia.by')}>http://yamedia.by</Text></Text>
          <Text>{'\t'}{'\t'}Для Казахстана: <Text style={textStyle} onPress={() => Linking.openURL('https://yuniline.kz')}>https://yuniline.kz</Text></Text>
          <Text h4 style={textAlign}>Доставка ФГУП «Почта России»</Text>
          <Text>{'\t'}{'\t'}Для жителей РФ доставка товаров осуществляется Почтой России. Заказ после оформления и оплаты отправляется заказной бандеролью на указанный при регистрации почтовый адрес.</Text>
          <Text>{'\t'}{'\t'}Внимание! Пожалуйста, вовремя забирайте на почте доставленные заказы. Бандероль, не востребованная Получателем в течение 1 месяца, возвращается обратно отправителю. Стоимость почтовой доставки по России зависит от веса заказа.</Text>
          <Text h4 style={textAlign}>Доставка транспортной компанией Boxberry</Text>
          <Text>{'\t'}{'\t'}Транспортная компания Boxberry имеет свои представительства во всех крупных городах РФ.</Text>
          <Text>{'\t'}{'\t'}Получение заказов производится или в пунктах выдачи заказов данных компаний, или же возможна курьерская доставка по указанному адресу.</Text>
          <Text>{'\t'}{'\t'}Основные преимущества доставки транспортными компаниями, по сравнению с Почтой России: отсутствие очередей, высокая скорость доставки и ее низкая стоимость. После отправки заказа в личном кабинете у Вас будет прописан номер накладной, по которой Вы сможете отслеживать местонахождение своего заказа.</Text>
          <Text h4 style={textAlign}>Оплата заказа</Text>
          <Text>{'\t'}{'\t'}Ссылка для оплаты генерируется автоматически на конечном этапе формирования заказа.</Text>
          <Text>{'\t'}{'\t'}При оплате заказа банковской картой (100% предоплата) обработка платежа происходит на сайте системы электронных платежей Яндекс-Касса, которая прошла международную сертификацию. Это значит, что Ваши конфиденциальные данные (реквизиты карты, регистрационные данные и др.) не поступают в интернет-магазин, их обработка полностью защищена, и никто, в том числе наш интернет-магазин, не может получить персональные и банковские данные клиента.</Text>
          <Text h4 style={textAlign}>Возврат</Text>
          <Text>{'\t'}{'\t'}Возврат Покупателю стоимости продукта, в случае поставки продукта ненадлежащего качества и в иных случаях, предусмотренных законодательством, осуществляется в порядке и в сроки, предусмотренные законом.</Text>
          <Text>{'\t'}{'\t'}Возврат денежных средств, уплаченных с помощью банковской карты, осуществляется на ту же банковскую карту. Возврат указанной суммы может осуществляться путем перечисления соответствующей суммы на банковский или иной счет Покупателя, указанный Покупателем.</Text>
          <Text>{'\t'}{'\t'}Возврат денежных средств осуществляется на основании заявления Покупателя с указанием фамилии, имени и отчества, адреса Покупателя, паспортных данных, причин возврата и способа возврата денежных средств, направленного в адрес Компании в письменном виде.</Text>
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
  },
  textAlign: {
    textAlign: 'center'
  }
})

export {Delivery}
