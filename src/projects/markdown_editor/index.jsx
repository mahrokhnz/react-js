import './index.css';
import React, { useState } from 'react';
import Editor from './components/editor/index.jsx';
import Preview from './components/preview/index.jsx';
import Button from './components/button/index.jsx';

function MarkdownEditor() {
  const initialValue = localStorage.getItem('markdown-editor');
  const [state, setState] = useState('Editor');
  const [editorValue, setEditorValue] = useState(initialValue || '');

  function stateHandler(data) {
    setState(data);
  }

  return (
    <main className="markdownWrapper">
      <header className="buttonsWrapper">
        <Button className={`${state === 'Editor' ? 'active' : ''}`} text="Editor" handler={stateHandler} />
        <Button className={`${state === 'Preview' ? 'active' : ''}`} text="Preview" handler={stateHandler} />
      </header>
      {state === 'Editor' ? (
        <Editor value={editorValue} setValue={setEditorValue} />
      ) : (
        <Preview value={editorValue} />
      )}
    </main>
  );
}

export default MarkdownEditor;
