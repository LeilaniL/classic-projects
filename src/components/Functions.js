class PigLatinGame {
  static vowels = ['a', 'i', 'e', 'o', 'u'];

  static getTranslation = sentence => {
    let result = [];
    let wordArray = sentence.split(' ');
    wordArray.forEach(input => {
      result.push(this.translateWord(input));
    });
    if (!result.join('')) {
      return 'Nope! Try again Grant!';
    }
    return result.join(' ');
  };

  static translateWord = word => {
    let characterArr = word.toLowerCase().split('');
    if (this.vowels.includes(characterArr[0])) {
      return characterArr.join('') + 'way';
    } else {
      let consonants = [];
      for (let i = 0; i < characterArr.length; i++) {
        if (characterArr[i] === 'q' && characterArr[i + 1] === 'u') {
          consonants.push(characterArr[i] + characterArr[i + 1]);
          //remove 'qu' from array to avoid checking it again in next loop
          characterArr[i] = null;
          characterArr[i + 1] = null;
        }
        if (!this.vowels.includes(characterArr[i])) {
          consonants.push(characterArr[i]);
        } else {
          characterArr = characterArr.splice(i);
          return characterArr.join('') + consonants.join('') + 'ay';
        }
      }
    }
  };
}

class RomanNumerals {
  static values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  static romanNums = [
    'M',
    'CM',
    'D',
    'CD',
    'C',
    'XC',
    'L',
    'XL',
    'X',
    'IX',
    'V',
    'IV',
    'I'
  ];

  static convertDigit = num => {
    let result = [];
    let remainder = 1;
    let loopToCompareVals = num => {
      let i = 0;
      while (num < this.values[i]) {
        i++;
      }
      let numOfLetters = Math.floor(num / this.values[i]);
      remainder = num % this.values[i];
      for (let j = 1; j <= numOfLetters; j++) {
        result.push(this.romanNums[i]);
      }
      if (remainder === 0) {
        return result;
      } else {
        loopToCompareVals(remainder);
      }
    };
    loopToCompareVals(num);
    return result.join('');
  };
}

export { PigLatinGame, RomanNumerals };
