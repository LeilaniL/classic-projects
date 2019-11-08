import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import curlyBraces from '../curly-braces-gray.png';

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="App-header">
        <img src={curlyBraces} className="App-logo" alt="curly-braces" />
        <p>Pick a project:</p>
        <Link to="/pig-latin" className="App-link">
          Pig Latin Translator
        </Link>
        <Link to="/roman-num" className="App-link">
          Roman Numeral Converter
        </Link>
      </div>
    );
  }
}

export default Home;
