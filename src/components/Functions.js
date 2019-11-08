export default class PigLatinGame {
  vowels = ['a', 'i', 'e', 'o', 'u'];

  getTranslation(sentence) {
    let result = [];
    let wordArray = sentence.split(' ');
    wordArray.forEach(function(input) {
      result.push(this.translateWord(input));
    });
    if (!result.join('')) {
      return 'Nope! Try again Grant!';
    }
    return result.join(' ');
  }

  translateWord(word) {
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
  }
}
