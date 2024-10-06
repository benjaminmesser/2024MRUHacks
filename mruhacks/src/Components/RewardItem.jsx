import React from 'react';
import './RewardItem.css';
import coin from '../assets/coin.png';

const RewardItem = ({ description, title, money, image }) => {
  return (
    <div className="card" style={{ width: '100%', maxWidth: '12rem', textAlign: 'center', margin: '0.5rem', position: 'relative' }}>
      <div className="card-body" style={{ paddingBottom: '30px' }}>
        <h5 className="card-title">{title}</h5>
        <img src={image} className="card-img-top" alt="Avatar" />
        <div className="button-container">
          <a href="#" className="btn btn-primary" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            Buy {money} <img src={coin} style={{ width: '20px', height: '20px', marginLeft: '5px', marginTop: '15px' }} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default RewardItem;