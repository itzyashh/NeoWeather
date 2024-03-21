
import React from 'react'
import { Canvas, LinearGradient, Rect, vec } from '@shopify/react-native-skia'
import { Image, ImageBackground,View,StyleSheet } from 'react-native'
import useApplicationDimensions from '../../hooks/useApplicationDimensions'
const Home = () => {
        const { width, height } = useApplicationDimensions()
        const smokeHeight = height * 0.6
    return (
        <View style={{...StyleSheet.absoluteFillObject}}>
        <Canvas style={{flex: 1}}>
                <Rect x={0} y={0} width={width} height={height} />
                        <LinearGradient
                                start={vec(0, 0)}
                                end={vec(width, height)}
                                colors={['rgba(46,47,90,1)','rgba(28,27,51,1)']}
                        />
                </Canvas>
                <ImageBackground
                        source={require('../../../assets/images/background.png')}
                        style={{
                                width: width,
                                height: height,
                        }}
                     

                >
                        <Canvas style={{height:'60%',...StyleSheet.absoluteFillObject,top:'40%'}}>
                                <Rect x={0} y={0} width={width} height={smokeHeight} />
                                <LinearGradient
                                        start={vec(width / 2,0)}
                                        end={vec(width / 2, smokeHeight)}
                                        colors={['rgba(58, 63, 84, 0.00)','#3A3F54']}
                                        positions={[-0.02, 0.54]}
                                />
                                </Canvas>
                       <Image
                            source={require('../../../assets/images/House.png')}
                            style={{
                                    ...StyleSheet.absoluteFillObject,
                                    top:'36%',
                                    width: width,
                                    height: 390,
                            }} />
        </ImageBackground>
        </View>
    )
}

export default Home