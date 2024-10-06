import React, { useState } from 'react';
import './QuestManager.css';

const QuestManager = ({ selectedDate }) => {
  const [questName, setQuestName] = useState('');
  const [questDescription, setQuestDescription] = useState('');
  const [questDifficulty, setQuestDifficulty] = useState('Easy');
  const [questsByDate, setQuestsByDate] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setQuestName(''); // Clear form on close
    setQuestDescription('');
    setQuestDifficulty('Easy');
  };

  const handleAddQuest = () => {
    if (questName.trim()) {
      const newQuest = {
        name: questName,
        description: questDescription,
        difficulty: questDifficulty,
        completed: false,
        completionTime: null,
        date: selectedDate
      };

      setQuestsByDate(prevState => {
        const questsForDate = prevState[selectedDate] || [];
        return {
          ...prevState,
          [selectedDate]: [...questsForDate, newQuest]
        };
      });

      closeModal();
    }
  };

  const handleCheckboxChange = (index) => {
    setQuestsByDate(prevState => {
      const questsForDate = prevState[selectedDate] || [];
      const updatedQuests = questsForDate.map((quest, i) => {
        if (i === index) {
          return {
            ...quest,
            completed: !quest.completed,
            completionTime: !quest.completed ? new Date().toLocaleString() : null
          };
        }
        return quest;
      });
      return {
        ...prevState,
        [selectedDate]: updatedQuests
      };
    });
  };

  const handleRemoveQuest = (index) => {
    setQuestsByDate(prevState => {
      const questsForDate = prevState[selectedDate] || [];
      const updatedQuests = questsForDate.filter((_, i) => i !== index);
      return {
        ...prevState,
        [selectedDate]: updatedQuests
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
          <li key={index} className="quest-item">
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
              <button onClick={() => handleRemoveQuest(index)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestManager;
