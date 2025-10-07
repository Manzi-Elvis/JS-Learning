const grades = {
    students: [],

    addStudent(id, name) {
        this.students.push({id,name, scores:[]})
    },
   
    addScores(id, scores) {
        const std = this.students.find(st => st.id === id);
        if(!std) return `Student ${id} is not found`
        std.scores.push(scores)
    },
   
    getAverage(id) {
        const std = this.students.find(st => st.id === id);
        if(!std || std.scores.legth === 0) return 0
        const sum = std.scores.reduce((a, b) => a + b, 0)
        return Math.round((sum / std.scores.length) * 100) / 100
    },
   
    getClassAverage() {
        const all = this.students.flatMap(s => s.scores)
        if (all.length === 0) return 0
        const sum = all.reduce((a, b) => a + b, 0)
        return Math.round((sum /all.length) * 100) / 100
    }
}


grades.addStudent(1,"Elvis")
grades.addStudent(2,"Ornella")


grades.addScores(1,90)
grades.addScores(1,60)
grades.addScores(1,80)


grades.addScores(2,45)
grades.addScores(2,65)
grades.addScores(2,58)


console.log(grades.getAverage(1))
console.log(grades.getAverage(2))

console.log(grades.getClassAverage())
