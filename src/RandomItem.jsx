import React from 'react';

const RandomItem = ({ photo, onBan }) => {
  const { img_src, camera, rover, earth_date } = photo;

  return (
    <div className="random-item">
      <img src={img_src} alt="Mars Rover" style={{ width: '100%', height: 'auto' }} />
      <p><strong>Camera Name:</strong> {camera.full_name}</p>
      <p><strong>Rover Name:</strong> {rover.name}</p>
      <p><strong>Earth Date:</strong> {earth_date}</p>
      <button onClick={() => onBan(camera.name)}>Ban This Camera</button>
    </div>
  );
};

export default RandomItem;
