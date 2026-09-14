const homework = "Homework";
const exam = "Exam";

const tasks = [
{
    id: 1,
    title: "Calculus 1",
    description: "Complete Assignment 2" ,
    degree: "SCSM", 
    deadline: "2026-11-09",
    category: homework,
    completed: false,

    },
    {
        id: 2,
        title: "Physics 2",
        description: "Complete Assignment 3 in Notebook" ,
        degree: "SCSM",
        deadline: "2026-11-09",
        category: homework,
        completed: false,
    }, 
    {
        id: 3,
        title: "Physics 2",
        description: "Complete Assignment 3 in Notebook" ,
        degree: "SCSM",
        deadline: "2026-11-09",
        category: exam,
        completed: false,
    }
]

function searchTasks(arr, id) {
    if(Object.keys(arr).length === 0) {
        return id;
    } else {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].id === id) {
                return arr[i];
            }
        }
    }
}

function completeTask(arr, id) {
    const task = searchTasks(arr, id);
        if (task) {
        task.completed = !task.completed;
    }
}

function filterTaskByCategory(arr, category) {
    return arr.filter(task => task.category === category);
}

function filterTaskByCompletion(arr, completed) {
    if(task.completed === completed) {
        return arr.filter(task => task.completed === completed);
    }
    }
