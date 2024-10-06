import React, { useState } from 'react';
import './Rewards.css';
import RewardItem from './RewardItem';

const Rewards = () => {
  const [rewardsDescription, setRewardsDescription] = useState('');
  const [rewards, setRewards] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editIndex, setEditIndex] = useState(null); // New state for tracking edit index

  const openModal = (index = null) => {
    setIsModalOpen(true);
    if (index !== null) {
      // If editing, populate the modal with existing reward's description
      setRewardsDescription(rewards[index].description);
      setEditIndex(index); // Set the index being edited
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setRewardsDescription('');
    setEditIndex(null); // Clear edit index on close
  };

  const handleAddRewards = () => {
    if (rewardsDescription.trim()) {
      if (editIndex !== null) {
        // If editing, update the reward at the specific index
        const updatedRewards = rewards.map((t, i) =>
          i === editIndex ? { ...t, description: rewardsDescription } : t
        );
        setRewards(updatedRewards);
      } else {
        // If not editing, add a new reward
        setRewards([...rewards, { 
          description: rewardsDescription, 
          completed: false, 
          completionTime: null 
        }]);
      }
      closeModal();
    } else {
      alert("Reward description is required.");
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
      <div className="header">
        <h3>Rewards</h3>
        <button onClick={() => openModal()}>Add Reward</button>
      </div>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <textarea
              value={rewardsDescription}
              onChange={(e) => setRewardsDescription(e.target.value)}
              placeholder="Enter the reward"
              maxLength={50}
            ></textarea>
            <button onClick={handleAddRewards} > 
              {editIndex !== null ? "Save Changes" : "Add Reward"} {/* Change button text */}
            </button>
            <button onClick={closeModal}>Cancel</button>
          </div>
        </div>
      )}

      <ul>
        {rewards.map((t, index) => (
          <li key={index}>
            <div className="reward-box">
              <div className="text-section">
                <span style={{ textDecoration: t.completed ? 'line-through' : 'none' }}>
                  {t.description && <span>{t.description}</span>}
                </span>
              </div>
              <div className="action-section">
                <input
                  type="checkbox"
                  checked={t.completed}
                  onChange={() => handleCheckboxChange(index)}
                />
                <button onClick={() => openModal(index)}>Edit</button>
                <button onClick={() => handleRemoveRewards(index)}>Remove</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="rewards-container">
        <RewardItem title="Cheat Meal" money="10pts" />
        <RewardItem title="1hr Video Game" money="10pts" />
        <RewardItem title="Movie Night" money="10pts" />
        <RewardItem title="Binge Show" money="10pts" />
    </div>
    </div>
  );
};

export default Rewards;