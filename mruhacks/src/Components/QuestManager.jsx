import React, { useState } from 'react';
import './QuestManager.css';

const QuestManager = ({ selectedDate }) => {
  const [questName, setQuestName] = useState('');
  const [questDescription, setQuestDescription] = useState('');
  const [questDifficulty, setQuestDifficulty] = useState('easy');
  const [questsByDate, setQuestsByDate] = useState({});
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
            completed: !quest.complenpted,
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
  <div className="header">
    <h3>Quests</h3>
    <button onClick={openModal}>Add Quest</button>
  </div>
  
  {/* Overlay and Modal */}
  {isModalOpen && (
    <>
      {/* Overlay */}
      <div className="overlay" onClick={closeModal}></div>
      
      {/* Modal */}
      <div className="modal">
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
          maxLength={200}
        />
        <select 
          value={questDifficulty} 
          onChange={(e) => setQuestDifficulty(e.target.value)}
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        
        {/* Buttons */}
        <div className="button-container">
          <button onClick={handleAddQuest}>Add Quest</button>
          <button onClick={closeModal}>Cancel</button>
        </div>
      </div>
    </>
  )}

  <ul>
    {filteredQuests.map((quest, index) => (
      <li key={index}>
        <input
          type="checkbox"
          checked={quest.completed}
          onChange={() => handleCheckboxChange(index)}
        />
        <span style={{ textDecoration: quest.completed ? 'line-through' : 'none' }}>
          {quest.name} (Difficulty: {quest.difficulty})
          {quest.description && <span> - {quest.description}</span>}
        </span>
        {quest.completed && <span> (Completed at: {quest.completionTime})</span>}
        <button onClick={() => handleRemoveQuest(index)}>Remove</button>
      </li>
    ))}
  </ul>
</div>
  );
};

export default QuestManager;
