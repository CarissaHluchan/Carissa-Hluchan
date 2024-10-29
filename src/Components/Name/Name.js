import React from 'react';

import mountainsVideo from '../../assets/mountains.mp4';
import nebulaVideo from '../../assets/nebula.mp4';
import growingVideo from '../../assets/plant_growing.mp4';
import earthVideo from '../../assets/space_earth.mp4';
import './Name.css'

function Name() {
  return (
    <main className='name-section'>
      <video autoPlay muted loop>
        <source
          src={nebulaVideo}
          type="video/mp4"
        />
      </video>
      <div className='name-container'>
        <h1>Carissa Hluchan</h1>
      </div>
    </main>
  )
}

export default Name

// import React, { useState, useEffect } from 'react';

// import mountainsVideo from '../assets/mountains.mp4';
// import nebulaVideo from '../assets/nebula.mp4';
// import growingVideo from '../assets/plant_growing.mp4';
// import earthVideo from '../assets/space_earth.mp4';
// import './Name.css';

// const videos = [mountainsVideo, nebulaVideo, growingVideo, earthVideo];

// function Name() {
//   const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

//   useEffect(() => {
//     const videoInterval = setInterval(() => {
//       setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
//     }, 20000); // Change video every 10 seconds

//     return () => clearInterval(videoInterval); // Cleanup interval on component unmount
//   }, []);

//   return (
//     <main className='name-section'>
//       <video autoPlay muted loop key={currentVideoIndex}>
//         <source
//           src={videos[currentVideoIndex]}
//           type="video/mp4"
//         />
//       </video>
//       <div className="name-container">
//         <h1>Carissa Hluchan</h1>
//         <h2>Hluchan</h2>
//       </div>
//     </main>
//   );
// }

// export default Name;
