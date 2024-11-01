import React from 'react';

import projectsData from '../../carissa.json';
import ProjectCard from './ProjectCard';
import './Projects.css';

function Projects() {

  const projects = projectsData.projects;

  const projectCards = projects.map(project => (
    <ProjectCard 
      key={project.id}
      id={project.id}
      title={project.title}
      description={project.description}
      technologies={project.technologies}
      collaborators={project.collaborators}
      projectNotes={project.project_notes}
      repo={project.repo}
      liveSite={project.live_site}
    />
  ));

  return (
    <section className='projects-section'>
      <h2>Projects:</h2>
      <div className='all-projects-wrapper'>{projectCards}</div>
    </section>
  )
}

export default Projects;