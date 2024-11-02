import { useState, useEffect } from 'react';

import mountainsVideo from '../../assets/mountains.mp4';
import nebulaVideo from '../../assets/nebula.mp4';
import growingVideo from '../../assets/plant_growing.mp4';
import './Name.css';

const videos = [nebulaVideo, growingVideo, mountainsVideo ];

function Name() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    const videoInterval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 12000); 

    return () => clearInterval(videoInterval); 
  }, []);

  return (
    <>
      <main className='name-section'>
        <video autoPlay muted loop key={currentVideoIndex}>
          <source
            src={videos[currentVideoIndex]}
            type="video/mp4"
          />
        </video>
        <div className="name-container">
          <h1><span className='carissa'>Carissa</span><span className='hluchan'>Hluchan</span><span className='h1-span'>Software Developer</span></h1>
        </div>
      </main>
    </>
  );
}

export default Name;
