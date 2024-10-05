import React, { useState } from 'react';
import './TaskManager.css';

const TaskManager = () => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDifficulty, setTaskDifficulty] = useState('easy');
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTaskName(''); // Clear form on close
    setTaskDescription('');
    setTaskDifficulty('easy');
  };

  const handleAddTask = () => {
    if (taskName.trim()) {
      setTasks([...tasks, { 
        name: taskName, 
        description: taskDescription, 
        difficulty: taskDifficulty, 
        completed: false, 
        completionTime: null 
      }]);
      closeModal();
    } else {
      alert("Task name is required.");
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
      <button onClick={openModal}>Add Task</button>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Add a Task</h2>
            <label>Task Name: </label>
            <input
              type="text"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              placeholder="Enter task name"
              required
            />
            <label>Description:</label>
            <textarea
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              placeholder="Enter task description (optional)"
            ></textarea>
            <label>Difficulty:</label>
            <div>
              <label>
                <input
                  type="radio"
                  value="easy"
                  checked={taskDifficulty === 'easy'}
                  onChange={() => setTaskDifficulty('easy')}
                />
                Easy
              </label>
              <label>
                <input
                  type="radio"
                  value="medium"
                  checked={taskDifficulty === 'medium'}
                  onChange={() => setTaskDifficulty('medium')}
                />
                Medium
              </label>
              <label>
                <input
                  type="radio"
                  value="hard"
                  checked={taskDifficulty === 'hard'}
                  onChange={() => setTaskDifficulty('hard')}
                />
                Hard
              </label>
            </div>
            <button onClick={handleAddTask}>Add Task</button>
            <button onClick={closeModal}>Cancel</button>
          </div>
        </div>
      )}

      <ul>
        {tasks.map((t, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={t.completed}
              onChange={() => handleCheckboxChange(index)}
            />
            <span style={{ textDecoration: t.completed ? 'line-through' : 'none' }}>
              {t.name} (Difficulty: {t.difficulty})
              {t.description && <span> - {t.description}</span>}
            </span>
            {t.completed && <span> (Completed at: {t.completionTime})</span>}
            <button onClick={() => handleRemoveTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;