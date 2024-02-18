import './index.css';
import React from 'react';

function Editor({ value, setValue }) {
  function typingHandler(data) {
    setValue(data);

    localStorage.setItem('markdown-editor', data);
  }

  return (
    <textarea className="editor" name="editor" cols="55" value={value} onChange={(e) => typingHandler(e.target.value)} />
  );
}

export default Editor;
