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

