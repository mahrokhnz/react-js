import './index.css'

function Button({text, handler, className}) {
    function changeHandler(value) {
        if (handler instanceof Function) {
            handler(value)
        }
    }

    return (
        <button className={`stateButton ${className}`} onClick={(e) => changeHandler(e.target.textContent)}>{text}</button>
    )
}

export default Button