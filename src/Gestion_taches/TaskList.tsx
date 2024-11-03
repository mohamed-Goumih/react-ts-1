import React, { useEffect, useState } from 'react';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => setTasks(data.slice(0, 10))); // Limiter à 10 tâches
  }, []);

  return (
    <div>
      <h1>Liste des Tâches</h1>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <input type="checkbox" checked={task.completed} readOnly />
            {task.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
