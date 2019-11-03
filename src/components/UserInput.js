import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../node_modules/bootstrap';
import curlyBraces from '../curly-braces-gray.png';

class UserInput extends Component {
  state = {
    chosenGame: null,
    color: 'green',
    prompt: 'Enter a number'
  };
  render() {
    return (
      <div>
        <header className="App-header">
          <img src={curlyBraces} className="App-logo" alt="curly-braces" />
          <p>Pick a project:</p>
          <Link to="/pig-latin" className="App-link">
            Pig Latin Translator
          </Link>
          <Link to="/roman-num" className="App-link">
            Roman Numeral Converter
          </Link>
        </header>
        <form className="main">
          <input type="text" placeholder={this.state.prompt}></input>
          <button type="submit" className="btn btn-info">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default UserInput;
