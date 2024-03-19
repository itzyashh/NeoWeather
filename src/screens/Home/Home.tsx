import { View, Text, useWindowDimensions, ImageBackground,Image,StyleSheet } from 'react-native'
import React from 'react'
import { Canvas, LinearGradient, Rect, vec } from '@shopify/react-native-skia'
import { verticalScale } from '../../../assets/styles/scaling'
import { s } from './Home.style'
import useApplicationDimensions from '../../hooks/useApplicationDimensions'

const Home = () => {
    const {width, height} = useApplicationDimensions()
    const smokeHeight = height * 0.6
    const smokeOffsetY = height * 0.4
    console.log('height',height)    
  return (
    <View style={{...StyleSheet.absoluteFillObject}}> 
    <Canvas style = {{ flex: 1 }} >
    <Rect x = {0} y = {0} width = {width} height = {height}>
        <LinearGradient 
            start={vec(0, 0)}
            end={vec(width, height)}
            colors={['#2E2F5A','#1C1B33']}
            />
        </Rect>
    </Canvas>
    <ImageBackground
    source={require('../../../assets/images/background.png')}
    style={{height:'100%'}}
    >
        <Canvas style = {{position:'absolute',top:smokeOffsetY, left:0, right:0, height:smokeHeight}} >
            <Rect x = {0} y = {0} width = {width} height = {smokeHeight}>
                <LinearGradient
                    start={vec(height/2, 0)}
                    end={vec(height/2, smokeHeight)}
                    colors={['rgba(58,63,84,0)', 'rgba(58,63,84,1)']}
                    positions={[-0.02, 0.54]}
                    />
                </Rect>
            </Canvas>
    <Image
    source={require('../../../assets/images/House.png')}
    resizeMode='cover'
    style={[s.house,{width:width}]}
    />
    </ImageBackground>
    
            </View>
  )
}

export default Home