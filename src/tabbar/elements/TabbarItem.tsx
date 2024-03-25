import { StyleSheet, Text, Pressable, View } from 'react-native'
import React from 'react'
import MapIcon from '../icons/MapIcon'
import ListIcon from '../icons/ListIcon'
import TrapezoidBackground from './TrapezoidBackground'
import useApplicationDimensions from '../../hooks/useApplicationDimensions'
import CircleButton from './CircleButton'

const TabbarItem = () => {
  const {width,height} = useApplicationDimensions()
  const trapezoidWidth = width * 0.68
  const trapezoidHeight = height * 0.12
  const [isPressed, setIsPressed] = React.useState(false)

  const onPlusPress = () => {
    setIsPressed(!isPressed)
    setTimeout(() => {
      setIsPressed(false)
    }
    , 100)
  }
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
        <Pressable 
        onPress={onPlusPress}
        style={{position:'absolute',left:width/2-118/2,bottom:2}}>
          <CircleButton press={isPressed} />
          </Pressable>
        <ListIcon />
    </View>
  )
}

export default TabbarItem

const styles = StyleSheet.create({})