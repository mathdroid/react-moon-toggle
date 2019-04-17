import React from "react";
import useInterval from "@use-it/interval"; // Dan Abramov's useInterval https://overreacted.io/making-setinterval-declarative-with-react-hooks/

const phases = ["🌑", "🌒", "🌓", "🌔", "🌕", "🌖", "🌗", "🌘"];

const INDEX = Object.freeze({
  DARK: 0,
  LIGHT: 4
});

const getNextPhase = phase => (phase === 7 ? 0 : phase + 1);

const Toggle = ({
  dark,
  setDark = () => null,
  interval = 50,
  darkIndex = INDEX.DARK,
  lightIndex = INDEX.LIGHT,
  peekOnHover = true,
  ...props
}) => {
  const [phaseIndex, setPhaseIndex] = React.useState(
    dark ? darkIndex : lightIndex
  );

  const [speed, setSpeed] = React.useState(null);
  const [hovered, setHovered] = React.useState(false);

  const incrementPhase = () => {
    const nextPhase = getNextPhase(phaseIndex);
    setPhaseIndex(nextPhase);
    if (nextPhase === (dark ? darkIndex : lightIndex)) {
      setSpeed(null);
    }
  };

  const onClick = () => {
    setDark(!dark);
    setSpeed(interval);
  };

  const onMouseEnter = () => {
    setHovered(true);
  };
  const onMouseLeave = () => {
    setHovered(false);
  };

  useInterval(incrementPhase, speed);

  return (
    <button
      type="button"
      {...props}
      {...{ onClick, onMouseEnter, onMouseLeave }}
    >
      {hovered && peekOnHover
        ? phases[getNextPhase(phaseIndex)]
        : phases[phaseIndex]}
    </button>
  );
};

export default Toggle;
