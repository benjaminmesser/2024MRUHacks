import React from 'react';
import avatar from '../assets/avatar.jpg'; // Import the image

const RewardItem = ({ description, onEdit }) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={avatar} className="card-img-top" alt="Avatar" />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">{description}</p>
        <div className="button-container">
          <a href="#" className="btn btn-primary">Buy</a>
          <button onClick={onEdit} className="btn btn-secondary">Edit</button>
        </div>
      </div>
    </div>
  );
}

export default RewardItem;