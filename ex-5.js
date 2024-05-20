const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(acc,crr) {
  return acc+crr.score / students.length
}
let result = students.reduce(getAverageStudentScore,0)
console.log(result); // Output: 87.5
