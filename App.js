import React, {Component} from 'react'
import Router from 'react-native-easy-router'
import {Catalog} from './assets/components/Catalog'
import {Menu} from './assets/components/Menu'
import {History} from './assets/components/History'
import {Subscription} from './assets/components/Subscription'
import {Delivery} from './assets/components/Delivery'
import {Representation} from './assets/components/Representation'
import {Cooperation} from './assets/components/Cooperation'
import {Product} from './assets/components/Product'
import {Bascket} from './assets/components/Bascket'
import {Pay} from './assets/components/Pay'
import {Preloader} from './assets/components/Preloader'

export default class App extends Component {
  componentDidMount = async () => {
  }

  render() {
    return (
      <Router routes={{Catalog, Menu, History, Subscription, Delivery, Representation, Cooperation, Product, Bascket, Pay, Preloader}} initialRoute="Preloader" />
    )
  }
}
