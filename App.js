import React, {Component} from 'react'
import Router from 'react-native-easy-router'
import {Main, Menu} from './assets/components'

export default class App extends Component {
  componentDidMount = async () => {
  }

  render() {
    return (
      <Router routes={{Main, Menu}} initialRoute="Main" />
    )
  }
}
