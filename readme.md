# `react-moon-toggle`

> Toggle dark mode (or anything) in moon phases emoji

<img src="moon.gif" width="400">

## Usage

```js
import React from "react";
import Toggle from "react-moon-toggle";

const app = () => {
  const [dark, setDark] = React.useState(false);

  return <Toggle {...{ dark, setDark }} />;
};
```

## Installation

```sh
$ yarn add react-moon-toggle
```

## Props

- `dark` boolean (_required_)

- `setDark` = `(newDark: boolean) => null` ?function<boolean>

- `interval` = `50` number

- `darkIndex` = `0` number (0-7)

- `lightIndex` = `4` number (0-7)

- `peekOnHover` = `true` boolean

phases array used for indexes:

```js
const phases = ["🌑", "🌒", "🌓", "🌔", "🌕", "🌖", "🌗", "🌘"];
```

phases array used for indexes:

```js
const phases = ["🌑", "🌒", "🌓", "🌔", "🌕", "🌖", "🌗", "🌘"];
```

Any other props will be given directly to the `<button>` element.

## License

MIT
