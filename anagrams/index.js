// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  var stringA = stringA.replace(/[^\w]/g, "").toLowerCase();
  var stringB = stringB.replace(/[^\w]/g, "").toLowerCase();

  var CharMapA = {};
  var CharMapB = {};

  for (char of stringA) {
    if (!CharMapA[char]) {
      CharMapA[char] = 1;
    } else {
      CharMapA[char]++;
    }
  }

  for (char of stringB) {
    if (!CharMapB[char]) {
      CharMapB[char] = 1;
    } else {
      CharMapB[char]++;
    }
  }

  if (Object.keys(CharMapA).length !== Object.keys(CharMapB).length) {
    return false;
  }

  for (char in CharMapA) {
    if (CharMapA[char] !== CharMapB[char]) {
      return false;
    }
  }
  return true;
}

module.exports = anagrams;
