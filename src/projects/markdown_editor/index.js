import "./index.css";
import {useState} from "react";
import Editor from "./components/editor";
import Preview from "./components/preview";
import Button from "./components/button";

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
                <Button className={`${state === 'editor' ? 'active' : ''}`} state='editor' handler={clickStateButtonHandler} />
                <Button className={`${state === 'preview' ? 'active' : ''}`} state='preview' handler={clickStateButtonHandler} />
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