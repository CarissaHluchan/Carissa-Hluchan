import { React, useState, useRef } from 'react';

import Project from './Project';
import './ProjectCard.css'

function ProjectCard({ id, title, description, technologies, collaborators, projectNotes, repo, liveSite }) {
    
    const [showProject, setShowProject] = useState(false);
    const projectRef = useRef(null);

    const handleProjectClick = () => {
        setShowProject(true);

        setTimeout(() => {
            if (projectRef.current) {
                projectRef.current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            } else {
                console.log('projectRef is not set');
            }
        }, 100); 
    };

    const handleClickToClose = (event) => {
        event.stopPropagation(); 
        setShowProject(false);
    };

    const techBox = technologies.map((tech, index) => {
        return (
            <img key={index} src={tech} alt={`Technology logo for ${technologies[index]}`} className={tech.includes('react-original') ? 'tech-image-dark-bg' : 'tech-image'} />
        );
    });

    return (
        <div className='project-wrapper' id={id} onClick={handleProjectClick}>
            <h3 className='title'>{title}</h3>
            <p className='project-description'>{description}</p>
            <h4 className='tech'>Technologies:</h4>
            <div className='tech-box-wrapper'>{techBox}</div>
            {showProject && (
                <Project 
                    ref={projectRef} 
                    id={id}
                    title={title}
                    description={description}
                    technologies={technologies}
                    collaborators={collaborators}
                    projectNotes={projectNotes}
                    repo={repo}
                    liveSite={liveSite}
                    handleClickToClose={handleClickToClose}
                />
            )}
        </div>
    );
}

export default ProjectCard;
