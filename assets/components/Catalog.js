import React from 'react'
import {View, ScrollView, StyleSheet, Animated, TouchableOpacity} from 'react-native'
import {TabView} from 'react-native-tab-view'
import {Header} from 'react-native-elements'
import {ImageCard} from './ImageCard'
import {CountBascket} from './CountBascket'

const dataChildren = [
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
    name: 'Маленькие художники',
    image: 'http://yuniline.ru/img/products/pr_malenkie-khudozhniki.jpeg'
  }
]

const dataAll = [
  {
    id: 1,
    name: 'Сканворды советов',
    image: 'http://yuniline.ru/img/products/pr_skanvordy-sovetov.png'
  },
  {
    id: 2,
    name: '1000 советов',
    image: 'http://yuniline.ru/img/products/pr_1000-sovetov.png'
  },
  {
    id: 3,
    name: '1000 советов дачнику',
    image: 'http://yuniline.ru/img/products/pr_1000-sovetov-dachniku.png'
  },
  {
    id: 4,
    name: 'Однако, жизнь!',
    image: 'http://yuniline.ru/img/products/pr_odnako-zhizn.png'
  },
  {
    id: 5,
    name: 'Чудо-поварёшка',
    image: 'http://yuniline.ru/img/products/pr_chudo-povarjoshka.png'
  },
  {
    id: 6,
    name: '1000 советов кулинару',
    image: 'http://yuniline.ru/img/products/pr_1000-sovetov-kulinaru.png'
  },
  {
    id: 7,
    name: 'Здоровая семья: советы от А до Я',
    image: 'http://yuniline.ru/img/products/pr_zdorovaya-semya-sovety-ot-a-do-ya.png'
  },
  {
    id: 8,
    name: 'Топ-сканворд',
    image: 'http://yuniline.ru/img/products/pr_top-skanvord.png'
  }
]

const dataCulinar = [
  {
    id: 1,
    name: 'Чудо-поварёшка',
    image: 'http://yuniline.ru/img/products/pr_chudo-povarjoshka.png'
  },
  {
    id: 2,
    name: '1000 советов кулинару',
    image: 'http://yuniline.ru/img/products/pr_1000-sovetov-kulinaru.png'
  }
]

const FirstRoute = ({router}) => {
  const {containerRoute, container} = styles
  return (
    <View style={containerRoute}>
      <ScrollView>
        <View style={container}>
          {
            dataChildren.map(item => (
              <TouchableOpacity key={item.id} onPress={() => router.push.Product({data: item}, {type: 'right'})} >
                <ImageCard data={item} key={item.id} />
              </TouchableOpacity>
            ))
          }
        </View>
      </ScrollView>
    </View>
  )
}

const SecondRoute = ({router}) => {
  const {containerRoute, container} = styles
  return (
    <View style={containerRoute}>
      <ScrollView>
        <View style={container}>
          {
            dataAll.map(item => (
              <TouchableOpacity key={item.id} onPress={() => router.push.Product({data: item}, {type: 'right'})} >
                <ImageCard data={item} key={item.id} />
              </TouchableOpacity>
            ))
          }
        </View>
      </ScrollView>
    </View>
  )
}

const ThirdRoute = ({router}) => {
  const {containerRoute, container} = styles
  return (
    <View style={containerRoute}>
      <ScrollView>
        <View style={container}>
          {
            dataCulinar.map(item => (
              <TouchableOpacity key={item.id} onPress={() => router.push.Product({data: item}, {type: 'right'})} >
                <ImageCard data={item} key={item.id} />
              </TouchableOpacity>
            ))
          }
        </View>
      </ScrollView>
    </View>
  )
}

class Catalog extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Детские' },
      { key: 'second', title: 'Для всей семьи' },
      { key: 'third', title: 'Кулинарные' }
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
              <Animated.Text style={{color}}>{route.title}</Animated.Text>
            </TouchableOpacity>
          )
        })}
      </View>
    )
  }

  _renderScene = ({route}) => {
    switch (route.key) {
    case 'first':
      return <FirstRoute router={this.props.router} />
    case 'second':
      return <SecondRoute router={this.props.router} />
    case 'third':
      return <ThirdRoute router={this.props.router} />
    default:
      return null
    }
  }

  render() {
    const {wrapper} = styles
    return (
      <View style={wrapper}>
        <Header
          backgroundColor='red'
          leftComponent={{ icon: 'menu', color: '#fff', onPress: () => this.props.router.push.Menu({}, {type: 'left'}) }}
          centerComponent={{ text: 'Подписка онлайн', style: { color: '#fff' }}}
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
  wrapper: {
    flex: 1
  },
  containerRoute: {
    paddingBottom: 10
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10
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

export {Catalog}
