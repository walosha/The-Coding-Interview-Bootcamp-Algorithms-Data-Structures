// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  var chucked = [];
  array.forEach(el => {
    if (chucked.length == 0) {
      return chucked.push([el]);
    } else if (chucked[chucked["length"] - 1].length < size) {
      chucked[chucked["length"] - 1].push(el);
    } else {
      chucked.push([el]);
    }
  });
  return chucked;
}

module.exports = chunk;
