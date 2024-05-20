const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];
const averageScore = (acc,curr) => {
  return acc+curr.score
}
function getAverageStudentScore(students) {
  return (students.reduce(averageScore,0))/students.length
}

console.log(getAverageStudentScore(students)); // Output: 87.5
