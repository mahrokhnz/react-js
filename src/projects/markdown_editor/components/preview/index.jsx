import './index.css';
import React from 'react';
import modifier from './editor_modifier/modifier.jsx';

function Preview({ value }) {
  return (
  // eslint-disable-next-line react/no-danger
    <div className="preview" dangerouslySetInnerHTML={{ __html: modifier(value) }} />
  );
}

export default Preview;
