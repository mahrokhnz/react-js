import './App.css';
import { Link } from 'react-router-dom';
import React from 'react';
import myLaptop from './assets/my-laptop.png';
import markdownEditor from './assets/markdown-editor.png';

function App() {
  return (
    <main className="challenges">
      <div className="wrapper">
        <div
          className="challenge"
          style={{ backgroundImage: `url(${myLaptop})` }}
        >
          <Link to="/react-js/my-laptop">
            <button type="button" className="showChallenge">My Laptop</button>
          </Link>
        </div>
        <div
          className="challenge"
          style={{ backgroundImage: `url(${markdownEditor})` }}
        >
          <Link to="/react-js/markdown-editor">
            <button type="button" className="showChallenge">Markdown Editor</button>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default App;
