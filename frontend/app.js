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
    },
    {
    id: 4,
    title: "Kazakh Language",
    description: "Write an essay on the topic of 'My Country'" ,
    degree: "CSS", 
    deadline: "2026-11-09",
    category: homework,
    completed: false,
    },
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
        return arr.filter(task => task.completed === completed);
    }

function calculateProgress(arr) {
    const allTasks = arr.length;
    const completedTasks = filterTaskByCompletion(arr, true).length

    if(allTasks === 0) {
        return 0;
    }
    const progress = (completedTasks / allTasks) * 100;
    return progress;
}

function addNewTask(title, description, degree, deadline, category) {
    const newTask = {
        id: tasks.length + 1,
        title: title,
        description: description,
        degree: degree,
        deadline: deadline,
        category: category,
        completed: false
    };
    tasks.push(newTask);
    }

