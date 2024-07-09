import React from "react";
import './index.css'
import MouseButton from "./components/mouse_button";const validKeys = [
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

// TODO: Make it cleaner

function Keyboard({pressedKey, setPressedKey, onScreenHandler, onUpper}) {
    return (
        <div className="keyboard">
            <div className="row">
                <MouseButton pressedKey={pressedKey} setPressedKey={setPressedKey} onKeyClick={(code, key) => onScreenHandler(code, key)} type='Backquote' value='`' />
                <MouseButton pressedKey={pressedKey} setPressedKey={setPressedKey} onKeyClick={(code, key) => onScreenHandler(code, key)} type='Digit1' value='1' />
                <MouseButton pressedKey={pressedKey} setPressedKey={setPressedKey} onKeyClick={(code, key) => onScreenHandler(code, key)} type='Digit2' value='2' />
                <MouseButton pressedKey={pressedKey} setPressedKey={setPressedKey} onKeyClick={(code, key) => onScreenHandler(code, key)} type='Digit3' value='3' />
                <MouseButton pressedKey={pressedKey} setPressedKey={setPressedKey} onKeyClick={(code, key) => onScreenHandler(code, key)} type='Digit4' value='4' />
                <MouseButton pressedKey={pressedKey} setPressedKey={setPressedKey} onKeyClick={(code, key) => onScreenHandler(code, key)} type='Digit5' value='5' />
                <MouseButton pressedKey={pressedKey} setPressedKey={setPressedKey} onKeyClick={(code, key) => onScreenHandler(code, key)} type='Digit6' value='6' />
                <MouseButton pressedKey={pressedKey} setPressedKey={setPressedKey} onKeyClick={(code, key) => onScreenHandler(code, key)} type='Digit7' value='7' />
                <MouseButton pressedKey={pressedKey} setPressedKey={setPressedKey} onKeyClick={(code, key) => onScreenHandler(code, key)} type='Digit8' value='8' />
                <MouseButton pressedKey={pressedKey} setPressedKey={setPressedKey} onKeyClick={(code, key) => onScreenHandler(code, key)} type='Digit9' value='9' />
                <MouseButton pressedKey={pressedKey} setPressedKey={setPressedKey} onKeyClick={(code, key) => onScreenHandler(code, key)} type='Digit0' value='0' />
                <MouseButton pressedKey={pressedKey} setPressedKey={setPressedKey} onKeyClick={(code, key) => onScreenHandler(code, key)} type='Minus' value='-' />
                <MouseButton pressedKey={pressedKey} setPressedKey={setPressedKey} onKeyClick={(code, key) => onScreenHandler(code, key)} type='Equal' value='=' />
                <MouseButton pressedKey={pressedKey} setPressedKey={setPressedKey} onKeyClick={(code, key) => onScreenHandler(code, key)} type='Backspace' value='backspace' className='backspace'/>
            </div>

            <div className="row">
                <MouseButton pressedKey={pressedKey} setPressedKey={setPressedKey} onKeyClick={(code, key) => onScreenHandler(code, key)} type='Tab' value='tab' className='tab'/>
                <MouseButton pressedKey={pressedKey} setPressedKey={setPressedKey} onKeyClick={(code, key) => onScreenHandler(code, key)} type='KeyQ' value={onUpper ? 'Q' : 'q'}/>
                <MouseButton pressedKey={pressedKey} setPressedKey={setPressedKey} onKeyClick={(code, key) => onScreenHandler(code, key)} type='KeyW' value={onUpper ? 'W' : 'w'}/>
                <MouseButton pressedKey={pressedKey} setPressedKey={setPressedKey} onKeyClick={(code, key) => onScreenHandler(code, key)} type='KeyE' value={onUpper ? 'E' : 'e'}/>
                <MouseButton pressedKey={pressedKey} setPressedKey={setPressedKey} onKeyClick={(code, key) => onScreenHandler(code, key)} type='KeyR' value={onUpper ? 'R' : 'r'}/>
                <MouseButton pressedKey={pressedKey} setPressedKey={setPressedKey} onKeyClick={(code, key) => onScreenHandler(code, key)} type='KeyT' value={onUpper ? 'T' : 't'}/>
                <MouseButton pressedKey={pressedKey} setPressedKey={setPressedKey} onKeyClick={(code, key) => onScreenHandler(code, key)} type='KeyY' value={onUpper ? 'Y' : 'y'}/>
                <MouseButton pressedKey={pressedKey} setPressedKey={setPressedKey} onKeyClick={(code, key) => onScreenHandler(code, key)} type='KeyU' value={onUpper ? 'U' : 'u'}/>
                <MouseButton pressedKey={pressedKey} setPressedKey={setPressedKey} onKeyClick={(code, key) => onScreenHandler(code, key)} type='KeyI' value={onUpper ? 'I' : 'i'}/>
                <MouseButton pressedKey={pressedKey} setPressedKey={setPressedKey} onKeyClick={(code, key) => onScreenHandler(code, key)} type='KeyO' value={onUpper ? 'O' : 'o'}/>
                <MouseButton pressedKey={pressedKey} setPressedKey={setPressedKey} onKeyClick={(code, key) => onScreenHandler(code, key)} type='KeyP' value={onUpper ? 'P' : 'p'}/>
                <MouseButton pressedKey={pressedKey} setPressedKey={setPressedKey} onKeyClick={(code, key) => onScreenHandler(code, key)} type='BracketLeft' value='['/>
                <MouseButton pressedKey={pressedKey} setPressedKey={setPressedKey} onKeyClick={(code, key) => onScreenHandler(code, key)} type='BracketRight' value=']'/>
                <MouseButton pressedKey={pressedKey} setPressedKey={setPressedKey} onKeyClick={(code, key) => onScreenHandler(code, key)} type='Backslash' value='\' className='slash'/>
            </div>

            <div className="row">
                <MouseButton pressedKey={pressedKey} setPressedKey={setPressedKey} onKeyClick={(code, key) => onScreenHandler(code, key)} type='CapsLock' value='caps lock' className='capsLock'>
                    <div className={`light ${onUpper ? 'on' : ''}`} />
                </MouseButton>
                <MouseButton pressedKey={pressedKey} setPressedKey={setPressedKey} onKeyClick={(code, key) => onScreenHandler(code, key)} type='KeyA' value={onUpper ? 'A' : 'a'}/>
                <MouseButton pressedKey={pressedKey} setPressedKey={setPressedKey} onKeyClick={(code, key) => onScreenHandler(code, key)} type='KeyS' value={onUpper ? 'S' : 's'}/>
                <MouseButton pressedKey={pressedKey} setPressedKey={setPressedKey} onKeyClick={(code, key) => onScreenHandler(code, key)} type='KeyD' value={onUpper ? 'D' : 'd'}/>
                <MouseButton pressedKey={pressedKey} setPressedKey={setPressedKey} onKeyClick={(code, key) => onScreenHandler(code, key)} type='KeyF' value={onUpper ? 'F' : 'f'}/>
                <MouseButton pressedKey={pressedKey} setPressedKey={setPressedKey} onKeyClick={(code, key) => onScreenHandler(code, key)} type='KeyG' value={onUpper ? 'G' : 'g'}/>
                <MouseButton pressedKey={pressedKey} setPressedKey={setPressedKey} onKeyClick={(code, key) => onScreenHandler(code, key)} type='KeyH' value={onUpper ? 'H' : 'h'}/>
                <MouseButton pressedKey={pressedKey} setPressedKey={setPressedKey} onKeyClick={(code, key) => onScreenHandler(code, key)} type='KeyJ' value={onUpper ? 'J' : 'j'}/>
                <MouseButton pressedKey={pressedKey} setPressedKey={setPressedKey} onKeyClick={(code, key) => onScreenHandler(code, key)} type='KeyK' value={onUpper ? 'K' : 'k'}/>
                <MouseButton pressedKey={pressedKey} setPressedKey={setPressedKey} onKeyClick={(code, key) => onScreenHandler(code, key)} type='KeyL' value={onUpper ? 'L' : 'l'}/>
                <MouseButton pressedKey={pressedKey} setPressedKey={setPressedKey} onKeyClick={(code, key) => onScreenHandler(code, key)} type='Semicolon' value=';'/>
                <MouseButton pressedKey={pressedKey} setPressedKey={setPressedKey} onKeyClick={(code, key) => onScreenHandler(code, key)} type='Quote' value={`${''}`}/>
                <MouseButton pressedKey={pressedKey} setPressedKey={setPressedKey} onKeyClick={(code, key) => onScreenHandler(code, key)} type='Enter' value='Enter' className='enter'/>
            </div>

            <div className="row">
                <MouseButton pressedKey={pressedKey} setPressedKey={setPressedKey} onKeyClick={(code, key) => onScreenHandler(code, key)} type='ShiftLeft' value='ShiftLeft' className='shift'/>
                <MouseButton pressedKey={pressedKey} setPressedKey={setPressedKey} onKeyClick={(code, key) => onScreenHandler(code, key)} type='KeyZ' value={onUpper ? 'Z' : 'z'}/>
                <MouseButton pressedKey={pressedKey} setPressedKey={setPressedKey} onKeyClick={(code, key) => onScreenHandler(code, key)} type='KeyX' value={onUpper ? 'X' : 'x'}/>
                <MouseButton pressedKey={pressedKey} setPressedKey={setPressedKey} onKeyClick={(code, key) => onScreenHandler(code, key)} type='KeyC' value={onUpper ? 'C' : 'c'}/>
                <MouseButton pressedKey={pressedKey} setPressedKey={setPressedKey} onKeyClick={(code, key) => onScreenHandler(code, key)} type='KeyV' value={onUpper ? 'V' : 'v'}/>
                <MouseButton pressedKey={pressedKey} setPressedKey={setPressedKey} onKeyClick={(code, key) => onScreenHandler(code, key)} type='KeyB' value={onUpper ? 'B' : 'b'}/>
                <MouseButton pressedKey={pressedKey} setPressedKey={setPressedKey} onKeyClick={(code, key) => onScreenHandler(code, key)} type='KeyN' value={onUpper ? 'N' : 'n'}/>
                <MouseButton pressedKey={pressedKey} setPressedKey={setPressedKey} onKeyClick={(code, key) => onScreenHandler(code, key)} type='KeyM' value={onUpper ? 'M' : 'm'}/>
                <MouseButton pressedKey={pressedKey} setPressedKey={setPressedKey} onKeyClick={(code, key) => onScreenHandler(code, key)} type='Comma' value=','/>
                <MouseButton pressedKey={pressedKey} setPressedKey={setPressedKey} onKeyClick={(code, key) => onScreenHandler(code, key)} type='period' value='.'/>
                <MouseButton pressedKey={pressedKey} setPressedKey={setPressedKey} onKeyClick={(code, key) => onScreenHandler(code, key)} type='slash' value='/'/>
                <MouseButton pressedKey={pressedKey} setPressedKey={setPressedKey} onKeyClick={(code, key) => onScreenHandler(code, key)} type='ShiftRight' value='ShiftRight' className='shift'/>
            </div>

            <div className="row">
                <MouseButton pressedKey={pressedKey} setPressedKey={setPressedKey} onKeyClick={(code, key) => onScreenHandler(code, key)} type='ControlLeft' value='ctrl'/>
                <MouseButton pressedKey={pressedKey} setPressedKey={setPressedKey} onKeyClick={(code, key) => onScreenHandler(code, key)} type='AltLeft' value='alt'/>
                <MouseButton pressedKey={pressedKey} setPressedKey={setPressedKey} onKeyClick={(code, key) => onScreenHandler(code, key)} type='Space' value='' className='space'/>
            </div>
        </div>
    )
}

export default Keyboard;