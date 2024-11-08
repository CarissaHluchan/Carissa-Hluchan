import { motion } from 'framer-motion';

import leaves from '../../assets/leaves.png';
import leavesDark from '../../assets/leaves-dark.png';
import carissaJson from '../../carissa.json';
import './Skills.css';

function Skills({ isLightMode }) {

  const skillsData = carissaJson.skills

  return (
    <section className="skills-section">
      <h2>Skills:</h2>
      <img src={isLightMode ? leaves : leavesDark} alt="Decorative leaves" className="leaves" />

      {skillsData.map((category) => (
        <div className="skills-wrapper" key={category.categoryName}>
          <div className="skills-title">{category.categoryName}:</div>
          <div className="skills-list">
            {category.skills.map((skill) => (
              <a
                key={skill.name}
                href={skill.url}
                target="_blank"
                rel="noopener noreferrer"
                className="skill-wrapper"
              >
                <motion.img
                  src={skill.icon}
                  alt={`${skill.name} icon`}
                  className="skill-icon"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: 'spring' }} />
                <div className="skill-item">{skill.name}</div>
              </a>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}

export default Skills;