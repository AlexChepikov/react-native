import React from 'react'
import {View, ScrollView, StyleSheet, Image} from 'react-native'
import {Header, Text} from 'react-native-elements'
import {w} from './Constants'

const History = ({router}) => {
  const {wrapper, container, cover, wrapperImage} = styles

  return (
    <View style={wrapper}>
      <Header
        backgroundColor='red'
        leftComponent={{ icon: 'menu', color: '#fff', onPress: () => router.push.Menu({}, {type: 'left'}) }}
        centerComponent={{ text: 'История издательства', style: { color: '#fff' }}}
        rightComponent={{ icon: 'shopping-cart', color: '#fff'}}
      />
      <ScrollView>
        <View style={container}>
          <Text>{'\t'}{'\t'}Издательство «ЮНИЛАЙН» основано в 2001 году Юрием Васильевичем Чепиковым в городе Смоленске. Начало истории издательской деятельности компании неразрывно связано с выходом в свет первого номера газеты «1000 советов».</Text>
          <Text>{'\t'}{'\t'}Это событие датируется 3 апреля 2001 года. Тогда на 8 полосах в формате А3 и вышел долгожданный номер газеты «1000 советов». На ее страницах люди делились друг с другом драгоценным опытом. Газета несколько раз меняла свой облик и дизайн, чтобы предстать в том виде, в котором существует сейчас: цветное издание формата А4 на 36–40 страницах. Но со временем не изменилась основная концепция газеты «1000 советов» – быть доступной и полезной для своих читателей.</Text>
          <Text>{'\t'}{'\t'}«Изначально у нас была задача создать качественный продукт для людей. Газета с первых дней работает в одном ключе – полный интерактив с нашей аудиторией. Вся концепция издания основана на вопросах, ответах и письмах наших любимых читателей», – заявляет учредитель газеты Юрий Васильевич Чепиков.</Text>
          <View style={wrapperImage}>
            <Image style={cover} source={require('../images/scanold.png')} />
            <Image style={cover} source={require('../images/new.png')} />
          </View>
          <Text>{'\t'}{'\t'}Сегодня «ЮНИЛАЙН» – современное издательство всегда полезной, интересной и актуальной печатной продукции во главе с генеральным директором Юрием Николаевичем Веремьёвым.</Text>
          <Text>{'\t'}{'\t'}«Искренне радуюсь тому, что на сегодняшний день из когда-то заложенного тобой фундамента вырос большой многоэтажный дом, в котором живет твоя команда», – делится Юрий Николаевич.</Text>
          <Text>{'\t'}{'\t'}Важным событием для издательства «ЮНИЛАЙН» стало сотрудничество с Олегом Семёновичем Кульбацким. Благодаря совместной работе с партнерами начала активно развиваться линейка изданий для детей. Детские газеты и журналы издательства «ЮНИЛАЙН» пользуются популярностью у детей и родителей по всей России и в странах ближнего зарубежья. Главное достояние линейки детских изданий – газета «НЕПОСЕДА». С 2003 года «НЕПОСЕДА» – лучший друг детей, помогает им учиться, активно развиваться и с пользой проводить время. В 2018 году издательство «ЮНИЛАЙН» подготовило серию «живых» значков от «НЕПОСЕДЫ», а также книги из серии «Библиотека Непоседы».</Text>
          <Text>{'\t'}{'\t'}Расширилась и линейка изданий для всей семьи. По просьбам читателей компания «ЮНИЛАЙН» издает такие газеты, как «1000 советов дачнику» и «1000 советов кулинару». Узкая направленность полезных советов привлекла сотни тысяч читателей. Кто-то делится своими знаниями на страницах газеты, а кто-то набирается опыта у профессионалов своего дела.</Text>
          <Text>{'\t'}{'\t'}Знаменательным событием в истории издательства «ЮНИЛАЙН» стало открытие представительства компании в г. Тарту (Эстония) в 2013 году. «YUNILINE EUROPE OÜ» – единственное представительство «ЮНИЛАЙН» на территории Европейского союза. Благодаря этому знаменательному событию теперь издания «ЮНИЛАЙН» можно приобрести в торговых сетях по всей Европе. Также на ее территории осуществляется подписка на ведущие издания ИД «ЮНИЛАЙН». Ежемесячно около 20 000 человек читают наши издания в странах Европы, и с каждым новым номером их количество увеличивается!</Text>
          <Text>{'\t'}{'\t'}«ЮНИЛАЙН» не собирается останавливаться на достигнутом. У компании очень много целей и идей, которые в скором будущем будут реализованы!</Text>
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
  cover: {
    width: w / 2.4,
    height: w * 0.63
  },
  wrapperImage: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 10
  }
})

export {History}
