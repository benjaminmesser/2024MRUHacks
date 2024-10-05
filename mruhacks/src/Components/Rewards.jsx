import React, { useState } from 'react';
//import './Rewards.css';

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
      <h3>Rewards</h3>
      <button onClick={() => openModal()}>Add Reward</button>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <label>Reward:</label>
            <textarea
              value={rewardsDescription}
              onChange={(e) => setRewardsDescription(e.target.value)}
              placeholder="Enter the reward"
            ></textarea>
            <button onClick={handleAddRewards}>
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
              <span style={{ textDecoration: t.completed ? 'line-through' : 'none' }}>
                {t.description && <span> - {t.description}</span>}
              </span>
              <input
                type="checkbox"
                checked={t.completed}
                onChange={() => handleCheckboxChange(index)}
              />
              <button onClick={() => openModal(index)}>Edit</button> {/* Add Edit button */}
              <button onClick={() => handleRemoveRewards(index)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Rewards;