
"use client";
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (taskName) => {
    const newTask = {
      id: Date.now(),
      name: taskName,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const handleToggleTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div>
      <Header />
      <TodoForm handleAddTask={handleAddTask} />
      <TodoList
        tasks={tasks}
        handleToggleTask={handleToggleTask}
        handleDeleteTask={handleDeleteTask}
      />
    </div>
  );
};

export default App;
