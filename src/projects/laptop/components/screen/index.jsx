import React from "react";
import './index.css'

function Screen({screenValue}) {
    return (
        <div className="screenWrapper">
            <textarea className="screen" value={screenValue} readOnly />
        </div>
    )
}

export default Screen;