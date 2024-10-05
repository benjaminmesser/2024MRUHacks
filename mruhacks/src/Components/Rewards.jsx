import React, { useState } from 'react';
import './Rewards.css';

const Rewards = () => {
  const [rewardsDescription, setRewardsDescription] = useState('');
  const [rewards, setRewards] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setRewardsDescription('');
  };

  const handleAddRewards = () => {
    if (rewardsDescription.trim()) {
      setRewards([...rewards, { 
        description: rewardsDescription, 
        completed: false, 
        completionTime: null 
      }]);
      closeModal();
    } else {
      alert("Reward is required to add.");
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
      <h3>Rewards</h3>
      <button onClick={openModal}>Add Reward</button>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <label>Reward:</label>
            <textarea
              value={rewardsDescription}
              onChange={(e) => setRewardsDescription(e.target.value)}
              placeholder="Enter the reward"
            ></textarea>
            <button onClick={handleAddRewards}>Add Reward</button>
            <button onClick={closeModal}>Cancel</button>
          </div>
        </div>
      )}

      <ul>
        {rewards.map((t, index) => (
          <li key={index}>
            <div className="reward-box">
              <span style={{ textDecoration: t.completed ? 'line-through' : 'none' }}>
                {t.description && <span> - {t.description}</span>}
              </span>
              <input
                type="checkbox"
                checked={t.completed}
                onChange={() => handleCheckboxChange(index)}
              />
              <button onClick={() => handleRemoveRewards(index)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Rewards;