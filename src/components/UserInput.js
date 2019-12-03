import React, { Component } from 'react';
import { PigLatinGame, RomanNumerals } from './Functions.js';

class UserInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenGame: this.props.chosenGame,
      prompt: 'Enter a number',
      input: '',
      output: ''
    };
  }
  fadeStyleShow = {
    //TODO: fix animation
    // opacity: 1,
    // transition: 'opacity 400ms'
    animation: 'fadein 2s'
  };
  fadeStyleHide = {
    opacity: 0
  };
  submitForm = e => {
    e.preventDefault();
    let result;
    if (this.state.chosenGame === 'romanNumerals') {
      result = RomanNumerals.convertDigit(this.state.input);
    } else {
      result = PigLatinGame.getTranslation(this.state.input);
    }
    this.setState({
      output: result,
      input: ''
    });
  };
  changeHandler = e => {
    this.setState({
      input: e.target.value,
      output: ''
    });
  };

  render() {
    return (
      <form onSubmit={e => this.submitForm(e)}>
        <div className="form-group">
          <input
            required
            type="text"
            pattern={this.state.chosenGame === 'romanNumerals' && '[0-9]{1,4}'}
            title="Numbers from 1 to 3,999"
            value={this.state.input}
            onChange={this.changeHandler}
            placeholder={
              this.state.chosenGame === 'romanNumerals'
                ? 'Enter a number'
                : 'Enter a sentence'
            }
          ></input>
        </div>
        <button type="submit" className="btn btn-info">
          Submit
        </button>
        <h1 style={this.fadeStyleShow}>{this.state.output}</h1>
      </form>
    );
  }
}

export default UserInput;
