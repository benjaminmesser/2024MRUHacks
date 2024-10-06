import React from 'react';

const RewardItem = ({description}) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src="/assets/avatar.jpg" className="card-img-top" alt="Avatar" />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">{description}</p>
        <a href="#" className="btn btn-primary">Buy</a>
      </div>
    </div>
  );
}

export default RewardItem;