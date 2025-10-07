const students = [
  { name: "Alice", grade: "A" },
  { name: "Bob", grade: "B" },
  { name: "Charlie", grade: "A" },
  { name: "David", grade: "C" },
  { name: "Eve", grade: "B" }
];
function groupBy(array, property) {
  let result = [];
  for(let i = 0; i<array.length; i++){
      let key = arr[i][property]
      if(!result[key]){
            result[key] = [];
      }
      
  }
}
const groupedStudents = groupBy(students, "grade");
console.log(groupedStudents);