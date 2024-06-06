// components/TodoForm.js
"use client";
import React, { useState } from 'react';

const TodoForm = ({ handleAddTask }) => {
  const [task, setTask] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    handleAddTask(task);
    setTask('');
  };

  return (
    <form onSubmit={onSubmit} className="p-4">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="border p-2 w-full text-blue-500"
        placeholder="Add a new task"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 mt-2 w-full">
        Add Task
      </button>
    </form>
  );
};

export default TodoForm;
