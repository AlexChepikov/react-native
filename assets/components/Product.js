import React from 'react'
import {View, ScrollView, StyleSheet, Image, Picker} from 'react-native'
import {Header, Text} from 'react-native-elements'
import {CountBascket} from './CountBascket'
import {w} from './Constants'

const regions = [
  {
    label: 'Java',
    value: 'java'
  },
  {
    label: 'JavaScript',
    value: 'js'
  },
  {
    label: 'Python',
    value: 'python'
  },
  {
    label: 'Ruby',
    value: 'ruby'
  },
  {
    label: 'C#',
    value: 'csharp'
  },
  {
    label: 'C++',
    value: 'cpp'
  },
  {
    label: 'C',
    value: 'c'
  },
  {
    label: 'Go',
    value: 'go'
  }
]

class Product extends React.Component {
  state = {
    region: ''
  }

  render() {
    const {name, image} = this.props.data
    const {wrapper, container, cover} = styles
    return (
      <View style={wrapper}>
        <Header
          backgroundColor='red'
          leftComponent={{ icon: 'chevron-left', color: '#fff', onPress: () => this.props.router.pop({type: 'right'}) }}
          centerComponent={{ text: name, style: { color: '#fff' }}}
          rightComponent={<CountBascket data={3} />}
        />
        <ScrollView>
          <View style={container}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Image style={cover} source={{ uri: image}} />
              <View style={{width: w / 2 }}>
                <Text style={{fontWeight: 'bold'}}>Характеристики:</Text>
                <Text>Выпусков в месяц: 2</Text>
                <Text>Вид: журнал</Text>
                <Text>Категория: 0+</Text>
                <Text>Формат: А4</Text>
                <Text>Количество страниц: 32{'\n'}</Text>
                <Text style={{fontWeight: 'bold'}}>Главный редактор: Веремьев Юрий Николаевич</Text>
              </View>
            </View>
            <View style={{paddingTop: 10}}>
              <View style={{borderBottomWidth: 2, borderBottomColor: '#DCDCDC'}}>
                <Text style={{paddingLeft: 10}}>Выберите регион:</Text>
                <Picker
                  selectedValue={this.state.region}
                  onValueChange={item => this.setState({ region: item })}
                >
                  {regions.map((i) => (
                    <Picker.Item key={i.label} label={i.label} value={i.value} />
                  ))}
                </Picker>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
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
  }
})

export {Product}
