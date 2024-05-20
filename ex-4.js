// จาก Exercise ข้อที่แล้ว บริษัทต้องการสร้างฟังก์ชันให้กับแอพลิเคชัน To-Do เพิ่มเติม
// ฟังก์ชันตัวนี้จะต้องสามารถกรองเฉพาะชื่อรายการ Todo ที่มีสถานะเป็น true
// ให้เขียนโปรแกรมที่สามารถกรองเฉพาะชื่อราย Todo ที่มีสถานะเป็น true
// เมื่อโปรแกรมทำงานสำเร็จ จะแสดงผลลัพธ์ทางหน้าจอแบบนี้


// [
// 		{ topic: "Doing pre-work", completed: true },
// 	  { topic: "Playing computer games", completed: true },
// 	  { topic: "Clean the room", completed: true }
// ]


const todos = [
  { topic: "Doing pre-work", completed: true },
  { topic: "Workout", completed: false },
  { topic: "Playing computer games", completed: true },
  { topic: "Relax", completed: false },
  { topic: "Clean the room", completed: true },
];

function getCompletedTodo(item) {
  return item.topic && item.completed == true ;
}

let result = todos.filter(getCompletedTodo);
console.log(result);

/* 
	Output:
	[
		{ topic: 'Doing pre-work', completed: true },
	  { topic: 'Playing computer games', completed: true },
	  { topic: 'Clean the room', completed: true }
	]
*/
