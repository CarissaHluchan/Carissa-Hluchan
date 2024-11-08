import { useState } from 'react';

import mountainsVideo from '../../assets/mp4/mountains_with_audio.mp4';
import nebulaVideo from '../../assets/mp4/nebula_with_audio.mp4';
import growingVideo from '../../assets/mp4/plant_growing_with_audio.mp4';
import './Name.css';

const videos = [nebulaVideo, growingVideo, mountainsVideo];

function Name() {

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  return (
    <>
      <main className='name-section'>
      <video 
          autoPlay 
          muted 
          playsInline 
          onEnded={handleVideoEnd}
          key={currentVideoIndex}
        >
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
