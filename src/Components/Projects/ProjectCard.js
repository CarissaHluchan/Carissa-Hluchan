import { useState } from 'react';
import Modal from '@mui/material/Modal';
import { motion } from 'framer-motion';

import Project from './Project';
import chessImage from '../../assets/projectImages/chess-with-frien.png';
import carrotImage from '../../assets/projectImages/crusty-carrots.png';
import newsImage from '../../assets/projectImages/news-wire.png';
import redImage from '../../assets/projectImages/red-horizon.png';
import overlookImage from '../../assets/projectImages/overlook-hotel.png';
import rpsImage from '../../assets/projectImages/rockps.png';
import cookinImage from '../../assets/projectImages/whats-cookin.png';
import whiskerImage from '../../assets/projectImages/whisker-watch.png';
import './ProjectCard.css';



function ProjectCard({ id, title, description, technologies, collaborators, projectNotes, repo, liveSite }) {
    
    const [showProject, setShowProject] = useState(false);
    
    const projectImage = {
        1: chessImage,
        2: whiskerImage,
        3: redImage,
        4: overlookImage,
        5: carrotImage,
        6: newsImage,
        7: cookinImage,
        8: rpsImage
    }

    const handleProjectClick = () => {
        setShowProject(true);
    };

    const handleClickToClose = (event) => {
        event.stopPropagation();
        setShowProject(false);
    };

    const techBox = technologies.map((tech, index) => {
        return (
            <a
                key={index}
                href={tech.url}
                target="_blank"
                rel="noopener noreferrer"
                className="skill-wrapper"
            >
                <motion.img
                    src={tech.icon}
                    alt={`Technology logo for ${tech.name}`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: 'spring' }}
                    className={tech.url && tech.url.includes('react-original') ? 'tech-image-dark-bg' : 'tech-image'}
                />
            </a>
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
            <img src={projectImage[id]} alt={`${title} preview`} className='project-image'/>
            <p className='project-description'>{description}</p>
            <h4 className='tech'>Technologies:</h4>
            <div className='tech-box-wrapper'>{techBox}</div>
            <Modal
                open={showProject}
                onClose={handleClickToClose}
                // aria-labelledby=""
                // aria-describedby=""
                className='modal-wrapper'
            >
                <Project
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
