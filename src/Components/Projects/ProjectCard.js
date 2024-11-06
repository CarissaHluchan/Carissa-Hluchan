import { useState, useRef } from 'react';
import Modal from '@mui/material/Modal';
import { motion } from 'framer-motion';

import Project from './Project';
import './ProjectCard.css';

function ProjectCard({ id, title, description, technologies, collaborators, projectNotes, repo, liveSite }) {

    const [showProject, setShowProject] = useState(false);
    // const projectRef = useRef(null);

    const handleProjectClick = () => {
        setShowProject(true);

        // setTimeout(() => {
        //     if (projectRef.current) {
        //         projectRef.current.scrollIntoView({
        //             behavior: 'smooth',
        //             block: 'start',
        //         });
        //     } else {
        //         console.log('projectRef is not set');
        //     }
        // }, 100); 
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
        <motion.div className='project-wrapper'
            id={id}
            onClick={handleProjectClick}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring' }}
        >
            <h3 className='project-title'>{title}</h3>
            <p className='project-description'>{description}</p>
            <h4 className='tech'>Technologies:</h4>
            <div className='tech-box-wrapper'>{techBox}</div>
            <Modal
                open={showProject}
                onClose={handleClickToClose}
                aria-labelledby=""
                aria-describedby=""
                className='modal-wrapper'
            >
                <Project
                    // ref={projectRef} 
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
            </Modal>
        </motion.div>
    );
}

export default ProjectCard;
