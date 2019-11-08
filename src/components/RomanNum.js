import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import UserInput from './UserInput';

const RomanNum = props => {
  return (
    <div className="main orange">
      <h1>Roman Numeral Converter</h1>
      <UserInput chosenGame="romanNumerals" />
      <Link to="/" className="App-link">
        Back
      </Link>
    </div>
  );
};

export default RomanNum;
