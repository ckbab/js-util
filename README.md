# js-util

## Installation

```bash
npm install @ckbab.se/js-util --save
```

## Usage

```js
import { string } from "@ckbab/js-util";

const text = string.capitalize("first letter...");
// text = "First letter..."
```

## Color Util

### changeOpacity(color, opacity)

Takes a HEX color and opacity (0-1) and returns a new color in RGBA format.

```js
const newColor = changeOpacity("#cc00ff", 0.5);
// newColor = "rgba(204, 0, 255, 0.5)"
```

### changeColor(color, backgroundColor, alpha)

Takes two HEX colors and returns a new HEX color based on the alpha (0-1). `alpha` represents how much of the `color` vs `backgroundColor` that will be shown. For example, if `alpha=1` then only `color` will be shown while `alpha=0` only `backgroundColor` will be shown.

```js
// Equal to adding a black overlay with opacity = 0.2.
const newColor = changeColor("#cc00ff", "#000000", 0.8);
// newColor = "#a300cc"
```

### getContrastColor(color, dark = "#000", light = "#fff")

Returns either `dark` or `light` based on `color`. Useful for determine a font color on a given background color.

```js
const fontColor = getContrastColor("#cc00ff");
// fontColor = "#fff"
```

## string

### capitalize(str)

Returns the string with first letter in upper case.

```js
const text = string.capitalize("first letter...");
// text = "First letter..."
```

### uncapitalize(str)

Returns the string with first letter in lower case.

```js
const text = string.uncapitalize("Marcus");
// text = "marcus"
```

### isEmail(email)

Returns true/false if `email` is a valid e-mail.

```js
const email = string.isEmail("info@ckbab.se");
// email = true
```
