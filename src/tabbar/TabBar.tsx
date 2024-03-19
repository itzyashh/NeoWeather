import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import ArcComponent from './elements/ArcComponent'
import useApplicationDimensions from '../hooks/useApplicationDimensions'

const TabBar = () => {
    const tabBarHeight = 88
    const {width, height} = useApplicationDimensions()
  return (
    <View style={{
        height:tabBarHeight,
        ...StyleSheet.absoluteFillObject,
        top:height - tabBarHeight,
        backgroundColor:'red'
}}>
        <ArcComponent height={tabBarHeight} width={width}/>
    </View>
  )
}

export default TabBar