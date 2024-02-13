import "./index.css";
import modifier from "./modifier";

function Preview({value}) {
    return (
        <div className='preview' dangerouslySetInnerHTML={{__html: modifier(value)}}></div>
    )
}

export default Preview;