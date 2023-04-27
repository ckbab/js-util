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

### String

- `createUrl(basePath, queryString)`
- `formatUrl(url)`
- `isEmail(email)`
