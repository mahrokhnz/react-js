import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Laptop from "./projects/laptop/index";
import Layout from "./App";
import "./index.css";

export default function App() {
  return (
    // TODO: router doesnt work with gh-pages
    <BrowserRouter>
      <Routes>
        <Route path="/react-js" element={<Layout />} />
        <Route path="/react-js/my-laptop" element={<Laptop />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
