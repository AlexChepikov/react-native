import React from 'react'
import {View, Animated, ScrollView, TouchableOpacity, StyleSheet, Linking} from 'react-native'
import {TabView, SceneMap} from 'react-native-tab-view'
import {Header, Text} from 'react-native-elements'
import {CountBascket} from './CountBascket'

const FirstRoute = () => {
  const {containerRoute, textWeight, textStyle} = styles
  return (
    <View style={containerRoute}>
      <ScrollView>
        <Text style={textWeight}>{'\t'}{'\t'}Головной офис издательства «ЮНИЛАЙН» находится в городе Смоленске, Россия. Основан 3 апреля 2001 года.</Text>
        <Text>{'\t'}{'\t'}Главный офис издательства «ЮНИЛАЙН» располагается в городе-герое Смоленске. Генеральным директором которого является Веремьев Юрий Николаевич.</Text>
        <Text>{'\t'}{'\t'}Именно здесь зарождаются новые идеи, страница за страницей создаются газеты и журналы для наших любимых читателей. Мы руководим и следим за каждым шагом в формировании издания: от слова на странице до попадания на стол подписчика или покупателя. Общий ежемесячный тираж наших изданий – больше 6 000 000 экземпляров. И мы не собираемся останавливаться на достигнутом: всегда будем стремиться к тому, чтобы эта цифра росла.</Text>
        <Text>{'\t'}{'\t'}Сейчас наши издания распространяются на территории России, Казахстана и Беларуси. В скором времени мы увеличим географию распространения, расширив свою деятельность в странах Европы. Ежемесячно в наш офис приходят тысячи писем со всей территории Росси и стран ближнего зарубежья. Люди делятся советами и жизненным опытом, а маленькие читатели – своими умениями в рисовании или написании сказки. Мы следим за своевременной печатью наших изданий, сотрудничаем с почтой, мониторим процесс продаж в городах нашей необъятной страны.</Text>
        <Text>{'\t'}{'\t'}Одним словом, Россия, Смоленск – эпицентр всего рабочего процесса. Немногие крупные фирмы или издательства могут похвастаться таким слаженным механизмом, результатом которого является качественный и востребованный продукт.</Text>
        <Text style={textWeight}>{'\t'}{'\t'}Контакты представительства:</Text>
        <Text>{'\t'}{'\t'}Адрес: 214025, Смоленская область, г. Смоленск, ул. Вяземская, д. 3</Text>
        <Text>{'\t'}{'\t'}Часы работы: с 9:00 до 18:00</Text>
        <Text>{'\t'}{'\t'}Тел: 8 (4812) 358-777</Text>
        <Text>{'\t'}{'\t'}E-mail: total@yuniline.ru</Text>
        <Text>{'\t'}{'\t'}Сайт: <Text style={textStyle} onPress={() => Linking.openURL('https://yuniline.ru').catch(err => console.error('No links', err))}>https://yuniline.ru</Text></Text>
        <Text style={textWeight}>{'\t'}{'\t'}Адрес для корреспонденции:</Text>
        <Text>{'\t'}{'\t'}Адрес: 214020, Россия, г. Смоленск, a/я 20</Text>
        <Text>{'\t'}{'\t'}E-mail: total@yuniline.ru</Text>
        <Text style={textWeight}>{'\t'}{'\t'}Для рекламодателей:</Text>
        <Text>{'\t'}{'\t'}Тел: 8 (4812) 358-777</Text>
        <Text>{'\t'}{'\t'}E-mail: reklama@yuniline.ru</Text>
      </ScrollView>
    </View>
  )
}

const SecondRoute = () => {
  const {containerRoute, textWeight, textStyle} = styles
  return (
    <View style={containerRoute}>
      <ScrollView>
        <Text style={textWeight}>{'\t'}{'\t'}ООО «ЮНИЛАЙН - БЕЛ» - официальное представительство издательства «ЮНИЛАЙН» в Республике Беларусь. Основано 13 декабря 2016 года в городе Минске.</Text>
        <Text>{'\t'}{'\t'}В декабре 2016 года открылось представительство «ЮНИЛАЙН» в столице Республики Беларусь городе-герое Минске. Генеральным директором которого является Ковальчук Светлана Васильевна.</Text>
        <Text>{'\t'}{'\t'}ООО «ЮНИЛАЙН-БЕЛ» занимается изданием качественной печатной продукции и расширением читательской аудитории и рынка сбыта на территории Республики Беларусь. Ежемесячно около 1 000 000 белорусов читают наши издания, отмечая высокое полиграфическое исполнение, интересный дизайн, содержательность материалов, их практическую направленность. У наших изданий высокий уровень обратной связи, что является свидетельством читательского доверия и признания высокого профессионализма.</Text>
        <Text>{'\t'}{'\t'}Уверены, что благодаря слаженной работе коллектива «ЮНИЛАЙН-БЕЛ» популярность и авторитет нашей продукции на белорусском рынке будут с каждым днем увеличиваться. ООО «ЮНИЛАЙН-БЕЛ» предлагает услуги по допечатной подготовке, печати, распространению и представительству вашей печатной продукции на территории Республики Беларусь. ООО «ЮНИЛАЙН-БЕЛ» – профессиональный издатель и надёжный партнёр! Мы открыты для сотрудничества!</Text>
        <Text style={textWeight}>{'\t'}{'\t'}Контакты представительства:</Text>
        <Text>{'\t'}{'\t'}Адрес: 220092, Республика Беларусь, г. Минск, ул. Б. Берута, 3Б, пом. 107 «А»</Text>
        <Text>{'\t'}{'\t'}Тел: +3 7517 322 02 86</Text>
        <Text>{'\t'}{'\t'}E-mail: direktor@yuniline.by</Text>
        <Text>{'\t'}{'\t'}Сайт: <Text style={textStyle} onPress={() => Linking.openURL('http://yuniline.by').catch(err => console.error('No links', err))}>http://yuniline.by</Text></Text>
        <Text style={textWeight}>{'\t'}{'\t'}Для рекламодателей:</Text>
        <Text>{'\t'}{'\t'}Тел: +375 17 322 02 86</Text>
        <Text>{'\t'}{'\t'}E-mail: reklama@yuniline.ru</Text>
      </ScrollView>
    </View>
  )
}

const ThirdRoute = () => {
  const {containerRoute, textWeight, textStyle} = styles
  return (
    <View style={containerRoute}>
      <ScrollView>
        <Text style={textWeight}>{'\t'}{'\t'}ТОО «ЮНИЛАЙН КАЗАХСТАН»-официальное представительство ООО «ЮНИЛАЙН» на территории Республики Казахстан. Основано 16 января 2013 года в городе Алматы.</Text>
        <Text>{'\t'}{'\t'}ТОО «ЮНИЛАЙН КАЗАХСТАН» – официальное представительство ООО «ЮНИЛАЙН» на территории Республики Казахстан. Генеральным директором которого является Мартынова Елена Викторовна.</Text>
        <Text>{'\t'}{'\t'}Основано 16 января 2013 года в городе Алма-Ата. Основная деятельность представительства заключается в организации подписки и розничных продаж изданий ООО «ЮНИЛАЙН», а также печати газеты «1000 советов» на территории Республики Казахстан. С июля 2015 года «ЮНИЛАЙН КАЗАХСТАН» выпустило новый детский познавательно-развлекательный журнал «ЕРКЕ БАЛА» на казахском языке для детей 3–12 лет, с периодичностью выхода 1 раз в месяц. Ставя перед собой высокую планку по обеспечению качества детского издания, мы понимаем, что немаловажную роль в успехе казахстанского проекта будет играть своевременная и качественная доставка продукта до читателей – по подписке и рознице по всей Республике Казахстан.</Text>
        <Text>{'\t'}{'\t'}Наше издательство открыто для тесного взаимодействия с дистрибьюторами Республики Казахстан, рекламодателями и другими заинтересованными лицами. ТОО «ЮНИЛАЙН КАЗАХСТАН» предлагает услуги по распространению и представительству вашей печатной продукции на территории Республики Казахстан, допечатной подготовке, печати и распространению. Приглашаем к сотрудничеству издательские дома.</Text>
        <Text style={textWeight}>{'\t'}{'\t'}Контакты представительства:</Text>
        <Text>{'\t'}{'\t'}Адрес: 050040,Республика Казахстан, Бостандыкский район г. Алматы, ул. Сатпаева, д. 30/8, офис 137</Text>
        <Text>{'\t'}{'\t'}Тел: +7(727) 330-94-49; +7(727) 398-93-62</Text>
        <Text>{'\t'}{'\t'}E-mail: total@yuniline.kz</Text>
        <Text>{'\t'}{'\t'}Сайт: <Text style={textStyle} onPress={() => Linking.openURL('https://yuniline.kz').catch(err => console.error('No links', err))}>https://yuniline.kz</Text></Text>
        <Text style={textWeight}>{'\t'}{'\t'}Для рекламодателей:</Text>
        <Text>{'\t'}{'\t'}Тел: +7(727) 330-94-49</Text>
        <Text>{'\t'}{'\t'}E-mail: total@yuniline.kz</Text>
        <Text style={textWeight}>{'\t'}{'\t'}Для корреспонденции:</Text>
        <Text>{'\t'}{'\t'}Тел: +7(727) 330-94-49</Text>
        <Text>{'\t'}{'\t'}E-mail: total@yuniline.kz</Text>
      </ScrollView>
    </View>
  )
}

const FoorRoute = () => {
  const {containerRoute, textWeight, textStyle} = styles
  return (
    <View style={containerRoute}>
      <ScrollView>
        <Text style={textWeight}>{'\t'}{'\t'}Официальное представительство «ЮНИЛАЙН» в Эстонии было открыто в 2013 году в г. Тарту. «ЮНИЛАЙН ЕВРОПА» занимается распространением печатной продукции в странах Европы.</Text>
        <Text>{'\t'}{'\t'}«YUNILINE EUROPE OÜ» – единственное представительство «ЮНИЛАЙН» на территории Европейского Союза – было открыто в 2013 году в Эстонии, в красивейшем городе Тарту, прозванным Афинами на Эмайыги. Генеральным директором которого является Радионенков Валдис.</Text>
        <Text>{'\t'}{'\t'}На данный момент «YUNILINE EUROPE OÜ» осуществляет прямые поставки изданий в Эстонию, Латвию, Литву, Германию, Польшу, Чехию и другие европейские страны.</Text>
        <Text>{'\t'}{'\t'}Издания «ЮНИЛАЙН» можно приобрести в торговых сетях по всей Европе: Maxima, Prisma, R-Kiosk, Rimi, Selver и др. Также на ее территории осуществляется подписка на ведущие издания ИД «ЮНИЛАЙН». Ежемесячно около 20 000 человек читают наши издания в странах Европы, и с каждым новым номером их количество увеличивается!</Text>
        <Text>{'\t'}{'\t'}«YUNILINE EUROPE OÜ» открыто для тесного взаимодействия с дистрибьюторами стран ЕС, рекламодателями и другими заинтересованными лицами. «ЮНИЛАЙН» приглашает к сотрудничеству в распространении печатной продукции в Европе издательские дома из РФ. Мы поможем вывести ваши издания на полки крупнейших торговых сетей Европы! Для наших партнеров мы готовы предложить индивидуальный подход и самые выгодные условия сотрудничества в сфере распространения печатной продукции и рекламы.</Text>
        <Text style={textWeight}>{'\t'}{'\t'}Контакты представительства:</Text>
        <Text>{'\t'}{'\t'}Адрес: 51005, Эстония, Vikerkaare tee 59-1</Text>
        <Text>{'\t'}{'\t'}Тел: +3 725 6867747</Text>
        <Text>{'\t'}{'\t'}E-mail: v.radionenkov@yuniline.com</Text>
        <Text>{'\t'}{'\t'}Сайт: <Text style={textStyle} onPress={() => Linking.openURL('https://yuniline.com').catch(err => console.error('No links', err))}>https://yuniline.com</Text></Text>
        <Text style={textWeight}>{'\t'}{'\t'}Для рекламодателей:</Text>
        <Text>{'\t'}{'\t'}Тел: +3 725 6867747</Text>
        <Text>{'\t'}{'\t'}E-mail: v.radionenkov@yuniline.com</Text>
      </ScrollView>
    </View>
  )
}

class Representation extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Россия' },
      { key: 'second', title: 'Беларусь' },
      { key: 'third', title: 'Казахстан' },
      { key: 'foor', title: 'Эстония' }
    ]
  }

  _handleIndexChange = index => this.setState({ index })

  _renderTabBar = props => {
    const {tabBar, tabItem} = styles
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
              <Animated.Text style={{ color }}>{route.title}</Animated.Text>
            </TouchableOpacity>
          )
        })}
      </View>
    )
  }

  _renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
    foor: FoorRoute
  })

  render() {
    const {container} = styles
    return (
      <View style={container}>
        <Header
          backgroundColor='red'
          leftComponent={{ icon: 'menu', color: '#fff', onPress: () => this.props.router.push.Menu({}, {type: 'left'}) }}
          centerComponent={{ text: 'Наши представительсва', style: { color: '#fff' }}}
          rightComponent={<CountBascket data={3} />}
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
    alignItems: 'center',
    paddingTop: 16,
    paddingBottom: 16
  },
  textStyle: {
    color: 'red'
  }
})

export {Representation}
