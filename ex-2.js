// สมมุติว่าเรามี Function ชื่อ get5CharWords ทำหน้าที่ในการเลือกเฉพาะคำศัพท์ที่มีตัวอักษร 5 ตัวขึ้นไป ซึ่งมีคุณสมบัติต่อไปนี้
// มี Parameter 1 อัน คือ Array ของข้อความ ชื่อว่า words
// Function อันนี้จะ Return ตัว Array ของ Value ที่มีความยาวตัวอักษร 5 ตัวขึ้นไป
// กำหนดให้ใช้ Built-in Array Function (Array.filter) ในการแก้โจทย์ข้อนี้
// เมื่อโปรแกรมทำงานสำเร็จ ควรจะแสดงผลลัพธ์ทางหน้าจอแบบนี

// ["apple", "elephant"]

let words = ["apple", "cat", "dog", "elephant"];

function get5CharWords(word) {
  return word.length >= 5 ;
}

const result = words.filter(get5CharWords);
console.log(result); // Output: ["apple", "elephant"]
