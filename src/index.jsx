import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './App.jsx';
import './index.css';
import Laptop from './projects/laptop/index.jsx';
import MarkdownEditor from './projects/markdown_editor/index.jsx';
import DiceRolling from './projects/dice_rolling/index.jsx';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/my-laptop" element={<Laptop />} />
        <Route path="/markdown-editor" element={<MarkdownEditor />} />
        <Route path="/dice-rolling" element={<DiceRolling />} />
      </Routes>
    </HashRouter>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
