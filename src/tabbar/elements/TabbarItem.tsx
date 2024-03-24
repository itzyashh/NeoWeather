import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapIcon from '../icons/MapIcon'
import ListIcon from '../icons/ListIcon'
import TrapezoidBackground from './TrapezoidBackground'
import useApplicationDimensions from '../../hooks/useApplicationDimensions'

const TabbarItem = () => {
  const {width,height} = useApplicationDimensions()
  const trapezoidWidth = width * 0.68
  const trapezoidHeight = height * 0.12
  return (
    <View style={{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal:32,
    justifyContent:'space-between',
}}>
        <MapIcon />
        <TrapezoidBackground width={trapezoidWidth} height={trapezoidHeight} />
        <ListIcon />
    </View>
  )
}

export default TabbarItem

const styles = StyleSheet.create({})