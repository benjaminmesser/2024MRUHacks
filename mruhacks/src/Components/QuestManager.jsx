import React, { useState } from 'react';
import './QuestManager.css';

const QuestManager = ({ selectedDate }) => {
  const [questName, setQuestName] = useState('');
  const [questDescription, setQuestDescription] = useState('');
  const [questDifficulty, setQuestDifficulty] = useState('easy');
  const [quests, setQuests] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setQuestName(''); // Clear form on close
    setQuestDescription('');
    setQuestDifficulty('easy');
  };

  const handleAddQuest = () => {
    if (questName.trim()) {
      setQuests([...quests, { 
        name: questName, 
        description: questDescription, 
        difficulty: questDifficulty, 
        completed: false, 
        completionTime: null,
        date: selectedDate.toISOString().split('T')[0] // Store date as string
      }]);
      closeModal();
    } else {
      alert("Quest name is required.");
    }
  };

  const filteredQuests = quests.filter(quest => quest.date === selectedDate.toISOString().split('T')[0]);

  return (
    <div>
      <h1>Quest Manager</h1>
      <button onClick={openModal}>Add Quest</button>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Add a Quest</h2>
            <label>Quest Name: </label>
            <input
              type="text"
              value={questName}
              onChange={(e) => setQuestName(e.target.value)}
              placeholder="Enter quest name"
              required
            />
            <label>Description:</label>
            <textarea
              value={questDescription}
              onChange={(e) => setQuestDescription(e.target.value)}
              placeholder="Enter quest description (optional)"
            ></textarea>
            <label>Difficulty:</label>
            <div>
              <label>
                <input
                  type="radio"
                  value=
"easy"