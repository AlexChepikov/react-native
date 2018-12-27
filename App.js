import React, {Component} from 'react'
import Router from 'react-native-easy-router'
import {Main, Menu} from './assets/components'

// const list = [
//   {
//     title: 'Подписка онлайн',
//     icon: 'room'
//   },
//   {
//     title: 'Прошлые номера',
//     icon: 'description'
//   },
//   {
//     title: 'Детские номера',
//     icon: 'description'
//   }
// ]
//
// const Menu = ({router}) => (
//   <View style={{ flex: 1 }}>
//     <Header
//       backgroundColor='red'
//       centerComponent={{ text: 'Меню', style: { color: '#fff' } }}
//       rightComponent={{ icon: 'chevron-right', color: '#fff', style: {backgroundColor: 'red'}, onPress: () => router.pop({}, {type: 'right'})}}
//     />
//     <View>
//       {
//         list.map((item) => (
//           <ListItem
//             key={item.title}
//             title={item.title}
//             leftIcon={{name: item.icon, style: {color: 'red'}}}
//             onPress={() => router.push.First({type: 'left'})}
//           />
//         ))}
//     </View>
//   </View>
// )

// const First = ({ router}) => (
//   <View style={{ flex: 1 }}>
//     <Header
//       backgroundColor='red'
//       leftComponent={{ icon: 'menu', color: '#fff', onPress: () => router.push.Menu({}, {type: 'left'}) }}
//       centerComponent={{ text: 'Подписка онлайн', style: { color: '#fff' }, onPress: () => console.log('Клик') }}
//       rightComponent={{ icon: 'shopping-cart', color: '#fff', style: {backgroundColor: 'red'} }}
//     />
//     <ScrollView>
//       <Card
//         title='1000 Советов'
//         image={{uri: 'http://yuniline.ru/img/products/pr_1000-sovetov.png'}}
//       >
//         <Text style={{marginBottom: 10}}>
//           2 раза в месяц - 100 руб.
//         </Text>
//         <Button
//           icon={{name: 'keyboard-arrow-right'}}
//           backgroundColor='red'
//           buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
//           title='Подписаться'
//         />
//       </Card>
//
//       <Card
//         title='1000 Советов'
//         image={{uri: 'http://yuniline.ru/img/products/pr_1000-sovetov.png'}}
//       >
//         <Text style={{marginBottom: 10}}>
//           2 раза в месяц - 100 руб.
//         </Text>
//         <Button
//           icon={{name: 'keyboard-arrow-right'}}
//           backgroundColor='red'
//           buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
//           title='Подписаться'
//         />
//       </Card>
//     </ScrollView>
//
//   </View>
// )

export default class App extends Component {
  componentDidMount = async () => {
  }

  render() {
    return (
      <Router routes={{Main, Menu}} initialRoute="Main" />
    )
  }
}

//const App = () => <Router routes={routes} initialRoute="First" />

//export default App
