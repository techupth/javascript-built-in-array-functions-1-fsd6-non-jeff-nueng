// สมมุติว่าเรามี Function ชื่อ getWordLengths ทำหน้าที่ในการนับจำนวนตัวอักษรของคำภาษาอังกฤษ ซึ่งมีคุณสมบัติต่อไปนี้
// มี Parameter 1 อัน คือ Array ของข้อความ ชื่อว่า words
// Function อันนี้จะ Return ตัว Array ที่มี Value แต่ละอันเป็นจำนวนตัวอักษรของ Value นั้นๆ
// กำหนดให้ใช้ Built-in Array Function (Array.map) ในการแก้โจทย์ข้อนี้
// เมื่อโปรแกรมทำงานสำเร็จ ควรจะแสดงผลลัพธ์ทางหน้าจอแบบนี้

// [5, 5]


let words = ["hello", "world"];

function getWordLengths(word) {
  return  word.length;
}

const result = words.map(getWordLengths);
console.log(result); // Output: [5, 5]
