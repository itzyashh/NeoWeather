import { View, Text } from 'react-native'
import React from 'react'

interface ArcComponentProps {
    height: number
    width: number
    }


const ArcComponent = ({height, width}:ArcComponentProps) => {
  return (
    <View>
      <Text>ArcComponent</Text>
    </View>
  )
}

export default ArcComponent