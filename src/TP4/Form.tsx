import React, { useState, ChangeEvent } from 'react';

interface Task {
  title: string;
  priority: number;
}

const Form: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [priority, setPriority] = useState<number>(1);

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);
  const handlePriorityChange = (e: ChangeEvent<HTMLInputElement>) => setPriority(parseInt(e.target.value, 10));

  const handleAddTask = () => {
    const newTask: Task = { title, priority };
    console.log("Nouvelle tâche ajoutée :", newTask);
    setTitle('');
    setPriority(1);
  };

  return (
    <div>
      <h1>Ajouter une nouvelle tâche</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>
          Titre :
          <input type="text" value={title} onChange={handleTitleChange} />
        </label>
        <br />
        <label>
          Priorité :
          <input type="number" value={priority} onChange={handlePriorityChange} min="1" max="5" />
        </label>
        <br />
        <button onClick={handleAddTask}>Ajouter</button>
      </form>
    </div>
  );
};

export default Form;
