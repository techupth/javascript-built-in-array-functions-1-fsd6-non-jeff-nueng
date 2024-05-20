const todos = [
  { topic: "Doing pre-work", completed: true },
  { topic: "Workout", completed: false },
  { topic: "Playing computer games", completed: true },
  { topic: "Relax", completed: false },
  { topic: "Clean the room", completed: true },
];
//solution 1
function getCompletedTodo(todos) {
  return todos.filter(todos => todos.completed !==false)
}

console.log(getCompletedTodo(todos))

//solution 2
// function getCompletedTodo(todos){
//   return todos.completed === true
// }
// let result = todos.filter(getCompletedTodo)
// console.log(result);


//solution 3
// let result =todos.filter(todos => 
//    todos.completed)
// console.log(result)



/* 
	Output:
	[
		{ topic: 'Doing pre-work', completed: true },
	  { topic: 'Playing computer games', completed: true },
	  { topic: 'Clean the room', completed: true }
	]
*/
