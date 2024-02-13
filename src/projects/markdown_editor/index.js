import "./index.css";
import {useState} from "react";
import Editor from "./components/editor";
import Preview from "./components/preview";
import Button from "./components/button";

function MarkdownEditor() {
    const initialValue = localStorage.getItem('markdown-editor')
    const [state, setState] = useState('Editor')
    const [editorValue , setEditorValue] = useState(initialValue || '')

    function stateHandler (data) {
        setState(data)
    }

    return (
        <main className='markdownWrapper'>
            <header className='buttonsWrapper'>
                <Button className={`${state === 'Editor' ? 'active' : ''}`} text='Editor' handler={stateHandler} />
                <Button className={`${state === 'Preview' ? 'active' : ''}`} text='Preview' handler={stateHandler} />
            </header>
            {state === 'Editor' ? (
                <Editor value={editorValue} setValue={setEditorValue} />
            ) : (
                <Preview value={editorValue}/>
            )}
        </main>
    )
}

export default MarkdownEditor;