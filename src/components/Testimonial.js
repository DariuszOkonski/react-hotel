import React from 'react';

const Testimonial = ({ picture, description }) => {
  return (
    <div className="testimonial container">
      <div className="testimonial__image">
        <img src={picture} alt="face" />
      </div>
      <div className="testimonial__paragraph">
        {description}
      </div>
    </div>
  );
}

export default Testimonial;