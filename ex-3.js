// สมมุติว่าเรามี Function ชื่อ getTodoTopics ทำหน้าที่ในการนำชื่อ Topic ของ Todo ทุกอันออกมาใส่ใน Array อันใหม่ ซึ่งมีคุณสมบัติต่อไปนี้
// มี Parameter 1 อัน คือ Array ของ Todo ชื่อว่า todos
// Function อันนี้จะ Return ตัว Array ของ String ที่เป็นชื่อ Topic ของ Todo
// กำหนดให้ใช้ Built-in Array Function (Array.map) ในการแก้โจทย์ข้อนี้
// เมื่อโปรแกรมทำงานสำเร็จ ควรจะแสดงผลลัพธ์ทางหน้าจอแบบนี้

// 	[
// 		"Doing pre-work",
// 		"Workout",
// 		"Playing computer games",
// 		"Relax",
// 		"Clean the room"
// 	]


const todos = [
  { topic: "Doing pre-work", completed: true },
  { topic: "Workout", completed: false },
  { topic: "Playing computer games", completed: true },
  { topic: "Relax", completed: false },
  { topic: "Clean the room", completed: true },
];

function getTodoTopics(item) {
  return item.topic ;
}

let result = todos.map(getTodoTopics);
console.log(result);

/* 
	Output:
	[
		'Doing pre-work',
		'Workout',
		'Playing computer games',
		'Relax',
		'Clean the room'
	]
*/
