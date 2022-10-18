export const changeColor = (color, backgroundColor, alpha) => {
  if (!color || !backgroundColor) {
    return null;
  }
  const { b: b1, g: g1, r: r1 } = hexToRgb(color);
  const { b: b2, g: g2, r: r2 } = hexToRgb(backgroundColor);
  const r = r1 * alpha + r2 * (1 - alpha);
  const g = g1 * alpha + g2 * (1 - alpha);
  const b = b1 * alpha + b2 * (1 - alpha);
  const hex = rgbToHex(r, g, b);
  return hex;
};

export const changeOpacity = (color, opacity) => {
  if (!color) {
    return null;
  }
  const { b, g, r } = hexToRgb(color);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

export const getContrastColor = (color, dark = "#000", light = "#fff") => {
  if (!color) {
    return null;
  }
  const { b, g, r } = hexToRgb(color);
  if (0.2126 * r + 0.7152 * g + 0.0722 * b > 179) {
    return dark;
  } else {
    return light;
  }
};

export const isColor = (color) => {
  if (!color) {
    return false;
  }
  return /^#([0-9a-f]{3}){1,2}$/i.test(color);
};

const hexToRgb = (hex) => {
  const color = formatColor(hex);
  if (color) {
    const result = /^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);
    return result
      ? {
          b: parseInt(result[3], 16),
          g: parseInt(result[2], 16),
          r: parseInt(result[1], 16),
        }
      : null;
  }
};

const rgbToHex = (r, g, b) => {
  const componentToHex = (c) => {
    const hex = parseInt(c).toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  };
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
};

const formatColor = (hex) => {
  hex = hex.replace(/^#/, "");
  if (hex.length === 3) {
    return hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  } else if (hex.length === 6) {
    return hex;
  }
  return null;
};
