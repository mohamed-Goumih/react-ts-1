import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Acceuil from './Acceuil';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import Counter from './Counter';
import FocusInput from './FocusInput';

const Home: React.FC = () => {
  return (
    <Router>
      <Layout />
      <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="/tasks" element={<TaskList />} />
        <Route path="/addtask" element={<TaskForm />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/focus" element={<FocusInput />} />
      </Routes>
    </Router>
  );
};

export default Home;
