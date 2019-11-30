// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  let string = "";
  for (let i = 1; i <= n; i++) {
    string += "#".repeat(i);
    string += " ".repeat(n - i);
    console.log(string);
    string = "";
  }
}
// function steps(n, step = 0, str = "") {
//   if (n + 1 === step) return;
//   if (str.length < step) {
//     str += "#";
//   } else {
//     str += " ";
//   }

//   if (str.length === n) {
//     console.log(str);
//     str = "";
//     step++;
//   }
//   return steps(n, step, str);
// }

module.exports = steps;
