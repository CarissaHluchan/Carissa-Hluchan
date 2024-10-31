import React from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import carissa from '../../assets/carissa.jpg';
import carissa1 from '../../assets/carissa1.jpg';
import carissa3 from '../../assets/carissa3.jpg';
import carissa4 from '../../assets/carissa4.jpg';
import carissa5 from '../../assets/carissa5.jpg';
import carissa7 from '../../assets/carissa7.jpg';
import './About.css';

const images = [
  carissa, carissa1, carissa3, carissa4, carissa5, carissa7
]

function About() {
  return (
    <section className='about-section'>
      <div className="box">
        <Carousel useKeyboardArrows={true} showThumbs={false} >
          {images.map((URL, index) => (
            <div className="slide">
              <img alt="sample_file" src={URL} key={index} />
            </div>
          ))}
        </Carousel>
      </div>

      <h2>About Me:</h2>
      {/* <p>I am a front-end developer in React, JavaScript, CSS, and HTML. After a decade as an Ophthalmic Photographer, where I mastered the technical aspects of specialized equipment and microscopes, I realized I was ready for a new challenge. Seeking a career that fosters continual learning and growth, I transitioned into software development, completing an immersive program at Turing School of Software and Design.</p> */}
      {/* <p>During this transition, I discovered my passion for building engaging and dynamic user experiences. I thrive in environments that push me to be both persistent and creative, tackling problems from different angles to find effective solutions. Through my work at Turing, I’ve honed my skills in software testing practices such as, unit testing, and Cypress. I’ve developed a deep appreciation for collaborative problem-solving in group projects. I’m especially passionate about styling and UI design—creating visually compelling, intuitive interfaces that delight users. Whether it’s crafting responsive layouts or exploring innovative CSS techniques, I love using my creativity to bring ideas to life.</p> */}
      <p>When I’m not coding, you’ll find me outdoors—hiking, rock climbing, and split boarding. The challenge and creativity I find in outdoor adventures often fuel my problem-solving approach as a developer. I had a four year project where I climbed all 58 peaks in Colorado, over 14,000 ft in elevation. I started small, one mountain at a time, tackling the easier class 2 mountains first and gradually tackling the more difficult summits class 3 and class 4. After finishing the project, I went back to some of these peaks and tackled them with more skills on class 5 routes, multi-pitched with rock climbing gear. This journey reflects my approach to software development—starting with a solid foundation, learning, growing, and taking on bigger challenges.</p>
      <p>Let’s connect! Explore my portfolio and GitHub for more on my projects, and feel free to message me on LinkedIn, Slack or SMS to discuss potential collaborations or opportunities.</p>
    </section>
  )
}

export default About;