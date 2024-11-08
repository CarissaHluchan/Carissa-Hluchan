// import React from 'react';
// import { FaUniversalAccess } from "react-icons/fa6";
// import { HiSpeakerWave } from "react-icons/hi2";
// import { SiMaterialdesignicons } from "react-icons/si";
// import { IoIosContrast } from "react-icons/io";

// import momentIcon from '../../assets/moment-js.svg';
// import gitHubDark from '../../assets/github-dark.svg';
// import gitHubLight from '../../assets/github-light.svg';
// import vercelIcon from '../../assets/vercel.svg';
// import miroIcon from '../../assets/miro.png';
// import canvaIcon from '../../assets/canva.png';
// import tddIcon from '../../assets/tdd.png';
// import lightroomIcon from '../../assets/lightroom.png';
// import inDesignIcon from '../../assets/indesign.png';
// import colorIcon from '../../assets/color-wheel.svg';
// import responsiveIcon from '../../assets/responsive-design.svg';
// import waveIcon from '../../assets/wave.jpg';
import { motion } from 'framer-motion';

import leaves from '../../assets/leaves.png';
import leavesDark from '../../assets/leaves-dark.png';

import carissaJson from '../../carissa.json';
import './Skills.css';

function Skills({ isLightMode }) {

  // const gitHubIcon = isLightMode ? gitHubLight : gitHubDark;

  const skillsData = carissaJson.skills

  return (
    <section className="skills-section">
      <h2>Skills:</h2>
      <img src={isLightMode ? leaves : leavesDark} alt="Decorative leaves" className="leaves" />

      {skillsData.map((category) => (
        <div className="skills-wrapper" key={category.categoryName}>
          <div className="skills-title">{category.categoryName}:</div>
          <div className="skills-list">
            {category.skills.map((skill) => (
              <a
                key={skill.name}
                href={skill.url}
                target="_blank"
                rel="noopener noreferrer"
                className="skill-wrapper"
              >
                <motion.img
                  src={skill.icon}
                  alt={`${skill.name} icon`}
                  className="skill-icon"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: 'spring' }} />
                <div className="skill-item">{skill.name}</div>
              </a>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}


//   return (
//     <section className='skills-section'>
//         <h2>Skills:</h2>
//         <img src={isLightMode ? leaves : leavesDark} alt="Decorative leaves" className="leaves" />

//       <div className='skills-wrapper'>
//         <div className='skills-title'>Languages:</div>

//         <div className='skills-list'>

//           <div className='skill-wrapper'>
//             <img className="skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
//             <div className='skill-item'>JavaScript</div>
//           </div>

//           <div className='skill-wrapper'>
//             <img className="skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
//             <div className='skill-item'>TypeScript</div>
//           </div>

//           <div className='skill-wrapper'>
//             <img className="skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
//             <div>HTML</div>
//           </div>

//           <div className='skill-wrapper'>
//             <img className="skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
//             <div>CSS</div>
//           </div>
//         </div>
//       </div>


//       <div className='skills-wrapper'>
//         <div className='skills-title'>Libraries:</div>

//         <div className='skills-list'>
//           <div className='skill-wrapper'>
//             <img className='icon-dark-bg skill-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
//             <div>React</div>
//           </div>

//           <div className='skill-wrapper'>
//             <img className='icon-light-bg skill-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original.svg" />
//             <div>React-Router</div>
//           </div>

//           <div className='skill-wrapper'>
//             <img src={momentIcon} className='icon-light-bg skill-icon' />
//             <div>Moment</div>
//           </div>
//         </div>
//       </div>


//       <div className='skills-wrapper'>
//         <div className='skills-title'>Testing:</div>

//         <div className='skills-list'>
//           <div className='skill-wrapper'>
//             <img src={tddIcon} className="skill-icon" />
//             <div>Test-Driven Development (TDD)</div>
//           </div>

//           <div className='skill-wrapper'>
//             <img className='icon-light-bg skill-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mocha/mocha-original.svg" />
//             <img className='icon-light-bg skill-icon' src="https://profilinator.rishav.dev/skills-assets/chai.png" />
//             <div>Unit Testing (Mocha, Chai),</div>
//           </div>

//           <div className='skill-wrapper'>
//             <img className='icon-light-bg skill-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cypressio/cypressio-original.svg" />
//             <div className='dark-icon'>Cypress</div>
//           </div>
//         </div>
//       </div>


//       <div className='skills-wrapper'>
//         <div className='skills-title'>Workflow:</div>

//         <div className='skills-list'>

//           <div className='skill-wrapper'>
//             <img src={gitHubIcon} className="skill-icon" />
//             <div>GitHub, GitHub project board, GitHub issues</div>
//           </div>

//           <div className='skill-wrapper'>
//             <img className='icon-dark-bg skill-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg" />
//             <div>GithHub Actions</div>
//           </div>

//           <div className='skill-wrapper'>
//             <img className='icon-dark-bg skill-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg" />
//             <div>npm</div>
//           </div>

//           <div className='skill-wrapper'>
//             <img className='icon-dark-bg skill-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" />
//             <div>Vite.js</div>
//           </div>
//         </div>
//       </div>


//       <div className='skills-wrapper'>
//         <h7 className='skills-title'>Hosting:</h7>

//         <div className='skills-list'>

//           <div className='skill-wrapper'>
//             <img src={gitHubIcon} className="skill-icon" />
//             <div>GitHub Pages</div>
//           </div>

//           <div className='skill-wrapper'>
//             <img src={vercelIcon} className='icon-light-bg skill-icon' />
//             <div>Vercel</div>
//           </div>
//         </div>
//       </div>


//       <div className='skills-wrapper'>
//         <h8 className='skills-title'>Design:</h8>

//         <div className='skills-list'>
//           <div className='skill-wrapper'>
//             <img src={responsiveIcon} className="skill-icon" />
//             <div>Responsive Design</div>
//           </div>

//           <div className='skill-wrapper'>
//             <img className="skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-plain.svg" />
//             <div>Adobe Illustrator</div>
//           </div>

//           <div className='skill-wrapper'>
//             <img src={inDesignIcon} className="skill-icon" />
//             <div>Adobe InDesign</div>
//           </div>

//           <div className='skill-wrapper'>
//             <img className="skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg" />
//             <div>Adobe Photoshop</div>
//           </div>

//           <div className='skill-wrapper'>
//             <img src={lightroomIcon} className="skill-icon" />
//             <div>Adobe lightroom</div>
//           </div>

//           <div className='skill-wrapper'>
//             <img src={colorIcon} className="skill-icon" />
//             <div>Color Theory</div>
//           </div>

//           <div className='skill-wrapper'>
//             <SiMaterialdesignicons className='skill-icon' />
//             <div>UI/UX</div>
//           </div>

//           <div className='skill-wrapper'>
//             <img src={miroIcon} className='skill-icon' />
//             <div>Miro</div>
//           </div>

//           <div className='skill-wrapper'>
//             <img src={canvaIcon} className='skill-icon' />
//             <div>Canva</div>
//           </div>
//         </div>
//       </div>


//       <div className='skills-wrapper'>
//         <h9 className='skills-title'>Accessibility:</h9>

//         <div className='skills-list'>
//           <div className='skill-wrapper'>
//             <FaUniversalAccess className='skill-icon' />
//             <div>Meet WCAG standards by implementing ARIA landmarks</div>
//           </div>

//           <div className='skill-wrapper'>
//             <HiSpeakerWave className='skill-icon' />
//             <div>Testing with screen readers</div>
//           </div>

//           <div className='skill-wrapper'>
//             <IoIosContrast className='skill-icon' />
//             <div>Creating visual contrast</div>
//           </div>

//           <div className='skill-wrapper'>
//             <img className='skill-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/chrome/chrome-original.svg" />
//             <div>Chrome Dev Tools - Lighthouse</div>
//           </div>

//           <div className='skill-wrapper'>
//             <img src={waveIcon} className='skill-icon' />
//             <div>Wave</div>
//           </div>
//         </div>
//       </div>

//     </section>
//   )
// }

export default Skills;


