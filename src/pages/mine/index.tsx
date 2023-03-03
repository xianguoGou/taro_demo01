import { Component, PropsWithChildren } from 'react'
import { View, Text, Button } from '@tarojs/components'
import './index.scss'
import Taro from '@tarojs/taro'

export default class Index extends Component<PropsWithChildren> {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>我的</Text>
        <View className='btn' onClick={() => {
          Taro.navigateTo({
            url: '/packageA/pages/testB/index'
          })
        }}>跳转到分包页</View>
      </View>
    )
  }
}
