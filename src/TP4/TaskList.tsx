import React, { useEffect, useState } from 'react';

interface Task {
  id: number;
  title: string;
  completed: boolean;
  priority: number;
}

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => {
        const tasksWithPriority = data.map((task: Task) => ({
          ...task,
          priority: Math.floor(Math.random() * 5) + 1, // Priorité entre 1 et 5
        }));
        setTasks(tasksWithPriority);
      })
      .catch(error => console.error("Erreur de chargement des tâches :", error));
  }, []);

  return (
    <div>
      <h1>Liste des Tâches</h1>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <input type="checkbox" checked={task.completed} readOnly />
            {task.title} - Priorité : {task.priority}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
