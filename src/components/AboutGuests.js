import React from 'react';
import face1 from '../img/face1.jpg';

const AboutGuests = () => {
  return (
    <section className="about-guests">
      <h2 className="about-guests__header container">What Our Guest Say</h2>

      <div className="testimonial container">
        <div className="testimonial__image">
          <img src={face1} alt="face" />
        </div>
        <div className="testimonial__paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi officiis error eius sunt totam corrupti accusamus modi aspernatur sapiente labore reiciendis iure porro quo tempore recusandae dolorum doloribus numquam, praesentium, ullam velit optio veniam maxime laboriosam. Nemo eius iure porro?
        </div>
      </div>

      <div className="testimonial container">
        <div className="testimonial__image">
          <img src={face1} alt="face" />
        </div>
        <div className="testimonial__paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi officiis error eius sunt totam corrupti accusamus modi aspernatur sapiente labore reiciendis iure porro quo tempore recusandae dolorum doloribus numquam, praesentium, ullam velit optio veniam maxime laboriosam. Nemo eius iure porro?
        </div>
      </div>

    </section>
  );
}

export default AboutGuests;