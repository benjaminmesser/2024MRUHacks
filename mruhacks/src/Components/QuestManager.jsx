import React, { useState } from 'react';
import './QuestManager.css';

import { GetXPNum, SetXPNum } from './Navbar';

const QuestManager = ({ selectedDate }) => {
  const [questName, setQuestName] = useState('');
  const [questDescription, setQuestDescription] = useState('');
  const [questDifficulty, setQuestDifficulty] = useState('Easy');
  const [questsByDate, setQuestsByDate] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedQuest, setSelectedQuest] = useState(null); 

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setQuestName('');
    setQuestDescription('');
    setQuestDifficulty('Easy');
  };

  const showDescription = (quest) => {
    setSelectedQuest(quest); 
  };

  const handleAddQuest = () => {
    if (questName.trim()) {
      const newQuest = {
        name: questName,
        description: questDescription,
        difficulty: questDifficulty,
        completed: false,
        completionTime: null,
        date: selectedDate,
      };

      setQuestsByDate((prevState) => {
        const questsForDate = prevState[selectedDate] || [];
        return {
          ...prevState,
          [selectedDate]: [...questsForDate, newQuest],
        };
      });

      closeModal();
    }
  };

  const handleCheckboxChange = (index) => {
    setQuestsByDate((prevState) => {
        var difficulty_mod = 1
      const questsForDate = prevState[selectedDate] || [];
      const updatedQuests = questsForDate.map((quest, i) => {
        if (i === index) {
            if (quest.difficulty.includes('Medium')) {
                difficulty_mod = 2
            } else if (quest.difficulty.includes('Hard')) {
                difficulty_mod = 3
            }
            if (quest.completed){
                SetXPNum(GetXPNum() + difficulty_mod * 5);
            } else {
                SetXPNum(GetXPNum() + difficulty_mod * 5);
            }
          return {
            ...quest,
            completed: !quest.completed,
            completionTime: !quest.completed ? new Date().toLocaleString() : null,
          };
        }
        return quest;
      });
      return {
        ...prevState,
        [selectedDate]: updatedQuests,
      };
    });
  };

  const handleRemoveQuest = (index) => {
    setQuestsByDate((prevState) => {
      const questsForDate = prevState[selectedDate] || [];
      const updatedQuests = questsForDate.filter((_, i) => i !== index);
      return {
        ...prevState,
        [selectedDate]: updatedQuests,
      };
    });
  };

  const filteredQuests = questsByDate[selectedDate] || [];

  return (
    <div>
      <div className="qheader">
        <h3>Quests</h3>
        <button onClick={openModal}>Add Quest</button>
      </div>

      {isModalOpen && (
        <div className="qmodal">
          <input
            type="text"
            value={questName}
            onChange={(e) => setQuestName(e.target.value)}
            placeholder="Quest Name"
          />
          <textarea
            value={questDescription}
            onChange={(e) => setQuestDescription(e.target.value)}
            placeholder="Quest Description"
          />
          <select
            value={questDifficulty}
            onChange={(e) => setQuestDifficulty(e.target.value)}
          >
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
          <div className="button-container">
            <button onClick={handleAddQuest}>Add Quest</button>
            <button onClick={closeModal}>Cancel</button>
          </div>
        </div>
      )}

      <ul>
        {filteredQuests.map((quest, index) => (
          <li
            key={index}
            className={`quest-item ${
              quest.difficulty === 'Easy'
                ? 'easy'
                : quest.difficulty === 'Medium'
                ? 'medium'
                : 'hard'
            } ${quest.completed ? 'completed' : ''}`}
          >
            <div className="quest-name" style={{ display: 'flex', alignItems: 'center' }}>
              <input
                type="checkbox"
                checked={quest.completed}
                onChange={() => handleCheckboxChange(index)}
                style={{ marginRight: '8px' }}
              />
              <span style={{ textDecoration: quest.completed ? 'line-through' : 'none' }}>
                {quest.name}
              </span>
            </div>
            <div className="quest-difficulty">
              {quest.difficulty}
            </div>
            <div className="action-buttons">
              <button onClick={() => showDescription(quest)}>Desc</button>
              <button onClick={() => handleRemoveQuest(index)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>

      {selectedQuest && (
        <div className="desc-box" style={{ marginTop: '16px', padding: '10px', background: '#f0f0f0' }}>
          <h4>{selectedQuest.name} Description</h4>
          <p>{selectedQuest.description}</p>
          <button onClick={() => setSelectedQuest(null)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default QuestManager;
