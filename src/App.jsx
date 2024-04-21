import './App.css';
import { Link } from 'react-router-dom';
import React from 'react';
import myLaptop from './assets/images/my-laptop.png';
import markdownEditor from './assets/images/markdown-editor.png';

function App() {
  return (
    <main className="challenges">
      <div className="wrapper">
        <div
          className="challenge"
          style={{ backgroundImage: `url(${myLaptop})` }}
        >
          <Link to="/my-laptop">
            <button type="button" className="showChallenge">My Laptop</button>
          </Link>
        </div>
        <div
          className="challenge"
          style={{ backgroundImage: `url(${markdownEditor})` }}
        >
          <Link to="/markdown-editor">
            <button type="button" className="showChallenge">Markdown Editor</button>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default App;
