# js-utils

## Installation

```bash
npm install @ckbab/js-utils --save
```

## Usage

```js
import { capitalize } from "@ckbab/js-utils";

const text = capitalize("first letter...");
// text = "First letter..."
```

## Functions

### Array

- `sliceIntoChunks(arr, chunkSize)`
- `shuffle(arr)`

### Color

- `changeOpacity(color, opacity)`
- `changeColor(color, backgroundColor, alpha)`
- `getContrastColor(color, dark = "#000", light = "#fff")`

### Geolocation

- `getDistanceBetweenCoordinates(lat1, lng1, lat2, lng2)`

### String

- `capitalize(str)`
- `cutText(str, length)`
- `formatPhoneNumber(str)`
- `formatUrl(str)`
- `isEmail(email)`
- `stripPhoneNumber(str)`
- `uncapitalize(str)`
