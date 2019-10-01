import React from 'react';
import face1 from '../img/face1.jpg';
import face2 from '../img/face2.jpg';
import Testimonial from '../components/Testimonial';

const testiomnialsList = [
  { id: 1, picture: face2, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi officiis error eius sunt totam corrupti accusamus modi aspernatur sapiente labore reiciendis iure porro quo tempore recusandae dolorum doloribus numquam, praesentium, ullam velit optio veniam maxime laboriosam. Nemo eius iure porro?' },
  { id: 2, picture: face1, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi officiis error eius sunt totam corrupti accusamus modi aspernatur sapiente labore reiciendis iure porro quo tempore recusandae dolorum doloribus numquam, praesentium, ullam velit optio veniam maxime laboriosam. Nemo eius iure porro?' },
]

const AboutGuests = () => {
  return (
    <section className="about-guests">
      <h2 className="about-guests__header container">What Our Guest Say</h2>

      {testiomnialsList.map(testimonial => <Testimonial key={testimonial.id} {...testimonial} />)}

    </section>
  );
}

export default AboutGuests;