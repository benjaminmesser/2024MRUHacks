import React from 'react';
import './Main.css'; // Assuming you'll use an external CSS file
import TaskManager from './TaskManager';
import CalendarComponent from './Calender';

const Main = () => {
  return (
    <div className="container">
      {/* Tasks Section */}
      <div className="task-container">
        <TaskManager/> {/* Importing your existing Tasks component */}
      </div>

      {/* Calendar Section */}
      <div className="calendar-container">
        <CalendarComponent /> {/* Importing your existing Calendar component */}
      </div>

      {/* Rewards Section (Future Section) */}
      <div className="rewards-container">
        {/* Future rewards section goes here */}
      </div>

    {/* Bootstrap Card Section */}
    <div className="card" style={{ width: '50rem' }}>
      <div className="card-body">
        <h5 className="card-title">Card Title</h5>
        <CalendarComponent />
      </div>
    </div>
    </div>
  );
};

export default Main;
