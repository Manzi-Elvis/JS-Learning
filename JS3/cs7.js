// Create an array of task objects
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

// Log the description of the first task using dot notation
console.log(tasks[0].description);  // "Learn JavaScript"

// Log the description of the first task using bracket notation
console.log(tasks[0]["description"]); // "Learn JavaScript"
