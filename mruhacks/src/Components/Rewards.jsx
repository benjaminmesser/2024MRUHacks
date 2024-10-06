import React, { useState } from 'react';
import './Rewards.css';
import RewardItem from './RewardItem';
import burger from '../assets/burger.jpg';
import controller from '../assets/controller.jpg';
import movie from '../assets/movie.jpg';
import show from '../assets/show.jpg';

const Rewards = () => {
  const [rewardsDescription, setRewardsDescription] = useState('');
  const [rewards, setRewards] = useState([]);
  const [rewardDifficulty, setRewardDifficulty] = useState('Easy'); // State for difficulty
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editIndex, setEditIndex] = useState(null); // New state for tracking edit index

  const openModal = (index = null) => {
    setIsModalOpen(true);
    if (index !== null) {
      // If editing, populate the modal with existing reward's description and difficulty
      setRewardsDescription(rewards[index].description);
      setRewardDifficulty(rewards[index].difficulty); // Populate the difficulty
      setEditIndex(index); // Set the index being edited
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setRewardsDescription('');
    setRewardDifficulty('Easy'); // Reset to default
    setEditIndex(null); // Clear edit index on close
  };

  const handleAddRewards = () => {
    if (rewardsDescription.trim()) {
      if (editIndex !== null) {
        // If editing, update the reward at the specific index
        const updatedRewards = rewards.map((t, i) =>
          i === editIndex ? { ...t, description: rewardsDescription, difficulty: rewardDifficulty } : t
        );
        setRewards(updatedRewards);
      } else {
        // If not editing, add a new reward
        setRewards([
          ...rewards,
          {
            description: rewardsDescription,
            difficulty: rewardDifficulty, // Include the selected difficulty
            completed: false,
            completionTime: null,
          },
        ]);
      }
      closeModal();
    } else {
      alert('Reward description is required.');
    }
  };

  const handleCheckboxChange = (index) => {
    const updatedRewards = rewards.map((t, i) => {
      if (i === index) {
        if (!t.completed) {
          // If the reward is being marked as completed (checkbox checked)
          alert(`You bought the reward: ${t.description}`);
          return { ...t, completed: true, completionTime: new Date().toLocaleString() };
        } else {
          // If the reward is being unmarked as completed (checkbox unchecked)
          return { ...t, completed: false, completionTime: null };
        }
      }
      return t;
    });

    // Reset checkbox by marking all as not completed (uncheck it)
    setRewards(updatedRewards.map((t, i) => (i === index ? { ...t, completed: false } : t)));
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
            <textarea
              value={rewardsDescription}
              onChange={(e) => setRewardsDescription(e.target.value)}
              placeholder="Enter the reward"
              maxLength={200}
            ></textarea>
            <select
              value={rewardDifficulty} // Bind select value to state
              onChange={(e) => setRewardDifficulty(e.target.value)} // Update difficulty
            >
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
            <button onClick={handleAddRewards}>
              {editIndex !== null ? 'Save Changes' : 'Add Reward'} {/* Change button text */}
            </button>
            <button onClick={closeModal}>Cancel</button>
          </div>
      )}

<ul>
  {rewards.map((t, index) => {
    // Determine background color based on difficulty
    const backgroundColor = t.difficulty === 'Easy'
      ? 'lightgreen'
      : t.difficulty === 'Medium'
      ? 'lightyellow'
      : 'lightcoral'; // 'lightcoral' is a close light red shade

          return (
            <li key={index}>
              <div className="reward-box" style={{ backgroundColor }}> {/* Apply background color dynamically */}
                <div className="text-section">
                  <span style={{ textDecoration: t.completed ? 'line-through' : 'none' }}>
                    {t.description && <span>{t.description}</span>}
                  </span>
                  <br />
                </div>
                <div className="difficulty-section">
                  {t.difficulty}
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
          );
        })}
      </ul>

      <div className="rewards-container">
        <RewardItem title="Cheat Meal" money="10pts" image={burger}/>
        <RewardItem title="1hr Video Game" money="10pts" image={controller}/>
        <RewardItem title="Movie Night" money="10pts" image={movie}/>
        <RewardItem title="Binge Show" money="10pts" image={show}/>
      </div>
    </div>
  );
};

export default Rewards;