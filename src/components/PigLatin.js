import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../node_modules/bootstrap';
import '../App.css';
import UserInput from './UserInput.js';

const PigLatin = () => {
  return (
    <div className="main purple">
      <h1>Pig Latin Translator</h1>
      <UserInput chosenGame="pigLatin" />
      <Link to="/" className="App-link">
        Back
      </Link>
    </div>
  );
};

export default PigLatin;
