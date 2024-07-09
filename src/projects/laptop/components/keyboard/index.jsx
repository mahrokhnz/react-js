import React from "react";
import './index.css'
import MouseButton from "./components/mouse_button";
import {validKeys} from "./keys";

function Keyboard({pressedKey, setPressedKey, onScreenHandler, onUpper}) {
    return (
        <div className="keyboard">
            {validKeys.map((validKeyRows, index) => (
                <div className='row' key={`validKeyRows-${index + 1}`}>
                    {validKeyRows.map((validKeyRow) => {
                        return (
                            <MouseButton key={validKeyRow.type} pressedKey={pressedKey} setPressedKey={setPressedKey} onKeyClick={(code, key) => onScreenHandler(code, key)} type={validKeyRow.type} value={validKeyRow.value} isUpper={onUpper} className={validKeyRow.class}>
                                {validKeyRow.type === 'CapsLock' && (
                                    <div className={`light ${onUpper ? 'on' : ''}`} onClick={(e) => e.stopPropagation()} />
                                )}
                            </MouseButton>
                        )
                    })}
                </div>
            ))}
        </div>
    )
}

export default Keyboard;