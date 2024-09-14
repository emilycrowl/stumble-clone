import React from 'react';

const BanList = ({ banList }) => {
  return (
    <div className="ban-list">
      <h3>Banned Cameras</h3>
      <ul>
        {banList.map((camera, index) => (
          <li key={index}>{camera}</li>
        ))}
      </ul>
    </div>
  );
};

export default BanList;
