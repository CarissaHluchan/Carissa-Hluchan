import projectsData from '../../carissa.json';
import ProjectCard from './ProjectCard';

import leaves from '../../assets/leaves.png';
import leavesDark from '../../assets/leaves-dark.png';
import './Projects.css';

function Projects({ isLightMode }) {

  const projects = projectsData.projects;

  const projectCards = projects.map(project => (
    <ProjectCard
      key={project.id}
      id={project.id}
      title={project.title}
      description={project.description}
      technologies={project.technologies}
      // techName={project.technologies.name}
      // techIcon={project.technologies.icon}
      // techUrl={project.technologies.url}
      collaborators={project.collaborators}
      projectNotes={project.project_notes}
      repo={project.repo}
      liveSite={project.live_site}
    />
  ));

  return (
    <section className='projects-section'>
      <h2>Projects:</h2>
      <img src={isLightMode ? leaves : leavesDark} alt="Decorative leaves" className="leaves" />
      <div className='all-projects-wrapper'>{projectCards}</div>
    </section>
  )
}

export default Projects;