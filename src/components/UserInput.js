import React, { Component } from 'react';
import PigLatinGame from './Functions.js';

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
  submitForm = () => {
    debugger;
    if (this.state.chosenGame === 'romanNumerals') {
      alert('roman nums yo');
    } else {
      let result = PigLatinGame.getTranslation(this.state.input);
      this.setState({
        output: result
      });
    }
  };
  changeHandler = e => {
    this.setState({
      input: e.target.value
    });
  };

  render() {
    return (
      <form onSubmit={this.submitForm}>
        <div className="form-group">
          <input
            type="text"
            defaultValue={this.state.input}
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
        <h1>{this.state.output}</h1>
      </form>
    );
  }
}

export default UserInput;
