import React from 'react';
import curlyBraces from './curly-braces-gray.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={curlyBraces} className="App-logo" alt="curly-braces" />
        <p>Pick a project:</p>
      </header>
    </div>
  );
}

export default App;
