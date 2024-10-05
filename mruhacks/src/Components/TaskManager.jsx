import React, { useState } from 'react';

const TaskManager = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { text: task, completed: false, completionTime: null }]);
      setTask('');
    }
  };

  const handleCheckboxChange = (index) => {
    const updatedTasks = tasks.map((t, i) =>
      i === index
        ? { ...t, completed: !t.completed, completionTime: !t.completed ? new Date().toLocaleString() : null }
        : t
    );
    setTasks(updatedTasks);
  };

  const handleRemoveTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <input
        type="text"
        value={task}
        onChange={handleInputChange}
        placeholder="Enter a task"
      />
      <button onClick={handleAddTask}>Add Task</button>

      <ul>
        {tasks.map((t, index) => (
          <li key={index}>
            <span style={{ textDecoration: t.completed ? 'line-through' : 'none' }}>
              {t.text}
            </span>
            <input
              type="checkbox"
              checked={t.completed}
              onChange={() => handleCheckboxChange(index)}
            />
            <button onClick={() => handleRemoveTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;