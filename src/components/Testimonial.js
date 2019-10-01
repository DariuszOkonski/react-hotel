import React from 'react';
import PropTypes from 'prop-types';

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

Testimonial.propTypes = {
  picture: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default Testimonial;