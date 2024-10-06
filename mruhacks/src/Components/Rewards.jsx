import React, { useState } from 'react';
import './Rewards.css';
import RewardItem from './RewardItem';
import burger from '../assets/burger_processed.jpg';
import controller from '../assets/controller_processed.jpg';
import movie from '../assets/movie_processed.jpg';
import show from '../assets/show.jpg';

const Rewards = () => {
  const [rewardsDescription, setRewardsDescription] = useState('');
  const [rewards, setRewards] = useState([]);
  const [rewardDifficulty, setRewardDifficulty] = useState('Easy'); 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editIndex, setEditIndex] = useState(null); 

  const openModal = (index = null) => {
    setIsModalOpen(true);
    if (index !== null) {
      setRewardsDescription(rewards[index].description);
      setRewardDifficulty(rewards[index].difficulty);
      setEditIndex(index); 
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setRewardsDescription('');
    setRewardDifficulty('Easy'); 
    setEditIndex(null); 
  };

  const handleAddRewards = () => {
    if (rewardsDescription.trim()) {
      if (editIndex !== null) {
        const updatedRewards = rewards.map((t, i) =>
          i === editIndex ? { ...t, description: rewardsDescription, difficulty: rewardDifficulty } : t
        );
        setRewards(updatedRewards);
      } else {
        setRewards([
          ...rewards,
          {
            description: rewardsDescription,
            difficulty: rewardDifficulty, 
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
          alert(`You bought the reward: ${t.description}`);
          return { ...t, completed: true, completionTime: new Date().toLocaleString() };
        } else {
          return { ...t, completed: false, completionTime: null };
        }
      }
      return t;
    });

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
              value={rewardDifficulty} 
              onChange={(e) => setRewardDifficulty(e.target.value)} 
            >
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
            <button onClick={handleAddRewards}>
              {editIndex !== null ? 'Save Changes' : 'Add Reward'} 
            </button>
            <button onClick={closeModal}>Cancel</button>
          </div>
      )}

<ul>
  {rewards.map((t, index) => {
    const backgroundColor = t.difficulty === 'Easy'
      ? 'lightgreen'
      : t.difficulty === 'Medium'
      ? 'lightyellow'
      : 'lightcoral'; 

          return (
            <li key={index}>
              <div className="reward-box" style={{ backgroundColor }}> 
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
                  <button onClick={() => handleCheckboxChange(index)} checked={t.completed}>Buy</button>
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