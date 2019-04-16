import React from "react";
import useInterval from "@use-it/interval"; // Dan Abramov's useInterval https://overreacted.io/making-setinterval-declarative-with-react-hooks/

const phases = ["🌑", "🌒", "🌓", "🌔", "🌕", "🌖", "🌗", "🌘"];

const INDEX = Object.freeze({
  DARK: 0,
  LIGHT: 4
});

const Toggle = ({
  dark,
  setDark = () => null,
  interval = 50,
  darkIndex = INDEX.DARK,
  lightIndex = INDEX.LIGHT,
  ...props
}) => {
  const [phaseIndex, setPhaseIndex] = React.useState(
    dark ? darkIndex : lightIndex
  );

  const [speed, setSpeed] = React.useState(0);

  const incrementPhase = () => {
    const nextPhase = phaseIndex === 7 ? 0 : phaseIndex + 1;
    setPhaseIndex(nextPhase);
    if (nextPhase === (dark ? darkIndex : lightIndex)) {
      setSpeed(0);
    }
  };

  const onClick = () => {
    setDark(!dark);
    setSpeed(interval);
  };

  useInterval(incrementPhase, speed);

  return (
    <button type="button" {...props, onClick}>
      {phases[phaseIndex]}
    </button>
  );
};

export default Toggle;
