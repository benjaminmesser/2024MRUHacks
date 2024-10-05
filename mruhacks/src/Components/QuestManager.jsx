import React, { useState } from 'react';
import './QuestManager.css';

const QuestManager = () => {
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
        completionTime: null 
      }]);
      closeModal();
    } else {
      alert("Quest name is required.");
    }
  };

  const handleCheckboxChange = (index) => {
    const updatedQuests = quests.map((q, i) =>
      i === index
        ? { ...q, completed: !q.completed, completionTime: !q.completed ? new Date().toLocaleString() : null }
        : q
    );
    setQuests(updatedQuests);
  };

  const handleRemoveQuests = (index) => {
    const updatedQuests = quests.filter((_, i) => i !== index);
    setQuests(updatedQuests);
  };

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
                  value="easy"
                  checked={questDifficulty === 'easy'}
                  onChange={() => setQuestDifficulty('easy')}
                />
                Easy
              </label>
              <label>
                <input
                  type="radio"
                  value="medium"
                  checked={questDifficulty === 'medium'}
                  onChange={() => setQuestDifficulty('medium')}
                />
                Medium
              </label>
              <label>
                <input
                  type="radio"
                  value="hard"
                  checked={questDifficulty === 'hard'}
                  onChange={() => setQuestDifficulty('hard')}
                />
                Hard
              </label>
            </div>
            <button onClick={handleAddQuest}>Add Quest</button>
            <button onClick={closeModal}>Cancel</button>
          </div>
        </div>
      )}

      <ul>
        {quests.map((t, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={t.completed}
              onChange={() => handleCheckboxChange(index)}
            />
            <span style={{ textDecoration: t.completed ? 'line-through' : 'none' }}>
              {t.name} (Difficulty: {t.difficulty})
              {t.description && <span> - {t.description}</span>}
            </span>
            {t.completed && <span> (Completed at: {t.completionTime})</span>}
            <button onClick={() => handleRemoveQuest(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestManager;
