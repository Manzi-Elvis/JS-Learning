let studentGrades = {
  math: 90,
  science: 85,
  history: 78
};
for (let subject in studentGrades) {
  console.log(subject + ": " + studentGrades[subject]);
}