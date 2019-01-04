import React, {Component} from 'react'
import Router from 'react-native-easy-router'
import {Main} from './assets/components/Main'
import {Menu} from './assets/components/Menu'
import {History} from './assets/components/History'
import {Subscription} from './assets/components/Subscription'
import {Delivery} from './assets/components/Delivery'
import {Representation} from './assets/components/Representation'

export default class App extends Component {
  componentDidMount = async () => {
  }

  render() {
    return (
      <Router routes={{Main, Menu, History, Subscription, Delivery, Representation}} initialRoute="Main" />
    )
  }
}
