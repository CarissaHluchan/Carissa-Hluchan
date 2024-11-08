import { useState, useRef, useEffect } from 'react';

import mountainsVideo from '../../assets/mp4/mountains_with_audio.mp4';
import nebulaVideo from '../../assets/mp4/nebula_with_audio.mp4';
import growingVideo from '../../assets/mp4/plant_growing_with_audio.mp4';
import './Name.css';

const videos = [nebulaVideo, growingVideo, mountainsVideo];

function Name() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef(null);

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [currentVideoIndex]);

  return (
    <>
      <main className='name-section'>
        <video 
          ref={videoRef}
          autoPlay 
          muted 
          playsInline 
          onEnded={handleVideoEnd}
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
