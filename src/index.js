import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./App";
import "./index.css";
import Laptop from "./projects/laptop/index";
import MarkdownEditor from "./projects/markdown_editor";

export default function App() {
  return (
    // TODO: router doesnt work with gh-pages
    <BrowserRouter>
      <Routes>
        <Route path="/react-js" element={<Layout />} />
        <Route path="/react-js/my-laptop" element={<Laptop />} />
        <Route path="/react-js/markdown-editor" element={<MarkdownEditor />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
