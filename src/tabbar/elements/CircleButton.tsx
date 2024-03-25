import * as React from "react"
import Svg, {
  SvgProps,
  G,
  Circle,
  Mask,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */


interface SvgComponentProps extends SvgProps {
  press: boolean
}


const SvgComponent = (props: SvgComponentProps) => (
  (!props.press ?<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={118}
    height={100}
    fill="none"
    {...props}
  >
    <G filter="url(#a)">
      <Circle cx={59} cy={44} r={32} fill="url(#b)" fillOpacity={0.4} />
    </G>
    <G filter="url(#c)">
      <Circle cx={59} cy={44} r={29} fill="url(#d)" />
      <Circle cx={59} cy={44} r={28.9} stroke="url(#e)" strokeWidth={0.2} />
    </G>
    <Mask
      id="g"
      width={58}
      height={58}
      x={30}
      y={15}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <Circle cx={59} cy={44} r={29} fill="url(#f)" />
    </Mask>
    <G mask="url(#g)">
      <G filter="url(#h)">
        <Path
          fill="url(#i)"
          d="M88 44c0 16.016-12.984 29-29 29S30 60.016 30 44s12.984-29 29-29 29 12.984 29 29Zm-55.1 0c0 14.415 11.685 26.1 26.1 26.1 14.415 0 26.1-11.685 26.1-26.1 0-14.415-11.685-26.1-26.1-26.1-14.415 0-26.1 11.685-26.1 26.1Z"
        />
      </G>
      <Path
        fill="#48319D"
        d="M47.27 44.129c0 1.148.929 2.078 2.077 2.078h7.588v7.588c0 1.135.916 2.078 2.065 2.078a2.086 2.086 0 0 0 2.078-2.078v-7.588h7.588a2.071 2.071 0 0 0 0-4.142h-7.588v-7.588c0-1.135-.93-2.079-2.078-2.079a2.074 2.074 0 0 0-2.065 2.079v7.588h-7.588c-1.148 0-2.078.93-2.078 2.064Z"
      />
    </G>
    <Defs>
      <LinearGradient
        id="b"
        x1={38.5}
        x2={77.5}
        y1={25}
        y2={71}
        gradientUnits="userSpaceOnUse"
      >
        <Stop />
        <Stop offset={1} stopColor="#fff" stopOpacity={0.76} />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={44}
        x2={75.5}
        y1={23}
        y2={67.833}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#F5F5F9" />
        <Stop offset={1} stopColor="#DADFE7" />
      </LinearGradient>
      <LinearGradient
        id="e"
        x1={38.833}
        x2={73.167}
        y1={24.833}
        y2={70.5}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#AEAEAE" />
      </LinearGradient>
      <LinearGradient
        id="f"
        x1={44}
        x2={75.5}
        y1={23}
        y2={67.833}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#F5F5F9" />
        <Stop offset={1} stopColor="#DADFE7" />
      </LinearGradient>
      <LinearGradient
        id="i"
        x1={34.791}
        x2={59}
        y1={25.201}
        y2={73}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" stopOpacity={0} />
        <Stop offset={1} stopColor="#BBBFC7" />
      </LinearGradient>
    </Defs>
  </Svg>
  : <Svg
  xmlns="http://www.w3.org/2000/svg"
  width={118}
  height={100}
  fill="none"
  {...props}
>
  <G filter="url(#a)">
    <Circle cx={59} cy={44} r={32} fill="url(#b)" fillOpacity={0.4} />
  </G>
  <G filter="url(#c)">
    <Circle cx={59} cy={44} r={29} fill="url(#d)" />
    <Circle cx={59} cy={44} r={28.9} stroke="url(#e)" strokeWidth={0.2} />
  </G>
  <Mask
    id="g"
    width={58}
    height={58}
    x={30}
    y={15}
    maskUnits="userSpaceOnUse"
    style={{
      maskType: "alpha",
    }}
  >
    <Circle cx={59} cy={44} r={29} fill="url(#f)" />
  </Mask>
  <G mask="url(#g)">
    <G filter="url(#h)">
      <Circle cx={59} cy={44} r={26} fill="url(#i)" />
    </G>
    <Path
      fill="#48319D"
      d="M47.27 44.129c0 1.148.929 2.078 2.077 2.078h7.588v7.588c0 1.135.916 2.078 2.065 2.078a2.086 2.086 0 0 0 2.078-2.078v-7.588h7.588a2.071 2.071 0 0 0 0-4.142h-7.588v-7.588c0-1.135-.93-2.079-2.078-2.079a2.074 2.074 0 0 0-2.065 2.079v7.588h-7.588c-1.148 0-2.078.93-2.078 2.064Z"
    />
  </G>
  <Defs>
    <LinearGradient
      id="b"
      x1={38.5}
      x2={77.5}
      y1={25}
      y2={71}
      gradientUnits="userSpaceOnUse"
    >
      <Stop />
      <Stop offset={1} stopColor="#fff" stopOpacity={0.76} />
    </LinearGradient>
    <LinearGradient
      id="d"
      x1={44}
      x2={75.5}
      y1={23}
      y2={67.833}
      gradientUnits="userSpaceOnUse"
    >
      <Stop stopColor="#F5F5F9" />
      <Stop offset={1} stopColor="#DADFE7" />
    </LinearGradient>
    <LinearGradient
      id="e"
      x1={38.833}
      x2={73.167}
      y1={24.833}
      y2={70.5}
      gradientUnits="userSpaceOnUse"
    >
      <Stop stopColor="#fff" />
      <Stop offset={1} stopColor="#AEAEAE" />
    </LinearGradient>
    <LinearGradient
      id="f"
      x1={44}
      x2={75.5}
      y1={23}
      y2={67.833}
      gradientUnits="userSpaceOnUse"
    >
      <Stop stopColor="#F5F5F9" />
      <Stop offset={1} stopColor="#DADFE7" />
    </LinearGradient>
    <LinearGradient
      id="i"
      x1={37.295}
      x2={59}
      y1={27.145}
      y2={70}
      gradientUnits="userSpaceOnUse"
    >
      <Stop stopColor="#BBBFC7" />
      <Stop offset={1} stopColor="#fff" />
    </LinearGradient>
  </Defs>
</Svg>)
)
export default SvgComponent
