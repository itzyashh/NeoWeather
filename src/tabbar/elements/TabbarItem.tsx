import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapIcon from '../icons/MapIcon'
import ListIcon from '../icons/ListIcon'

const TabbarItem = () => {
  return (
    <View style={{flex:1,
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal:32,
    justifyContent:'space-between',
}}>
        <MapIcon />
        <ListIcon />
    </View>
  )
}

export default TabbarItem

const styles = StyleSheet.create({})