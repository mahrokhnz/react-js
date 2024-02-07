import "./index.css";
import {useMemo} from "react";

function Preview({value}) {
    const previewText = useMemo(() => {
        let cleanedNode;

        cleanedNode = value.replace(/^(\n\n)(\n$)/g, '<p>')

        return cleanedNode
    }, [value])

    return (
        <div className='preview' dangerouslySetInnerHTML={{__html: previewText}}>

        </div>
    )
}

export default Preview;