import React, { useState } from 'react';
import './Rewards.css';

const Rewards = () => {
  const [rewardsName, setRewardsName] = useState('');
  const [rewardsDescription, setRewardsDescription] = useState('');
  const [rewards, setRewards] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setName(''); // Clear form on close
    setRewardsDescription('');
  };

  const handleAddRewards = () => {
    if (rewardsName.trim()) {
      setRewards([...rewards, { 
        name: rewardsName, 
        description: rewardsDescription, 
        completed: false, 
        completionTime: null 
      }]);
      closeModal();
    } else {
      alert("Rewards name is required.");
    }
  };

  const handleCheckboxChange = (index) => {
    const updatedRewards = rewards.map((t, i) =>
      i === index
        ? { ...t, completed: !t.completed, completionTime: !t.completed ? new Date().toLocaleString() : null }
        : t
    );
    setRewards(updatedRewards);
  };

  const handleRemoveRewards = (index) => {
    const updatedRewards = rewards.filter((_, i) => i !== index);
    setRewards(updatedRewards);
  };

  return (
    <div>
      <h1>Rewards</h1>
      <button onClick={openModal}>Add Reward</button>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Add a Reward</h2>
            <label>Reward Name: </label>
            <input
              type="text"
              value={rewardsName}
              onChange={(e) => setRewardsName(e.target.value)}
              placeholder="Enter reward name"
              required
            />
            <label>Description:</label>
            <textarea
              value={rewardsDescription}
              onChange={(e) => setRewardsDescription(e.target.value)}
              placeholder="Enter reward description (optional)"
            ></textarea>
            <button onClick={handleAddRewards}>Add Reward</button>
            <button onClick={closeModal}>Cancel</button>
          </div>
        </div>
      )}

      <ul>
        {rewards.map((t, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={t.completed}
              onChange={() => handleCheckboxChange(index)}
            />
            <span style={{ textDecoration: t.completed ? 'line-through' : 'none' }}>
              {t.description && <span> - {t.description}</span>}
            </span>
            {t.completed && <span> (Completed at: {t.completionTime})</span>}
            <button onClick={() => handleRemoveRewards(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Rewards;