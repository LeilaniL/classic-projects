import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class PigLatin extends Component {
  state = {};
  render() {
    return (
      <div className="main">
        <h1>Pig Latin Translator</h1>
        <Link to="/" className="App-link">
          Back
        </Link>
      </div>
    );
  }
}

export default PigLatin;

// var vowels = ['a', 'i', 'e', 'o', 'u'];

// function getTranslation(sentence) {
//   var result = [];
//   var wordArray = sentence.split(' ');
//   wordArray.forEach(function(input) {
//     result.push(translateWord(input));
//   });
//   if (!result.join('')) {
//     return 'Nope! Try again Grant!';
//   }
//   return result.join(' ');
// }

// function translateWord(word) {
//   var characterArr = word.toLowerCase().split('');
//   if (vowels.includes(characterArr[0])) {
//     return characterArr.join('') + 'way';
//   } else {
//     var consonants = [];
//     for (var i = 0; i < characterArr.length; i++) {
//       if (characterArr[i] === 'q' && characterArr[i + 1] === 'u') {
//         consonants.push(characterArr[i] + characterArr[i + 1]);
//         //remove 'qu' from array to avoid checking it again in next loop
//         characterArr[i] = null;
//         characterArr[i + 1] = null;
//       }
//       if (!vowels.includes(characterArr[i])) {
//         consonants.push(characterArr[i]);
//       } else {
//         characterArr = characterArr.splice(i);
//         return characterArr.join('') + consonants.join('') + 'ay';
//       }
//     }
//   }
// }
