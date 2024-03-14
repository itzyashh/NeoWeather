import { View, Text, useWindowDimensions, ImageBackground,Image,StyleSheet } from 'react-native'
import React from 'react'
import { Canvas, LinearGradient, Rect, vec } from '@shopify/react-native-skia'

const Home = () => {
    const {width, height} = useWindowDimensions()
  return (
    <>
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
    <Image
    source={require('../../../assets/images/House.png')}
    resizeMode='cover'
    style={{height:390,width:width,
        top:304
    }}
    />
    </ImageBackground>
    
            </>
  )
}

export default Home