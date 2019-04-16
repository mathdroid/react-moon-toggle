# `react-moon-toggle`

> Toggle dark mode (or anything) in moon phases

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

```js
  dark, // boolean
  setDark = () => null, // ?function
  interval = 50, // number
  darkIndex = INDEX.DARK, // number (0-7)
  lightIndex = INDEX.LIGHT, // number (0-7)
```

## License

MIT
