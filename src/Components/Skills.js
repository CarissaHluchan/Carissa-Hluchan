import React from 'react';

import './Skills.css'

function Skills() {
  return (
    <section className='skills-section'>
      <h6>Skills:</h6>
      <div className='skills-wrapper'>
        <div className='skills-title'>Languages/Frameworks:</div>
        <p> React, React-Router, JavaScript, TypeScript, HTML5, CSS3</p>

        <div className='skill-wrapper'>
          <i class="devicon-javascript-plain"></i>
          <i class="devicon-javascript-plain colored"></i>
          <div>JavaScript</div>
        </div>

        <div className='skill-wrapper'>
          <i class="devicon-react-original"></i>
          <i class="devicon-react-original colored"></i>
          <div>React</div>
        </div>

        <div className='skill-wrapper'>
          <i class="devicon-reactrouter-plain"></i>
          <i class="devicon-reactrouter-plain colored"></i>
          <div>React-Router</div>
        </div>

        <div className='skill-wrapper'>
          <i class="devicon-typescript-plain"></i>
          <i class="devicon-typescript-plain colored"></i>
          <div>TypeScript</div>
        </div>

        <div className='skill-wrapper'>
          <i class="devicon-html5-plain"></i>
          <i class="devicon-html5-plain colored"></i>
          <div>HTML</div>
        </div>

        <div className='skill-wrapper'>
          <i class="devicon-css3-plain"></i>
          <i class="devicon-css3-plain colored"></i>
          <div>CSS</div>
        </div>

        <div className='skills-title'>Testing:</div>
        <p>Test-Driven Development (TDD)</p>

        <div className='skill-wrapper'>
          <i class="devicon-mocha-plain"></i>
          <i class="devicon-mocha-plain colored"></i>
          <div>Unit Testing (Mocha, Chai),</div>
        </div>

        <div className='skill-wrapper'>
          <i class="devicon-cypressio-plain"></i>
          <i class="devicon-cypressio-plain colored"></i>
          <div>Cypress</div>
        </div>

        <div className='skills-title'>Workflow:</div>
        <p> Agile Workflow, GitHub project board, GitHub issues, npm, Vite.js, Miro, Canva</p>

        <div className='skill-wrapper'>
          <i class="devicon-github-original"></i>
          <i class="devicon-github-original colored"></i>
          <div>GitHub</div>

        </div>

        <div className='skill-wrapper'>
          <i class="devicon-npm-original-wordmark"></i>
          <i class="devicon-npm-original-wordmark colored"></i>
          <div>npm</div>
        </div>

        <div className='skill-wrapper'>
          <i class="devicon-vitejs-plain"></i>
          <i class="devicon-vitejs-plain colored"></i>
          <div>Vite.js</div>
        </div>

        <div className='skills-title'>Design:</div>
        <p>Abobe InDesign, Abobe Lightroom, Color Theory, Accessibility, UI/UX, Responsive Design </p>

        <div className='skill-wrapper'>
          <i class="devicon-illustrator-plain"></i>
          <i class="devicon-vitejs-plain colored"></i>
          <div>Adobe Illustrator</div>
        </div>

        <div className='skill-wrapper'>
          <i class="devicon-photoshop-plain"></i>
          <i class="devicon-photoshop-plain colored"></i>
          <div>Adobe Photoshop</div>
        </div>
      </div>

    </section>
  )
}

export default Skills