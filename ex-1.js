let words = ["hello", "world"];

function getWordLengths(words) {
  return words.map(words => words.length)
}

const result = getWordLengths(words)
console.log(result); // Output: [5, 5]
