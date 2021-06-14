import React, { useState } from 'react';
import ContactModal from '../pages/ContactModal';

const ContactModalButton = (): JSX.Element => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button className="contact-button" onClick={() => setOpen(true)}>
        <div className="mail-jiggle">
          <i className="fas fa-envelope fa-lg" />
        </div>
        Contact Me
      </button>
      <ContactModal open={open} closeModal={setOpen} />
    </div>
  );
};

export default ContactModalButton;
