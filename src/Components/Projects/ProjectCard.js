import React from 'react';

import './ProjectCard.css'

function ProjectCard({ id, title, description, technologies }) {

    const techBox = technologies.map(tech => {
        return (
            <div className='tech-box'>{tech}</div>
        )
    });

    return (
        <div className='project-wrapper' id={id}>
            <h3>{title}</h3>
            <p className='project-description'>{description}</p>
            <h4>Technologies:</h4>
            <div className='tech-box-wrapper'>{techBox}</div>
        </div>
    )
}

export default ProjectCard