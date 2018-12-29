import React from 'react'
import {View, ScrollView, StyleSheet} from 'react-native'
import {Header} from 'react-native-elements'
import {ImageCard} from './ImageCard'

const Main = ({router}) => {
  const {container, wrapper} = styles

  const data = [
    {
      id: 1,
      name: 'Непоседа',
      image: 'http://yuniline.ru/img/products/pr_neposeda.png'
    },
    {
      id: 2,
      name: '3/9 царство',
      image: 'http://yuniline.ru/img/products/pr_3-9-tsarstvo.png'
    },
    {
      id: 3,
      name: 'Фантазеры',
      image: 'http://yuniline.ru/img/products/pr_fantazjory.png'
    },
    {
      id: 4,
      name: 'Маленькие академики',
      image: 'http://yuniline.ru/img/products/pr_malenkie-akademiki.png'
    },
    {
      id: 5,
      name: 'Забавные наклейки',
      image: 'http://yuniline.ru/img/products/pr_zabavnye-naklejki.png'
    },
    {
      id: 6,
      name: 'Сканворды советов',
      image: 'http://yuniline.ru/img/products/pr_skanvordy-sovetov.png'
    },
    {
      id: 7,
      name: 'Сканворды советов',
      image: 'http://yuniline.ru/img/products/pr_skanvordy-sovetov.png'
    },
    {
      id: 8,
      name: '1000 советов',
      image: 'http://yuniline.ru/img/products/pr_1000-sovetov.png'
    },
    {
      id: 9,
      name: '1000 советов дачнику',
      image: 'http://yuniline.ru/img/products/pr_1000-sovetov-dachniku.png'
    },
    {
      id: 10,
      name: 'Топ-сканворд',
      image: 'http://yuniline.ru/img/products/pr_top-skanvord.png'
    },
    {
      id: 11,
      name: 'Однако, жизнь!',
      image: 'http://yuniline.ru/img/products/pr_odnako-zhizn.png'
    },
    {
      id: 12,
      name: 'Маленькие художники',
      image: 'http://yuniline.ru/img/products/pr_malenkie-khudozhniki.jpeg'
    },
    {
      id: 13,
      name: 'Чудо-поварёшка',
      image: 'http://yuniline.ru/img/products/pr_chudo-povarjoshka.png'
    },
    {
      id: 14,
      name: '1000 советов кулинару',
      image: 'http://yuniline.ru/img/products/pr_1000-sovetov-kulinaru.png'
    },
    {
      id: 15,
      name: 'Здоровая семья: советы от А до Я',
      image: 'http://yuniline.ru/img/products/pr_zdorovaya-semya-sovety-ot-a-do-ya.png'
    }
  ]

  return (
    <View style={wrapper}>
      <Header
        backgroundColor='red'
        leftComponent={{ icon: 'menu', color: '#fff', onPress: () => router.push.Menu({}, {type: 'left'}) }}
        centerComponent={{ text: 'Подписка онлайн', style: { color: '#fff' }}}
        rightComponent={{ icon: 'shopping-cart', color: '#fff', style: {backgroundColor: 'red'}}}
      />
      <ScrollView>
        <View style={container}>
          {
            data.map(item => (
              <ImageCard data={item} key={item.id} />
            ))
          }
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
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10
  }
})

export {Main}
