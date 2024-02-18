import './index.css';
import React, { useEffect, useMemo, useState } from 'react';

const validKeys = [
  'Backquote',
  'Digit1',
  'Digit2',
  'Digit3',
  'Digit4',
  'Digit5',
  'Digit6',
  'Digit7',
  'Digit8',
  'Digit9',
  'Digit0',
  'Minus',
  'Equal',
  'Backspace',
  'Tab',
  'KeyQ',
  'KeyW',
  'KeyE',
  'KeyR',
  'KeyT',
  'KeyY',
  'KeyU',
  'KeyI',
  'KeyO',
  'KeyP',
  'BracketLeft',
  'BracketRight',
  'Backslash',
  'CapsLock',
  'KeyA',
  'KeyS',
  'KeyD',
  'KeyF',
  'KeyG',
  'KeyH',
  'KeyJ',
  'KeyK',
  'KeyL',
  'Semicolon',
  'Quote',
  'Enter',
  'ShiftLeft',
  'KeyZ',
  'KeyX',
  'KeyC',
  'KeyV',
  'KeyB',
  'KeyN',
  'KeyM',
  'Comma',
  'Period',
  'Slash',
  'ShiftRight',
  'ControlLeft',
  'AltLeft',
  'Space',
];

function LaptopApp() {
  const [pressedKey, setPressedKey] = useState('');
  const [screenValue, setScreenValue] = useState('');
  const [onUpper, setOnUpper] = useState(false);

  const screenHandler = (code, key) => {
    if (code === 'Backspace') {
      if (screenValue.length > 0) {
        setScreenValue((currentValue) => currentValue.substring(0, currentValue.length - 1));
      }
    } else if (code === 'Tab') {
      setScreenValue(`${screenValue}     `);
    } else if (code === 'CapsLock') {
      setOnUpper(!onUpper);
    } else if (code === 'Enter') {
      // TODO: what should do with enter??
    } else if (code === 'ControlLeft') {
      // TODO: what should do with control??
    } else if (code === 'AltLeft') {
      // TODO: what should do with alt??
    } else if (code === 'Space') {
      setScreenValue(`${screenValue} `);
    } else if (code !== 'ShiftLeft' && code !== 'ShiftRight') {
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
    setPressedKey('');
  };

  const clickHandler = (e) => {
    e.stopPropagation();
    e.preventDefault();

    const code = e.target.getAttribute('data-code');
    const key = e.target.getAttribute('data-key');

    setPressedKey(code);
    screenHandler(code, key);
  };

  useEffect(() => {
    localStorage.setItem('capsLock', `${onUpper}`);
    localStorage.setItem('screen', screenValue);
  }, [onUpper, screenValue]);

  useMemo(() => {
    const upperCase = localStorage.getItem('capsLock');
    const value = localStorage.getItem('screen');
    setOnUpper(upperCase ? JSON.parse(upperCase) : false);
    setScreenValue(value || '');
  }, []);

  return (
    <main className="laptop" onKeyDown={keyDownHandler} onKeyUp={keyUpHandler}>
      <div className="screenWrapper">
        <textarea className="screen" value={screenValue} readOnly />
      </div>

      <div className="keyboard">
        <div className="row">
          <div
            className={`button ${pressedKey === 'Backquote' ? 'active' : ''}`}
            data-code="Backquote"
            data-key="`"
            onMouseDown={clickHandler}
            onMouseUp={keyUpHandler}
          >
            <span onMouseDown={(e) => e.stopPropagation()}>`</span>
          </div>
          <div
            className={`button ${pressedKey === 'Digit1' ? 'active' : ''}`}
            data-code="Digit1"
            data-key="1"
            onMouseDown={clickHandler}
            onMouseUp={keyUpHandler}
          >
            <span onMouseDown={(e) => e.stopPropagation()}>1</span>
          </div>
          <div
            className={`button ${pressedKey === 'Digit2' ? 'active' : ''}`}
            data-code="Digit2"
            data-key="2"
            onMouseDown={clickHandler}
            onMouseUp={keyUpHandler}
          >
            <span onMouseDown={(e) => e.stopPropagation()}>2</span>
          </div>
          <div
            className={`button ${pressedKey === 'Digit3' ? 'active' : ''}`}
            data-code="Digit3"
            data-key="3"
            onMouseDown={clickHandler}
            onMouseUp={keyUpHandler}
          >
            <span onMouseDown={(e) => e.stopPropagation()}>3</span>
          </div>
          <div
            className={`button ${pressedKey === 'Digit4' ? 'active' : ''}`}
            data-code="Digit4"
            data-key="4"
            onMouseDown={clickHandler}
            onMouseUp={keyUpHandler}
          >
            <span onMouseDown={(e) => e.stopPropagation()}>4</span>
          </div>
          <div
            className={`button ${pressedKey === 'Digit5' ? 'active' : ''}`}
            data-code="Digit5"
            data-key="5"
            onMouseDown={clickHandler}
            onMouseUp={keyUpHandler}
          >
            <span onMouseDown={(e) => e.stopPropagation()}>5</span>
          </div>
          <div
            className={`button ${pressedKey === 'Digit6' ? 'active' : ''}`}
            data-code="Digit6"
            data-key="6"
            onMouseDown={clickHandler}
            onMouseUp={keyUpHandler}
          >
            <span onMouseDown={(e) => e.stopPropagation()}>6</span>
          </div>
          <div
            className={`button ${pressedKey === 'Digit7' ? 'active' : ''}`}
            data-code="Digit7"
            data-key="7"
            onMouseDown={clickHandler}
            onMouseUp={keyUpHandler}
          >
            <span onMouseDown={(e) => e.stopPropagation()}>7</span>
          </div>
          <div
            className={`button ${pressedKey === 'Digit8' ? 'active' : ''}`}
            data-code="Digit8"
            data-key="8"
            onMouseDown={clickHandler}
            onMouseUp={keyUpHandler}
          >
            <span onMouseDown={(e) => e.stopPropagation()}>8</span>
          </div>
          <div
            className={`button ${pressedKey === 'Digit9' ? 'active' : ''}`}
            data-code="Digit9"
            data-key="9"
            onMouseDown={clickHandler}
            onMouseUp={keyUpHandler}
          >
            <span onMouseDown={(e) => e.stopPropagation()}>9</span>
          </div>
          <div
            className={`button ${pressedKey === 'Digit0' ? 'active' : ''}`}
            data-code="Digit0"
            data-key="0"
            onMouseDown={clickHandler}
            onMouseUp={keyUpHandler}
          >
            <span onMouseDown={(e) => e.stopPropagation()}>0</span>
          </div>
          <div
            className={`button ${pressedKey === 'Minus' ? 'active' : ''}`}
            data-code="Minus"
            data-key="-"
            onMouseDown={clickHandler}
            onMouseUp={keyUpHandler}
          >
            <span onMouseDown={(e) => e.stopPropagation()}>-</span>
          </div>
          <div
            className={`button ${pressedKey === 'Equal' ? 'active' : ''}`}
            data-code="Equal"
            data-key="="
            onMouseDown={clickHandler}
            onMouseUp={keyUpHandler}
          >
            <span onMouseDown={(e) => e.stopPropagation()}>=</span>
          </div>
          <div
            className={`button backspace ${
              pressedKey === 'Backspace' ? 'active' : ''
            }`}
            data-code="Backspace"
            data-key="Backspace"
            onMouseDown={clickHandler}
            onMouseUp={keyUpHandler}
          >
            <span onMouseDown={(e) => e.stopPropagation()}>backspace</span>
          </div>
        </div>

        <div className="row">
          <div
            className={`button tab ${pressedKey === 'Tab' ? 'active' : ''}`}
            data-code="Tab"
            data-key="Tab"
            onMouseDown={clickHandler}
            onMouseUp={keyUpHandler}
          >
            <span onMouseDown={(e) => e.stopPropagation()}>tab</span>
          </div>
          <div
            className={`button ${pressedKey === 'KeyQ' ? 'active' : ''}`}
            data-code="KeyQ"
            data-key={onUpper ? 'Q' : 'q'}
            onMouseDown={clickHandler}
            onMouseUp={keyUpHandler}
          >
            <span onMouseDown={(e) => e.stopPropagation()}>
              {onUpper ? 'Q' : 'q'}
            </span>
          </div>
          <div
            className={`button ${pressedKey === 'KeyW' ? 'active' : ''}`}
            data-code="KeyW"
            data-key={onUpper ? 'W' : 'w'}
            onMouseDown={clickHandler}
            onMouseUp={keyUpHandler}
          >
            <span onMouseDown={(e) => e.stopPropagation()}>
              {onUpper ? 'W' : 'w'}
            </span>
          </div>
          <div
            className={`button ${pressedKey === 'KeyE' ? 'active' : ''}`}
            data-code="KeyE"
            data-key={onUpper ? 'E' : 'e'}
            onMouseDown={clickHandler}
            onMouseUp={keyUpHandler}
          >
            <span onMouseDown={(e) => e.stopPropagation()}>
              {onUpper ? 'E' : 'e'}
            </span>
          </div>
          <div
            className={`button ${pressedKey === 'KeyR' ? 'active' : ''}`}
            data-code="KeyR"
            data-key={onUpper ? 'R' : 'r'}
            onMouseDown={clickHandler}
            onMouseUp={keyUpHandler}
          >
            <span onMouseDown={(e) => e.stopPropagation()}>
              {onUpper ? 'R' : 'r'}
            </span>
          </div>
          <div
            className={`button ${pressedKey === 'KeyT' ? 'active' : ''}`}
            data-code="KeyT"
            data-key={onUpper ? 'T' : 't'}
            onMouseDown={clickHandler}
            onMouseUp={keyUpHandler}
          >
            <span onMouseDown={(e) => e.stopPropagation()}>
              {onUpper ? 'T' : 't'}
            </span>
          </div>
          <div
            className={`button ${pressedKey === 'KeyY' ? 'active' : ''}`}
            data-code="KeyY"
            data-key={onUpper ? 'Y' : 'y'}
            onMouseDown={clickHandler}
            onMouseUp={keyUpHandler}
          >
            <span onMouseDown={(e) => e.stopPropagation()}>
              {onUpper ? 'Y' : 'y'}
            </span>
          </div>
          <div
            className={`button ${pressedKey === 'KeyU' ? 'active' : ''}`}
            data-code="KeyU"
            data-key={onUpper ? 'U' : 'u'}
            onMouseDown={clickHandler}
            onMouseUp={keyUpHandler}
          >
            <span onMouseDown={(e) => e.stopPropagation()}>
              {onUpper ? 'U' : 'u'}
            </span>
          </div>
          <div
            className={`button ${pressedKey === 'KeyI' ? 'active' : ''}`}
            data-code="KeyI"
            data-key={onUpper ? 'I' : 'i'}
            onMouseDown={clickHandler}
            onMouseUp={keyUpHandler}
          >
            <span onMouseDown={(e) => e.stopPropagation()}>
              {onUpper ? 'I' : 'i'}
            </span>
          </div>
          <div
            className={`button ${pressedKey === 'KeyO' ? 'active' : ''}`}
            data-code="KeyO"
            data-key={onUpper ? 'O' : 'o'}
            onMouseDown={clickHandler}
            onMouseUp={keyUpHandler}
          >
            <span onMouseDown={(e) => e.stopPropagation()}>
              {onUpper ? 'O' : 'o'}
            </span>
          </div>
          <div
            className={`button ${pressedKey === 'KeyP' ? 'active' : ''}`}
            data-code="KeyP"
            data-key={onUpper ? 'P' : 'p'}
            onMouseDown={clickHandler}
            onMouseUp={keyUpHandler}
          >
            <span onMouseDown={(e) => e.stopPropagation()}>
              {onUpper ? 'P' : 'p'}
            </span>
          </div>
          <div
            className={`button ${pressedKey === 'BracketLeft' ? 'active' : ''}`}
            data-code="BracketLeft"
            data-key="["
            onMouseDown={clickHandler}
            onMouseUp={keyUpHandler}
          >
            <span onMouseDown={(e) => e.stopPropagation()}>[</span>
          </div>
          <div
            className={`button ${
              pressedKey === 'BracketRight' ? 'active' : ''
            }`}
            data-code="BracketRight"
            data-key="]"
            onMouseDown={clickHandler}
            onMouseUp={keyUpHandler}
          >
            <span onMouseDown={(e) => e.stopPropagation()}>]</span>
          </div>
          <div
            className={`button slash ${
              pressedKey === 'Backslash' ? 'active' : ''
            }`}
            data-code="Backslash"
            data-key="\"
            onMouseDown={clickHandler}
            onMouseUp={keyUpHandler}
          >
            <span onMouseDown={(e) => e.stopPropagation()}>\</span>
          </div>
        </div>

        <div className="row">
          <div
            className={`button capsLock ${
              pressedKey === 'CapsLock' ? 'active' : ''
            }`}
            data-code="CapsLock"
            data-key="CapsLock"
            onMouseDown={clickHandler}
            onMouseUp={keyUpHandler}
          >
            <div className={`light ${onUpper ? 'on' : ''}`} />

            <span onMouseDown={(e) => e.stopPropagation()}>caps lock</span>
          </div>
          <div
            className={`button ${pressedKey === 'KeyA' ? 'active' : ''}`}
            data-code="KeyA"
            data-key={onUpper ? 'A' : 'a'}
            onMouseDown={clickHandler}
            onMouseUp={keyUpHandler}
          >
            <span onMouseDown={(e) => e.stopPropagation()}>
              {onUpper ? 'A' : 'a'}
            </span>
          </div>
          <div
            className={`button ${pressedKey === 'KeyS' ? 'active' : ''}`}
            data-code="KeyS"
            data-key={onUpper ? 'S' : 's'}
            onMouseDown={clickHandler}
            onMouseUp={keyUpHandler}
          >
            <span onMouseDown={(e) => e.stopPropagation()}>
              {onUpper ? 'S' : 's'}
            </span>
          </div>
          <div
            className={`button ${pressedKey === 'KeyD' ? 'active' : ''}`}
            data-code="KeyD"
            data-key={onUpper ? 'D' : 'd'}
            onMouseDown={clickHandler}
            onMouseUp={keyUpHandler}
          >
            <span onMouseDown={(e) => e.stopPropagation()}>
              {onUpper ? 'D' : 'd'}
            </span>
          </div>
          <div
            className={`button ${pressedKey === 'KeyF' ? 'active' : ''}`}
            data-code="KeyF"
            data-key={onUpper ? 'F' : 'f'}
            onMouseDown={clickHandler}
            onMouseUp={keyUpHandler}
          >
            <span onMouseDown={(e) => e.stopPropagation()}>
              {onUpper ? 'F' : 'f'}
            </span>
          </div>
          <div
            className={`button ${pressedKey === 'KeyG' ? 'active' : ''}`}
            data-code="KeyG"
            data-key={onUpper ? 'G' : 'g'}
            onMouseDown={clickHandler}
            onMouseUp={keyUpHandler}
          >
            <span onMouseDown={(e) => e.stopPropagation()}>
              {onUpper ? 'G' : 'g'}
            </span>
          </div>
          <div
            className={`button ${pressedKey === 'KeyH' ? 'active' : ''}`}
            data-code="KeyH"
            data-key={onUpper ? 'H' : 'h'}
            onMouseDown={clickHandler}
            onMouseUp={keyUpHandler}
          >
            <span onMouseDown={(e) => e.stopPropagation()}>
              {onUpper ? 'H' : 'h'}
            </span>
          </div>
          <div
            className={`button ${pressedKey === 'KeyJ' ? 'active' : ''}`}
            data-code="KeyJ"
            data-key={onUpper ? 'J' : 'j'}
            onMouseDown={clickHandler}
            onMouseUp={keyUpHandler}
          >
            <span onMouseDown={(e) => e.stopPropagation()}>
              {onUpper ? 'J' : 'j'}
            </span>
          </div>
          <div
            className={`button ${pressedKey === 'KeyK' ? 'active' : ''}`}
            data-code="KeyK"
            data-key={onUpper ? 'K' : 'k'}
            onMouseDown={clickHandler}
            onMouseUp={keyUpHandler}
          >
            <span onMouseDown={(e) => e.stopPropagation()}>
              {onUpper ? 'K' : 'k'}
            </span>
          </div>
          <div
            className={`button ${pressedKey === 'KeyL' ? 'active' : ''}`}
            data-code="KeyL"
            data-key={onUpper ? 'L' : 'l'}
            onMouseDown={clickHandler}
            onMouseUp={keyUpHandler}
          >
            <span onMouseDown={(e) => e.stopPropagation()}>
              {onUpper ? 'L' : 'l'}
            </span>
          </div>
          <div
            className={`button ${pressedKey === 'Semicolon' ? 'active' : ''}`}
            data-code="Semicolon"
            data-key=";"
            onMouseDown={clickHandler}
            onMouseUp={keyUpHandler}
          >
            <span onMouseDown={(e) => e.stopPropagation()}>;</span>
          </div>
          <div
            className={`button ${pressedKey === 'Quote' ? 'active' : ''}`}
            data-code="Quote"
            data-key="'"
            onMouseDown={clickHandler}
            onMouseUp={keyUpHandler}
          >
            <span onMouseDown={(e) => e.stopPropagation()}>'</span>
          </div>
          <div
            className={`button enter ${pressedKey === 'Enter' ? 'active' : ''}`}
            data-code="Enter"
            data-key="Enter"
            onMouseDown={clickHandler}
            onMouseUp={keyUpHandler}
          >
            <span onMouseDown={(e) => e.stopPropagation()}>Enter</span>
          </div>
        </div>
        <div className="row">
          <div
            className={`button shift ${
              pressedKey === 'ShiftLeft' ? 'active' : ''
            }`}
            data-code="ShiftLeft"
            data-key="ShiftLeft"
            onMouseDown={clickHandler}
            onMouseUp={keyUpHandler}
          >
            <span onMouseDown={(e) => e.stopPropagation()}>shift</span>
          </div>
          <div
            className={`button ${pressedKey === 'KeyZ' ? 'active' : ''}`}
            data-code="KeyZ"
            data-key={onUpper ? 'Z' : 'z'}
            onMouseDown={clickHandler}
            onMouseUp={keyUpHandler}
          >
            <span onMouseDown={(e) => e.stopPropagation()}>
              {onUpper ? 'Z' : 'z'}
            </span>
          </div>
          <div
            className={`button ${pressedKey === 'KeyX' ? 'active' : ''}`}
            data-code="KeyX"
            data-key={onUpper ? 'X' : 'x'}
            onMouseDown={clickHandler}
            onMouseUp={keyUpHandler}
          >
            <span onMouseDown={(e) => e.stopPropagation()}>
              {onUpper ? 'X' : 'x'}
            </span>
          </div>
          <div
            className={`button ${pressedKey === 'KeyC' ? 'active' : ''}`}
            data-code="KeyC"
            data-key={onUpper ? 'C' : 'c'}
            onMouseDown={clickHandler}
            onMouseUp={keyUpHandler}
          >
            <span onMouseDown={(e) => e.stopPropagation()}>
              {onUpper ? 'C' : 'c'}
            </span>
          </div>
          <div
            className={`button ${pressedKey === 'KeyV' ? 'active' : ''}`}
            data-code="KeyV"
            data-key={onUpper ? 'V' : 'v'}
            onMouseDown={clickHandler}
            onMouseUp={keyUpHandler}
          >
            <span onMouseDown={(e) => e.stopPropagation()}>
              {onUpper ? 'V' : 'v'}
            </span>
          </div>
          <div
            className={`button ${pressedKey === 'KeyB' ? 'active' : ''}`}
            data-code="KeyB"
            data-key={onUpper ? 'B' : 'b'}
            onMouseDown={clickHandler}
            onMouseUp={keyUpHandler}
          >
            <span onMouseDown={(e) => e.stopPropagation()}>
              {onUpper ? 'B' : 'b'}
            </span>
          </div>
          <div
            className={`button ${pressedKey === 'KeyN' ? 'active' : ''}`}
            data-code="KeyN"
            data-key={onUpper ? 'N' : 'n'}
            onMouseDown={clickHandler}
            onMouseUp={keyUpHandler}
          >
            <span onMouseDown={(e) => e.stopPropagation()}>
              {onUpper ? 'N' : 'n'}
            </span>
          </div>
          <div
            className={`button ${pressedKey === 'KeyM' ? 'active' : ''}`}
            data-code="KeyM"
            data-key={onUpper ? 'M' : 'm'}
            onMouseDown={clickHandler}
            onMouseUp={keyUpHandler}
          >
            <span onMouseDown={(e) => e.stopPropagation()}>
              {onUpper ? 'M' : 'm'}
            </span>
          </div>
          <div
            className={`button ${pressedKey === 'Comma' ? 'active' : ''}`}
            data-code="Comma"
            data-key=","
            onMouseDown={clickHandler}
            onMouseUp={keyUpHandler}
          >
            <span onMouseDown={(e) => e.stopPropagation()}>,</span>
          </div>
          <div
            className={`button ${pressedKey === 'period' ? 'active' : ''}`}
            data-code="period"
            data-key="."
            onMouseDown={clickHandler}
            onMouseUp={keyUpHandler}
          >
            <span onMouseDown={(e) => e.stopPropagation()}>.</span>
          </div>
          <div
            className={`button ${pressedKey === 'slash' ? 'active' : ''}`}
            data-code="slash"
            data-key="/"
            onMouseDown={clickHandler}
            onMouseUp={keyUpHandler}
          >
            <span onMouseDown={(e) => e.stopPropagation()}>/</span>
          </div>
          <div
            className={`button shift ${
              pressedKey === 'ShiftRight' ? 'active' : ''
            }`}
            data-code="ShiftRight"
            data-key="ShiftRight"
            onMouseDown={clickHandler}
            onMouseUp={keyUpHandler}
          >
            <span onMouseDown={(e) => e.stopPropagation()}>shift</span>
          </div>
        </div>

        <div className="row">
          <div
            className={`button ${pressedKey === 'ControlLeft' ? 'active' : ''}`}
            data-code="ControlLeft"
            data-key="ControlLeft"
            onMouseDown={clickHandler}
            onMouseUp={keyUpHandler}
          >
            <span onMouseDown={(e) => e.stopPropagation()}>ctrl</span>
          </div>
          <div
            className={`button ${pressedKey === 'AltLeft' ? 'active' : ''}`}
            data-code="AltLeft"
            data-key="AltLeft"
            onMouseDown={clickHandler}
            onMouseUp={keyUpHandler}
          >
            <span onMouseDown={(e) => e.stopPropagation()}>alt</span>
          </div>
          <div
            className={`button space ${pressedKey === 'Space' ? 'active' : ''}`}
            data-code="Space"
            data-key="Space"
            onMouseDown={clickHandler}
            onMouseUp={keyUpHandler}
          >
            <span onMouseDown={(e) => e.stopPropagation()} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default LaptopApp;
