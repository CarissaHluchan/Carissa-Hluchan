import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import aboutData from '../../carissa.json';
import carissa from '../../assets/carissa.jpg';
import carissa1 from '../../assets/carissa1.jpg';
import carissa3 from '../../assets/carissa3.jpg';
import carissa4 from '../../assets/carissa4.jpg';
import carissa5 from '../../assets/carissa5.jpg';
import carissa7 from '../../assets/carissa7.jpg';

import leaves from '../../assets/leaves.png';
import leavesDark from '../../assets/leaves-dark.png';
import './About.css';

const images = [
  carissa, carissa1, carissa3, carissa4, carissa5, carissa7
];

function About({ isLightMode }) {

  const aboutMe = aboutData.about;
  const paragraphs = aboutMe.map((paragraph, index) => {
    return (
      <p key={index}>{paragraph[`paragraph_${index + 1}`]}</p>
    )
  });

  return (
    <section className='about-section'>
      <div className="box">
        <Carousel useKeyboardArrows={true} showThumbs={false} >
          {images.map((URL, index) => (
            <div className="slide">
              <img src={URL} key={index} alt={`Image ${index + 1}`}/>
            </div>
          ))}
        </Carousel>
      </div>

      <h2>About Me:</h2>
      <img src={isLightMode ? leaves : leavesDark} alt="Decorative leaves" className="leaves" />
      <div className="about-paragraphs-wrapper">{paragraphs}</div>
    </section>
  )
}

export default About;