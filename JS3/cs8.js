// Our tasks array
let tasks = [
  {
    id: 1,
    description: "Learn JavaScript",
    isCompleted: false
  },
  {
    id: 2,
    description: "Build a project",
    isCompleted: true
  }
];

// Function to find a task by id
function findTaskById(taskId) {
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].id === taskId) {
      return tasks[i]; // return the task object if found
    }
  }
  return null; // if no task matches the id
}

// Testing
console.log(findTaskById(1)); 
// { id: 1, description: "Learn JavaScript", isCompleted: false }

console.log(findTaskById(3)); 
// null
