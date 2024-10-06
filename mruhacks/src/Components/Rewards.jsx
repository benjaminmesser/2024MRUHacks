import React, { useState } from 'react';
import './Rewards.css';
import RewardItem from './RewardItem'; // Import the RewardItem component

const Rewards = () => {
  const [rewardsDescription, setRewardsDescription] = useState('');
  const [rewards, setRewards] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

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
    if (editIndex !== null) {
      const updatedRewards = [...rewards];
      updatedRewards[editIndex] = { description: rewardsDescription };
      setRewards(updatedRewards);
      setEditIndex(null);
    } else {
      setRewards([...rewards, { description: rewardsDescription }]);
    }
    setRewardsDescription('');
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={() => openModal()}>Add Reward</button>
      {isModalOpen && (
        <div className="modal">
          <h2>{editIndex !== null ? 'Edit Reward' : 'Add Reward'}</h2>
          <input
            type="text"
            value={rewardsDescription}
            onChange={(e) => setRewardsDescription(e.target.value)}
          />
          <button onClick={handleAddRewards}>{editIndex !== null ? 'Save' : 'Add'}</button>
          <button onClick={closeModal}>Cancel</button>
        </div>
      )}
      <div className="rewards-list">
        {rewards.map((reward, index) => (
          <RewardItem
            key={index}
            description={reward.description}
            onEdit={() => openModal(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Rewards;