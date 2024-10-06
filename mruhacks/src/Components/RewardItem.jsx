import React from 'react';
import '/src/Components/RewardItem.jsx';
import avatar from '../assets/avatar.jpg'; // Import the image

const RewardItem = ({ description, title, money }) => {
  return (
    <div className="card" style={{ width: '100%', maxWidth: '12rem', textAlign: 'center', margin: '0.5rem' }}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <img src={avatar} className="card-img-top" alt="Avatar" />
        <div className="button-container" style={{ display: 'flex', justifyContent: 'center' }}>
          <a href="#" className="btn btn-primary" style={{ width: '100%' }}>Buy {money}pt</a>
        </div>
      </div>
    </div>
  );
}

export default RewardItem;