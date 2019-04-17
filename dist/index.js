"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _interval = require("@use-it/interval");

var _interval2 = _interopRequireDefault(_interval);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

// Dan Abramov's useInterval https://overreacted.io/making-setinterval-declarative-with-react-hooks/

var phases = ["🌑", "🌒", "🌓", "🌔", "🌕", "🌖", "🌗", "🌘"];

var INDEX = Object.freeze({
  DARK: 0,
  LIGHT: 4
});

var getNextPhase = function getNextPhase(phase) {
  return phase === 7 ? 0 : phase + 1;
};

var Toggle = function Toggle(_ref) {
  var dark = _ref.dark,
      _ref$setDark = _ref.setDark,
      setDark = _ref$setDark === undefined ? function () {
    return null;
  } : _ref$setDark,
      _ref$interval = _ref.interval,
      interval = _ref$interval === undefined ? 50 : _ref$interval,
      _ref$darkIndex = _ref.darkIndex,
      darkIndex = _ref$darkIndex === undefined ? INDEX.DARK : _ref$darkIndex,
      _ref$lightIndex = _ref.lightIndex,
      lightIndex = _ref$lightIndex === undefined ? INDEX.LIGHT : _ref$lightIndex,
      _ref$peekOnHover = _ref.peekOnHover,
      peekOnHover = _ref$peekOnHover === undefined ? true : _ref$peekOnHover,
      props = _objectWithoutProperties(_ref, ["dark", "setDark", "interval", "darkIndex", "lightIndex", "peekOnHover"]);

  var _React$useState = _react2.default.useState(dark ? darkIndex : lightIndex),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      phaseIndex = _React$useState2[0],
      setPhaseIndex = _React$useState2[1];

  var _React$useState3 = _react2.default.useState(null),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      speed = _React$useState4[0],
      setSpeed = _React$useState4[1];

  var _React$useState5 = _react2.default.useState(false),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      hovered = _React$useState6[0],
      setHovered = _React$useState6[1];

  var incrementPhase = function incrementPhase() {
    var nextPhase = getNextPhase(phaseIndex);
    setPhaseIndex(nextPhase);
    if (nextPhase === (dark ? darkIndex : lightIndex)) {
      setSpeed(null);
    }
  };

  var onClick = function onClick() {
    setDark(!dark);
    setSpeed(interval);
  };

  var onMouseEnter = function onMouseEnter() {
    setHovered(true);
  };
  var onMouseLeave = function onMouseLeave() {
    setHovered(false);
  };

  (0, _interval2.default)(incrementPhase, speed);

  return _react2.default.createElement(
    "button",
    _extends({
      type: "button"
    }, props, { onClick: onClick, onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave }),
    hovered && peekOnHover ? phases[getNextPhase(phaseIndex)] : phases[phaseIndex]
  );
};

exports.default = Toggle;