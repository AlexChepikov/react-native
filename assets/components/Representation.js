import React from 'react'
import { View, ScrollView, StyleSheet} from 'react-native'
import { TabView, SceneMap } from 'react-native-tab-view'
import {Header} from 'react-native-elements'
//import {w} from './Constants'

const FirstRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#ff4081' }]} />
)
const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
)

class Representation extends React.Component {
    state = {
      index: 0,
      routes: [
        { key: 'first', title: 'First' },
        { key: 'second', title: 'Second' }
      ]
    }

    render() {
      return (
        <View style={styles.wrapper}>
          <Header
            backgroundColor='red'
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'История издательства', style: { color: '#fff' }}}
            rightComponent={{ icon: 'shopping-cart', color: '#fff', style: {backgroundColor: 'red'}}}
          />
          <ScrollView>
            <TabView
              navigationState={this.state}
              renderScene={SceneMap({
                first: FirstRoute,
                second: SecondRoute
              })}
              onIndexChanged={index => (this.setState = ({index}))
              }
              // onIndexChange={index => this.setState({ index })}
            />
          </ScrollView>
        </View>
      )
    }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  scene: {
    flex: 1
  }
})

export {Representation}
