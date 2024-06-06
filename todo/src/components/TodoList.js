
"use client";
import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ tasks, handleToggleTask, handleDeleteTask }) => {
  return (
    <div className="p-4">
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          handleToggleTask={handleToggleTask}
          handleDeleteTask={handleDeleteTask}
        />
      ))}
    </div>
  );
};

export default TodoList;
