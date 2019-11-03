import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class RomanNum extends Component {
  state = {};
  render() {
    return (
      <div className="main orange">
        <h1>Roman Numeral Converter</h1>
        <Link to="/" className="App-link">
          Back
        </Link>
      </div>
    );
  }
}

export default RomanNum;
