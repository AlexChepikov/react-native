import React from 'react'
import {View, Animated, ScrollView, TouchableOpacity, StyleSheet, Linking} from 'react-native'
import {TabView, SceneMap} from 'react-native-tab-view'
import {Header, Text} from 'react-native-elements'
import {CountBascket} from './CountBascket'
import {w} from './Constants'

const FirstRoute = () => {
  const {containerRoute, textWeight, textStyle} = styles
  return (
    <View style={containerRoute}>
      <ScrollView>
        <Text>{'\t'}{'\t'}Дорогие читатели! Компания «ЮНИЛАЙН» приглашает вас к сотрудничеству. Вы можете поделиться с другими читателями своим личным опытом, креативными идеями, похвастаться талантом на страницах наших изданий. Если вы считаете себя экспертом в каком-нибудь вопросе, знаете массу советов, рецептов или дизайнерских решений, то мы с радостью станем посредником между вами и нашими читателями. «1000 советов», «1000 советов дачнику», «1000 советов кулинару», «Однако, жизнь!» – верные помощники в реализации ваших замыслов и идей. Интересные жизненные истории, красивые и полезные вещи, необычные хобби – нам интересно всё, чем интересуетесь Вы! За каждый опубликованный материал автора ждет денежное вознаграждение.</Text>
        <Text>{'\t'}{'\t'}Редакция оставляет за собой право редактировать и публиковать любые присланные в свой адрес письма читателей и иллюстрированные материалы. Факт пересылки означает согласие их автора на передачу редакции прав на использование материала в любой форме и любым способом на территории России, стран СНГ и Европы.</Text>
        <Text style={textWeight}>{'\t'}{'\t'}Контакты представительства:</Text>
        <Text>{'\t'}{'\t'}Адрес: 214025, Смоленская область, г. Смоленск, ул. Вяземская, д. 3</Text>
        <Text>{'\t'}{'\t'}Часы работы: с 9:00 до 18:00</Text>
        <Text>{'\t'}{'\t'}Тел: 8 (4812) 358-777</Text>
        <Text>{'\t'}{'\t'}E-mail: total@yuniline.ru</Text>
        <Text>{'\t'}{'\t'}Сайт: <Text style={textStyle} onPress={() => Linking.openURL('https://yuniline.ru')}>https://yuniline.ru</Text></Text>
      </ScrollView>
    </View>
  )
}

const SecondRoute = () => {
  const {containerRoute, textWeight, textStyle} = styles
  return (
    <View style={containerRoute}>
      <ScrollView>
        <Text>{'\t'}{'\t'}Издательство «ЮНИЛАЙН» приглашает к сотрудничеству распространителей печатной продукции на территории Российской Федерации, Республики Беларусь, Республики Казахстан и стран Евросоюза.</Text>
        <Text>{'\t'}{'\t'}За долгие годы успешной и плодотворной работы на рынке печатных СМИ нам удалось установить надежное партнерство с крупнейшими распространителями печатной и книжной продукции. Принцип нашей работы с распространителями основан на честности, эффективности и открытости.</Text>
        <Text>{'\t'}{'\t'}В своей деятельности мы ориентируемся на следующие ключевые моменты:</Text>
        <Text>{'\t'}{'\t'}1. Грамотное распределение тиража по торговым точкам;</Text>
        <Text>{'\t'}{'\t'}2. Оптимизация процента возврата;</Text>
        <Text>{'\t'}{'\t'}3. Работа по увеличению продаж изданий;</Text>
        <Text>{'\t'}{'\t'}4. Своевременная оплата поставок дистрибьюторами.</Text>
        <Text>{'\t'}{'\t'}В процессе взаимодействия с дистрибьютором мы совместно подбираем оптимальную схему сотрудничества с целью получения максимальной взаимной прибыли от нашего партнерства.</Text>
        <Text style={textWeight}>{'\t'}{'\t'}Контакты представительства:</Text>
        <Text>{'\t'}{'\t'}Адрес: 214025, Смоленская область, г. Смоленск, ул. Вяземская, д. 3</Text>
        <Text>{'\t'}{'\t'}Часы работы: с 9:00 до 18:00</Text>
        <Text>{'\t'}{'\t'}Тел: 8 (4812) 358-777</Text>
        <Text>{'\t'}{'\t'}E-mail: total@yuniline.ru</Text>
        <Text>{'\t'}{'\t'}Сайт: <Text style={textStyle} onPress={() => Linking.openURL('https://yuniline.ru')}>https://yuniline.ru</Text></Text>
      </ScrollView>
    </View>
  )
}

const ThirdRoute = () => {
  const {containerRoute, textWeight, textStyle, textAlign} = styles
  return (
    <View style={containerRoute}>
      <ScrollView>
        <Text>{'\t'}{'\t'}Издательству «ЮНИЛАЙН» 17 лет. Все эти годы мы собирали свою аудиторию по всей стране. Наша работа была направлена на доступность изданий вне зависимости от места проживания читателя: будь это центр Москвы или труднодоступный уральский городок. Мы добились качественных результатов: самая большая база подписчиков среди периодических изданий (1 100 000 человек) – результат слаженной и долгой работы издательства. Общий тираж изданий на сегодняшний день составляет более 4 500 000 экземпляров, что также является максимальным показателем среди конкурентов.</Text>
        <Text h4 style={textAlign}>Тематика/Тиражи</Text>
        <Text>{'\t'}{'\t'}1. Для всей семьи: 2 510 000 экземпляров в месяц;</Text>
        <Text>{'\t'}{'\t'}2. Дачная тематика: 560 000 экземпляров в месяц;</Text>
        <Text>{'\t'}{'\t'}3. Кулинарная тематика: 342 000 экземпляров в месяц;</Text>
        <Text>{'\t'}{'\t'}4. Родители и дети: 1 298 000 экземпляров в месяц.</Text>
        <Text h4 style={textAlign}>Контент маркетинг</Text>
        <Text>{'\t'}{'\t'}1. Наши издания являются лидерами тиражей и подписки в сегменте периодической прессы с 2011 года, что подтверждается сертификатами АРПП (Ассоциации распространителей печатной продукции);</Text>
        <Text>{'\t'}{'\t'}2. Ряд наших изданий признаны Министерством коммуникаций и связи РФ как социально значимые;</Text>
        <Text>{'\t'}{'\t'}3. Общий ежемесячный тираж изданий «ЮНИЛАЙН» составляет более 4.5 млн. экземпляров. Поставка изданий осуществляется более чем в 12 000 киосков, 40 000 отделений почтовой связи и 30 000 супермаркетов (АШАН, Карусель, Пятерочка, МАГНИТ, Глобус, Окей, Бахетле, МОНЕТКА, SPAR, Семья, Лента и тд.);</Text>
        <Text>{'\t'}{'\t'}4. Суммарная база подписчиков более 1 000 000 человек;</Text>
        <Text>{'\t'}{'\t'}5. Низкая стоимость изданий (в среднем по РФ - 35 рублей за номер) позволяет поддерживать доступность изданий;</Text>
        <Text>{'\t'}{'\t'}6. Ограничение рекламного пространствана протяжении многих лет (не более 10% от общего количества полос) помогло сохранить народный формат издания и повысить откликаемость аудитории к размещенной рекламной информации;</Text>
        <Text>{'\t'}{'\t'}7. Концепция рекламных услуг полного цикла в издательстве «ЮНИЛАЙН» состоит в комплексном исследовании рынка, стратегическом планировании и креативности;</Text>
        <Text>{'\t'}{'\t'}8. Компетенции издательства позволяют создавать текстовый и графический контент как для оффлайн так и для онлайн;</Text>
        <Text>{'\t'}{'\t'}9. Специалисты нативной рекламы помогут в продвижении релевантного контента, созданного для развития вашего бизнеса.</Text>
        <Text h4 style={textAlign}>По вопросам рекламы - Ирина Мальцева (E-mail: i.malceva@yuniline.ru .Телефон 8(915)641-41-91)</Text>
        <Text style={textWeight}>{'\t'}{'\t'}Контакты представительства:</Text>
        <Text>{'\t'}{'\t'}Адрес: 214025, Смоленская область, г. Смоленск, ул. Вяземская, д. 3</Text>
        <Text>{'\t'}{'\t'}Часы работы: с 9:00 до 18:00</Text>
        <Text>{'\t'}{'\t'}Тел: 8 (4812) 358-777</Text>
        <Text>{'\t'}{'\t'}E-mail: total@yuniline.ru</Text>
        <Text>{'\t'}{'\t'}Сайт: <Text style={textStyle} onPress={() => Linking.openURL('https://yuniline.ru')}>https://yuniline.ru</Text></Text>
      </ScrollView>
    </View>
  )
}

class Cooperation extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Авторам' },
      { key: 'second', title: 'Распространителям' },
      { key: 'third', title: 'Рекламодателям' }
    ]
  }

  _handleIndexChange = index => this.setState({ index })

  _renderTabBar = props => {
    const {tabBar, tabItem, textSize} = styles
    const inputRange = props.navigationState.routes.map((x, i) => i)

    return (
      <View style={tabBar}>
        {props.navigationState.routes.map((route, i) => {
          const color = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map(
              inputIndex => (inputIndex === i ? 'red' : '#DCDCDC')
            )
          })
          return (
            <TouchableOpacity
              key={route.title}
              style={tabItem}
              onPress={() => this.setState({ index: i })}
            >
              <Animated.Text style={[{color}, textSize]}>{route.title}</Animated.Text>
            </TouchableOpacity>
          )
        })}
      </View>
    )
  }

  _renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute
  })

  render() {
    const {container} = styles
    return (
      <View style={container}>
        <Header
          backgroundColor='red'
          leftComponent={{ icon: 'menu', color: '#fff', onPress: () => this.props.router.push.Menu({}, {type: 'left'}) }}
          centerComponent={{ text: 'Сотрудничество', style: { color: '#fff' }}}
          rightComponent={<CountBascket router={this.props.router} />}
        />
        <TabView
          navigationState={this.state}
          renderScene={this._renderScene}
          renderTabBar={this._renderTabBar}
          onIndexChange={this._handleIndexChange}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  containerRoute: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 5
  },
  textWeight: {
    fontWeight: 'bold'
  },
  tabBar: {
    flexDirection: 'row',
    borderBottomColor: 'red',
    borderBottomWidth: 2
  },
  tabItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 16,
    paddingBottom: 16
  },
  textStyle: {
    color: 'red'
  },
  textAlign: {
    textAlign: 'center'
  },
  textSize: {
    fontSize: (w > 400 ? 14 : 12)
  }
})

export {Cooperation}
