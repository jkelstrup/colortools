export default function rgbToRgb({r,g,b}) {
  return {
    r,
    g,
    b,
    rgb: `rgb(${r},${g},${b})`
  }
}
