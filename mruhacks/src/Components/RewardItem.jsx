import React from 'react';
import avatar from '../assets/avatar.jpg'; // Import the image
import './RewardItem.css';

const RewardItem = ({ description, title, money }) => {
  return (
    <div className="card" style={{ width: '100%', maxWidth: '12rem', textAlign: 'center', margin: '0.5rem', position: 'relative' }}>
      <div className="card-body" style={{ paddingBottom: '30px' }}> {/* Add padding to create space for the button */}
        <h5 className="card-title">{title}</h5>
        <img src={avatar} className="card-img-top" alt="Avatar" />
        <div className="button-container">
          <a href="#" className="btn btn-primary" style={{ width: '100%' }}>Buy {money}</a>
        </div>
      </div>
    </div>
  );
}

export default RewardItem;