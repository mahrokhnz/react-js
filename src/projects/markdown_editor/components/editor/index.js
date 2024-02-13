import "./index.css";

function Editor ({value, setValue}) {
    function typingHandler(data) {
        setValue(data)

        localStorage.setItem('markdown-editor', data)
    }

    return (
        <textarea className='editor' name="editor" cols="55" value={value} onChange={(e) => typingHandler(e.target.value)}></textarea>
    )
}

export default Editor;