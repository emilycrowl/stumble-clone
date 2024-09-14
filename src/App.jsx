import React, { useState, useEffect } from 'react';
import BanList from './BanList';
import RandomItem from './RandomItem';

const API_KEY = import.meta.env.VITE_NASA_API_KEY;

const App = () => {
  const [photo, setPhoto] = useState(null);
  const [banList, setBanList] = useState([]);

  const getRandomSol = () => Math.floor(Math.random() * 1000) + 100;

  const fetchRoverPhoto = async () => {
    try {
      const sol = getRandomSol();
      const response = await fetch(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}&camera=fhaz&api_key=${API_KEY}`
      );
      const data = await response.json();
      const randomPhoto = data.photos[Math.floor(Math.random() * data.photos.length)];

      if (!banList.includes(randomPhoto.camera.name)) {
        setPhoto(randomPhoto);
      } else {
        fetchRoverPhoto(); // try again if banned
      }
    } catch (error) {
      console.error('Error fetching photo:', error);
    }
  };

  useEffect(() => {
    fetchRoverPhoto();
  }, []);

  return (
    <div className="App">
      <h1>Mars Rover Photo Viewer</h1>
      {photo && (
        <RandomItem
          photo={photo}
          onBan={(camera) => setBanList([...banList, camera])}
        />
      )}
      <button onClick={fetchRoverPhoto}>Show Me Something New</button>
      <BanList banList={banList} />
    </div>
  );
};

export default App;
