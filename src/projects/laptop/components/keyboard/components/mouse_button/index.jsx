import React from "react";
import './index.css'

function MouseButton({pressedKey, setPressedKey, onKeyClick, type, value, className='', children= ''}) {
    const keyDownHandler = (e) => {
        e.stopPropagation();
        e.preventDefault();

        const code = e.target.getAttribute('data-code');
        const key = e.target.getAttribute('data-key');

        setPressedKey(code);

        if (onKeyClick instanceof Function) {
            onKeyClick(code, key)
        }
    };

    const keyUpHandler = () => {
        setPressedKey('');
    };

    return (
        <div
            className={`button ${pressedKey === type ? 'active' : ''} ${className}`}
            data-code={type}
            data-key={value}
            onMouseDown={keyDownHandler}
            onMouseUp={keyUpHandler}
        >
            {children}
            <span onMouseDown={(e) => e.stopPropagation()}>{value}</span>
        </div>
    )
}

export default MouseButton;