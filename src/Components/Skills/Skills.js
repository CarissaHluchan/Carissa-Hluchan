import React from 'react';
import { RxAccessibility } from "react-icons/rx";
import { HiSpeakerWave } from "react-icons/hi2";
import { SiMaterialdesignicons } from "react-icons/si";
import { IoIosContrast } from "react-icons/io";

import momentIcon from '../../assets/moment-js.svg';
import miroIcon from '../../assets/miro.png';
import canvaIcon from '../../assets/canva.png';
import tddIcon from '../../assets/tdd.png';
import lightroomIcon from '../../assets/lightroom.png';
import inDesignIcon from '../../assets/indesign.png';
import colorIcon from '../../assets/color-wheel.svg';
import responsiveIcon from '../../assets/responsive-design.svg';
import waveIcon from '../../assets/wave.jpg';
import './Skills.css'

function Skills() {
  return (
    <section className='skills-section'>
      <h2>Skills:</h2>
      <div className='skills-wrapper'>
        <h3 className='skills-title'>Languages:</h3>

        <div className='skills-list'>

          <div className='skill-wrapper'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
            <div className='skill-item'>JavaScript</div>
          </div>

          <div className='skill-wrapper'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
            <div className='skill-item'>TypeScript</div>
          </div>

          <div className='skill-wrapper'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
            <div>HTML</div>
          </div>

          <div className='skill-wrapper'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
            <div>CSS</div>
          </div>
        </div>
      </div>

      <div className='skills-wrapper'>
        <h4 className='skills-title'>Libraries:</h4>

        <div className='skills-list'>
          <div className='skill-wrapper'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
            <div>React</div>
          </div>

          <div className='skill-wrapper'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original.svg" />
            <div>React-Router</div>
          </div>

          <div className='skill-wrapper'>
            <img src={momentIcon} />
            <div>Moment</div>
          </div>
        </div>
      </div>


      <div className='skills-wrapper'>
        <h5 className='skills-title'>Testing:</h5>

        <div className='skills-list'>
          <div className='skill-wrapper'>
            <img src={tddIcon} />
            <div>Test-Driven Development (TDD)</div>
          </div>

          <div className='skill-wrapper'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mocha/mocha-original.svg" />
            <img src="https://profilinator.rishav.dev/skills-assets/chai.png" />
            <div>Unit Testing (Mocha, Chai),</div>
          </div>

          <div className='skill-wrapper'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cypressio/cypressio-original.svg" />
            <div>Cypress</div>
          </div>
        </div>
      </div>


      <div className='skills-wrapper'>
        <h6 className='skills-title'>Workflow:</h6>

        <div className='skills-list'>

          <div className='skill-wrapper'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />
            <div>GitHub, GitHub project board, GitHub issues</div>
          </div>


          <div className='skill-wrapper'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg" />
            <div>GithHub Actions</div>
          </div>

          <div className='skill-wrapper'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg" />
            <div>npm</div>
          </div>

          <div className='skill-wrapper'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" />
            <div>Vite.js</div>
          </div>
        </div>
      </div>


      <div className='skills-wrapper'>
        <h7 className='skills-title'>Hosting:</h7>

        <div className='skills-list'>

          <div className='skill-wrapper'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />
            <div>GitHub Pages</div>
          </div>

          <div className='skill-wrapper'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg" />
            <div>Vercel</div>
          </div>
        </div>
      </div>


      <div className='skills-wrapper'>
        <h8 className='skills-title'>Design:</h8>

        <div className='skills-list'>
          <div className='skill-wrapper'>
            <img src={responsiveIcon} />
            <div>Responsive Design</div>
          </div>

          <div className='skill-wrapper'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-plain.svg" />
            <div>Adobe Illustrator</div>
          </div>

          <div className='skill-wrapper'>
            <img src={inDesignIcon} alt="Lightroom" />
            <div>Adobe InDesign</div>
          </div>

          <div className='skill-wrapper'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg" />
            <div>Adobe Photoshop</div>
          </div>

          <div className='skill-wrapper'>
            <img src={lightroomIcon} />
            <div>Adobe lightroom</div>
          </div>

          <div className='skill-wrapper'>
            <img src={colorIcon} />
            <div>Color Theory</div>
          </div>

          <div className='skill-wrapper'>
            <SiMaterialdesignicons />
            <div>UI/UX</div>
          </div>

          <div className='skill-wrapper'>
            <img src={miroIcon} />
            <div>Miro</div>
          </div>

          <div className='skill-wrapper'>
            <img src={canvaIcon} />
            <div>Canva</div>
          </div>
        </div>
      </div>



      <div className='skills-wrapper'>
        <h9 className='skills-title'>Accessibility:</h9>

        <div className='skills-list'>
          <div className='skill-wrapper'>
            <RxAccessibility />
            <div>Meet WCAG standards by implementing ARIA landmarks</div>
          </div>

          <div className='skill-wrapper'>
            <HiSpeakerWave />
            <div>Testing with screen readers</div>
          </div>

          <div className='skill-wrapper'>
            <IoIosContrast />
            <div>Creating visual contrast</div>
          </div>

          <div className='skill-wrapper'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/chrome/chrome-original.svg" />
            <div>Chrome Dev Tools - Lighthouse</div>
          </div>

          <div className='skill-wrapper'>
            <img src={waveIcon} />
            <div>Wave</div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Skills