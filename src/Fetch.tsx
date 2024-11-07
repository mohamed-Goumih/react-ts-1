import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react';


const Fetch = () => {

    interface Task{
        id: number
        title: string
        completed: boolean
    }

    const [tasks, setTasks] = useState<Task[]>([]);

    //add element in tasks with push
    const addTask = (task: Task) => {
        setTasks([...tasks, task]);
    };
    

    //modify code to show in div number of tasks completed
    const [completedTasks, setCompletedTasks] = useState<number>(0);

    useEffect(() => {
        const completedCount:number = tasks.filter((task) => task.completed).length;
        setCompletedTasks(completedCount);
    }, [tasks]);
    
   useEffect(
    (()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(data => setTasks(data.slice(0, 10)))
   }),[])

  return (
    <>
    <div>Fetching Data</div>

    <div>Number of tasks completed: {completedTasks}</div>

    <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <input type="checkbox" checked={task.completed} 
            //generate code when change checkbox change value of checked in DOM
            onChange={(e) => {
                const newTasks = tasks.map((t) => {
                    if (t.id === task.id) {
                        return { ...t, completed: e.target.checked };
                    }
                    return t;
                });
                setTasks(newTasks);

            }
            }
            />
            {task.title}
          </li>
        ))}
    </ul>
    
    </>
  )
}

export default Fetch