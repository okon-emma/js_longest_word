// Given a sentence of x amount of words, write a function which will return the
// longest word and the index of the longest word in that sentence.

let sentence = prompt('Type in the Sentence');

function longestWord(sentence) {
    newSentence = sentence.split(' ');

    let m = 0
    let lgWord = '';

    for (i in newSentence) {
        let word = newSentence[i];
        let wordSize = word.length;
        if (wordSize > m) {
            m = wordSize;
            lgWord = word;
        }
    }

    let pos = newSentence.indexOf(lgWord);
    return [lgWord, pos];
}

let result = longestWord(sentence);
alert('The longest word is "' + result[0] + '" at an index of ' + result[1]);
