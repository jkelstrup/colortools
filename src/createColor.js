import calcLum from "./calcLum";
import hexToRgb from "./hexToRgb";
import hslToHsl from "./hslToHsl";
import hslToRgb from "./hslToRgb";
import isValidHex from "./isValidHex";
import isValidHsl from "./isValidHsl";
import isValidRgb from "./isValidRgb";
import rgbToHex from "./rgbToHex";
import rgbToHsl from "./rgbToHsl";
import rgbToRgb from "./rgbToRgb";

export default function createColor(input) {
  let source;
  let rgb;
  let hsl;
  let hex;


  if (isValidRgb(input)) {
    source = "rgb";
    rgb = rgbToRgb(input);
    hsl = rgbToHsl(input);
    hex = rgbToHex(input);
  }

  else if (isValidHsl(input)) {
    source = "hsl";
    hsl = hslToHsl(input);
    rgb = hslToRgb(input);
    hex = rgbToHex(rgb);
  }

  else if (isValidHex(input)) {
    source = "hex";
    hex = input;
    rgb = hexToRgb(input);
    hsl = rgbToHsl(rgb);
  }

  else {
    console.error("Bad input",input);
    throw new Error(`Bad input!`);
  }

  let color = Object.assign({},
    rgb,
    {
      hex: hex
    },
    hsl,
    {
      lum: calcLum(rgb)
    },
    {
      src: source
    }
  )

  return color;
}
