class Task {
    constructor(id, name, description, status = 'pending') {
        this.id = id;
        this.name = name;
        this.description = description;
        this.status = status;
    }
}

const TaskManager = {
    tasks: [],
    index: 0,
    addTask(name, description){
       const newTask = new Task(++this.index, name, description)
       return this.tasks.push(newTask)
    },

    viewAllTasks() {
        if(this.tasks.length === 0){
            console.log("There is no tasks on your to do list")
        }
        for(let i = 0; i< this.tasks.length;i++){
            console.log(`ID: ${this.tasks[i].id} \nName: ${this.tasks[i].name} \nDescription: ${this.tasks[i].description} \nStatus: ${this.tasks[i].status}`)
        }
    },
    
    viewTaskByStatus(){
        const pendingTasks = this.tasks.filter(task => task.status === "pending")
        const completedTasks = this.tasks.filter(task => task.status === "completed")
        
        console.log("\nPending Tasks:")
        if(pendingTasks.length === 0){
            console.log("There is no pending tasks on your to do list")
        }
        for(let i = 0; i< pendingTasks.length;i++){
            console.log(`ID: ${pendingTasks[i].id} \nName: ${pendingTasks[i].name} \nDescription: ${pendingTasks[i].description} \nStatus: ${pendingTasks[i].status}`)
        }
        
        console.log("\nCompleted Tasks:")
        if(completedTasks.length === 0){
            console.log("There is no completed tasks on your to do list")
        }
        for(let i = 0; i< completedTasks.length;i++){
            console.log(`ID: ${completedTasks[i].id} \nName: ${completedTasks[i].name} \nDescription: ${completedTasks[i].description} \nStatus: ${completedTasks[i].status}`)
        }
    },
    
    completeTask(id){
        const task = this.tasks.find(task => task.id === id)
        if(!task){
            console.log(`There is no task with ID: ${id}`)
        }else {
            if (task.status === "completed"){
                console.log(`Task with ID: ${id} is already complete`)
            } else {
                task.status = "completed"
                console.log(`Task ${task.name} marked as completed`)
            }
        }
    }
    
    
}

console.log(TaskManager.addTask("Swimming", "Go to the pool"))
console.log(TaskManager.addTask("Shopping", "Go to the market"))

TaskManager.viewAllTasks()
TaskManager.viewTaskByStatus()
TaskManager.completeTask(2)
TaskManager.viewTaskByStatus()