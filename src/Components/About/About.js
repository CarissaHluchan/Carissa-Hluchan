import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import aboutData from '../../carissa.json';
import carissa from '../../assets/carissa.jpg';
import carissa1 from '../../assets/carissa1.jpg';
import carissa3 from '../../assets/carissa3.jpg';
import carissa4 from '../../assets/carissa4.jpg';
import carissa5 from '../../assets/carissa5.jpg';
import carissa7 from '../../assets/carissa7.jpg';
import './About.css';

const images = [
  carissa, carissa1, carissa3, carissa4, carissa5, carissa7
];

function About() {

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
              <img alt="sample_file" src={URL} key={index} />
            </div>
          ))}
        </Carousel>
      </div>

      <h2>About Me:</h2>
      <div>{paragraphs}</div>
    </section>
  )
}

export default About;