
"use client";
import React from 'react';

const TodoItem = ({ task, handleToggleTask, handleDeleteTask }) => {
  return (
    <div className="flex justify-between items-center p-2 border-b">
      <span
        onClick={() => handleToggleTask(task.id)}
        className={`cursor-pointer text-blue-500 ${task.completed ? 'line-through' : ''}`}
      >
        {task.name}
      </span>
      <button
        onClick={() => handleDeleteTask(task.id)}
        className="bg-red-500 text-white p-2"
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
