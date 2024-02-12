import './index.css'

function Button({state, handler, className}) {
    return (
        <button className={`stateButton ${className}`} onClick={(e) => handler(e.target.textContent)}>{state.charAt(0).toUpperCase() + state.slice(1)}</button>
    )
}

export default Button