import { React, useState } from 'react';

import Project from './Project';
import './ProjectCard.css'

function ProjectCard({ id, title, description, technologies, collaborators, projectNotes, repo, liveSite }) {
    
    const [ showProject, setShowProject] = useState(false)

    const handleProjectClick = () => {
        setShowProject(true);
    }

    const techBox = technologies.map(tech => {
        return (
            <div className='tech-box'>{tech}</div>
        )
    });

    return (
        <div className='project-wrapper' id={id} onClick={handleProjectClick}>
            <h3>{title}</h3>
            <p className='project-description'>{description}</p>
            <h4>Technologies:</h4>
            <div className='tech-box-wrapper'>{techBox}</div>
            {showProject && (
                <Project 
                    id={id}
                    title={title}
                    description={description}
                    technologies={technologies}
                    collaborators={collaborators}
                    projectNotes={projectNotes}
                    repo={repo}
                    liveSite={liveSite}
                />
            )}
        </div>
    )
}

export default ProjectCard