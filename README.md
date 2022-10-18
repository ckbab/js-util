# js-utils

## Installation

```bash
yarn add @ckbab/js-utils
```

## Usage

```js
import { capitalize } from "@ckbab/js-utils";

const text = capitalize("first letter...");
// text = "First letter..."
```

## Functions

### Color

- `changeOpacity(color, opacity)`
- `changeColor(color, backgroundColor, alpha)`
- `getContrastColor(color, dark = "#000", light = "#fff")`
- `isColor(color)`

### Geolocation

- `getDistanceBetweenCoordinates(lat1, lng1, lat2, lng2)`

### String

- `capitalize(str)`
- `createUrl(basePath, queryString)`
- `cutText(str, length)`
- `formatPhoneNumber(phone)`
- `formatUrl(url)`
- `isEmail(email)`
- `stripPhoneNumber(phone)`
- `uncapitalize(str)`
