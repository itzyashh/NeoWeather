import React from 'react'
import { Canvas, LinearGradient, Path, vec } from '@shopify/react-native-skia'

interface ArcComponentProps {
    height: number
    width: number
    }


const ArcComponent: React.FC<ArcComponentProps> = ({ height, width }) => {
  const arcPath = `M 0 0 Q ${width / 2} ${height/2} ${width} 0 L ${width} ${height} L 0 ${height} Z`
  const arcBorder = `M 0 0 Q ${width / 2} ${height/2} ${width} 0`
  return (
    <Canvas style={{ height }}>
      <Path
        path={arcPath}>
        <LinearGradient
          start={vec(width/2,0)}
          end={vec(width/2, height)}
          colors={['rgba(58,58,106,0.26)', 'rgba(36,37,76,0.26)']}
          />
          </Path>
          <Path 
          path={arcBorder}
          style={"stroke"}
          strokeWidth={0.5}
          color={'rgba(117,130,244,0.5)'}
          />
        
      </Canvas>
  )
}

export default ArcComponent