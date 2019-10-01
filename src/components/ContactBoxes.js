import React from 'react';

const ContactBoxes = () => {
  return (
    <section className="contact-boxes-bg">
      <section className="contact-boxes container">

        <div className="box">
          <i className="fa fa-map-marker box__icon" aria-hidden="true"></i>
          <h4 className="box__header">Location</h4>
          <p className="box__paragraph">47 High Street, Slough, UK</p>
        </div>

        <div className="box">
          <i className="fa fa-mobile box__icon" aria-hidden="true"></i>
          <h4 className="box__header">Phone Number</h4>
          <p className="box__paragraph">(123) 980-097-565</p>
        </div>

        <div className="box">
          <i className="fa fa-envelope-open box__icon" aria-hidden="true"></i>
          <h4 className="box__header">Email address</h4>
          <p className="box__paragraph">reception@hotelroyal.com</p>
        </div>


      </section>
    </section>
  );
}

export default ContactBoxes;