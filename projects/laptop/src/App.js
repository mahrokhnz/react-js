import "./App.css";
import { useState } from "react";

const validKeys = [
  "Backquote",
  "Digit1",
  "Digit2",
  "Digit3",
  "Digit4",
  "Digit5",
  "Digit6",
  "Digit7",
  "Digit8",
  "Digit9",
  "Digit0",
  "Minus",
  "Equal",
  "Backspace",
  "Tab",
  "KeyQ",
  "KeyW",
  "KeyE",
  "KeyR",
  "KeyT",
  "KeyY",
  "KeyU",
  "KeyI",
  "KeyO",
  "KeyP",
  "BracketLeft",
  "BracketRight",
  "Backslash",
  "CapsLock",
  "KeyA",
  "KeyS",
  "KeyD",
  "KeyF",
  "KeyG",
  "KeyH",
  "KeyJ",
  "KeyK",
  "KeyL",
  "Semicolon",
  "Quote",
  "Enter",
  "ShiftLeft",
  "KeyZ",
  "KeyX",
  "KeyC",
  "KeyV",
  "KeyB",
  "KeyN",
  "KeyM",
  "Comma",
  "Period",
  "Slash",
  "ShiftRight",
  "ControlLeft",
  "AltLeft",
  "Space",
];

function LaptopApp() {
  const [pressedKey, setPressedKey] = useState("");
  const [screenValue, setScreenValue] = useState("");
  const [onUpper, setOnUpper] = useState(false);

  const screenHandler = (code, key) => {
    if (code === "Backspace") {
      if (screenValue.length > 0) {
        setScreenValue((currentValue) =>
          currentValue.substring(0, currentValue.length - 1),
        );
      }
    } else if (code === "Tab") {
      setScreenValue(screenValue + "     ");
    } else if (code === "CapsLock") {
      setOnUpper(!onUpper);
    } else if (code === "Enter") {
      // TODO: what should do with enter??
    } else if (code === "ShiftLeft" || code === "ShiftRight") {
      // TODO: what should do shifts??
    } else if (code === "ControlLeft") {
      // TODO: what should do control??
    } else if (code === "AltLeft") {
      // TODO: what should do alt??
    } else if (code === "Space") {
      setScreenValue(screenValue + " ");
    } else {
      setScreenValue(screenValue + key);
    }
  };

  const keyDownHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (validKeys.includes(e.code)) {
      setPressedKey(e.code);
      screenHandler(e.code, e.key);
    }
  };

  const keyUpHandler = () => {
    setPressedKey("");
  };

  return (
    <main
      className="laptop"
      tabIndex={1}
      onKeyDown={keyDownHandler}
      onKeyUp={keyUpHandler}
    >
      <div className="screenWrapper">
        <textarea className="screen" value={screenValue} readOnly />
      </div>
      <div className="keyboard">
        <div className="row">
          <div
            className={`button ${pressedKey === "Backquote" ? "active" : ""}`}
          >
            <span>`</span>
          </div>
          <div className={`button ${pressedKey === "Digit1" ? "active" : ""}`}>
            <span>1</span>
          </div>
          <div className={`button ${pressedKey === "Digit2" ? "active" : ""}`}>
            <span>2</span>
          </div>
          <div className={`button ${pressedKey === "Digit3" ? "active" : ""}`}>
            <span>3</span>
          </div>
          <div className={`button ${pressedKey === "Digit4" ? "active" : ""}`}>
            <span>4</span>
          </div>
          <div className={`button ${pressedKey === "Digit5" ? "active" : ""}`}>
            <span>5</span>
          </div>
          <div className={`button ${pressedKey === "Digit6" ? "active" : ""}`}>
            <span>6</span>
          </div>
          <div className={`button ${pressedKey === "Digit7" ? "active" : ""}`}>
            <span>7</span>
          </div>
          <div className={`button ${pressedKey === "Digit8" ? "active" : ""}`}>
            <span>8</span>
          </div>
          <div className={`button ${pressedKey === "Digit9" ? "active" : ""}`}>
            <span>9</span>
          </div>
          <div className={`button ${pressedKey === "Digit0" ? "active" : ""}`}>
            <span>0</span>
          </div>
          <div className={`button ${pressedKey === "Minus" ? "active" : ""}`}>
            <span>-</span>
          </div>
          <div className={`button ${pressedKey === "Equal" ? "active" : ""}`}>
            <span>=</span>
          </div>
          <div
            className={`button backspace ${
              pressedKey === "Backspace" ? "active" : ""
            }`}
          >
            <span>backspace</span>
          </div>
        </div>

        <div className="row">
          <div className={`button tab ${pressedKey === "Tab" ? "active" : ""}`}>
            <span>tab</span>
          </div>
          <div className={`button ${pressedKey === "KeyQ" ? "active" : ""}`}>
            <span>{onUpper ? "Q" : "q"}</span>
          </div>
          <div className={`button ${pressedKey === "KeyW" ? "active" : ""}`}>
            <span>{onUpper ? "W" : "w"}</span>
          </div>
          <div className={`button ${pressedKey === "KeyE" ? "active" : ""}`}>
            <span>{onUpper ? "E" : "e"}</span>
          </div>
          <div className={`button ${pressedKey === "KeyR" ? "active" : ""}`}>
            <span>{onUpper ? "R" : "r"}</span>
          </div>
          <div className={`button ${pressedKey === "KeyT" ? "active" : ""}`}>
            <span>{onUpper ? "T" : "t"}</span>
          </div>
          <div className={`button ${pressedKey === "KeyY" ? "active" : ""}`}>
            <span>{onUpper ? "Y" : "y"}</span>
          </div>
          <div className={`button ${pressedKey === "KeyU" ? "active" : ""}`}>
            <span>{onUpper ? "U" : "u"}</span>
          </div>
          <div className={`button ${pressedKey === "KeyI" ? "active" : ""}`}>
            <span>{onUpper ? "I" : "i"}</span>
          </div>
          <div className={`button ${pressedKey === "KeyO" ? "active" : ""}`}>
            <span>{onUpper ? "O" : "o"}</span>
          </div>
          <div className={`button ${pressedKey === "KeyP" ? "active" : ""}`}>
            <span>{onUpper ? "P" : "p"}</span>
          </div>
          <div
            className={`button ${pressedKey === "BracketLeft" ? "active" : ""}`}
          >
            <span>[</span>
          </div>
          <div
            className={`button ${
              pressedKey === "BracketRight" ? "active" : ""
            }`}
          >
            <span>]</span>
          </div>
          <div
            className={`button slash ${
              pressedKey === "Backslash" ? "active" : ""
            }`}
          >
            <span>\</span>
          </div>
        </div>

        <div className="row">
          <div
            className={`button capsLock ${
              pressedKey === "CapsLock" ? "active" : ""
            }`}
          >
            <div className={`light ${onUpper ? "on" : ""}`}></div>
            <span>caps lock</span>
          </div>
          <div className={`button ${pressedKey === "KeyA" ? "active" : ""}`}>
            <span>{onUpper ? "A" : "a"}</span>
          </div>
          <div className={`button ${pressedKey === "KeyS" ? "active" : ""}`}>
            <span>{onUpper ? "S" : "s"}</span>
          </div>
          <div className={`button ${pressedKey === "KeyD" ? "active" : ""}`}>
            <span>{onUpper ? "D" : "d"}</span>
          </div>
          <div className={`button ${pressedKey === "KeyF" ? "active" : ""}`}>
            <span>{onUpper ? "F" : "f"}</span>
          </div>
          <div className={`button ${pressedKey === "KeyG" ? "active" : ""}`}>
            <span>{onUpper ? "G" : "g"}</span>
          </div>
          <div className={`button ${pressedKey === "KeyH" ? "active" : ""}`}>
            <span>{onUpper ? "H" : "h"}</span>
          </div>
          <div className={`button ${pressedKey === "KeyJ" ? "active" : ""}`}>
            <span>{onUpper ? "J" : "j"}</span>
          </div>
          <div className={`button ${pressedKey === "KeyK" ? "active" : ""}`}>
            <span>{onUpper ? "K" : "k"}</span>
          </div>
          <div className={`button ${pressedKey === "KeyL" ? "active" : ""}`}>
            <span>{onUpper ? "L" : "l"}</span>
          </div>
          <div
            className={`button ${pressedKey === "Semicolon" ? "active" : ""}`}
          >
            <span>;</span>
          </div>
          <div className={`button ${pressedKey === "Quote" ? "active" : ""}`}>
            <span>'</span>
          </div>
          {/*TODO: classname active doesn't work*/}
          <div
            className={`button enter ${pressedKey === "Enter" ? "active" : ""}`}
          >
            <span>Enter</span>
          </div>
        </div>
        <div className="row">
          <div
            className={`button shift ${
              pressedKey === "ShiftLeft" ? "active" : ""
            }`}
          >
            <span>shift</span>
          </div>
          <div className={`button ${pressedKey === "KeyZ" ? "active" : ""}`}>
            <span>{onUpper ? "Z" : "z"}</span>
          </div>
          <div className={`button ${pressedKey === "KeyX" ? "active" : ""}`}>
            <span>{onUpper ? "X" : "x"}</span>
          </div>
          <div className={`button ${pressedKey === "KeyC" ? "active" : ""}`}>
            <span>{onUpper ? "C" : "c"}</span>
          </div>
          <div className={`button ${pressedKey === "KeyV" ? "active" : ""}`}>
            <span>{onUpper ? "V" : "v"}</span>
          </div>
          <div className={`button ${pressedKey === "KeyB" ? "active" : ""}`}>
            <span>{onUpper ? "B" : "b"}</span>
          </div>
          <div className={`button ${pressedKey === "KeyN" ? "active" : ""}`}>
            <span>{onUpper ? "N" : "n"}</span>
          </div>
          <div className={`button ${pressedKey === "KeyM" ? "active" : ""}`}>
            <span>{onUpper ? "M" : "m"}</span>
          </div>
          <div className={`button ${pressedKey === "Comma" ? "active" : ""}`}>
            <span>,</span>
          </div>
          <div className={`button ${pressedKey === "period" ? "active" : ""}`}>
            <span>.</span>
          </div>
          <div className={`button ${pressedKey === "slash" ? "active" : ""}`}>
            <span>/</span>
          </div>
          <div
            className={`button shift ${
              pressedKey === "ShiftRight" ? "active" : ""
            }`}
          >
            <span>shift</span>
          </div>
        </div>

        <div className="row">
          <div
            className={`button ${pressedKey === "ControlLeft" ? "active" : ""}`}
          >
            <span>ctrl</span>
          </div>
          <div className={`button ${pressedKey === "AltLeft" ? "active" : ""}`}>
            <span>alt</span>
          </div>
          <div
            className={`button space ${pressedKey === "Space" ? "active" : ""}`}
          >
            <span></span>
          </div>
        </div>
      </div>
    </main>
  );
}

export default LaptopApp;
