let students = [
  {
    name: "Elvis",
    scores: { math: 90, science: 85, history: 78 }
  },
  {
    name: "Aline",
    scores: { math: 70, science: 88, history: 82 }
  },
  {
    name: "Seth",
    scores: { math: 95, science: 92, history: 89 }
  }
];
function calculateAverages(students) {
  students.forEach(student => {
    let scores = student.scores;
    let total = 0;
    let count = 0;
    for (let subject in scores) {
      total += scores[subject];
      count++;
    }
    let average = total / count;
    console.log(`${student.name}'s average score: ${average.toFixed(2)}`);
  });
}
calculateAverages(students);