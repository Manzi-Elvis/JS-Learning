const studentList = document.getElementById('studentList');
const btn = document.querySelector('button');
const studentForm = document.getElementById('studentForm');
const name = document.getElementById('name');
const age = document.getElementById('age');
const grade = document.getElementById('grade');
const students = [];
const saveToLocalStorage = () => {
      localStorage.setItem('students', JSON.stringify(students));
}
const loadFromLocalStorage = () => {
      const data = JSON.parse(localStorage.getItem('students'));
      if (data) {
            data.forEach(student => {
                  const li = document.createElement('li');
                  li.innerHTML = `Name: ${student.name} Age: ${student.age} Grade: ${student.grade}`;
                  studentList.appendChild(li);
                  students.push(student);
            });
      }
}
studentForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const student = {
            name: name.value,
            age: age.value,
            grade: grade.value
      };
      students.push(student);
      const li = document.createElement('li');
      li.innerHTML = `Name: ${student.name} Age: ${student.age} Grade: ${student.grade}`;
      studentList.appendChild(li);
      name.value = '';
      age.value = '';
      grade.value = '';
      saveToLocalStorage(); 
});
window.onload = loadFromLocalStorage;