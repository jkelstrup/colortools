export default function rgbToRgb({h,s,l}) {
  return {
    h,
    s,
    l,
    hsl: `hsl(${h},${s}%,${l}%)`
  }
}
