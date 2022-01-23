function converter(hex) {
  const colorRGB = parseInt(hex.split('#')[1], 16);
  const red = (colorRGB >> 16) & 255;
  const green = (colorRGB >> 8) & 255;
  const blue = colorRGB & 255;

  return 'rgb(' + red + ',' + green + ',' + blue + ')';
}

export default converter;
