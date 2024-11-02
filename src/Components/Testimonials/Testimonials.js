import testimonialData from '../../carissa.json';
import './Testimonials.css';

function Testimonials() {

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
        <section className='testimonial-section'>{allTestimonials}</section>
    )
}

export default Testimonials;