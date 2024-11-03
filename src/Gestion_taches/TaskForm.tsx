import React, { useState, ChangeEvent, useCallback } from 'react';

const TaskForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState(1);

  const handleTitleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }, []);

  const handlePriorityChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setPriority(parseInt(e.target.value, 10));
  }, []);

  const handleSubmit = () => {
    const newTask = { title, priority };
    console.log("Nouvelle tâche ajoutée :", newTask);
    setTitle('');
    setPriority(1);
  };

  return (
    <div>
      <h1>Ajouter une Tâche</h1>
      <input placeholder="Titre" value={title} onChange={handleTitleChange} />
      <input placeholder="Priorité" type="number" value={priority} onChange={handlePriorityChange} min="1" max="5" />
      <button onClick={handleSubmit}>Ajouter</button>
    </div>
  );
};

export default TaskForm;
