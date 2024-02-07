import "./index.css";
import {useRef, useState} from "react";
import Editor from "./components/editor";
import Preview from "./components/preview";

function MarkdownEditor() {
    const initialValue = localStorage.getItem('markdown-editor')
    const [state, setState] = useState('editor')
    const [editorValue , setEditorValue] = useState(initialValue || '')

    function clickStateButtonHandler (data) {
        setState(data.toLowerCase())
    }

    return (
        <main className='markdownWrapper'>
            <header className='buttonsWrapper'>
                <button className={`${state === 'editor' ? 'active' : ''} stateButton`} onClick={(e) => clickStateButtonHandler(e.target.textContent)}>Editor</button>
                <button className={`${state === 'preview' ? 'active' : ''} stateButton`} onClick={(e) => clickStateButtonHandler(e.target.textContent)}>Preview</button>
            </header>
            {state === 'editor' ? (
                <Editor text={editorValue} setText={setEditorValue} />
            ) : (
                <Preview value={editorValue}/>
            )}
        </main>
    )
}

export default MarkdownEditor;

//TODO: local storage