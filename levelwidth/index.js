// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  const arr = [root, "stop"];
  let levelWidth = [0];

  while (arr.length > 1) {
    let node = arr.shift();
    if (node === "stop") {
      levelWidth.push(0);
      arr.push("stop");
    } else {
      arr.push(...node.children);
      levelWidth[levelWidth.length - 1]++;
    }
  }
  return levelWidth;
}

module.exports = levelWidth;
