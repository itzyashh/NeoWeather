import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import ArcComponent from './elements/ArcComponent'
import useApplicationDimensions from '../hooks/useApplicationDimensions'

const TabBar = () => {
  const {height,width} = useApplicationDimensions()
  return (
    <View style={{ 
      ...StyleSheet.absoluteFillObject,
      top:height-88,
      height: 88,
    }}>
      <ArcComponent height={88} width={width} />
    </View>
  )
}

export default TabBar