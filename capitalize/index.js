// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  var capitalized = [];
  str.split(" ").map(el => {
    var word = "";
    for (i = 0; i < el.length; i++) {
      if (i === 0) {
        word += el[i].toUpperCase();
      } else {
        word += el[i];
      }
    }
    return capitalized.push(word);
  });
  return capitalized.join(" ");
}

module.exports = capitalize;

function capitalize(str) {
  return str
    .split(" ")
    .map(el => el[0].toUpperCase() + el.slice(1))
    .join(" ");
}
