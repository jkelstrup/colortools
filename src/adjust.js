import createColor from "./createColor";

export default function adjust(originalColor,change) {
  let newColor;

  if (change.hasOwnProperty("red") || change.hasOwnProperty("green") || change.hasOwnProperty("blue")) {
    let {r,g,b} = originalColor;

    r = Math.max(Math.min((r + (change.red || 0)),255),0); // Force the number to be between 0-255
    g = Math.max(Math.min((g + (change.green || 0)),255),0); // Force the number to be between 0-255
    b = Math.max(Math.min((b + (change.blue || 0)),255),0); // Force the number to be between 0-255

    newColor = createColor({r,g,b});

  } else if (change.hasOwnProperty("hue") || change.hasOwnProperty("saturation") || change.hasOwnProperty("lightness")) {
    let {h,s,l} = originalColor;

    h = (h + (change.hue || 0)) % 360; // Force the change to be -360-360
    if (h < 0) h = 360 - h; // Rotate the color wheel by subtracting negative hue from 360

    s = Math.max(Math.min((s + (change.saturation || 0)),100),0); // Force the number to be between 0-100
    l = Math.max(Math.min((l + (change.lightness || 0)),100),0); // Force the number to be between 0-100

    newColor = createColor({h,s,l});
  }

  return newColor;
}
