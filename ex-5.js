// สมมุติว่าเรามี Function ชื่อ getAverageStudentScore ทำหน้าที่ในการหาค่าเฉลี่ยของคะแนนนักเรียน ณ โรงเรียนแห่งหนึ่ง ซึ่งมีคุณสมบัติต่อไปนี้
// มี Parameter 1 อัน คือ Array ของ Object ข้อมูลนักเรียน ชื่อว่า students
// Function อันนี้จะ Return ค่าเฉลี่ยของคะแนนนักเรียน
// กำหนดให้ใช้ Built-in Array Function (Array.reduce) ในการแก้โจทย์ข้อนี้
// เมื่อโปรแกรมทำงานสำเร็จ ควรจะแสดงผลลัพธ์ทางหน้าจอแบบนี้

// 87.5

const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(acc, avgScore) {
  return acc + avgScore.score ; 
}

let averageScore = (students.reduce(getAverageStudentScore, 0))/students.length ;
console.log(averageScore);
