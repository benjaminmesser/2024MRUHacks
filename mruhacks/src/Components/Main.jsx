import React, { useState } from 'react';
import QuestManager from './QuestManager';
import CalendarComponent from './Calender';
import Rewards from './Rewards';

const Main = (props) => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  const handleDateChange = (date) => {
    setSelectedDate(date.toISOString().split('T')[0]);
  };

  return (
    <div className="container-fluid vh-100 d-flex flex-column" style={{ backgroundColor: 'grey', paddingTop: '50px' }}>
      <div className="row flex-grow-1 mt-4">
        {/* QuestManager column */}
        <div className="col-md-3 d-flex mb-4"> {/* Added mb-4 for margin-bottom */}
          <div className="p-3 w-100" style={{ backgroundColor: 'white' }}>
            <QuestManager selectedDate={selectedDate} questData={props.questData} />
          </div>
        </div>
  
        {/* CalendarComponent column */}
        <div className="col-md-6 d-flex mb-4"> {/* Added mb-4 for margin-bottom */}
          <div className="p-3 w-100" style={{ backgroundColor: 'white' }}>
            <CalendarComponent onDateChange={handleDateChange} />
          </div>
        </div>
  
        {/* Rewards column */}
        <div className="col-md-3 d-flex mb-4"> {/* Added mb-4 for margin-bottom */}
          <div className="p-3 w-100" style={{ backgroundColor: 'white' }}>
            <Rewards rewardData={props.rewardData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;