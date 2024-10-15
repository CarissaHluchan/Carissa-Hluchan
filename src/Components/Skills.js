import React from 'react';

import './Skills.css'

function Skills() {
  return (
    <section className='skills-section'>
      <h6>Skills:</h6>
      <div className='skills-wrapper'>
        <div className='skills-title'>Languages/Frameworks:</div>
        <p>React, React-Router, JavaScript, TypeScript, HTML5, CSS3</p>

        <div className='skills-title'>Testing:</div>
        <p>Test-Driven Development (TDD), Unit Testing (Mocha, Chai), Cypress E2E</p>

        <div className='skills-title'>Workflow:</div>
        <p> Agile Workflow, GitHub, GitHub project board, GitHub issues, npm, Vite.js, Miro, Canva</p>

        <div className='skills-title'>Design:</div>
        <p>Adobe Photoshop, InDesign, Lightroom, Color Theory, Accessibility, UI/UX, Responsive Design </p>
      </div>

    </section>
  )
}

export default Skills