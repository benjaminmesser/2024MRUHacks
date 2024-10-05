import React from 'react';
import QuestManager from './QuestManager';
import CalendarComponent from './Calender';
import Rewards from './Rewards';

const Main = () => {
    return (
        <div className="container-fluid vh-100 d-flex flex-column" style={{ paddingTop: '50px' }}>
            <div className="row flex-grow-1"> {/* Use g-0 to remove the gutter */}
                <div className="col-md-3 d-flex">
                    <div className="p-3 border bg-light w-100">
                        <QuestManager />
                    </div>
                </div>
                <div className="col-md-6 d-flex">
                    <div className="p-3 border bg-light w-100">
                        <CalendarComponent />
                    </div>
                </div>
                <div className="col-md-3 d-flex">
                    <div className="p-3 border bg-light w-100">
                        <Rewards />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;