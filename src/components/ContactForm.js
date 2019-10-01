import React from 'react';

const ContactForm = () => {
  return (
    <section className="contact">
      <h1 className="contact__header container">
        <span className="text-first">Contact</span> Us
      </h1>
      <p className="contact__paragraph container">
        Please fill out the from below to contact us
      </p>

      <form className="contact-form container">
        <label htmlFor="name" className="contact-form__label">Name</label>
        <input type="text" id="name" className="contact-form__input" placeholder='Type your name...' />

        <label htmlFor="email" className="contact-form__label">Email</label>
        <input type="email" id="email" className="contact-form__input" placeholder='Type your email...' />

        <label htmlFor="message" className="contact-form__label">Message</label>
        <textarea id="message" className="contact-form__textarea" placeholder='Type some message...'></textarea>

        <input type="submit" className="btn btn-dark contact-form__button" value="Submit" />
      </form>
    </section>
  );
}

export default ContactForm;