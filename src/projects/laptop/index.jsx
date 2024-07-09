import './index.css';
import React, {useEffect, useMemo, useState} from 'react';
import Screen from "./components/screen";
import Keyboard from "./components/keyboard";

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

  useEffect(() => {
    const screenValueStorage = {
      upperCase: onUpper,
      value: screenValue
    }

    localStorage.setItem('screen_value', JSON.stringify(screenValueStorage));
  }, [onUpper, screenValue]);

  useMemo(() => {
    const screenValueStorage = JSON.parse(localStorage.getItem('screen_value'))

    if (screenValueStorage) {
      setOnUpper(screenValueStorage.upperCase);
      setScreenValue(screenValueStorage.value);
    }
  }, []);

  return (
    <main className="laptop">
      <Screen screenValue={screenValue} />

      <Keyboard pressedKey={pressedKey} setPressedKey={setPressedKey} onScreenHandler={screenHandler} onUpper={onUpper} />
    </main>
  );
}

export default LaptopApp;