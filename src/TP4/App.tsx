import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import TaskList from './TaskList';
import Form from './Form';
import Contact from './Contact';
import NoPage from './NoPage';

const App: React.FC = () => {
  return (
    <Router>
      <Layout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/taches" element={<TaskList />} />
        <Route path="/ajoutertache" element={<Form />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
  );
};

export default App;
