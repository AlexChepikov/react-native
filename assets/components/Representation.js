import React from 'react'
import { View, Animated, TouchableOpacity, StyleSheet } from 'react-native'
import { TabView, SceneMap } from 'react-native-tab-view'
import {Header, Text} from 'react-native-elements'

const FirstRoute = () => (
  <View style={styles.container}>
    <Text>Россия</Text>
  </View>
)
const SecondRoute = () => (
  <View style={styles.container}>
    <Text>Беларусь</Text>
  </View>
)

const ThirdRoute = () => (
  <View style={styles.container}>
    <Text>Казахстан</Text>
  </View>
)

const FoorRoute = () => (
  <View style={styles.container}>
    <Text>Эстония</Text>
  </View>
)

class Representation extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Россия' },
      { key: 'second', title: 'Беларусь' },
      { key: 'third', title: 'Казахстан' },
      { key: 'foor', title: 'Эстония' }
    ]
  };

  _handleIndexChange = index => this.setState({ index });

  _renderTabBar = props => {
    const inputRange = props.navigationState.routes.map((x, i) => i)

    return (
      <View style={styles.tabBar}>
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
              style={styles.tabItem}
              onPress={() => this.setState({ index: i })}
            >
              <Animated.Text style={{ color }}>{route.title}</Animated.Text>
            </TouchableOpacity>
          )
        })}
      </View>
    )
  };

  _renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
    foor: FoorRoute
  });

  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor='red'
          leftComponent={{ icon: 'menu', color: '#fff', onPress: () => this.props.router.push.Menu({}, {type: 'left'}) }}
          centerComponent={{ text: 'Наши представительсва', style: { color: '#fff' }}}
          rightComponent={{ icon: 'shopping-cart', color: '#fff'}}
        />
        <TabView
          navigationState={this.state}
          renderScene={this._renderScene}
          renderTabBar={this._renderTabBar}
          onIndexChange={this._handleIndexChange}
          style={{borderColor: 'green'}}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  tabBar: {
    flexDirection: 'row',
    // paddingTop: Constants.statusBarHeight,
    borderBottomColor: 'red',
    borderBottomWidth: 2
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 16,
    paddingBottom: 16
  }
})

export {Representation}
