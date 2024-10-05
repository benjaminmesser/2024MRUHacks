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
    <div className="container mt-4">
      <h1 className="mb-4">Tasks</h1>
      <div className="input-group mb-3" style={{ maxWidth: '400px', margin: '0 auto' }}>
        <input
          type="text"
          className="form-control"
          value={task}
          onChange={handleInputChange}
          placeholder="Enter a task"
        />
        <button className="btn btn-primary" onClick={handleAddTask}>Add Task</button>
      </div>

      <ul className="list-group">
        {tasks.map((t, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                checked={t.completed}
                onChange={() => handleCheckboxChange(index)}
              />
              <label className="form-check-label" style={{ textDecoration: t.completed ? 'line-through' : 'none' }}>
                {t.text}
              </label>
            </div>
            <button className="btn btn-danger btn-sm" onClick={() => handleRemoveTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;