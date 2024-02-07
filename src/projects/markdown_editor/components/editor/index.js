import "./index.css";

function Editor ({text, setText}) {
    function typingHandler(e, value) {
        setText(value)

        localStorage.setItem('markdown-editor', value)
    }

    return (
        <textarea className='editor' name="editor" id="editor" cols="55" rows="10" value={text} onChange={(e) => typingHandler(e, e.target.value)}></textarea>
    )
}

export default Editor;