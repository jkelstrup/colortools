import createColor from "./createColor";

export default function redefine(originalColor,update) {
  let newColor;

  if (update.hasOwnProperty("r") || update.hasOwnProperty("g") || update.hasOwnProperty("b")) {
    newColor = createColor({
      r: update.r !== undefined ? parseInt(update.r) : originalColor.r,
      g: update.g !== undefined ? parseInt(update.g) : originalColor.g,
      b: update.b !== undefined ? parseInt(update.b) : originalColor.b
    });
  } else if (update.hasOwnProperty("h") || update.hasOwnProperty("s") || update.hasOwnProperty("l")) {
    newColor = createColor({
      h: update.h !== undefined ? parseInt(update.h) : originalColor.h,
      s: update.s !== undefined ? parseInt(update.s) : originalColor.s,
      l: update.l !== undefined ? parseInt(update.l) : originalColor.l
    });
  } else {
    console.error("Bad input",update);
    throw new Error(`Bad input!`);
  }

  return newColor;
}
