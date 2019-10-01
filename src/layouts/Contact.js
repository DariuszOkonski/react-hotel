import React from 'react';
import ContactForm from '../components/ContactForm';
import ContactBoxes from '../components/ContactBoxes';

const Contact = () => {
  return (
    <React.Fragment>
      <ContactForm />
      <ContactBoxes />
    </React.Fragment>
  );
}

export default Contact;