import testimonialData from '../../carissa.json';

import leaves from '../../assets/leaves.png';
import leavesDark from '../../assets/leaves-dark.png';
import './Testimonials.css';

function Testimonials({isLightMode}) {

    const testimonials = testimonialData.testimonials;

    const allTestimonials = testimonials.map(testimonial => {
        return (
            <div id={testimonial.id} key={testimonial.id} className='testimonial-wrapper'>
                <div className='testimonial-name'>
                    <a href={testimonial.linkedIn} className='testimonial-linkedin' target="_blank" rel="noopener noreferrer">{testimonial.name}</a>
                    <div> - {testimonial.title}</div>
                </div>
                <p className='testimonial-p'>"{testimonial.testimonial}"</p>
            </div>
        )
    })

    return (
        <section className='testimonial-section'>
            <h2>Testimonials:</h2>
            <img src={isLightMode ? leaves : leavesDark} alt="Decorative leaves" className="leaves" />
            <div className='testimonials-wrapper'>
                {allTestimonials}
            </div>
        </section>
    )
}

export default Testimonials;