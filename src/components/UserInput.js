import React, { Component } from 'react';
import PigLatinGame from './Functions.js';

class UserInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenGame: this.props.chosenGame,
      prompt: 'Enter a number',
      input: ''
    };
  }
  submitForm = () => {
    alert(this.state.input + ' is set!');
  };
  changeHandler = e => {
    this.setState({
      input: e.target.value
    });
  };

  render() {
    return (
      <form>
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
        <button
          type="submit"
          className="btn btn-info"
          onClick={this.submitForm}
        >
          Submit
        </button>
      </form>
    );
  }
}

export default UserInput;
